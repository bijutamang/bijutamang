// Page Loader 
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /* ------ Page loader ------- */
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    },600);
});


// ---------- Header Section js --------------
// Toggle Navbar  ---------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
// hide an onhide 
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

/* header ma click vaya pxi nav bar show garyko */
function toggleNavbar(){
    document.querySelector("header").classList.toggle("active");
}

/* -------------- Active Section ------------ */
// link haru active garyko 
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item")&& e.target.hash !== ""){
        // Active the overly to prevent multiple clicks 
        document.querySelector(".overly").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide")
        document.querySelector(".overly").classList.remove("active");
        }, 500);
    }
});



// ---------- About Tabs --------------
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    // yadi exeprience ma click huda active exeprience banako 
   if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
       tabsContainer.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const target = e.target.getAttribute("data-target");
       aboutSection.querySelector(".tab-content.active").classList.remove("active");
       aboutSection.querySelector(target).classList.add("active")
   }
});


// ------------ Portfolio Item Details Popup --------------
document.addEventListener("click", (e) =>{
    // ------------ Recent Work View Porjects --------------
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
};
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    };
});

// jun porjects ma click vayo tai projects ko details show garyko  yo functaion ly 
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".porfolio-item-thumbnail img").src;
    
    
    // jun porjects ma click vayo tai projects ko details ra name  show garyko  yo functaion ly 
    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;

}