// === FAVORIT FEATURE ===
function toggleFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderAnimeList(null, searchInput.value.trim());
}


// Tidak ada kode createElement untuk #showFav

document.getElementById("showFav").addEventListener("click", () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  renderAnimeList(null, searchInput.value.trim(), favorites);
});


function renderAnimeList(filterGenre = null, searchTerm = null, favoritesFilter = null) {
  if (container) container.innerHTML = "";
  selectedAnimeIds.clear();

  let filteredData = animeData;
  if (filterGenre) {
    filteredData = filteredData.filter(anime =>
      anime.genre.toLowerCase().includes(filterGenre.toLowerCase())
    );
  }

  if (searchTerm) {
    filteredData = filteredData.filter(anime =>
      anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anime.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anime.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (favoritesFilter && Array.isArray(favoritesFilter)) {
    filteredData = filteredData.filter(anime => favoritesFilter.includes(anime.id));
  }

  filteredData.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

  if (container) {
    if (filteredData.length === 0) {
      container.innerHTML = `<p style="color: #aaa; text-align: center; width: 100%;">Tidak ada anime yang ditemukan.</p>`;
    }
  }

  filteredData.forEach((anime) => {
    const box = document.createElement("div");
    box.className = "anime-box";

    const shortDesc = anime.description.length > 100
      ? anime.description.substring(0, 100) + "..."
      : anime.description;

    const isFavorite = (JSON.parse(localStorage.getItem("favorites")) || []).includes(anime.id);
    const favText = isFavorite ? "❤️" : "🤍";

    box.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}" class="anime-img" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image';">
      <div class="anime-info">
        <div class="anime-title">
          ${anime.link ? `<a href="${anime.link}" target="_blank" class="anime-title-link">${anime.title}</a>` : anime.title}
        </div>
        <div class="anime-genre">
          ${anime.genre.split(', ').map(g => `<a class="anime-genre-link" data-genre="${g}">${g}</a>`).join(', ')}
        </div>
        <div class="anime-desc" id="desc-${anime.id}">${shortDesc}</div>
        <a href="#" class="read-more" data-target-id="${anime.id}">Baca selengkapnya</a>
        <div class="anime-actions">
          <button onclick="toggleFavorite('${anime.id}')">${favText}</button>
          ${adminMode ? `<input type="checkbox" class="delete-checkbox" data-id="${anime.id}" ${selectedAnimeIds.has(anime.id) ? 'checked' : ''}>` : ''}
          ${adminMode ? `<button class="edit-button" data-id="${anime.id}">Edit</button>` : ''}
        </div>
      </div>
    `;

    if (container) container.appendChild(box);
  });

  if (adminMode) {
    if (editSelectedBtn) editSelectedBtn.style.display = "inline-block";
    if (deleteSelectedBtn) deleteSelectedBtn.style.display = "inline-block";
    const addNewAnimeBtn = document.getElementById("addNewAnimeBtn");
    if(addNewAnimeBtn) addNewAnimeBtn.style.display = "inline-block";
    if (toggleAdminModeBtn) toggleAdminModeBtn.textContent = "Selesai Mode Admin";
  } else {
    if (editSelectedBtn) editSelectedBtn.style.display = "none";
    if (deleteSelectedBtn) deleteSelectedBtn.style.display = "none";
    const addNewAnimeBtn = document.getElementById("addNewAnimeBtn");
    if(addNewAnimeBtn) addNewAnimeBtn.style.display = "none";
    if (toggleAdminModeBtn) toggleAdminModeBtn.textContent = "Mode Admin";
  }

  const readMoreLinks = document.querySelectorAll(".read-more");
  readMoreLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.dataset.targetId;
      const targetAnime = animeData.find(anime => anime.id === targetId);
      if (targetAnime) {
        const descElement = document.getElementById(`desc-${targetId}`);
        if (descElement) descElement.textContent = targetAnime.description;
        link.remove();
      }
    });
  });

  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const animeId = e.target.dataset.id;
      openEditModal(animeId);
    });
  });

  const genreLinks = document.querySelectorAll(".anime-genre-link");
  genreLinks.forEach(link => {
    link.addEventListener("click", () => {
      const selectedGenre = link.dataset.genre;
      renderAnimeList(selectedGenre, searchInput.value.trim());
    });
  });

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



// <----buat love book mark
function toggleFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const index = favorites.indexOf(id);
  const isFav = index !== -1;

  if (isFav) {
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderAnimeList(null, searchInput.value.trim());

  // Tambahkan efek animasi kalau masih di DOM
  const button = document.querySelector(`button[onclick="toggleFavorite('${id}')"]`);
  if (button) {
    button.classList.remove("fav-active");
    void button.offsetWidth; // restart animasi
    button.classList.add("fav-active");
  }
}

