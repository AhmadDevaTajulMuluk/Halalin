let dummyData = [
  {
    name: "Asep Saepulloh",
    age: 30,
    quran: "15 Juz",
    education: "Sarjana",
    location: "Garut",
    occupation: "Mekanik TikTok",
    maritalStatus: "Cerai",
    personality: "Ramah",
    ethnicity: "Sunda",
    bodyType: "Normal",
    skinColor: "Putih Kecoklatan",
    hairColor: "Hitam",
    weight: 75,
    height: 180,
  },
  {
    name: "Dadang Roller",
    age: 25,
    quran: "30 Juz",
    education: "Sekolah Menengah Atas",
    location: "Majalengka",
    occupation: "Joki Balap Liar",
    maritalStatus: "Belum Menikah",
    personality: "Humoris",
    ethnicity: "Sunda",
    bodyType: "Kurus",
    skinColor: "Putih",
    hairColor: "Coklat",
    weight: 55,
    height: 165,
  },
  {
    name: "Salman Kiprok",
    age: 35,
    quran: "10 Juz",
    education: "Sarjana",
    location: "Bandung",
    occupation: "Manajer Bank",
    maritalStatus: "Cerai",
    personality: "Tegas",
    ethnicity: "Sunda",
    bodyType: "Normal",
    skinColor: "Putih Kecoklatan",
    hairColor: "Hitam",
    weight: 65,
    height: 175,
  },
  {
    name: "Agus Jumatan",
    age: 28,
    quran: "5 Juz",
    education: "Sekolah Menengah Pertama",
    location: "Tasikmalaya",
    occupation: "Guru Ngaji",
    maritalStatus: "Belum Menikah",
    personality: "Penyabar",
    ethnicity: "Sunda",
    bodyType: "Kurus",
    skinColor: "Gelap",
    hairColor: "Pirang",
    weight: 55,
    height: 160,
  },
];

function search() {
  let searchType = document.getElementById("searchType").value;
  let resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (searchType === "physical") {
    let bodyType = document.getElementById("bodyType").value.toLowerCase();
    let skinColor = document.getElementById("skinColor").value.toLowerCase();
    let hairColor = document.getElementById("hairColor").value.toLowerCase();
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let physicalResults = dummyData.filter(function (person) {
      return (
        (!bodyType || person.bodyType.toLowerCase() === bodyType) &&
        (!skinColor || person.skinColor.toLowerCase() === skinColor) &&
        (!hairColor || person.hairColor.toLowerCase() === hairColor) &&
        (isNaN(weight) || person.weight === weight) &&
        (isNaN(height) || person.height === height)
      );
    });

    displayResults(physicalResults);
  } else if (searchType === "nonPhysical") {
    let age = parseInt(document.getElementById("age").value);
    let quran = document.getElementById("quran").value.toLowerCase();
    let education = document.getElementById("education").value.toLowerCase();
    let location = document.getElementById("location").value.toLowerCase();
    let occupation = document.getElementById("occupation").value.toLowerCase();
    let maritalStatus = document
      .getElementById("maritalStatus")
      .value.toLowerCase();
    let personality = document
      .getElementById("personality")
      .value.toLowerCase();
    let ethnicity = document.getElementById("ethnicity").value.toLowerCase();

    let nonPhysicalResults = dummyData.filter(function (person) {
      return (
        (isNaN(age) || person.age === age) &&
        (!quran || person.quran.toLowerCase() === quran) &&
        (!education || person.education.toLowerCase() === education) &&
        (!location || person.location.toLowerCase() === location) &&
        (!occupation || person.occupation.toLowerCase() === occupation) &&
        (!maritalStatus ||
          person.maritalStatus.toLowerCase() === maritalStatus) &&
        (!personality || person.personality.toLowerCase() === personality) &&
        (!ethnicity || person.ethnicity.toLowerCase() === ethnicity)
      );
    });

    displayResults(nonPhysicalResults);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan parameter dari URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Mengambil data dari parameter
  const name = urlParams.get("name");
  const age = urlParams.get("age");
  const quran = urlParams.get("quran");
  const education = urlParams.get("education");
  const location = urlParams.get("location");
  const occupation = urlParams.get("occupation");
  const maritalStatus = urlParams.get("maritalStatus");
  const personality = urlParams.get("personality");
  const ethnicity = urlParams.get("ethnicity");
  const bodyType = urlParams.get("bodyType");
  const skinColor = urlParams.get("skinColor");
  const hairColor = urlParams.get("hairColor");
  const weight = urlParams.get("weight");
  const height = urlParams.get("height");

  // Menampilkan data CV ke dalam elemen dengan id "cv"
  const cvElement = document.getElementById("preview-cv");
  cvElement.innerHTML = `
  <div class="container-preview">
  <div class="card-cv">
    <div class="card-body">
      <p><strong>Nama:</strong> ${decodeURIComponent(name)}</p>
      <p><strong>Umur:</strong> ${age}</p>
      <p><strong>Hafalan Al-Quran:</strong> ${decodeURIComponent(quran)}</p>
      <p><strong>Pendidikan:</strong> ${decodeURIComponent(education)}</p>
      <p><strong>Domisili:</strong> ${decodeURIComponent(location)}</p>
      <p><strong>Pekerjaan:</strong> ${decodeURIComponent(occupation)}</p>
      <p><strong>Status Pernikahan:</strong> ${decodeURIComponent(maritalStatus)}</p>
      <p><strong>Sifat:</strong> ${decodeURIComponent(personality)}</p>
      <p><strong>Suku Bangsa:</strong> ${decodeURIComponent(ethnicity)}</p>
      <p><strong>Bentuk Fisik:</strong> ${decodeURIComponent(bodyType)}</p>
      <p><strong>Warna Kulit:</strong> ${decodeURIComponent(skinColor)}</p>
      <p><strong>Warna Rambut:</strong> ${decodeURIComponent(hairColor)}</p>
      <p><strong>Berat Badan:</strong> ${weight}</p>
      <p><strong>Tinggi Badan:</strong> ${height}</p>
    </div>
    <a href="../pages/chat.html" class="button-preview">Ajukan Permintaan</a>
  </div>
</div>`;
});

// document.addEventListener("DOMContentLoaded", function () {
//   let searchType = document.getElementById("searchType");
//   searchType.value = "physical"; // Set default searchType to 'physical'
//   searchType.dispatchEvent(new Event("change")); // Trigger change event to update UI
// });

document.getElementById("searchType").addEventListener("change", function () {
  let searchType = this.value;
  let physicalSearch = document.getElementById("physicalSearch");
  let nonPhysicalSearch = document.getElementById("nonPhysicalSearch");

  if (searchType === "physical") {
    physicalSearch.style.display = "block";
    nonPhysicalSearch.style.display = "none";
  } else if (searchType === "nonPhysical") {
    physicalSearch.style.display = "none";
    nonPhysicalSearch.style.display = "block";
  }
});

function displayResults(results) {
  let resultsContainer = document.getElementById("results");
  let notFound = document.getElementById("notFound");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    notFound.style.display = "block";
    return;
  } else {
    notFound.style.display = "none";
  }

  results.forEach(function (person) {
    let card = document.createElement("div");
    card.classList.add("card");

    let content = `
        <div class="card-header">
          <h3>${person.name}</h3>
          <p>Umur: ${person.age}</p>
        </div>
        <div class="card-body">
          <p><strong>Hafalan:</strong> ${person.quran}</p>
          <p><strong>Pendidikan:</strong> ${person.education}</p>
          <p><strong>Domisili:</strong> ${person.location}</p>
          <p><strong>Pekerjaan:</strong> ${person.occupation}</p>
          <p><strong>Status:</strong> ${person.maritalStatus}</p>
          <p><strong>Sifat:</strong> ${person.personality}</p>
          <p><strong>Suku Bangsa:</strong> ${person.ethnicity}</p>
      `;

    if (person.bodyType) {
      content += `<p><strong>Bentuk Fisik:</strong> ${person.bodyType}</p>`;
    }
    if (person.skinColor) {
      content += `<p><strong>Warna Kulit:</strong> ${person.skinColor}</p>`;
    }
    if (person.hairColor) {
      content += `<p><strong>Warna Rambut:</strong> ${person.hairColor}</p>`;
    }
    if (person.weight) {
      content += `<p><strong>Berat Badan:</strong> ${person.weight}</p>`;
    }
    if (person.height) {
      content += `<p><strong>Tinggi Badan:</strong> ${person.height}</p>`;
    }

    content += `</div>`; // Close card-body

    card.innerHTML = content;
    resultsContainer.appendChild(card);

    // Add click event listener to each card to display popup
    card.addEventListener("click", function () {
      displayPopup(person);
    });
  });
}

function displayPopup(person) {
  // Create popup container
  let popupBackdrop = document.getElementById("popupBackdrop");
  popupBackdrop.style.display = "block";

  let popupContent = `
    <div class="popup-search">
      <h2>${person.name}</h2>
      <p><strong>Umur:</strong> ${person.age}</p>
      <p><strong>Hafalan:</strong> ${person.quran}</p>
      <p><strong>Pendidikan:</strong> ${person.education}</p>
      <p><strong>Domisili:</strong> ${person.location}</p>
      <p><strong>Pekerjaan:</strong> ${person.occupation}</p>
      <p><strong>Status:</strong> ${person.maritalStatus}</p>
      <p><strong>Sifat:</strong> ${person.personality}</p>
      <p><strong>Suku Bangsa:</strong> ${person.ethnicity}</p>
  `;

  if (person.bodyType) {
    popupContent += `<p><strong>Bentuk Fisik:</strong> ${person.bodyType}</p>`;
  }
  if (person.skinColor) {
    popupContent += `<p><strong>Warna Kulit:</strong> ${person.skinColor}</p>`;
  }
  if (person.hairColor) {
    popupContent += `<p><strong>Warna Rambut:</strong> ${person.hairColor}</p>`;
  }
  if (person.weight) {
    popupContent += `<p><strong>Berat Badan:</strong> ${person.weight}</p>`;
  }
  if (person.height) {
    popupContent += `<p><strong>Tinggi Badan:</strong> ${person.height}</p>`;
  }

  popupContent += `
    <button id="closePopup">Close</button>
    <a href="#" class="cv-button" id="cv-button">Lihat CV</a>
  </div>
  `;

  popupBackdrop.innerHTML = popupContent;

  // Add event listener to close popup when close button is clicked
  let closePopupButton = document.getElementById("closePopup");
  closePopupButton.addEventListener("click", function () {
    popupBackdrop.style.display = "none";
  });

  // Add event listener for "Lihat CV" button
  let cvButton = document.getElementById("cv-button");
  cvButton.addEventListener("click", function () {
    navigateToCV(person); // Menavigasi ke halaman cv.html dengan membawa data orang yang dipilih
  });
}

function navigateToCV(person) {
  // Membuat URL dengan parameter data orang yang dipilih
  let url = `/views/pages/preview-cv.html?name=${encodeURIComponent(
    person.name
  )}&age=${person.age}&quran=${encodeURIComponent(
    person.quran
  )}&education=${encodeURIComponent(
    person.education
  )}&location=${encodeURIComponent(
    person.location
  )}&occupation=${encodeURIComponent(
    person.occupation
  )}&maritalStatus=${encodeURIComponent(
    person.maritalStatus
  )}&personality=${encodeURIComponent(
    person.personality
  )}&ethnicity=${encodeURIComponent(
    person.ethnicity
  )}&bodyType=${encodeURIComponent(
    person.bodyType
  )}&skinColor=${encodeURIComponent(
    person.skinColor
  )}&hairColor=${encodeURIComponent(person.hairColor)}&weight=${
    person.weight
  }&height=${person.height}`;

  // Mengarahkan ke halaman cv.html dengan URL yang sudah dibuat
  window.location.href = url;
}
