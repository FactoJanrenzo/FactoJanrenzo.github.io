function getDate(date){ //get current selected date
    if (typeof(Storage) !== "undefined") {
       
        localStorage.setItem("dateCache", date)  // Temporary Stores data in Web Storage (which is the date) 

      } else {
        alert("Sorry, your browser does not support Web Storage...")
      }
}

function outputDate(){    
    var date = localStorage.getItem("dateCache")  // Get data (which is the date) from Web Storage
    return date
}


function setvacancy(){  //supposidly data from database redirected to here..
  var date = outputDate();
  document.getElementById("vacancy-text").innerHTML = date+"\n7:00am-8:30am (taken) \n9:00am-11:00am (taken) \n2:00am-4:30am (taken)";  //Set schedules <pre> tag with id="vacancy-text"  >>from customer_page_reserve.html
  document.getElementById("vacancy").style.display="block"; //unhides the div with id="vacancy" >>from customer_page_reserve.html
}

