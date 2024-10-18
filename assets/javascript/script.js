const colorCircles = document.querySelectorAll(".circle");

const phoneImage = document.getElementById("phone-image");

colorCircles.forEach((circle) => {
  circle.addEventListener("click", function (event) {
    console.log(event);

    const color = this.getAttribute("data-color");

    if (color === "gold") {
      phoneImage.src = "assets/images/gold-pc.png";
    } else if (color === "green") {
      phoneImage.src = "assets/images/green-pc.png";
    }

    colorCircles.forEach((circle) => {
      circle.style.outline = "none";
    });

    const hexColor = event.target.getAttribute("data-hexColor");
    event.target.style.outline = `2px solid ${hexColor}`;
  });
});
