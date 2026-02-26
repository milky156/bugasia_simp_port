// Modal logic for hobbies (about.html)
document.addEventListener('DOMContentLoaded', function() {
	// Games Modal
	var gamesBtn = document.getElementById('gamesBtn');
	var closeGames = document.getElementById('closeGames');
	var gamesModal = document.getElementById('gamesModal');
	
	if(gamesBtn && closeGames && gamesModal) {
		gamesBtn.onclick = function() {
			gamesModal.style.display = 'flex';
		};
		closeGames.onclick = function() {
			gamesModal.style.display = 'none';
		};
		gamesModal.addEventListener('click', function(e) {
			if (e.target === gamesModal) gamesModal.style.display = 'none';
		});
	}
	
	// Photography Modal
	var photoBtn = document.getElementById('photoBtn');
	var closePhoto = document.getElementById('closePhoto');
	var photoModal = document.getElementById('photoModal');
	
	if(photoBtn && closePhoto && photoModal) {
		photoBtn.onclick = function() {
			photoModal.style.display = 'flex';
		};
		closePhoto.onclick = function() {
			photoModal.style.display = 'none';
		};
		photoModal.addEventListener('click', function(e) {
			if (e.target === photoModal) photoModal.style.display = 'none';
		});
	}
	
	// Coffee Modal
	var coffeeBtn = document.getElementById('coffeeBtn');
	var closeCoffee = document.getElementById('closeCoffee');
	var coffeeModal = document.getElementById('coffeeModal');
	
	if(coffeeBtn && closeCoffee && coffeeModal) {
		coffeeBtn.onclick = function() {
			coffeeModal.style.display = 'flex';
		};
		closeCoffee.onclick = function() {
			coffeeModal.style.display = 'none';
		};
		coffeeModal.addEventListener('click', function(e) {
			if (e.target === coffeeModal) coffeeModal.style.display = 'none';
		});
	}
});
// Project modal logic (index.html)
let currentImageIndex = 0;

function openProject(type){
	var popup = document.getElementById("projectPopup");
	var details = document.getElementById("projectDetails");
	
	if(!popup || !details) return;
	
	popup.style.display = "block";
	currentImageIndex = 0;

	if(type == "inventory"){
		details.innerHTML = `
			<h2>Inventory Management System</h2>
			<p>A web-based Product Inventory Management System developed using Laravel (PHP) with a MySQL database and styled using Tailwind CSS. This application allows users to efficiently manage product records by storing and updating essential information such as product name, price, and quantity.</p>
		`;
	}
}

function closeProject(){
	var popup = document.getElementById("projectPopup");
	if(popup) {
		popup.style.display = "none";
	}
}

function showImage(index) {
	var sliderContainer = document.querySelector('.slider-container');
	if(!sliderContainer) return;
	
	var images = document.querySelectorAll('.slider-img');
	if(images.length === 0) return;
	
	if(index >= images.length) {
		currentImageIndex = 0;
	} else if(index < 0) {
		currentImageIndex = images.length - 1;
	} else {
		currentImageIndex = index;
	}
	
	sliderContainer.style.transform = 'translateX(' + (-currentImageIndex * 100) + '%)';
}

function nextImage() {
	showImage(currentImageIndex + 1);
}

function prevImage() {
	showImage(currentImageIndex - 1);
}