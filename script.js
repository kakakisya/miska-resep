// Data Resep untuk Anak Kost
const recipesData = [
    {
        title: "pisang ijo",
        details: "Pisang Ijo adalah hidangan khas Makassar, Sulawesi Selatan. Berikut resep membuat Pisang Ijo:",
        ingredients: [
            "6-8 buah pisang tanduk atau pisang uli",
            "200 gram tepung terigu",
            "100 gram tepung sagu",
            "1/2 sendok teh garam",
            "1/4 sendok teh vanili",
            "1/2 sendok teh gula pasir",
            "200 ml santan kental",
            "200 ml air",
            "Pewarna hijau (opsional)"
        ],
        tools: [
            "Mangkok",
            "Sendok",
            "pisau"
        ],
        steps: [
"1. Kupas pisang dan iris-iris.",
"2. Campur tepung terigu, tepung sagu, garam, vanili dan gula pasir.",
"3. Tambahkan santan dan air, aduk rata.",
"4. Masukkan pewarna hijau jika ingin.",
"5. Masukkan irisan pisang ke dalam adonan, aduk rata.",
"6. Panaskan minyak, goreng adonan hingga matang.",
"7. pisang ijo siap dihidangkan"
        ],
        img: "imgs/ps ij.jpeg"
    },
    {
        title: "Telur balado",
        details: "Telur balado adalah hidangan khas Minangkabau (Sumatera Barat) yang terbuat dari telur rebus yang digoreng dengan sambal balado.",
        ingredients: [
"1. 4-6 butir telur ayam",
"2. 100 gram cabe merah, iris tipis",
"3. 2 siung bawang putih, cincang",
"4. 3 siung bawang merah, iris tipis",
"5. 1/2 sendok teh garam",
"6. 1/4 sendok teh gula pasir",
"7. 1/4 sendok teh penyedap rasa (opsional)",
"8. 2 sendok makan minyak goreng",
"9. 2 lembar daun jeruk (opsional)",
            
            
            
        ],
        tools: [
            "Mangkok",
            "Sendok",
            "pisau",
            "Blender",
            "Wajan"
        ],
        steps: [
"1. Rebus telur hingga matang, kupas dan sisihkan.",
"2. Panaskan minyak goreng, tumis bawang putih hingga harum.",
"3. Tambahkan bawang merah dan cabe merah, tumis hingga layu.",
"4. Masukkan garam, gula pasir dan penyedap rasa, aduk rata.",
"5. Masukkan telur rebus, aduk rata dengan sambal.",
"6. Tambahkan daun jeruk jika menggunakan.",
"7. Angkat dan sajikan."
        ],
        img: "imgs/balado.jpeg"
    },
    {
        title: "Tahu Sambal Kecap",
        details: "Tahu sambal kecap adalah makanan khas indonesia yang disukai anak khost",
        ingredients: [
 "1. 4-6 buah tahu putih atau tahu kuning",
"2. Minyak goreng untuk menggoreng",
"3. Sambal Kecap (lihat resep di bawah)",
"Bahan Sambal Kecap",
"1. 10 buah cabe rawit atau cabe merah",
"2. 2 siung bawang putih",
"3. 1/2 sendok teh garam",
"4. 1/4 sendok teh gula pasir",
"5. 2 sendok makan kecap manis",
"6. 1 sendok makan air"
        ],
        tools: [
            "Wajan",
            "Pisau",
            "sendok",
            "wadah"
        ],
        steps: [
"1. Potong tahu menjadi ukuran yang diinginkan.",
"2. Panaskan minyak goreng dalam wajan.",
"3. Goreng tahu hingga keemasan dan krispi.",
"4. Angkat dan tiriskan.",
"5. Ulek bawang putih, cabe rawit, garam, dan gula pasir hingga halus.",
"6. Tambahkan kecap manis dan air, aduk rata.",
"7. Sajikan tahu goreng dengan sambal kecap."
        ],
        img: "imgs/mr.jpeg"
    },
    {
        title: "Bola Bola Super mie",
        details: " Bola bola supermie adalah cemilan kreasi yang diresepkan oleh supermie sendiri dan banyak disukai",
        ingredients:[
    "1. 1 bungkus Supermi (atau mi instan lainnya)",
    "2. 2 sendok makan tepung terigu",
    "3. 1/2 sendok teh garam",
    "4. 1/4 sendok teh merica bubuk",
    "5. 1/4 sendok teh kaldu bubuk (opsional)",
    "6. 1 butir telur",
    "7. Minyak goreng untuk menggoreng",
        ],
        tools: [
            "Wajan",
            "Panci",
            "Sendok"
        ],
        steps:[
    "1. Masak Supermi sesuai petunjuk kemasan. Tiriskan.",
    "2. Campur Supermi dengan tepung terigu, garam, merica, dan kaldu bubuk.",
    "3. Tambahkan telur dan aduk rata.",
    "4. Bentuk adonan menjadi bola-bola kecil.",
    "5. Panaskan minyak goreng dalam wajan.",
    "6. Goreng bola-bola Supermi hingga keemasan dan krispi.",
    "7. Angkat dan tiriskan."
        ],
        img:"imgs/bola.jpeg"
    },
    {
        title: "Martabak supermie",
        details: "Martabak supermie makanan sederhana yang digemari anak khost",
        ingredients:[
"1. 2 genggam mie kering (boleh menggunakan mie telur atau mie basah)",
"2. 2 butir telur",
"3. 1/2 cangkir air",
"4. 1/2 sendok teh garam",
"5. 1/4 sendok teh merica bubuk",
"6. 1/4 sendok teh kaldu bubuk (opsional)",
"7. 2 sendok makan minyak goreng",
"8. 2 lembar daun bawang, iris tipis (opsional)",

"Bahan Kulit Martabak",
"1. 1 cangkir tepung terigu",
"2. 1/2 cangkir tepung sagu",
"3. 1/4 sendok teh garam",
"4. 1/4 sendok teh gula pasir",
"5. 1/2 sendok teh ragi instan",
"6. 1/2 cangkir air hangat",
"7. 1 sendok makan minyak goreng",
        ],
        tools: [
            "Wajan",
            "Panci",
            "Loyang kecil (untuk martabak)"
        ],
        steps:[
        "1. Membuat kulit martabak: Campur tepung terigu, tepung sagu, garam, gula pasir, dan ragi instan. Tambahkan air hangat dan minyak goreng, uleni hingga elastis. Diamkan 30 menit.", 
        "2. Membuat isi: Rebus mie hingga matang, tiriskan. Campur mie dengan telur, garam, merica, dan kaldu bubuk. Aduk rata.",
        "3. Membentuk martabak: Pipihkan adonan kulit martabak. Isi dengan campuran mie dan telur.",
        "4. Menggoreng: Panaskan minyak goreng dalam wajan. Goreng martabak hingga keemasan dan krispi.",
        "5. Penyajian: Sajikan martabak mie dengan saus sambal, kecap manis, atau mayones."
        ],
        img: "imgs/enak.jpeg"
    },
    {
        title: "Dadar Mercon",
        details: "dadar mercon adalah telur dadar yang di masak dengan rasa yang pedas",
        ingredients:[
            "Bahan",
            "1. 2 butir telur ayam",
            "2. 1/2 sendok teh garam",
            "3. 1/4 sendok teh merica bubuk",
            "4. 1/4 sendok teh kaldu bubuk (opsional)",
            "5. 1 sendok makan minyak goreng",
            "6. Bumbu Mercon (lihat di bawah)",
            
            "Bumbu Mercon",
            "1. 5 buah cabe rawit, iris tipis",
            "2. 2 siung bawang putih, cincang",
            "3. 1 siung bawang merah, iris tipis",
            "4. 1/2 sendok teh garam",
            "5. 1/4 sendok teh gula pasir"
            

        ],
        tools: [
            "Wajan",
            "Panci",
            "wadah saji"
        ],
        steps:[
            "1. Kocok telur dengan garam, merica dan kaldu bubuk.",
            "2. Panaskan minyak goreng dalam wajan.",
            "3. Tuangkan telur ke dalam wajan dan masak seperti dadar.",
            "4. Sambil menunggu dadar matang, tumis bumbu mercon hingga harum.",
            "5. Lipat dadar dan tambahkan bumbu mercon di atasnya.",
            "6. Lipat kembali dadar dan angkat.",
            "7. Sajikan Dadar Mercon dengan nasi putih hangat atau sayuran.",
        ],
        img: "imgs/dada.jpeg"
    },
    {
        title: "Tempe Balado Kriuk",
        details: "Tempe Balado kriuk",
        ingredients:[
        "1. 1 papan tempe, potong tipis",
        "2. 1/2 sendok teh garam",
       "3. 1/4 sendok teh merica bubuk",
       "4. 1/4 sendok teh kaldu bubuk (opsional)",
        "5. 1/2 sendok teh tepung terigu",
       " 6. 1/4 sendok teh tepung maizena",
        "7. Minyak goreng untuk menggoreng"

        ],
        tools: [
            "Wajan",
            "Panci",
            "pisau"
        ],
        steps:[
            "1. Membuat tempe kriuk: Campur tempe dengan garam, merica, kaldu bubuk, tepung terigu dan tepung maizena. Aduk rata.",
            "2. Panaskan minyak goreng dalam wajan. Goreng tempe hingga krispi dan keemasan. Angkat dan tiriskan.",
            "3. Membuat sambal balado: Panaskan minyak goreng dalam wajan. Tumis bawang putih hingga harum.",
            "4. Tambahkan cabe merah, bawang merah, garam dan gula pasir. Aduk rata.",
            "5. Masukkan tempe kriuk ke dalam sambal balado. Aduk rata.",
            "6. Sajikan Tempe Balado Kriuk dengan nasi putih hangat atau sayuran."
        ],
        img: "imgs/OIP.jpeg"
    },
    {
        title: "Tahu Isi",
        details: "Tahu Isi merupakan cemilan yang sehat karena mengandung sayuran",
        ingredients:[
            "1. 4-6 buah tahu putih atau tahu kuning",
            "2. Isian (pilih salah satu atau campur):",
            "- Daging ayam cincang",
            "- Daging sapi cincang",
            "- Udang cincang",
            "- Sayuran (buncis, wortel, kol)",
            "- Bawang putih cincang",
            "- Bawang merah cincang",
            "3. Bumbu:",
            "- 1/2 sendok teh garam",
            "- 1/4 sendok teh merica bubuk",
            "- 1/4 sendok teh kaldu bubuk (opsional)",
             "1 sendok makan kecap manis (opsional)",
            "4. Tepung terigu atau tepung panir untuk pelapis"

        ],
        tools: [
            "sendok",
            "wadah",
            "wajan"
        ],
        steps:[
            "1. Cuci tahu dan tiriskan.",
            "2. Belah tahu menjadi dua bagian.",
            "3. Keluarkan isi tahu dan haluskan.",
            "4. Campur isi tahu dengan isian dan bumbu. Aduk rata.",
            "5. Isi tahu dengan campuran isi.",
            "6. Lapisi tahu dengan tepung terigu atau tepung panir.",
            "7. Goreng tahu dalam minyak panas hingga keemasan dan krispi.",
            "8. Angkat dan tiriskan.",
            "9. Sajikan Tahu Isi dengan saus sambal, kecap manis atau mayones."
        ],
        img: "imgs/tahu isi.jpeg"
    },
    

];
// Menyimpan ulasan dalam array
const reviews = [];

// Menangani pengiriman ulasan
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman reload saat form disubmit

    const reviewText = document.getElementById('reviewText').value.trim();
    if (reviewText) {
        // Menambahkan ulasan ke array
        reviews.push(reviewText);

        // Menampilkan ulasan terbaru
        displayReviews();
        
        // Reset textarea setelah pengiriman
        document.getElementById('reviewText').value = '';
    }
});

// Fungsi untuk menampilkan ulasan
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Mengosongkan list ulasan sebelumnya

    // Loop untuk menampilkan setiap ulasan
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p>${review}</p>
        `;
        reviewsList.appendChild(reviewElement);
    });
}


// Fungsi untuk menampilkan semua resep di beranda
function displayAllRecipes() {
    const recipeDiv = document.getElementById('recipes');
    
    // Mengosongkan hasil sebelumnya
    recipeDiv.innerHTML = '';

    recipesData.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe-image">
            <h3>${recipe.title}</h3>
            <p>Kuliner</p>
            <button onclick="viewRecipe('${recipe.title}')">Lihat Resep</button>
        `;
        recipeDiv.appendChild(card);
    });
}

// Panggil fungsi untuk menampilkan semua resep ketika halaman dimuat
displayAllRecipes();



document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah aksi default (misalnya form submission)
        searchRecipes(); // Memanggil fungsi pencarian
    }
});
// Fungsi untuk mencari resep
function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recipeDiv = document.getElementById('recipes');
    const notFoundDiv = document.getElementById('notFound');

    // Mengosongkan hasil sebelumnya
    recipeDiv.innerHTML = '';
    notFoundDiv.style.display = 'none';

    // Sembunyikan Ulasan dan Kontak Kami hanya setelah pencarian dimulai
    document.getElementById('reviews-section').classList.add('hidden');
    document.getElementById('contact-section').classList.add('hidden');

    if (searchInput.trim() === '') {
        notFoundDiv.innerHTML = 'Silahkan masukkan nama resep untuk mencari!';
        notFoundDiv.style.display = 'block';
        return;
    }

    const filteredRecipes = recipesData.filter(recipe =>
        recipe.title.toLowerCase().includes(searchInput)
    );

    if (filteredRecipes.length === 0) {
        notFoundDiv.innerHTML = 'Resep tidak ditemukan, silahkan coba lagi!';
        notFoundDiv.style.display = 'block';
    } else {
        filteredRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            
            card.innerHTML = `
                <img src="${recipe.img}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>Masakan Sederhana</p>
                <button onclick="viewRecipe('${recipe.title}')">Lihat Resep</button>
            `;
            recipeDiv.appendChild(card);
        });
    }
}

// Fungsi untuk menampilkan semua resep pada halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Menampilkan semua resep jika tidak ada pencarian
    displayAllRecipes();
    // Menampilkan kontak dan ulasan saat halaman pertama dimuat
    document.getElementById('reviews-section').classList.remove('hidden');
    document.getElementById('contact-section').classList.remove('hidden');
});

// Fungsi untuk menampilkan semua resep
function displayAllRecipes() {
    const recipeDiv = document.getElementById('recipes');
    
    // Mengosongkan hasil sebelumnya
    recipeDiv.innerHTML = '';

    recipesData.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe-image">
            <h3>${recipe.title}</h3>
            <p>Kuliner</p>
            <button onclick="viewRecipe('${recipe.title}')">Lihat Resep</button>
        `;
        recipeDiv.appendChild(card);
    });
}
// Fungsi untuk menampilkan detail resep
function viewRecipe(recipeTitle) {
    const popupCard = document.getElementById('popupCard');
    const recipeTitleElement = document.getElementById('recipeTitle');
    const recipeDetails = document.getElementById('recipeDetails');
    const recipeImage = document.getElementById('recipeImage');

    const recipe = recipesData.find(r => r.title === recipeTitle);
    if (recipe) {
        recipeTitleElement.innerText = recipe.title;
        
        // Gabungkan detail resep, bahan-bahan, alat, dan langkah-langkah dengan backticks
        recipeDetails.innerHTML = `
            <strong>Deskripsi:</strong> ${recipe.details}<br><br>
            <strong>Bahan-bahan:</strong><br>- ${recipe.ingredients.join('<br>- ')}<br><br>
            <strong>Alat yang digunakan:</strong><br>- ${recipe.tools.join('<br>- ')}<br><br>
            <strong>Cara Membuat:</strong><br>- ${recipe.steps.join('<br>- ')}<br>
        `;
        recipeImage.src = recipe.img;  // Update gambar resep
        popupCard.style.display = 'block'; // Menampilkan popup
    } else {
        recipeDetails.innerText = 'Resep tidak ditemukan.';
        popupCard.style.display = 'block'; // Menampilkan popup
    }
}

// Fungsi untuk menutup popup resep
function closeRecipe() {
    document.getElementById('popupCard').style.display = 'none';
}