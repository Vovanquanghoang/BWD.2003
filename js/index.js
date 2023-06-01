const dangnhap = document.querySelector('.dangnhap')
const dangky = document.querySelector('.dangky')

const imgNuberli = document.querySelectorAll('.menu-form > ul > li');
imgNuberli.forEach(function(image,index){
    image.addEventListener("click", function(){
        document.querySelector(".dangnhap").style.right = index * 100 +"%"
        //xao active
        let imgactive = document.querySelector('.dangnhap')
        imgactive.classList.remove("dangnhap")
        //them active
        image.classList.add("dangnhap")
    })
})

dangnhap.addEventListener("click", function(){
    document.querySelector(".menu-form-0").style.right = 0 * 100 + "%"
})
dangky.addEventListener("click", function(){
    document.querySelector(".menu-form-0").style.right = 1 * 100 + "%"
})

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




