const images = [
  "https://i.pinimg.com/736x/27/1c/b0/271cb08f398b17419ad02011c3c25400.jpg",
  "https://i.pinimg.com/736x/66/17/fc/6617fc537d1b098887cefbf71c10e69f.jpg",
  "https://i.pinimg.com/736x/5c/20/c1/5c20c19a76d0a8bcc3e4e3ea10ce15ca.jpg"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

function changeBackground() {
  slideshow.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 4000);

// ====== Anime Data Handling with localStorage ======

const defaultAnimeData = [
  {
    id: 'anime-1',
    title: "Kimi No Nawa",
    image: "https://i.pinimg.com/736x/c8/44/90/c844903e5b3dd85ad474dd70b5d50de8.jpg",
    description: "Manusia melawan raksasa dalam dunia distopia. Cerita ini penuh konflik batin, perjuangan kebebasan, dan misteri sejarah dunia yang membuat penonton terpikat dari awal hingga akhir.",
    genre: "Action, Drama",
    uploadDate: "2024-05-01",
    link: "https://id.wikipedia.org/wiki/Your_Name."
  },
  {
    id: 'anime-2',
    title: "Jujutsu Kaisen",
    image: "https://i.pinimg.com/736x/c8/44/90/c844903e5b3dd85ad474dd70b5d50de8.jpg",
    description: "Tanjiro berjuang menyelamatkan adiknya yang menjadi iblis. Ia melawan iblis demi keadilan dan cinta keluarga.",
    genre: "Action, Drama",
    uploadDate: "2024-06-01",
    link: "https://id.wikipedia.org/wiki/Jujutsu_Kaisen"
  },
  {
    id: 'anime-3',
    title: "One Piece",
    image: "https://i.pinimg.com/736x/d4/1b/09/d41b09f4d1e2e4f0a2e7c3e3e0d8f0f0.jpg",
    description: "Petualangan bajak laut Monkey D. Luffy dan krunya mencari One Piece.",
    genre: "Action, Adventure, Fantasy",
    uploadDate: "2024-03-20",
    link: "https://id.wikipedia.org/wiki/One_Piece"
  }
];

// Pastikan semua data anime yang ada di localStorage memiliki ID jika belum ada.
let animeData = JSON.parse(localStorage.getItem("animeData")) || defaultAnimeData;
animeData = animeData.map(anime => {
  if (!anime.id) {
    anime.id = 'anime-' + Date.now() + Math.floor(Math.random() * 1000); // Buat ID unik
  }
  return anime;
});


const container = document.getElementById("animeList");
const searchInput = document.getElementById("searchInput");
const toggleAdminModeBtn = document.getElementById("toggleAdminModeBtn"); // ID yang benar
const editSelectedBtn = document.getElementById("editSelectedBtn"); // Tombol baru
const deleteSelectedBtn = document.getElementById("deleteSelectedBtn"); // Tombol baru

const deleteConfirmationModal = document.getElementById("deleteConfirmationModal");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");

const editAnimeModal = document.getElementById("editAnimeModal");
const editTitleInput = document.getElementById("editTitleInput");
const editImageInput = document.getElementById("editImageInput");
const editGenreInput = document.getElementById("editGenreInput");
const editLinkInput = document.getElementById("editLinkInput");
const editDescInput = document.getElementById("editDescInput");
const saveEditBtn = document.getElementById("saveEditBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
let currentEditingAnimeId = null;

let adminMode = false; // Mengubah nama variabel ke adminMode
let selectedAnimeIds = new Set(); // Menggunakan Set untuk ID yang terpilih


function saveToLocalStorage() {
  localStorage.setItem("animeData", JSON.stringify(animeData));
}

function renderAnimeList(filterGenre = null, searchTerm = null) {
  container.innerHTML = "";
  selectedAnimeIds.clear(); // Bersihkan pilihan saat re-render

  let filteredData = filterGenre
    ? animeData.filter(anime =>
        anime.genre.toLowerCase().includes(filterGenre.toLowerCase()))
    : [...animeData];

  if (searchTerm) {
    filteredData = filteredData.filter(anime =>
      anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anime.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anime.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filteredData.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

  filteredData.forEach((anime) => {
    const box = document.createElement("div");
    box.className = "anime-box";

    const shortDesc = anime.description.length > 100
      ? anime.description.substring(0, 100) + "..."
      : anime.description;

    const needsReadMore = anime.description.length > 100;

    box.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}" class="anime-img">
      <div class="anime-info">
        <div class="anime-title">
          ${anime.link ? `<a href="${anime.link}" target="_blank" class="anime-title-link">${anime.title}</a>` : anime.title}
        </div>
        <div class="anime-genre">
          ${anime.genre.split(', ').map(g =>
            `<a class="anime-genre-link" data-genre="${g}">${g}</a>`).join(', ')}
        </div>
        <div class="anime-desc" id="desc-${anime.id}">${shortDesc}</div>
        ${needsReadMore ? `<a href="#" class="read-more" data-target-id="${anime.id}">Baca selengkapnya</a>` : ""}
        <div class="anime-actions">
          ${adminMode ? `<input type="checkbox" class="delete-checkbox" data-id="${anime.id}" ${selectedAnimeIds.has(anime.id) ? 'checked' : ''}>` : ''}
          ${adminMode ? `<button class="edit-button" data-id="${anime.id}">Edit</button>` : ''}
        </div>
      </div>
    `;

    container.appendChild(box);
  });

  // Perbarui visibilitas tombol "Edit yang Dipilih" dan "Hapus yang Dipilih"
  if (adminMode) {
      editSelectedBtn.style.display = "inline-block";
      deleteSelectedBtn.style.display = "inline-block";
      toggleAdminModeBtn.textContent = "Selesai Mode Admin"; // Update text when entering admin mode
  } else {
      editSelectedBtn.style.display = "none";
      deleteSelectedBtn.style.display = "none";
      toggleAdminModeBtn.textContent = "Mode Admin"; // Update text when exiting admin mode
  }


  // Event listener untuk "Baca Selengkapnya"
  const readMoreLinks = document.querySelectorAll(".read-more");
  readMoreLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.dataset.targetId; // Menggunakan data-target-id (ID anime)
      const targetAnime = animeData.find(anime => anime.id === targetId);
      if (targetAnime) {
        document.getElementById(`desc-${targetId}`).textContent = targetAnime.description;
        link.remove();
      }
    });
  });

  // Event listener untuk tombol Edit (individual per box)
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const animeId = e.target.dataset.id;
      openEditModal(animeId);
    });
  });

  // Genre filter
  const genreLinks = document.querySelectorAll(".anime-genre-link");
  genreLinks.forEach(link => {
    link.addEventListener("click", () => {
      const selectedGenre = link.dataset.genre;
      renderAnimeList(selectedGenre, searchInput.value.trim());
    });
  });

  // Checkbox (untuk delete dan select untuk edit) - DIKEMBALIKAN
  const deleteCheckboxes = document.querySelectorAll(".delete-checkbox");
  deleteCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        selectedAnimeIds.add(id);
      } else {
        selectedAnimeIds.delete(id);
      }
    });
  });
}

// Initial render
renderAnimeList();

// Tampilkan semua
document.getElementById("showAll").addEventListener("click", () => {
  searchInput.value = "";
  renderAnimeList();
});

// Tambah anime baru
document.getElementById("addAnimeBtn").addEventListener("click", () => {
  const title = document.getElementById("titleInput").value.trim();
  const image = document.getElementById("imageInput").value.trim();
  const genre = document.getElementById("genreInput").value.trim();
  const description = document.getElementById("descInput").value.trim();
  const link = document.getElementById("linkInput").value.trim();

  if (title && image && genre && description) {
    animeData.push({
      id: 'anime-' + Date.now() + Math.floor(Math.random() * 1000), // Generate unique ID
      title,
      image,
      genre,
      description,
      uploadDate: new Date().toISOString().split('T')[0],
      link: link
    });

    saveToLocalStorage();
    renderAnimeList(null, searchInput.value.trim());

    // Reset form input
    document.getElementById("titleInput").value = "";
    document.getElementById("imageInput").value = "";
    document.getElementById("genreInput").value = "";
    document.getElementById("descInput").value = "";
    document.getElementById("linkInput").value = "";
  } else {
    alert("Judul, Gambar, Genre, dan Deskripsi harus diisi!");
  }
});

// Search functionality
searchInput.addEventListener("keyup", () => {
  const searchTerm = searchInput.value.trim();
  renderAnimeList(null, searchTerm);
});

// Toggle Admin Mode (Menggabungkan delete dan edit mode)
toggleAdminModeBtn.addEventListener("click", () => {
  adminMode = !adminMode;
  renderAnimeList(null, searchInput.value.trim()); // Re-render to show/hide checkboxes/buttons
});

// Tombol "Hapus yang Dipilih"
deleteSelectedBtn.addEventListener("click", () => {
  if (selectedAnimeIds.size === 0) {
    alert("Pilih anime yang ingin dihapus terlebih dahulu.");
    return;
  }
  deleteConfirmationModal.style.display = "flex"; // Tampilkan modal konfirmasi hapus
});

// Tombol "Edit yang Dipilih"
editSelectedBtn.addEventListener("click", () => {
  if (selectedAnimeIds.size === 0) {
    alert("Pilih anime yang ingin diedit terlebih dahulu.");
    return;
  }
  if (selectedAnimeIds.size > 1) {
    alert("Anda hanya bisa mengedit satu anime sekaligus. Silakan pilih satu saja.");
    return;
  }
  // Ambil ID anime pertama yang dipilih
  const firstSelectedId = selectedAnimeIds.values().next().value;
  openEditModal(firstSelectedId);
});


// Confirm deletion dari modal
confirmDeleteBtn.addEventListener("click", () => {
  animeData = animeData.filter(anime => !selectedAnimeIds.has(anime.id));

  saveToLocalStorage();
  deleteConfirmationModal.style.display = "none";
  selectedAnimeIds.clear(); // Bersihkan pilihan setelah dihapus
  renderAnimeList(null, searchInput.value.trim());
});

// Cancel deletion dari modal
cancelDeleteBtn.addEventListener("click", () => {
  deleteConfirmationModal.style.display = "none";
  selectedAnimeIds.clear(); // Bersihkan pilihan
  renderAnimeList(null, searchInput.value.trim());
});

// Close delete modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target == deleteConfirmationModal) {
    deleteConfirmationModal.style.display = "none";
    selectedAnimeIds.clear(); // Bersihkan pilihan
    renderAnimeList(null, searchInput.value.trim());
  }
});

// ====== Edit Anime Modal Functions ======

function openEditModal(animeId) {
  currentEditingAnimeId = animeId;
  const animeToEdit = animeData.find(anime => anime.id === animeId);

  if (animeToEdit) {
    editTitleInput.value = animeToEdit.title;
    editImageInput.value = animeToEdit.image;
    editGenreInput.value = animeToEdit.genre;
    editLinkInput.value = animeToEdit.link || '';
    editDescInput.value = animeToEdit.description;
    editAnimeModal.style.display = "flex";
  }
}

saveEditBtn.addEventListener("click", () => {
  const updatedTitle = editTitleInput.value.trim();
  const updatedImage = editImageInput.value.trim();
  const updatedGenre = editGenreInput.value.trim();
  const updatedLink = editLinkInput.value.trim();
  const updatedDescription = editDescInput.value.trim();

  if (updatedTitle && updatedImage && updatedGenre && updatedDescription) {
    const animeIndex = animeData.findIndex(anime => anime.id === currentEditingAnimeId);
    if (animeIndex !== -1) {
      animeData[animeIndex].title = updatedTitle;
      animeData[animeIndex].image = updatedImage;
      animeData[animeIndex].genre = updatedGenre;
      animeData[animeIndex].link = updatedLink;
      animeData[animeIndex].description = updatedDescription;
      saveToLocalStorage();
      editAnimeModal.style.display = "none";
      selectedAnimeIds.clear(); // Bersihkan pilihan setelah edit
      renderAnimeList(null, searchInput.value.trim());
    }
  } else {
    alert("Judul, Gambar, Genre, dan Deskripsi harus diisi!");
  }
});

cancelEditBtn.addEventListener("click", () => {
  editAnimeModal.style.display = "none";
  selectedAnimeIds.clear(); // Bersihkan pilihan
  renderAnimeList(null, searchInput.value.trim()); // Re-render untuk mengupdate tampilan checkbox
});

// Close edit modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target == editAnimeModal) {
    editAnimeModal.style.display = "none";
    selectedAnimeIds.clear(); // Bersihkan pilihan
    renderAnimeList(null, searchInput.value.trim()); // Re-render untuk mengupdate tampilan checkbox
  }
});