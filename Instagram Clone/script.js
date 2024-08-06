document.addEventListener('DOMContentLoaded', () => {
    const likeContainers = document.querySelectorAll('.like-container');
    const likeDisplays = document.querySelectorAll('.likes');

    likeContainers.forEach((container, index) => {
        const regular = container.querySelector('.like');
        const solid = container.querySelector('.liked');
        const likeDisplay = likeDisplays[index]; 


        let count = parseInt(likeDisplay.textContent.replace(/,/g, '')) || 1;

        const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        regular.addEventListener('click', () => {
            count++;
            regular.style.display = 'none';
            solid.style.display = 'block';
            likeDisplay.textContent = `${formatNumber(count)} likes`;
        });

        solid.addEventListener('click', () => {
            count--;
            solid.style.display = 'none';
            regular.style.display = 'block';
            likeDisplay.textContent = `${formatNumber(count)} likes`;
        });
    });
});
