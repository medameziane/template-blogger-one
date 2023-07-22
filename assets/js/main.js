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

  if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("main-menu")){
    mainHeader.classList.remove("active");
  }
});