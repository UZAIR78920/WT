let gallery = document.getElementById("gallery");
let photos = [];
function uploadPhotos() {
let input = document.getElementById("photoUpload");
let files = input.files;
for (let file of files) {
 let reader = new FileReader();
 reader.onload = function(e) {
 let photo = {
 src: e.target.result,
 title: "Untitled",
 album: "General"
 };
 photos.push(photo);
 displayPhotos();
 };
 reader.readAsDataURL(file);
 }
}
function displayPhotos() {
 gallery.innerHTML = "";
 photos.forEach((photo, index) => {
 let card = document.createElement("div");
 card.classList.add("photo-card");
 card.innerHTML = `
 <img src="${photo.src}" alt="Travel Photo">
 <div class="photo-info">
 <input type="text" value="${photo.title}" onchange="updateTitle(${index}, this.value)">
 <input type="text" value="${photo.album}" onchange="updateAlbum(${index}, this.value)">
 <button class="delete-btn" onclick="deletePhoto(${index})">Delete</button>
 </div>
 `;
 gallery.appendChild(card);
 });
}
function updateTitle(index, newTitle) {
 photos[index].title = newTitle;
}
function updateAlbum(index, newAlbum) {
 photos[index].album = newAlbum;
}
function deletePhoto(index) {
 photos.splice(index, 1);
 displayPhotos();
}