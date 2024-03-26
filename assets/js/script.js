function selectedNavbar() {
	const url = window.location.href;
	const fileName = url.substring(url.lastIndexOf('/') + 1);
	console.log('fileName:', typeof fileName);
	const artikelNav = document.querySelector('#artikel-navbar');
	const pelatihanNav = document.querySelector('#pelatihan-navbar');
	const konsultasiNav = document.querySelector('#konsultasi-navbar');
	const berandaNav = document.querySelector('#beranda-navbar');
	console.log('berandaNav:', berandaNav);
	if (fileName === 'artikel.html') {
		artikelNav.classList.add('selected');
		const header = document.getElementById('navbar');
		header.style.backgroundColor = '#FFF4F6';
	} else if (fileName === 'pelatihan.html') {
		pelatihanNav.classList.add('selected');
	} else if (fileName === 'konsultasi.html') {
		konsultasiNav.classList.add('selected');
	} else {
		berandaNav.classList.add('selected');
	}
}

document.addEventListener('DOMContentLoaded', function () {
	fetch('../essentials/navbar.html')
		.then((response) => response.text())
		.then((data) => {
			document.getElementById('navbar').innerHTML = data;
			selectedNavbar();
		})
		.catch((error) => console.error('Ada kesalahan:', error));

	fetch('../essentials/footer.html')
		.then((response) => response.text())
		.then((data) => {
			document.getElementById('footer').innerHTML = data;
		})
		.catch((error) => console.error('Ada kesalahan:', error));
});

function toggleDropdown() {
	const dropdown = document.getElementById('responsive-dropdown');
	const navbar_dropdown = document.getElementById('nav-container');
	if (dropdown.style.display === 'none') {
		dropdown.style.display = 'inline-flex';
		navbar_dropdown.style.right = '-200px';
	} else {
		dropdown.style.display = 'none';
		navbar_dropdown.style.right = '0px';
	}
}

function openSoal() {
	const dropdown = document.getElementById('open-soal');
	const soal_dropdown = document.getElementById('side-soal-container');

	if (soal_dropdown.style.left === '-260px') {
		soal_dropdown.style.left = '0px';
	} else {
		soal_dropdown.style.left = '-260px';
	}
}

window.onload = function () {
	const headerEffect = document.querySelector('.header-effect');
	window.addEventListener('scroll', () => {
		console.log('berhasil');
		const elementBottom = headerEffect.offsetTop + headerEffect.offsetHeight;
		if (window.scrollY > elementBottom) {
			headerEffect.style.position = 'fixed';
			headerEffect.style.top = '0px';
			headerEffect.style.animation = 'fadeInDown 1s'; // Menggunakan properti animation untuk mendefinisikan animasi
			headerEffect.style.zIndex = '100';
			headerEffect.style.width = '100%';
		} else {
			headerEffect.style.position = ''; // Menghapus properti position ketika kembali ke posisi asal
			headerEffect.style.top = '';
			headerEffect.style.animation = '';
			headerEffect.style.zIndex = 'auto';
		}
	});

	const containerEffects = document.querySelectorAll('.container-effect');
	containerEffects.forEach((element) => {
		window.addEventListener('scroll', () => {
			const elementTop = element.offsetTop;
			const elementBottom = elementTop + element.offsetHeight - 100; // Menghitung posisi bottom elemen

			if (window.scrollY > elementTop - 400 && window.scrollY < elementBottom) {
				element.style.opacity = 1;
				element.style.transform = 'translateY(0px)';
				element.style.transition = '0.5s ease-in-out';
			} else {
				element.style.opacity = 0;
				element.style.transform = 'translateY(-50px)';
				element.style.transition = '0.5s ease-in-out';
			}
		});
	});
};

function selectChoice(element) {
	var choices = document.querySelectorAll('.choice-prefix, .choice-text');
	for (var i = 0; i < choices.length; i++) {
		choices[i].classList.remove('clicked');
	}
	element.classList.add('clicked');

	// Menemukan elemen .choice-prefix terkait dan menambahkan kelas clicked kepadanya juga
	var choicePrefix = element.closest('.choice').querySelector('.choice-prefix');
	choicePrefix.classList.add('clicked');
}

function selectNumber(element) {
	var numbers = document.querySelectorAll('.number-box');
	for (var i = 0; i < numbers.length; i++) {
		numbers[i].classList.remove('selected');
	}
	element.classList.add('selected');
}

window.addEventListener('load', function () {
	var mainContent = document.querySelector('body');
	mainContent.classList.add('fade-in');
});
