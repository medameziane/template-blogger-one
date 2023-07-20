const body = document.querySelector("body"),
      mainHeader = document.querySelector("#main-header"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click" , () =>{
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if(!body.classList.contains("dark")){
    localStorage.setItem("mode" , "light-mode");
  }else{
    localStorage.setItem("mode" , "dark-mode");
  }
});

// js code to toggle search box
searchToggle.addEventListener("click" , () =>{
  searchToggle.classList.toggle("active");
});
       
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
  mainHeader.classList.add("active");
});

body.addEventListener("click" , e =>{
  let clickedElm = e.target;

  if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
    mainHeader.classList.remove("active");
  }
});

// const body1 = document.body;
// const header = document.querySelector("header");
// const main = document.querySelector("main");
// const headerHeight = document.querySelector("header").offsetHeight;
// main.style.top = headerHeight + "px";
// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//   let currentScroll = window.pageYOffset;
//   if (currentScroll - lastScroll > 0) {
//     header.classList.add("scroll-down");
//     header.classList.remove("scroll-up");
//   } else {
//     // scrolled up -- header show
//     header.classList.add("scroll-up");
//     header.classList.remove("scroll-down");
//   }
//   lastScroll = currentScroll;
// })