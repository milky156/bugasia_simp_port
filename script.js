// 1. Project & Skills Data
const skills = ["HTML5", "CSS3", "JavaScript", "Git", "Responsive Design"];
const projects = [
    { title: "Inventory System", desc: "Track stock levels in real-time.", link: "#" },
    { title: "Auth Module", desc: "Secure login system with JS.", link: "#" },
    { title: "Data Viz", desc: "Charts and graphs for analytics.", link: "#" }
];

// 2. Render Skills
const skillsContainer = document.getElementById('skillsContainer');
skills.forEach(skill => {
    skillsContainer.innerHTML += `<span class="chip">${skill}</span>`;
});

// 3. Render Projects
const grid = document.getElementById('projectGrid');
projects.forEach(p => {
    grid.innerHTML += `
        <div class="card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <a href="${p.link}" style="color:var(--primary); text-decoration:none;">View System →</a>
        </div>
    `;
});

// 4. Dark Mode Toggle Logic
const toggle = document.getElementById('themeToggle');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
    const isDark = document.body.hasAttribute('data-theme');
    if (isDark) {
        document.body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

// 5. Contact Form Alert
document.getElementById('contactForm').onsubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo, check out Formspree for real emails)");
};
function openGame(evt, gameName) {
    // Hide all categories
    const categories = document.getElementsByClassName("game-category");
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = "none";
    }

    // Remove "active" class from all buttons
    const tabs = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    // Show current category and add active class to button
    document.getElementById(gameName).style.display = "block";
    evt.currentTarget.className += " active";
}
const modal = document.getElementById('gameModal');
const gameCard = document.getElementById('gamingCard');
const closeBtn = document.getElementById('closeModal');

// Open Modal logic
gameCard.onclick = function() {
    modal.style.display = "flex";
    // Reset to show ML first whenever opened
    openGame(null, 'ml'); 
}

// Close Modal logic
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Tab Switching logic
function openGame(evt, gameName) {
    // 1. Hide all categories
    const categories = document.getElementsByClassName("game-category");
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = "none";
    }

    // 2. Remove 'active' status from all buttons
    const tabs = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // 3. Show the selected one
    document.getElementById(gameName).style.display = "block";
    
    // 4. Set button to active (if clicked)
    if (evt) {
        evt.currentTarget.classList.add("active");
    } else {
        // Default to first tab if no event (initial open)
        document.querySelector('.tab-btn').classList.add("active");
    }
}