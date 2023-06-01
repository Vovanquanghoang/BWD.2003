const imgNuberli = document.querySelectorAll('.container-top > ul > li');

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

const dangnhap = document.querySelector('.dangnhap')
const dangky = document.querySelector('.dangky')
dangnhap.addEventListener("click", function(){
    document.querySelector(".container-form").style.right = 0 * 100 + "%"
})
dangky.addEventListener("click", function(){
    document.querySelector(".container-form").style.right = 1 * 100 + "%"
})