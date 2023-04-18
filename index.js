let count = 7
setInterval(mainanimations,100)
  function mainanimations(){
    count--;
    document.getElementById("box" + count).classList.toggle("visible")
    if(count === 1){
        count = 7
    }
  }


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
     if(entry.isIntersecting){
        entry.target.classList.add("show")
     }else{
      entry.target.classList.remove("show")
     }
    })
})
const element = document.querySelectorAll('.hidden');
  element.forEach((el)=> observer.observe(el));
  
  const menuBar = document.querySelector('.animated_menu_bar');
  const navLinks = document.querySelector('.top__links');
  const navLink = document.querySelectorAll('nav > ul >li');
  const overlay =    document.getElementById("overlay");


   function hideLinks(e){
      if(navLinks.classList.contains('showMenu') && e.target.className== 'link'){
         navLinks.classList.toggle("showMenu");
      }
   }


   function show(){
   menuBar.classList.toggle("active");
   navLinks.classList.toggle("showMenu");
}

function showSubLinks(e){
  for(let i=0;i< navLink.length;i++){
   navLink[i].classList.remove('hover')
  }
   navLink[e].classList.toggle("hover");
}
menuBar.addEventListener("click",show)
navLink.forEach((e,id)=>{e.addEventListener("click",(e)=>{
   showSubLinks(id)
})})

window.addEventListener("click",(e)=>{

   for(let i=0;i< navLink.length;i++){
 
      if(!e.target.matches(".drop_btn")){
      if(navLink[i].classList.contains('hover')){   
         navLink[i].classList.remove('hover')
      }
   
      }

   }


})