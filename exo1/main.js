let p1 = document.getElementsByTagName("p");

p1[0].style.color = "#fff";
p1[0].style.backgroundColor = "#000";
p1[0].style.fontWeight = "bold";

window.addEventListener("resize", () => {
  console.log(
    "width: " + document.documentElement.clientWidth,
    "height :" + document.documentElement.clientHeight
  );
});
