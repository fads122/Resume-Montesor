window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
console.log("Script loaded");

function toggleResume() {
    console.log("Toggle Resume function called");
    
    const resumeContainer = document.getElementById('resume-container');
    const toggleBtn = document.getElementById('toggle-resume-btn');

    console.log("Resume container:", resumeContainer);
    console.log("Toggle button:", toggleBtn);

    if (resumeContainer.style.display === 'none') {
        console.log("Showing resume...");
        resumeContainer.style.display = 'block';
        toggleBtn.textContent = 'Hide Resume';
    } else {
        console.log("Hiding resume...");
        resumeContainer.style.display = 'none';
        toggleBtn.textContent = 'Toggle Resume';
    }
}

console.log("Attempting to get toggle button element");
const toggleButton = document.getElementById('toggle-resume-btn');
console.log("Toggle button element:", toggleButton);

if (toggleButton) {
    console.log("Adding event listener to toggle button");
    toggleButton.addEventListener('click', toggleResume);
} else {
    console.error("Could not find toggle button element");
}

console.log("Checking for resume image");
const resumeImage = document.querySelector('#resume-container img');
console.log("Resume image element:", resumeImage);

if (resumeImage) {
    console.log("Checking image src attribute");
    const imageUrl = resumeImage.src;
    console.log("Image URL:", imageUrl);
    
    // Check if the image is actually loaded
    resumeImage.onload = function() {
        console.log("Image successfully loaded");
    };
    resumeImage.onerror = function() {
        console.error("Failed to load image");
    };
} else {
    console.error("Could not find resume image element");
}   

function toggleResume() {
    const resumeModal = document.getElementById('resume-modal');
    const closeBtn = document.getElementById('close-resume-btn');

    if (resumeModal.style.display === 'none') {
        console.log("Showing resume modal");
        resumeModal.style.display = 'block';
        // Center the modal horizontally
        resumeModal.style.left = `${window.innerWidth / 2}px`;
        resumeModal.style.top = '20%';
    } else {
        console.log("Hiding resume modal");
        resumeModal.style.display = 'none';
    }
}

function closeResume() {
    const resumeModal = document.getElementById('resume-modal');
    resumeModal.style.display = 'none';
}

// Add event listeners
document.getElementById('toggle-resume-btn').addEventListener('click', toggleResume);
document.getElementById('close-resume-btn').addEventListener('click', closeResume);

// Check if the button exists before adding the event listener
if (document.getElementById('toggle-resume-btn')) {
    console.log("Toggle button found, adding event listener");
} else {
    console.error("Toggle button not found");
}

// Check if the modal exists before trying to display it
if (document.getElementById('resume-modal')) {
    console.log("Modal found, checking image...");
    
    const resumeImage = document.querySelector('#resume-modal img');
    if (resumeImage) {
        console.log("Resume image element found");
        
        // Check if the image is actually loaded
        resumeImage.onload = function() {
            console.log("Image successfully loaded");
        };
        resumeImage.onerror = function() {
            console.error("Failed to load image");
        };
    } else {
        console.error("Could not find resume image element");
    }
} else {
    console.error("Modal not found");
}