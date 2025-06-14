// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    //Get the modal element
    const modal = document.getElementById("contactModal")
    //Get the button that opens the modal
    const openBtn = document.getElementById("openModalBtn");
    const openBtn1 = document.getElementById("lets talk");
    const openBtn2 = document.getElementById("book a call");
    const openBtn3 = document.getElementById("mid-hero-2");
    const openBtn4 = document.getElementById("mid-btn");
    const openBtn5 = document.getElementById("contact-btn");

    //Get the <span> element that closes the modal
    const closeBtn = document.querySelector(".common-close-btn");

    //When the user clicks the button, open the modal 
    openBtn.onclick = function () {
        modal.style.display = "block";
    }
    openBtn1.onclick = function () {
        modal.style.display = "block";
    }
    openBtn2.onclick = function () {
        modal.style.display = "block";
    }
    openBtn3.onclick = function () {
        modal.style.display = "block";
    }
    openBtn4.onclick = function () {
        modal.style.display = "block";
    }
    openBtn5.onclick = function () {
        modal.style.display = "block";
    }

    //When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == common - modal) {
            modal.style.display = "none";
        }
    }

    //Handle form submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        //Basic validation check
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        if (isValid) {
            alert("Form submitted successfully! (This is a demo)");
            modal.style.display = "none"; // Close modal on successful submission
            form.reset(); // Reset form fields
        } else {
            alert("Please fill out all required fields.");
        }
    });
});


// --- "View More" / "View Less" functionality ---

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-view-btn');
    const moreContent = document.getElementById('more-stack-content');

    //A variable to keep track of the current state
    let isExpanded = false;
    toggleBtn.addEventListener('click', function (event) {
        //Prevent the default link behavior
        event.preventDefault();
        //Toggle the state
        isExpanded = !isExpanded;
        if (isExpanded) {
            //Show the hidden content
            moreContent.style.display = 'block';
            //Change the button text and arrow
            toggleBtn.innerHTML = 'View less ←'; // ← is the HTML code for ←
        } else {
            //Hide the content
            moreContent.style.display = 'none';
            //Change the button text and arrow back to original
            toggleBtn.innerHTML = 'View more →'; // → is the HTML code for →
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const tabsNav = document.querySelector('.tabs-nav');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabsNav.addEventListener('click', (e) => {
        if (e.target.matches('.tab-button')) {
            const clickedButton = e.target;
            const targetTabId = clickedButton.dataset.tab;

            // 1. Deactivate all buttons
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });

            // 2. Activate the clicked button
            clickedButton.classList.add('active');

            // 3. Hide all content panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            });

            // 4. Show the target content panel
            const targetPanel = document.getElementById(targetTabId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');

        questionButton.addEventListener('click', () => {
            const answerPanel = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');

            const wasActive = item.classList.contains('active');
            item.classList.toggle('active');


            if (!wasActive) {
                answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
                icon.textContent = '−'; // Using a minus sign character
            } else {
                answerPanel.style.maxHeight = null;
                icon.textContent = '+';
            }


            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-icon').textContent = '+';
                }
            });
        });
    });
});