// Data dummy untuk cuaca dan kelembapan tanah
const weatherData = "Sunny, 25°C"; // Contoh data cuaca
const soilMoistureData = "Moisture: 40%"; // Contoh data kelembapan tanah

// Array untuk menyimpan postingan komunitas
let communityPosts = [];

// Fungsi untuk memperbarui data di dashboard
function updateDashboard() {
    // Update cuaca dan kelembapan tanah
    document.getElementById("weather").innerText = weatherData;
    document.getElementById("soil-moisture").innerText = soilMoistureData;

    // Tampilkan sekilas postingan komunitas
    const communityPostsContainer = document.getElementById("community-posts");
    communityPostsContainer.innerHTML = ""; // Bersihkan konten sebelumnya

    if (communityPosts.length > 0) {
        communityPosts.forEach((post, index) => {
            if (index < 3) { // Hanya menampilkan 3 postingan
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `<div class="post-user">${post.user}</div>
                                         <div class="post-content">${post.content}</div>`;
                communityPostsContainer.appendChild(postElement);
            }
        });
    } else {
        communityPostsContainer.innerHTML = "<p>No community posts available.</p>";
    }
}

// Memanggil fungsi updateDashboard saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateDashboard);

// Menangani postingan di halaman komunitas
document.getElementById("post-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    const postContent = document.getElementById("post-content").value; // Ambil konten dari input
    const userName = "Farmer John"; // Contoh nama pengguna, bisa diganti sesuai keinginan

    // Menambahkan postingan ke array
    communityPosts.push({ user: userName, content: postContent });
    
    // Kosongkan input setelah posting
    document.getElementById("post-content").value = "";
    
    // Memperbarui tampilan postingan di dashboard
    updateDashboard();

    // Tampilkan postingan di halaman komunitas
    displayPosts();
});

// Fungsi untuk menampilkan postingan di halaman komunitas
function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; // Bersihkan konten sebelumnya

    if (communityPosts.length > 0) {
        communityPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `<div class="post-user">${post.user}</div>
                                     <div class="post-content">${post.content}</div>`;
            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = "<p>No posts yet.</p>"; // Pesan jika tidak ada postingan
    }
}

// Fungsi untuk menangani login dan sign up (dummy)
document.querySelector(".signup-btn").addEventListener("click", function() {
    alert("Sign up functionality is not implemented yet."); // Mengganti dengan fungsionalitas yang diinginkan
});
