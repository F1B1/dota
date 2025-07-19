export const dropdownSelect = ()=>{
    const dropdowns = document.querySelectorAll('.dropdown-rang');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown__item');
        const options = dropdown.querySelector('.dropdown__options');
        const arrow = dropdown.querySelector('.dropdown__arrow');
        const icon = dropdown.querySelector('.dropdown__icon img');
        const textElement = dropdown.querySelector('.dropdown__trigger');

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = options.classList.contains('open');
            
            document.querySelectorAll('.dropdown__options').forEach(other => {
                if (other !== options) other.classList.remove('open');
            });
            
            options.classList.toggle('open', !isActive);
            arrow.classList.toggle('rotated', !isActive);
        });

        options.querySelectorAll('.dropdown__option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const newText = option.textContent.trim();
                textElement.textContent = newText;

                const newIcon = option.querySelector('img');
                if (icon && newIcon) {
                    icon.src = newIcon.src;
                    icon.alt = newIcon.alt;
                }

                options.classList.remove('open');
                arrow.classList.remove('rotated');

                dropdown.dispatchEvent(new Event('change'));
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown__options').forEach(options => {
                options.classList.remove('open');
            });
            document.querySelectorAll('.dropdown__arrow').forEach(arrow => {
                arrow.classList.remove('rotated');
            });
        }
    });


}




