document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');
    let containerId = null;
    const overlay = document.getElementById('overlay');


    function removeFadeInClass() {
        imageContainers.forEach(container => {
            container.classList.remove('fade-in');
        });
    }

    setTimeout(removeFadeInClass, 1000);

    imageContainers.forEach(container => {
        container.addEventListener('click', () => {
            overlay.style.zIndex = '5';

            containerId = container.id;

            switch (containerId) {
                case 'Q1':
                    container.style.transform = 'rotate(45deg) scale(1.85) translate(0%, -50%)';
                    break;
                case 'Q2':
                    container.style.transform = 'rotate(15deg) scale(1.85) translate(0%, -10%)';
                    break;
                case 'Q3':
                    container.style.transform = 'rotate(-15deg) scale(1.85) translate(0%, -10%)';
                    break;
                case 'Q4':
                    container.style.transform = 'rotate(-45deg) scale(1.85) translate(0%, -50%)';
                    break;
                default:
                    break;
            }


            container.querySelector('img').style.opacity = '0';

            container.style.zIndex = '10';

            if (containerId === 'Q1') {
                container.querySelector('.q1-text').style.display = 'block';
            }

            if (containerId === 'Q2') {
                container.querySelector('.q2-text').style.display = 'block';
            }

            if (containerId === 'Q3') {
                container.querySelector('.q3-text').style.display = 'block';
            }

            if (containerId === 'Q4') {
                container.querySelector('.q4-text').style.display = 'block';
            }
        });

        container.addEventListener('mouseout', () => {
            overlay.style.zIndex = '-1';

            container.querySelector('img').style.opacity = '1';

            container.style.transform = 'none';

            container.style.zIndex = '1';

            if (containerId === 'Q1') {
                container.querySelector('.q1-text').style.display = 'none';
            }

            if (containerId === 'Q2') {
                container.querySelector('.q2-text').style.display = 'none';
            }

            if (containerId === 'Q3') {
                container.querySelector('.q3-text').style.display = 'none';
            }

            if (containerId === 'Q4') {
                container.querySelector('.q4-text').style.display = 'none';
            }
        });
    });
});
