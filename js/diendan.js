// Table res thanh menu
var header = document.getElementById('thanh-menu');
var tabletMenu = document.getElementById('thanh-menu-res');

tabletMenu.addEventListener('click', function (){
    if (header.style.display === "none") {
        // Nếu menu đang ẩn, hiển thị menu
        header.style.display = "block";
      } else {
        // Nếu menu đang hiển thị, ẩn menu
        header.style.display = "none";
      }
});

// Video
var video = document.getElementById("video-content");
  video.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
  });




