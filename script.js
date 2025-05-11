gsap.registerPlugin(ScrollTrigger) 

// site title animation

gsap.fromTo("#title", {
    scale: 4.5,
    y: -200
}, {
    scale: 2,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#title",
        end: "bottom up",
        invalidateOnRefresh: true,
        scrub: 2,
        ease: "expoScale(0.5,7,none)",
    }
})

// --- Discover Section Animation ---
const tlDiscover = gsap.timeline({
    scrollTrigger: {
        trigger: ".discover",
        pin: true,
        start: "top top",
        end: "+=3000", 
        scrub: 1,
        // snap: 1 / (document.querySelectorAll(".slide").length - 1), // Snap to slides
        // ease: "none"
    }
});

gsap.utils.toArray(".slide").forEach((slide, i) => {
    tlDiscover.to(slide, {
        xPercent: -100 * i,
        ease: "none"
    });
});
gsap.to("#img_section2", {
    clipPath: "circle(100% at 50% 50%)",
    scrollTrigger: {
        trigger: "#image-section > .container",
        strt: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true,
        onEnter : () => {
            document.body.classList.add("dark-theme");
        }
    }
})

// furniture section animation 

const gridWrapper = gsap.utils.toArray(".grid-items")

gridWrapper.forEach(wrapper=> {

    const boxes = wrapper.querySelectorAll(".box");

    boxes.forEach(box => {
        gsap.from(box, {
            y: 500,
            duration: 0.5,
            scrollTrigger: {
                trigger: box,
                start: "top bottom",
                end: "top bottom",
                scrub: 4,
            }
        })
    })
});

// furniture section text change 

const heading = document.querySelector(".furniture-title h2");
const sections = gsap.utils.toArray(".grid-wrapper");

let text_h2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#furniture-section > .container",
        start: "top 50%",
        end: "top 50%",
        scrub : 2,
        ease: "ease",
        // markers: true,
        onEnter : () => {
            gsap.set(heading, {position: "fixed", bottom : 0, zIndex: -1000})
        },
        onEnterBack : () => {
            gsap.set(heading, {position: "relative", bottom: "0"})
        }
    }
})

// change text when scroll 
sections.forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start :"bottom-=20% bottom",
        end: "bottom top",
        onEnter : () => {
            updateHeading(i)
        },
        onEnterBack : () => {
            updateHeading(i)
        }
    })
})

// update heading based on index 
function updateHeading(index) {
    const headingTexts = ["furniture", "Decoration", "christmas", "vegas"]
    heading.textContent = headingTexts[index];
}

updateHeading(0);
