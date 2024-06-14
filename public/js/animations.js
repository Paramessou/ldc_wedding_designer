// carrousel animation
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextImage() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);
});


// // animation background vidéo
// gsap.registerPlugin(ScrollTrigger);

// const coolVideo = document.querySelector("video");

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "body", // Déclenche l'animation dès que le body est atteint
//         start: "top top",
//         end: "bottom+=200% bottom", // Déclenche l'animation à 200% de la hauteur de la fenêtre en dessous du bas de la fenêtre
//         scrub: true, // Fait défiler l'animation en même temps que le défilement
//         markers: false // Désactive les marqueurs de débogage
//     }
// });

// // Attendre que les métadonnées de la vidéo soient chargées pour obtenir la durée correcte avant d'ajouter l'animation de défilement
// coolVideo.onloadedmetadata = function () {
//     tl.to(coolVideo, { currentTime: coolVideo.duration });
// };

// // Gestion des appareils tactiles
// function isTouchDevice() {
//     return (
//         "ontouchstart" in window ||
//         navigator.maxTouchPoints > 0 ||
//         navigator.msMaxTouchPoints > 0
//     );
// }
// if (isTouchDevice()) {
//     coolVideo.play();
//     coolVideo.pause();
// }




// tâches d'encre animation
// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('inkCanvas');
//     const ctx = canvas.getContext('2d');
    
//     canvas.width = window.innerWidth;
//     canvas.height = window.body.scrollHeight;

//     window.addEventListener('resize', () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.body.scrollHeight;
//     });

//     function randomIntFromRange(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }

//     function createInkSplash() {
//         const x = randomIntFromRange(0, canvas.width);
//         const y = randomIntFromRange(0, canvas.height);
//         const maxRadius = randomIntFromRange(20, 100);
//         const color = '#9e70c6'; // Couleur violette hexadécimale
        
//         let radius = 0;
//         let opacity = 1;

//         function draw() {
//             // ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.beginPath();
//             ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//             ctx.fillStyle = color;
//             ctx.fill();
//         }

//         function animate() {
//             if (radius < maxRadius) {
//                 radius += 2;
//                 draw();
//                 requestAnimationFrame(animate);
//             } else {
//                 fadeOut();
//             }
//         }

//         function fadeOut() {
//             if (opacity > 0) {
//                 opacity -= 0.01;
//                 // ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas pour dessiner un nouveau cercle avec une opacité plus faible à chaque frame
//                 ctx.beginPath(); // Démarre un nouveau dessin
//                 ctx.arc(x, y, maxRadius, 0, Math.PI * 2, false); // Dessine un cercle complet avec le rayon max (pour effacer la tâche)
//                 ctx.fillStyle = `rgba(158, 112, 198, ${opacity})`; // Couleur violette avec opacité
//                 ctx.fill(); // Remplit le cercle
//                 requestAnimationFrame(fadeOut);
//             }
//         }

//         animate();
//     }

//     // Créer plusieurs tâches toutes les 1,5 secondes
//     setInterval(() => {
//         const splashCount = 15; // Nombre de tâches à créer en même temps
//         for (let i = 0; i < splashCount; i++) {
//             createInkSplash();
//         }
//     }, 1500); // Crée plusieurs nouvelles tâches toutes les 1,5 secondes
// });

