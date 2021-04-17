function changeColor() {
    let display = document.getElementById("screen1");
    let numbers = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += numbers[Math.ceil(Math.random()*15)];
    }
    display.style.backgroundColor = color;
    let colorPlate = document.getElementById("color-name");
    colorPlate.innerText = "Current Color is : " + color;
}