function magneticButton(element) {
    const children = element.firstElementChild;
    let isAnimating = false; // Control flag to reduce rapid updates

    element.addEventListener('mousemove', (e) => {
        if (!isAnimating) {
            requestAnimationFrame(() => {
                const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
                const left = e.pageX - offsetLeft;
                const top = e.pageY - offsetTop;

                // Calculate center position
                const centerX = left - offsetWidth / 2;
                const centerY = top - offsetHeight / 2;
                const distance = Math.sqrt(centerX ** 2 + centerY ** 2);

                // Apply a threshold to prevent small cursor movements from affecting the button
                if (distance > 10) {
                    gsap.to(element, {
                        x: centerX / 2, // Reduce movement further
                        y: centerY / 2,
                        duration: 0.4, // Shorten duration for faster response
                        ease: "power2.out",
                    });

                    gsap.to(children, {
                        x: centerX / 6, // Smaller movement for the child element
                        y: centerY / 9,
                        rotate: distance / 80, // Subtle rotation
                        duration: 0.4,
                        ease: "power2.out",
                    });
                }
                isAnimating = false;
            });
            isAnimating = true;
        }
    });

    // Mouseleave event to reset the button position smoothly
    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
        });
        gsap.to(children, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
        });
    });
}

// Apply the magnetic effect to all buttons
document.querySelectorAll('.magneticbtn .btn').forEach(magneticButton);





















// Function for the mail button specifically
function magneticMailButton(element) {
    const children = element.firstElementChild;
    let isAnimating = false;

    element.addEventListener('mousemove', (e) => {
        if (!isAnimating) {
            requestAnimationFrame(() => {
                const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
                const left = e.pageX - offsetLeft;
                const top = e.pageY - offsetTop;

                // Calculate center position
                const centerX = left - offsetWidth / 2;
                const centerY = top - offsetHeight / 2;
                const distance = Math.sqrt(centerX ** 2 + centerY ** 2);

                if (distance > 10) {
                    gsap.to(element, {
                        x: centerX / 6,
                        y: centerY / 6,
                        duration: 0.4,
                        ease: "power2.out",
                    });

                    gsap.to(children, {
                        x: centerX / 12,
                        y: centerY / 12,
                        rotate: 0,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                }
                isAnimating = false;
            });
            isAnimating = true;
        }
    });

    // Reset the position on mouse leave
    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
        });
        gsap.to(children, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
        });
    });
}

// Apply the effect only to the mail button
const mailButton = document.querySelector('.mailbtn .btn');
if (mailButton) {
    magneticMailButton(mailButton); // Apply magnetic effect only to the mail button
}


