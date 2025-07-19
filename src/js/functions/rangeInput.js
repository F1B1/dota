export const rangeInput = () => {
    const calculators = document.querySelectorAll('.calculator__calc');
    let intervalId;

    calculators.forEach(calculator => {
        const rangeInputs = calculator.querySelectorAll('.calculator__range-input input');
        const priceDisplays = calculator.querySelectorAll('.quantity__number:not(input)');
        const progress = calculator.querySelector('.calculator__range-progress');
        const rankIcons = calculator.querySelectorAll('.dropdown__image img');
        const rankTexts = calculator.querySelectorAll('.dropdown__trigger');

        const isMMR = calculator.closest('.calculator-mmr');
        const priceGap = isMMR ? 20 : 500;

        const ranksData = getRanksData(calculator);
        
        function getRanksData(calculator) {
            return [...calculator.querySelectorAll('.dropdown__option')].map(option => {
                const mmr = parseInt(option.getAttribute('data-mmr'));
                const name = option.textContent.trim();
                const image = option.querySelector('img')?.src || '';
                return !isNaN(mmr) ? { mmr, name, image } : null;
            }).filter(Boolean);
        }

        function getRank(mmr) {
            return ranksData.slice().reverse().find(rank => mmr >= rank.mmr) || { mmr: 0, name: 'Ранг не найден', image: '' };
        }

        function updateValues() {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < priceGap) {
                minVal = Math.max(minVal, maxVal - priceGap);
                maxVal = Math.min(maxVal, minVal + priceGap);
            }

            rangeInputs[0].value = minVal;
            rangeInputs[1].value = maxVal;

            priceDisplays[0].textContent = minVal;
            priceDisplays[1].textContent = maxVal;

            progress.style.left = `${(minVal / rangeInputs[0].max) * 100}%`;
            progress.style.right = `${100 - (maxVal / rangeInputs[1].max) * 100}%`;

            updateRankIcons(minVal, maxVal);
        }

        function updateRankIcons(minVal, maxVal) {
            const currentRankMin = getRank(minVal);
            const currentRankMax = getRank(maxVal);

            if (rankIcons[0]) rankIcons[0].src = currentRankMin.image;
            if (rankTexts[0]) rankTexts[0].textContent = currentRankMin.name;

            if (rankIcons[1]) rankIcons[1].src = currentRankMax.image;
            if (rankTexts[1]) rankTexts[1].textContent = currentRankMax.name;
        }

        function handleButtonPress(button, index, isIncrement) {
            let isPressed = false;

            const step = parseInt(rangeInputs[index].step) || (isMMR ? 20 : 100);
            const adjustValue = () => {
                const input = rangeInputs[index];
                const oppositeInput = rangeInputs[index === 0 ? 1 : 0];

                let newValue = parseInt(input.value) + (isIncrement ? step : -step);
                if (index === 0) {
                    newValue = Math.max(newValue, input.min);
                    newValue = Math.min(newValue, parseInt(oppositeInput.value) - priceGap);
                } else {
                    newValue = Math.min(newValue, input.max);
                    newValue = Math.max(newValue, parseInt(oppositeInput.value) + priceGap);
                }

                input.value = newValue;
                updateValues();
            };

            const startPress = () => {
                isPressed = true;
                adjustValue();
                intervalId = setInterval(adjustValue, 150);
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

        calculator.querySelectorAll('.increment').forEach((button, index) => handleButtonPress(button, index, true));
        calculator.querySelectorAll('.decrement').forEach((button, index) => handleButtonPress(button, index, false));

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
