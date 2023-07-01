let spinCount = 0;

function shuffle(arr) {
  var currentIndex = arr.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[currentIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}

function spin() {
  spinCount++; // Increment the spin count

  wheel.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectItem = "";

  if (spinCount === 1) {
    let tryAgain = shuffle([1770, 2130, 2490]);
    SelectItem = "Try Again";
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + tryAgain[0] + "deg)";
    setTimeout(function () {
    Swal.fire({
      title: "Sorry...",
      text: "You lost. Please try again!",
      icon: "error",
      });
    },5500);
}

   else {
    let prizes = [
      { name: "AIR CONDITIONER", values: shuffle([1890, 2250, 2610]) },
      { name: "SONY CAMERA", values: shuffle([1850, 2210, 2570]) },
      { name: "ELECTRIC BIKE", values: shuffle([1810, 2170, 2530]) },
      { name: "HEADSET", values: shuffle([1750, 2110, 2470]) },
      { name: "MINI DRONE", values: shuffle([1630, 1990, 2350]) },
      { name: "SMART PHONE", values: shuffle([1570, 1930, 2290]) },
      { name: "SMART TV", values: shuffle([1235, 1536, 2344]) },
      { name: "ELECTRIC CAR", values: shuffle([3678, 2111, 2654]) },
      { name: "I PAD", values: shuffle([1892, 1998, 1947]) },
    ];
    let randomIndex = Math.floor(Math.random() * prizes.length);
    let prize = prizes[randomIndex];
    SelectItem = prize.name;
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + prize.values[0] + "deg)";

    setTimeout(function () {
        Swal.fire({
          title: "Congratulations........",
          html: "You Won " + SelectItem + " | " + '<a href="#"> Claim Now </a>',
          imageUrl: "./assets/lucky draw logo.png",
          imageWidth: 400,
          imageHeight: 300,
          imageAlt: "Custom image",
        });
      }, 5500);

  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
}
