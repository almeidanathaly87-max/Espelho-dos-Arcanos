document.addEventListener("DOMContentLoaded", () => {

  function createStars(total) {
     const starsContainer = document.getElementById("stars");


     for (let i = 0; i < total; i++) {
        const star = document.createElement("span");
        star.classList.add("bg-star");


        const size = Math.random() * 2 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";


        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";


        star.style.opacity = Math.random();


        const blinkTime = Math.random() * 3 + 2;
        const floatTime = Math.random() * 12 + 10;


        star.style.animation =
           `piscar ${blinkTime}s infinite alternate, flutuar ${floatTime}s infinite alternate ease-in-out`;


starsContainer.appendChild(star);
   }
}


    createStars(200);

    const intro = document.querySelector(".intro");

    const nextScreen = document.getElementById("nextScreen");

    const startButton = document.getElementById("introButton");

    const backButton = document.getElementById("backButton");

    nextScreen.classList.add("hidden");
    intro.style.opacity = "1";
    intro.style.pointerEvents = "auto";


    startButton.addEventListener("click", () => {
    
        intro.style.opacity = "0";
        intro.style.pointerEvents = "none";

nextScreen.classList.remove("hidden");

});

    backButton.addEventListener("click", () => {

        nextScreen.classList.add("hidden");
        intro.style.opacity = "1";
        intro.style.pointerEvents = "auto";

  });

});
