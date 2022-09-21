const container = document.getElementById("resultArea");

function calculater(operation) {
  container.innerHTML += operation;
}
function calculateResult() {
  let result = eval(container.innerHTML);
  container.innerHTML = result;
}

function deleteLast() {
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
}

function deleteALL() {
  container.innerHTML = "";
}

const dark_mode_button=document.getElementById("dark_mode_button");
dark_mode_button.addEventListener("click",()=>{
  document.body.classList.toggle("dark_mode")
})