const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage})`;
