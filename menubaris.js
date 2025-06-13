// ===============================
// MENUBARIS.JS FINAL (FIXED)
// ===============================

const genreLink = document.getElementById("genreLink");
const genreModal = document.getElementById("genreModal");
const closeGenreModalBtn = document.getElementById("closeGenreModalBtn");
const genreButtonsContainer = document.getElementById("genreButtonsContainer");
const inputElement = document.getElementById("searchInput"); // GANTI NAMA dari searchInput

// Tampilkan modal genre saat klik
if (genreLink) {
  genreLink.addEventListener("click", (e) => {
    e.preventDefault();
    populateGenreButtons();
    if (genreModal) genreModal.style.display = "block";
  });
}

// Tutup modal saat klik tombol tutup
if (closeGenreModalBtn) {
  closeGenreModalBtn.addEventListener("click", () => {
    if (genreModal) genreModal.style.display = "none";
  });
}

// Tutup modal saat klik di luar modal
if (genreModal) {
  window.addEventListener("click", (event) => {
    if (event.target === genreModal) {
      genreModal.style.display = "none";
    }
  });
}

// Ambil genre unik dari animeData
function getUniqueGenres() {
  const allGenres = new Set();
  if (!window.animeData) return [];
  window.animeData.forEach(anime => {
    anime.genre.split(',').forEach(genre => {
      const trimmed = genre.trim();
      if (trimmed) allGenres.add(trimmed);
    });
  });
  return Array.from(allGenres).sort();
}

// Buat tombol genre di dalam modal
function populateGenreButtons() {
  console.log("Memuat tombol genre...");
  if (!genreButtonsContainer || typeof renderAnimeList !== "function") return;

  genreButtonsContainer.innerHTML = "";

  const uniqueGenres = getUniqueGenres();
  console.log("Genres ditemukan:", uniqueGenres);

  if (uniqueGenres.length === 0) {
    genreButtonsContainer.innerHTML = "<p style='color: white;'>Tidak ada genre ditemukan.</p>";
    return;
  }

  const allBtn = document.createElement("button");
  allBtn.textContent = "Semua Genre";
  allBtn.classList.add("genre-button");
  allBtn.addEventListener("click", () => {
    renderAnimeList(null, inputElement?.value?.trim() || "");
    if (genreModal) genreModal.style.display = "none";
  });
  genreButtonsContainer.appendChild(allBtn);

  uniqueGenres.forEach(genre => {
    const btn = document.createElement("button");
    btn.textContent = genre;
    btn.classList.add("genre-button");
    btn.addEventListener("click", () => {
      console.log("Genre diklik:", genre);
      renderAnimeList(genre, inputElement?.value?.trim() || "");
      if (genreModal) genreModal.style.display = "none";
    });
    genreButtonsContainer.appendChild(btn);
  });
}
