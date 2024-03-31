function selectedNavbar() {
  const url = window.location.href;
  const fileName = url.substring(url.lastIndexOf("/") + 1);
  console.log("fileName:", typeof fileName);
  const artikelNav = document.querySelector("#artikel-navbar");
  const pelatihanNav = document.querySelector("#pelatihan-navbar");
  const chatNav = document.querySelector("#chat-navbar");
  const berandaNav = document.querySelector("#beranda-navbar");
  console.log("berandaNav:", berandaNav);
  if (fileName === "artikel.html") {
    artikelNav.classList.add("selected");
    const header = document.getElementById("navbar");
    header.style.backgroundColor = "#FFF4F6";
  } else if (fileName === "pelatihan.html") {
    pelatihanNav.classList.add("selected");
    const header = document.getElementById("navbar");
    header.style.backgroundColor = "#FFF4F6";
  } else if (fileName === "chat.html") {
    chatNav.classList.add("selected");
  } else if (fileName === "dashboard.html") {
    berandaNav.classList.add("selected");
  } else {
    item.classList.remove("selected");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("../essentials/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
      selectedNavbar();
    })
    .catch((error) => console.error("Ada kesalahan:", error));

  fetch("../essentials/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Ada kesalahan:", error));
});

function toggleDropdown() {
  const dropdown = document.getElementById("responsive-dropdown");
  const navbar_dropdown = document.getElementById("nav-container");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "inline-flex";
    navbar_dropdown.style.right = "-250px";
  } else {
    dropdown.style.display = "none";
    navbar_dropdown.style.right = "0px";
  }
}

function openSidebar(id, leftLength) {
  const dropdown = document.getElementById(id);

  if (dropdown.style.left === "0px") {
    dropdown.style.left = leftLength;
  } else {
    dropdown.style.left = "0px";
  }
}

function navigateToRegister(id) {
  const tabNavigator = document.getElementById(id);
  tabNavigator.classList.add("show");
}

function closeTabNavigator(id) {
  const tabNavigator = document.getElementById(id);
  tabNavigator.classList.remove("show");
}

function babDropdown(id, dropdownId) {
  const dropdown = document.getElementById(id);
  const dropdownLogo = document.getElementById(dropdownId);
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    dropdown.style.animation = "fadeInDown 1s";
    dropdownLogo.classList.add("fa-chevron-down");
    dropdownLogo.classList.remove("fa-chevron-right");
  } else {
    dropdown.style.display = "none";
    dropdownLogo.classList.remove("fa-chevron-down");
    dropdownLogo.classList.add("fa-chevron-right");
  }
}

window.onload = function () {
  const headerEffect = document.querySelector(".header-effect");
  window.addEventListener("scroll", () => {
    console.log("berhasil");
    const elementBottom = headerEffect.offsetTop + headerEffect.offsetHeight;
    if (window.scrollY > elementBottom) {
      headerEffect.style.position = "fixed";
      headerEffect.style.top = "0px";
      headerEffect.style.animation = "fadeInDown 1s"; // Menggunakan properti animation untuk mendefinisikan animasi
      headerEffect.style.zIndex = "100";
    } else {
      headerEffect.style.position = ""; // Menghapus properti position ketika kembali ke posisi asal
      headerEffect.style.top = "";
      headerEffect.style.animation = "";
      headerEffect.style.zIndex = "auto";
    }
  });

  const containerEffects = document.querySelectorAll(".container-effect");
  containerEffects.forEach((element) => {
    window.addEventListener("scroll", () => {
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight - 100; // Menghitung posisi bottom elemen

      if (window.scrollY > elementTop - 400 && window.scrollY < elementBottom) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0px)";
        element.style.transition = "0.5s ease-in-out";
      } else {
        element.style.opacity = 0;
        element.style.transform = "translateY(-50px)";
        element.style.transition = "0.5s ease-in-out";
      }
    });
  });
};

function directToRegister() {
  window.location.href = "./pages/register.html";
}

function register() {
  var fname = document.querySelector(".fname-input").value.trim();
  var lname = document.querySelector(".lname-input").value.trim();
  var phone = document.querySelector(".phone-input").value.trim();
  var email = document.querySelector(".email-input").value.trim();
  var password = document.querySelector(".pass-input").value.trim();
  var confirmPassword = document
    .querySelector(".confirmpass-input")
    .value.trim();

  var errorMessage = document.getElementById("message");
  var inputs = document.querySelectorAll(".field-register input");

  if (
    fname === "" ||
    lname === "" ||
    phone === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    errorMessage.innerText = "Data tidak boleh kosong";
    inputs.forEach((input) => (input.style.borderColor = "red"));
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    return;
  }

  inputs.forEach((input) => (input.style.borderColor = ""));
  errorMessage.style.display = "none";

  if (password !== confirmPassword) {
    errorMessage.innerText = "Password dan Konfirmasi password tidak sama";
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    return;
  }
  errorMessage.innerText = "";
  window.location.href = "./dashboard.html";
}

function login() {
  var username = document.querySelector(".user-input").value.trim();
  var password = document.querySelector(".pass-input").value.trim();

  if (username === "") {
    alert("Username dan Password harus diisi");
    // document.querySelector('.user-input').style.borderColor = 'red';
    return;
  }
  if (password === "") {
    alert("Password harus diisi");
    // document.querySelector('.pass-input').style.borderColor = 'red';
    return;
  }
  window.location.href = "./dashboard.html";
}

function selectNumber(element) {
  var numbers = document.querySelectorAll(".number-box");
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove("selected");
  }
  element.classList.add("selected");
}

window.addEventListener("load", function () {
  var mainContent = document.querySelector("body");
  mainContent.classList.add("fade-in");
});

function selectChoice(element) {
  var choices = document.querySelectorAll(".choice-prefix, .choice-text");
  for (var i = 0; i < choices.length; i++) {
    choices[i].classList.remove("clicked");
  }

  if (element.classList.contains("choice-text")) {
    var prefixElement = element.parentNode.querySelector(".choice-prefix");
    prefixElement.classList.add("clicked");
    selectedAnswer = prefixElement.textContent.trim();
  } else {
    element.classList.add("clicked");
    selectedAnswer = element.textContent.trim();
  }
}

var soal = [
  {
    judul: "Soal 1",
    isi: "Apa yang dimaksud dengan",
    jawaban: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
  },
  {
    judul: "Soal 2",
    isi: "Sebutkan bla",
    jawaban: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
  },
  {
    judul: "Soal 3",
    isi: "Pertanyaan tentang ...",
    jawaban: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
  },
];

function tampilkanSoal(index) {
  var judulSoalElement = document.getElementById("judul-soal");
  var isiSoalElement = document.getElementById("isi-soal");
  var jawabanElement = document.querySelector("#jawaban");
  var clickedElements = document.querySelectorAll(
    ".choice-prefix.clicked, .choice-text.clicked"
  );
  clickedElements.forEach(function (element) {
    element.classList.remove("clicked");
  });

  judulSoalElement.innerHTML = soal[index].judul;
  isiSoalElement.innerHTML = soal[index].isi;

  jawabanElement.innerHTML = "";

  for (var i = 0; i < soal[index].jawaban.length; i++) {
    var choiceElement = document.createElement("div");
    choiceElement.classList.add("choice");
    var choicePrefix = document.createElement("p");
    choicePrefix.classList.add("choice-prefix");
    choicePrefix.onclick = selectChoice;
    var choiceText = document.createElement("p");
    choiceText.classList.add("choice-text");
    choiceText.textContent = soal[index].jawaban[i];
    choiceText.onclick = selectChoice;
    choiceElement.appendChild(choicePrefix);
    choiceElement.appendChild(choiceText);
    jawabanElement.appendChild(choiceElement);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  tampilkanSoal(currentSoal);
});

var currentSoal = 0;
function next() {
  if (currentSoal < soal.length - 1) {
    currentSoal++;
    if (currentSoal === 1) {
      document.querySelector(".prev-button").style.display = "inline";
    }
    if (currentSoal === soal.length - 1) {
      document.querySelector(".next-button").style.display = "none";
    }
  }

  tampilkanSoal(currentSoal);

  selectedAnswer = null;
}

function prev() {
  if (currentSoal > 0) {
    currentSoal--;
    if (currentSoal === 0) {
      document.querySelector(".prev-button").style.display = "none";
    }
    document.querySelector(".next-button").style.display = "inline";
  }

  tampilkanSoal(currentSoal);

  selectedAnswer = null;
}

document.getElementById("kumpul-btn").addEventListener("click", kumpulkan);
function kumpulkan() {
  showPopup();
}

function showPopup() {
  var popup = document.getElementById("konfirmasi-popup");
  var overlay = document.getElementById("popup-overlay");

  popup.classList.add("show");
  overlay.classList.add("show");
}

function closePopup() {
  var popup = document.getElementById("konfirmasi-popup");
  var overlay = document.getElementById("popup-overlay");

  popup.classList.remove("show");
  overlay.classList.remove("show");
}

document.getElementById("yes-btn").addEventListener("click", function () {
  showDonePopup();
});

function showDonePopup() {
  var popup = document.getElementById("done-popup");
  popup.classList.add("show");
}

function selesai() {
  var popups = document.querySelectorAll(".popup");
  popups.forEach(function (popup) {
    popup.classList.remove("show");
  });

  setTimeout(function () {
    window.location.href = "summary.html";
  }, 500);
}

function roomChat() {
  window.location.href = "../pages/chat-sedangtaaruf.html";
}

document
  .getElementsByClassName("notify-item")
  .addEventListener("click", lihatnotif);
function lihatnotif() {
  showPopup();
}

// masih belum berhasil help
var boxNotif = document.getElementById("boxnotif");
var down = false;
function showNotif() {
  if (down) {
    boxNotif.style.height = "0px";
    boxNotif.style.opacity = 0;
    down = false;
  } else {
    boxNotif.style.opacity = 1;
    down = true;
  }
}
