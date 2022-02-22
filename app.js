// select all paths in logo
console.log("sadas");
const logo = document.querySelectorAll(".logo");
console.log(logo)

for (let i = 0; i < logo.length; i++) {
  console.log("sadas");
  console.log(`Letter ${i} is ${logo[i].getTotalLength}`);
}
