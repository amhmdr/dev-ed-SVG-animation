const logo = document.querySelectorAll("#logo path");
console.log(logo.length);
for (let i = 0; i < logo.length; i++) {
  console.log("f");
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

/* 

not working here for some reasomn. just copy svg to codepen html with id, and paste the above js and it works
https://codepen.io/GitHuberian/pen/opGZjM?editors=1111

or else use this js fiddle with jquery

https://jsfiddle.net/n4ypt7bd/

*/
