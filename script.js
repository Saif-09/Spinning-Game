
function shuffle(arr){
    var currentIndex = arr.length,
    randomIndex;

    while(0!==currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]]=[arr[currentIndex], arr[currentIndex]];
    }
    return arr;
}

function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";


    let AC = shuffle([1890,2250,2610]);
    let Camera = shuffle([1850,2210,2570]);
    let Zonk = shuffle([1770,2130,2490]);
    let Bike = shuffle([1810, 2170, 2530]);
    let HeadSet = shuffle([1750, 2110, 2470]);
    let Drone = shuffle([1630, 1990, 2350]);
    let SmartPhone = shuffle([1570, 1930, 2290]);
    let SmartTv = shuffle([1235, 1536, 2344]);
    let Car = shuffle([3678,2111,2654]);
    let ipad = shuffle([1892, 1998, 1947]);
    
    let results = shuffle([
        AC[0],
        Camera[0],
        Zonk[0],
        Bike[0],
        HeadSet[0],
        Drone[0],
        SmartPhone[0],
        SmartTv[0],
        Car[0],
        ipad[0]

    ]);

    if(AC.includes(results[0])) SelectItem="AIR CONDITIONER";
    if(Camera.includes(results[0])) SelectItem = "SONY CAMERA";
    if (Zonk.includes(results[0])) SelectItem ="ZOMBIE";
    if (Bike.includes(results[0])) SelectItem= "ELECTRIC BIKE";
    if (HeadSet.includes(results[0]))SelectItem ="HEADSET";
    if (Drone.includes(results[0])) SelectItem ="MINI DRONE";
    if (SmartPhone.includes(results[0])) SelectItem ="SMART PHONE";
    if (SmartTv.includes(results[0])) SelectItem ="SMART TV";
    if (Car.includes(results[0])) SelectItem ="ELECTRIC CAR";
    if (ipad.includes(results[0])) SelectItem ="I PAD";
    


    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    },5000);

    setTimeout(function(){
        Swal.fire({
            title: 'Congratulations........',
            html: 'You Won '+ SelectItem + ' | ' + '<a href="#"> Claim Now </a>',
            imageUrl: './assets/lucky draw logo.png',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })

    },5500)

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    },6000);

}