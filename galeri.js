
const container = document.querySelector(".container")
const thumb =document.querySelectorAll(".thumb")
const jumbo =document.querySelector(".jumbo")
const thumbnail=document.querySelector(".thumbnail")
const hapus=document.querySelector(".hapus")



//membuat menu hanphone jika di klik menjadi  opacity 0.5 dan menhapus border karena list
container.addEventListener("click",function(e){
	if(e.target.className= 'thumb')
	  jumbo.src=e.target.src
	   thumb.forEach(function(a){
	if(a.src == jumbo.src)
	  a.style.opacity="0.5"
	else if(a.src != jumbo.src)
	  a.style.opacity="1"
	   a.style.border="1px solid black"
	})
})

//membuat tanda clik x untu menghapus dan mengantinya menjadi gambar rusak
 hapus.addEventListener("click",function(a){
     let confir=confirm("hapus gambar")
    if(confir == true){
     thumb.forEach(function(e){
    if(e.src == jumbo.src){
     thumbnail.removeChild(e)
      jumbo.removeAttribute("src")
       jumbo.setAttribute("src","img/rusak.jpg")
 }
  })
   }
a.preventDefault()
 a.stopPropagation()
 })

//membuat ketika gambar yang besar di klik akan berubah menjadi kecil
jumbo.addEventListener("click",function(e){
     jumbo.style.width="600px"
      jumbo.style.height="400px"
       e.stopPropagation()
})
//ketika di dbl klik ukuranya menjadi auto
jumbo.addEventListener("dblclick",function(e){
     jumbo.style.width="600px"
      jumbo.style.height="auto"
       e.stopPropagation()
})

//membuat ketika kursor di gerakan kedalam akan menjadi animasi
jumbo.addEventListener("mousemove",function(e){
	  hapus.classList.add("class","anim")

})

jumbo.addEventListener("mouseleave",function(e){
     hapus.classList.remove("anim")
})
 
hapus.addEventListener("mousemove",function(){
	 hapus.style.color="red"
})

hapus.addEventListener("mouseleave",function(){
	 hapus.style.color="black"
})




//membuat ketika tombol list di klik akan langsung mengarah kek pilihan kotak kecil
const list=document.querySelectorAll(".list")
 list.forEach(function(e){
  e.addEventListener("click",function(a){
    const nameImg=document.querySelectorAll(".thumb")
    nameImg.forEach(function(i){
   	 if(a.target.name==i.name){
   	  	jumbo.removeAttribute("src")
   	  	jumbo.setAttribute("src",i.src)
   	  	i.style.opacity="0.5"
   	  	i.style.border="4px solid black"
   	  }
   	 else{
   	  	i.style.opacity="1"
   	  	i.style.border="1px solid black"
 }
  })
   })
    })











//lanjutakn nnti ketika sudah belajar timeout















