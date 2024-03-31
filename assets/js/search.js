var dummyData = [
    {
      name: "Asep Saepulloh",
      age: 30,
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
      education: "Sekolah Menegah Atas",
      location: "Majalengka",
      occupation: "Joki Balap Liar",
      maritalStatus: "Belum Nikah",
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
      education: "Sekolah Menegah Pertama",
      location: "Tasikmalaya",
      occupation: "Guru Ngaji",
      maritalStatus: "Belum Nikah",
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
    var searchType = document.getElementById("searchType").value;
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    if (searchType === "physical") {
      var bodyType = document.getElementById("bodyType").value.toLowerCase();
      var skinColor = document.getElementById("skinColor").value.toLowerCase();
      var hairColor = document.getElementById("hairColor").value.toLowerCase();
      var weight = parseFloat(document.getElementById("weight").value);
      var height = parseFloat(document.getElementById("height").value);
  
      var physicalResults = dummyData.filter(function (person) {
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
      var age = parseInt(document.getElementById("age").value);
      var education = document.getElementById("education").value.toLowerCase();
      var location = document.getElementById("location").value.toLowerCase();
      var occupation = document.getElementById("occupation").value.toLowerCase();
      var maritalStatus = document
        .getElementById("maritalStatus")
        .value.toLowerCase();
      var personality = document
        .getElementById("personality")
        .value.toLowerCase();
      var ethnicity = document.getElementById("ethnicity").value.toLowerCase();
  
      var nonPhysicalResults = dummyData.filter(function (person) {
        return (
          (isNaN(age) || person.age === age) &&
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
  
  function displayResults(results) {
    var resultsContainer = document.getElementById("results");
    var notFound = document.getElementById("notFound");
    resultsContainer.innerHTML = ""; // Bersihkan hasil sebelumnya
  
    if (results.length === 0) {
      notFound.style.display = "block";
      return;
    } else {
      notFound.style.display = "none";
    }
  
    results.forEach(function (person) {
      var card = document.createElement("div");
      card.classList.add("card");
  
      var content = `
          <div class="card-header">
            <h3>${person.name}</h3>
            <p>Umur: ${person.age}</p>
          </div>
          <div class="card-body">
            <p><strong>Pendidikan:</strong> ${person.education}</p>
            <p><strong>Domisili:</strong> ${person.location}</p>
            <p><strong>Pekerjaan:</strong> ${person.occupation}</p>
            <p><strong>Status Pernikahan:</strong> ${person.maritalStatus}</p>
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
        content += `<p><strong>Warna rambut:</strong> ${person.hairColor}</p>`;
      }
      if (person.weight) {
        content += `<p><strong>Berat Badan:</strong> ${person.weight}</p>`;
      }
      if (person.height) {
        content += `<p><strong>Tinggi Badan:</strong> ${person.height}</p>`;
      }
  
      content += `</div>`; // Tutup card-body
  
      card.innerHTML = content;
      resultsContainer.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var searchType = document.getElementById("searchType");
    searchType.value = "physical"; // Set default searchType to 'physical'
    searchType.dispatchEvent(new Event("change")); // Trigger change event to update UI
  });
  
  document.getElementById("searchType").addEventListener("change", function () {
    var searchType = this.value;
    var physicalSearch = document.getElementById("physicalSearch");
    var nonPhysicalSearch = document.getElementById("nonPhysicalSearch");
  
    if (searchType === "physical") {
      physicalSearch.style.display = "block";
      nonPhysicalSearch.style.display = "none";
    } else if (searchType === "nonPhysical") {
      physicalSearch.style.display = "none";
      nonPhysicalSearch.style.display = "block";
    }
  });
  