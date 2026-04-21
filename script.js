window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 }
    });

    const liquidFilter = document.querySelector('#liquid feGaussianBlur');
    
    // 1. Initial Set
    gsap.set(".brand-text", { opacity: 0, scale: 0.8, rotation: -10 });
    gsap.set(".card", { opacity: 0, y: 30 });
    gsap.set(".footer .stat", { opacity: 0, y: 10 });
    gsap.set(".tagline-box", { opacity: 0, scale: 0.95 });
    
    // 2. Sequential Entrance of Sections
    tl.to(".brand-text", {
        opacity: 1,
        scale: 1,
        rotation: -5,
        duration: 2.5,
        ease: "expo.out"
    })
    .to(liquidFilter, {
        attr: { stdDeviation: 0 },
        duration: 3,
        ease: "power2.inOut"
    }, "-=2")
    .to(".card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1
    }, "-=1.5")
    
    .to(".tagline-box", {
        opacity: 0.7,
        scale: 1,
        duration: 1.5
    }, "-=0.5")

    .to(".footer .stat", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8
    }, "-=1")

    .to(".ico", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
    }, "-=0.5");

    // 4. Bio Text Reveal (Typewriter effect simulation)
    const bioText = document.getElementById('bioText');
    const lines = bioText.innerHTML.split('<br>');
    bioText.innerHTML = '';
    lines.forEach((line, i) => {
        const span = document.createElement('span');
        span.style.display = 'block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(10px)';
        span.innerHTML = line;
        bioText.appendChild(span);
        
        gsap.to(span, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 2 + (i * 0.3),
            ease: "power2.out"
        });
    });

    // 5. Brand Floating Animation
    gsap.to(".brand-text", { y: "+=15", rotation: "+=3", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });

    // 6. Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        
        gsap.to(".grid-container", {
            x: x * 0.5,
            y: y * 0.5,
            rotationY: x * 0.1,
            rotationX: -y * 0.1,
            duration: 2,
            ease: "power2.out"
        });
    });
});
