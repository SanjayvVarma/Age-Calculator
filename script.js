const div = document.getElementById("cont");

div.style.backgroundColor = "white"
div.style.boxShadow = "box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)";
div.style.marginLeft = "340px";
div.style.height = "auto";
div.style.width = "40vw";
div.style.textAlign = "center";
div.style.marginTop = "80px";

const h1 = document.getElementById("mnln");
h1.style.fontSize = "40px";
h1.style.paddingTop = "10px";
h1.style.marginBottom = "20px";

const p = document.getElementById("para");

p.style.fontweight = "800"
p.style.fontSize = "18px";

// input section//

const input = document.getElementById("inptdt");

input.style.marginBottom = "20px";
input.style.width = "40%";
input.style.height = "25px"
input.style.borderRadius = "3px";



const pp = document.getElementById("res");
pp.style.paddingBottom = "10px";
pp.style.fontSize = "24px";

// butn section

const butn = document.getElementById("btn");

butn.style.backgroundColor = "#007bff";
butn.style.color = "white";
butn.style.padding = "10px";
butn.style.width = "120px";
butn.style.borderRadius = "5px";

butn.addEventListener("click", (e) => {

    const curntdate = new Date(input.value)

    const bdydate = new Date()
    let diff = bdydate.getTime() - curntdate.getTime();

    let year = diff / (1000 * 60 * 60 * 24 * 365);
    console.log(Math.floor(year));

    pp.innerText = `your age is ${Math.floor(year)} Years old`



})