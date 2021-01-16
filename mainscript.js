function getDate(date){
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("dateCache", date)
        // Retrieve
        var dat = localStorage.getItem("dateCache")
      } else {
        alert("Sorry, your browser does not support Web Storage...")
      }
}

function outputDate(){
    var date = localStorage.getItem("dateCache")
    return date
}

function setvacancy(){
  var date = outputDate();
  document.getElementById("vacancy-text").innerHTML = date+"\n7:00am-8:30am (taken) \n9:00am-11:00am (taken) \n2:00am-4:30am (taken)";
  document.getElementById("vacancy").style.display="block";
}



// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("modalnotif");
var modal2 = document.getElementById("modalaccount");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when method calls, the modal opens
function unhideModalnotif() {
  modal.style.display = "block";
  modal1.style.display = "block";
}

function unhideModalaccount(){
  modal.style.display = "block";
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeclick() {
  modal.style.display = "none";
  modal1.style.display = "none";
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
}
