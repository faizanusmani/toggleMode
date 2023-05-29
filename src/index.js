import "./styles.css";

var checkBox = document.querySelector("#toggle-btn-1");

checkBox.addEventListener("click", changeCSS);

function changeCSS() {
  if (checkBox.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
