const exhibitionsData = [
  {
    id: 1,
    name: "Tutankhamun",
    shortImg: "images/Tutankhamun.jpg.jpeg",
    largeImg: "images/Tutankhamun.jpg.jpeg",
    description: `
        Tutankhamun, the boy king of Ancient Egypt,
        continues to captivate the world with the untouched treasures of his tomb.
        is golden mask is more than an artifact;
        it is a lasting echo of a royal life preserved through eternity,
        revealing the mystery and grandeur of a forgotten age.
`,
  },

  {
    id: 2,
    name: "Ramesses II",
    shortImg: "images/Ramesses II.jpg.jpeg",
    largeImg: "images/Ramesses II.jpg.jpeg",
    description: `
        Ramesses II, often called Ramesses the Great,
         was one of the most powerful and celebrated pharaohs of Ancient Egypt.  
        His long reign was marked by monumental building projects, 
        military victories, and the expansion of Egyptian influence.  
        From Abu Simbel to his colossal statues, 
        he left behind a legacy of greatness that still dominates the imagination of the ancient world.`,
  },

  {
    id: 3,
    name: "Horus",
    shortImg: "images/Horus.jpg.jpeg",
    largeImg: "images/Horus.jpg.jpeg",
    description: `
        Horus, the falcon-headed god, 
        was one of the most important deities in Ancient Egyptian mythology.  
        He symbolized kingship, protection, and divine power,
         often associated with the living pharaoh as his earthly embodiment.  
        The Eye of Horus became a powerful symbol of healing, protection, 
        and restoration that endured through ancient Egyptian belief.`,
  },

  {
    id: 4,
    name: "The Hanging Obelisk",
    shortImg: "images/The Hanging Obelisk.jpg.jpeg",
    largeImg: "images/The Hanging Obelisk.jpg.jpeg",
    description: `
        The Hanging Obelisk is one of the unique architectural masterpieces
         displayed at the museum, appearing as if it is suspended in mid-air.  
        It showcases the remarkable engineering skills of ancient Egyptian civilization
         and their ability to blend creativity with structural precision.  
        This extraordinary monument offers visitors a rare perspective on the ingenuity 
        and artistic vision of ancient builders.`,
  },

  {
    id: 5,
    name: "King Khafre ",
    shortImg: "images/King Khafre .jpg.jpeg",
    largeImg: "images/King Khafre .jpg.jpeg",
    description: `
        Khafre was an ancient Egyptian pharaoh of the Fourth Dynasty, 
        best known for the second-largest pyramid at Giza.  
        He is also associated with the Great Sphinx, 
        believed to bear his facial features as a symbol of royal power and divine protection.  
        His monuments reflect the strength and architectural mastery of Old Kingdom Egypt, 
        standing as timeless symbols of greatness.`,
  },

  {
    id: 6,
    name: "Canopic Jars",
    shortImg: "images/Canopic Jars.jpg.jpeg",
    largeImg: "images/Canopic Jars.jpg.jpeg",
    description: `
        Canopic Jars were essential funerary objects in Ancient Egypt, 
        used to store and preserve the internal organs of the deceased during mummification.  
        Each jar was protected by a specific deity, 
        representing the organs and ensuring safe passage to the afterlife.  
        They reflect the deep spiritual beliefs of the ancient 
        Egyptians and their preparation for eternity beyond death.`,
  },
];

const cardsGrid = document.getElementById("cardsGrid");
const detailsContainer = document.getElementById("detailsContainer");
let activeCardId = 0;

function renderCards() {
  cardsGrid.innerHTML = "";
  exhibitionsData.forEach((artifact) => {
    const card = document.createElement("div");
    card.className = `exhibition-card ${activeCardId === artifact.id ? "active-card" : ""}`;
    card.dataset.id = artifact.id;

    card.innerHTML = `
            <img src="${artifact.shortImg}" alt="${artifact.name}" class="card-img" loading="lazy">
            <div class="card-content">
                <h3 class="artifact-name">${artifact.name}</h3>
                <button class="read-more-btn" data-id="${artifact.id}">
                    <i class="fas fa-book-open"></i> Read More
                </button>
            </div>
        `;

    const btn = card.querySelector(".read-more-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      updateDetailsSection(artifact.id);
      highlightActiveCard(artifact.id);
      document
        .getElementById("detailsSection")
        .scrollIntoView({ behavior: "smooth" });
    });

    cardsGrid.appendChild(card);
  });
}

function highlightActiveCard(selectedId) {
  activeCardId = selectedId;
  document.querySelectorAll(".exhibition-card").forEach((card) => {
    const cardId = parseInt(card.dataset.id);
    if (cardId === selectedId) card.classList.add("active-card");
    else card.classList.remove("active-card");
  });
}

function updateDetailsSection(artifactID) {
  const artifact = exhibitionsData.find((item) => item.id === artifactID);
  if (!artifact) return;

  detailsContainer.style.opacity = "0";
  setTimeout(() => {
    detailsContainer.innerHTML = `
            <div class="details-layout details-fade">
                <div class="details-image-wrapper">
                    <img src="${artifact.largeImg}" alt="${artifact.name}" class="details-img">
                </div>
                <div class="details-text">
                    <h2>${artifact.name}</h2>
                    <p>${artifact.description}</p>
                </div>
            </div>
        `;
    detailsContainer.style.opacity = "1";
  }, 150);
}

function init() {
  renderCards();
  initDarkMode();
}

window.addEventListener("DOMContentLoaded", init);