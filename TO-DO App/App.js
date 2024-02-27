const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

function addTask(){
   if(inputBox.value === ''){
      alert('Please enter a task!');
   } else {
      let li = document.createElement("li");
      li.innerHTML= inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00D7";                  // cross icon
      li.appendChild(span);
   }
   inputBox.value = " ";
   savedataBase();
}

listContainer.addEventListener("click", function(e) {
    if (e.target && e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        savedataBase();
      } else if(e.target.tagName === "SPAN") {
         e.target.parentElement.remove();
         savedataBase();
      }
   }, false);

function savedataBase() {
   localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
   listContainer.innerHTML = localStorage.getItem("data");
}
showData();