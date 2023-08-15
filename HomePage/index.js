const counter = document.getElementById("counter");
const title = document.querySelector('h1')

let count = 0;

function generateBublle() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  let randomSize = Math.random() * 250;
  bubble.style.height = randomSize + "px";
  bubble.style.width = randomSize + "px";

  let colorR = Math.floor(Math.random() * 256);
  let colorG = Math.floor(Math.random() * 256);
  let colorB = Math.floor(Math.random() * 256);
  bubble.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
  title.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`

  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.addEventListener("click", function removeBubble() {
    count++;
    counter.textContent = count;
    bubble.remove();
  });

  setInterval(() => {
    bubble.remove()
  }, 5000)
}

setInterval(generateBublle, 300);
