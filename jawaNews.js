function openForm() {
    document.getElementById('popupForm').style.display = 'block';  // buka popup
    document.getElementById('popupOverlay').style.display = 'block'; // buka overlay
}

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';  // tutup popup
    document.getElementById('popupOverlay').style.display = 'none'; // tutup overlay
}

function openNewsDetail(button) {
    const title = encodeURIComponent(button.getAttribute("data-title"));
    const image = encodeURIComponent(button.getAttribute("data-image"));
    const content = encodeURIComponent(button.getAttribute("data-content"));

    window.location.href = `newsDetail.html?title=${title}&image=${image}&content=${content}`;
}

// document.addEventListener("DOMContentLoaded", function () {
//     const newsItems = document.querySelectorAll(".news-item");
    
//     newsItems.forEach((item, index) => {
//         const readMoreBtn = item.querySelector(".read-more");
//         const newsTitle = item.querySelector("h2").textContent;
//         const newsImage = item.querySelector("img").src;
//         const newsContent = item.querySelector("p").textContent;

//         readMoreBtn.addEventListener("click", function () {
//             const newsData = {
//                 title: newsTitle,
//                 image: newsImage,
//                 content: newsContent,
//             };
            
//             // Simpan data berita ke localStorage dengan kunci yang unik
//             localStorage.setItem(`news${index}`, JSON.stringify(newsData));
            
//             // Arahkan ke halaman berita lengkap dengan ID berita
//             window.location.href = `newsDetails.html?id=news${index}`;
//         });
//     });
// });