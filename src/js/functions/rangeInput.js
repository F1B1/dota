export const rangeInput = () => {
    const sliders = document.querySelectorAll('.calculator__block');
    let intervalId; 
  
    sliders.forEach(slider => {
      const rangeInputs = slider.querySelectorAll('.calculator__range-input input');
      const priceDisplays = slider.querySelectorAll('.quantity__number:not(input)');
      const incrementButtons = slider.querySelectorAll('.increment');
      const decrementButtons = slider.querySelectorAll('.decrement');
      const progress = slider.querySelector('.calculator__range-progress');
      const priceGap = 500;
  
      function updateValues() {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);
  
        if (maxVal - minVal < priceGap) {
          if (minVal + priceGap > rangeInputs[1].max) {
            minVal = maxVal - priceGap;
          } else {
            maxVal = minVal + priceGap;
          }
        }
  
        minVal = Math.max(minVal, parseInt(rangeInputs[0].min));
        maxVal = Math.min(maxVal, parseInt(rangeInputs[1].max));
  
        rangeInputs[0].value = minVal;
        rangeInputs[1].value = maxVal;
  
        priceDisplays[0].textContent = minVal;
        priceDisplays[1].textContent = maxVal;
  
        const leftPercent = (minVal / rangeInputs[0].max) * 100;
        const rightPercent = 100 - (maxVal / rangeInputs[1].max) * 100;
        progress.style.left = `${leftPercent}%`;
        progress.style.right = `${rightPercent}%`;
      }
  
      function handleButtonPress(button, callback) {
        let isPressed = false;
        
        const startPress = () => {
          isPressed = true;
          callback();
          intervalId = setInterval(callback, 150);
        };
        
        const stopPress = () => {
          isPressed = false;
          clearInterval(intervalId);
        };
  
        button.addEventListener('mousedown', startPress);
        button.addEventListener('touchstart', startPress);
        
        button.addEventListener('mouseup', stopPress);
        button.addEventListener('touchend', stopPress);
        button.addEventListener('mouseleave', stopPress);
      }
  
      incrementButtons.forEach((button, index) => {
        handleButtonPress(button, () => {
          const input = rangeInputs[index];
          const oppositeInput = rangeInputs[index === 0 ? 1 : 0];
          const step = parseInt(input.step) || 100;
          
          let newValue = parseInt(input.value) + step;
          
          if (index === 0) {
            newValue = Math.min(newValue, parseInt(oppositeInput.value) - priceGap);
          } else {
            newValue = Math.min(newValue, input.max);
          }
          
          input.value = Math.min(newValue, input.max);
          updateValues();
        });
      });
      decrementButtons.forEach((button, index) => {
        handleButtonPress(button, () => {
          const input = rangeInputs[index];
          const oppositeInput = rangeInputs[index === 0 ? 1 : 0];
          const step = parseInt(input.step) || 100;
          
          let newValue = parseInt(input.value) - step;
          
          if (index === 0) {
            newValue = Math.max(newValue, input.min);
          } else {
            newValue = Math.max(newValue, parseInt(oppositeInput.value) + priceGap);
          }
          
          input.value = Math.max(newValue, input.min);
          updateValues();
        });
      });
  
      rangeInputs.forEach(input => {
        input.addEventListener('input', () => {
          let minVal = parseInt(rangeInputs[0].value);
          let maxVal = parseInt(rangeInputs[1].value);
  
          if (maxVal - minVal < priceGap) {
            if (input === rangeInputs[0]) {
              rangeInputs[0].value = maxVal - priceGap;
            } else {
              rangeInputs[1].value = minVal + priceGap;
            }
          }
          updateValues();
        });
      });
  
      updateValues(); 
    });
  };