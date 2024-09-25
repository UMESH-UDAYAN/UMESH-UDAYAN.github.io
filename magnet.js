// Magnetic button effect function
function magneticButton(element) {
    const children = element.firstElementChild; // Select the first child element

    // Mousemove event to create the magnetic effect
    element.addEventListener('mousemove', (e) => {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
        const left = e.pageX - offsetLeft;
        const top = e.pageY - offsetTop;

        // Calculate center position
        const centerX = left - offsetWidth / 2;
        const centerY = top - offsetHeight / 2;
        const d = Math.sqrt(centerX ** 2 + centerY ** 2); // Distance from center

        // GSAP animation for button movement
        gsap.to(element, 0.5, {
            x: centerX / 2,
            y: centerY / 2,
            ease: Elastic.easeOut,
        });

        // Transform children based on mouse position
        children.style.transform = `
            translate3d(${centerX / 6}px, ${centerY / 6}px, 0)
            rotate3d(${-centerY / 200}, ${centerX / 200}, 0, ${d / 20}deg)
        `;
    });

    // Mouseleave event to reset the button position
    element.addEventListener('mouseleave', () => {
        gsap.to(element, 1.2, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut.config(1, 0.1),
        });
        children.style.transform = ''; // Reset transform
    });
}

// Select the magnetic button element (the anchor within .magneticbtn)
const magneticButtonElement = document.querySelector('.magneticbtn .btn');
magneticButton(magneticButtonElement); // Call the function on the button




