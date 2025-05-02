document.addEventListener("DOMContentLoaded", function(){
    const animatedElements=document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .scale-up, #explore h2, .explore-grid, #calculator h2, #tripForm, #result, #contact h2, #contactForm");
    const exploreButton=document.getElementById("explore-button");
    const exploreSection=document.getElementById("explore");
    const observer=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting)
            {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },{
        threshold: 0.1
    });
    animatedElements.forEach(el=>observer.observe(el));
    if(exploreButton && exploreSection){
        exploreButton.addEventListener("click",function(){
            exploreSection.scrollIntoView({behavior: 'smooth'});
        })
    }
    const tripForm=document.getElementById("tripForm");
    if(tripForm) {
        tripForm.addEventListener("submit",function(e){
            e.preventDefault();
            const destination=parseFloat(document.getElementById("destination").value);
            const travelers=parseInt(document.getElementById("travelers").value);
            const days=parseInt(document.getElementById("days").value);
            const accomodation=parseFloat(document.getElementById("accomodation").value);
            const transport=parseFloat(document.getElementById("transport").value);
            if (travelers>0 && days>0){
                const total=((destination+(days*accomodation)+transport)*travelers);
                document.getElementById("result").innerText=`Estimated Total Cost: $${total.toFixed(2)}`;
            }
            else{
                document.getElementById("result").innerText='Please enter valid values.';
            }
        });
    }
    const contactForm=document.getElementById("contactForm");
    if(contactForm){
        contactForm.addEventListener("submit", function(e){
            e.preventDefault();
            alert("Thank You! Your message has been sent.");
            this.reset();
        });
    }
    const navLinks=document.querySelectorAll('nav ul li a');
    const sections=document.querySelectorAll('section');
    window.addEventListener('scroll',()=>{
        let current="";
        sections.forEach(section=>{
            const sectionTop=section.offsetTop;
            if(scrollY>=sectionTop-100){
                current=section.getAttribute("id");
            }
        });
        navLinks.forEach(link=>{
            link.classList.remove("active");
            if(link.getAttribute("href")==`#${current}`){
                link.classList.add("active");
            }
        });
    });
});