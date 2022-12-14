// ----about Section Start----

(() =>{
    const aboutSection = document.querySelector(".about-section");
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item")&& !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
    
})();
 
 // ----about Section End----

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".protfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn= popup.querySelector(".pp-prev");
    nextBtn = popup.querySelector(".pop-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsContainer = popup.querySelector(".pp-project-details-btn");

    let itemIndex, slideIndex, screenshrots;

    filterContainer.addEventListener("click", (event)=> {
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
            filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow")
            const target = event.target.getAttribute("data-target");
            console.log(target);
            portfolioItems.forEach((item) => {
                console.log(item)
            })
        }
    })
 })();