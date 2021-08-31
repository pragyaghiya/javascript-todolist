var counter = 0;
function addtask() {
  counter += 1;
  var task = document.getElementById('inputbox').value;
  if(task==''){
     alert("add task");
  }
  else{
    document.getElementById('tablediv').innerHTML += 
    `<div id="${counter}">
    <p> ${task} </p>
    <button onclick="deletetask(this)"> Delete </button>
    </div>`;
  }
  
}

function deleteall() {
  document.getElementById('tablediv').innerHTML = null;
}

function deletetask(btn) {
  var taskid=btn.parentNode.id
 document.getElementById(taskid).innerHTML=null;
}
