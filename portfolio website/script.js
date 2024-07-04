document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is loaded and running");

    function scrollToSection(sectionClass) {
        var section = document.querySelector(sectionClass);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.log("Section not found: " + sectionClass);
        }
    }

    // Scroll to footer when CONTACT link is clicked
    document.querySelectorAll('.contact-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            console.log("Link clicked: " + link.textContent); // Log to verify the click event
            scrollToSection('.home'); // Scroll to the footer section
        });
    });

    // Function to create typing effect
    function typeEffect(element, text, typingSpeed, callback) {
        element.innerHTML = '';
        let i = 0;
        let interval = setInterval(() => {
            element.innerHTML += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(interval);
                if (callback) {
                    callback();
                }
            }
        }, typingSpeed);
    }

    // Typing effect for h1 and h2
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const typingSpeed = 100;

    if (h1 && h2) {
        typeEffect(h1, h1.textContent, typingSpeed, () => {
            typeEffect(h2, h2.textContent, typingSpeed, () => {
                // Scroll to the second section in main after typing is done
                const secondSection = document.querySelector('main section:nth-of-type(2)');
                if (secondSection) {
                    window.scrollTo({
                        top: secondSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Functionality for expanding portfolio items
    const items = document.querySelectorAll('.portfolio .item');

    items.forEach(item => {
        const elements = item.querySelectorAll('img, h2, p');
        const extraInfo = item.querySelector('.extra-info');

        extraInfo.style.display = 'none';

        elements.forEach(element => {
            element.addEventListener('click', function() {
                if (extraInfo.style.maxHeight === '0px' || extraInfo.style.maxHeight === '') {
                    extraInfo.style.display = 'block';
                    setTimeout(() => {
                        extraInfo.style.opacity = '1';
                        extraInfo.style.maxHeight = '500px'; // or any max-height that is appropriate
                    }, 10);
                } else {
                    extraInfo.style.opacity = '0';
                    extraInfo.style.maxHeight = '0px';
                    setTimeout(() => {
                        extraInfo.style.display = 'none';
                    }, 300); // match the duration of the CSS transition
                }
            });
        });
    });
});
