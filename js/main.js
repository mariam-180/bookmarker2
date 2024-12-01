var siteName = document.getElementById("sitename");
var siteUrl = document.getElementById("siteurl");
var alertsite = document.getElementById("alertsite");
var overlay = document.getElementById("overlay");
const myModal = new bootstrap.Modal('#exampleModal', {
    keyboard: false
  })
var allSite=[];

  if (localStorage.getItem('sites') != null) {

     allSite = JSON.parse(localStorage.getItem("sites"));

     display();
  }
  // // Load the sites from localStorage if they exist
// if (localStorage.getItem("sites") !== null) {
//     allSite = JSON.parse(localStorage.getItem("sites"));
//     display(); // Display the stored sites after the page loads
// }

function addSite() {
    if (validSite() && validUrl()==true) {
        var site = {
            name: siteName.value,
            url: siteUrl.value,
        };

        allSite.push(site);
        console.log(allSite);

        clr();
        display();

        localStorage.setItem("sites", JSON.stringify(allSite));
  
    } else {
 
        myModal.show()  

      
    }
}


 function clr() {
     siteName.value = "";
     siteUrl.value = "";
 }

 function display() {
     var cartoona = "";
    // to collect the data in the array
     for (var i = 0; i < allSite.length; i++) {
         cartoona += ` 
         <tr>
      
         <td>${i + 1}</td> 
      
            <td>${allSite[i].name}</td>
       <td>
            <a href="${allSite[i].url}" target="_blank"><button class="btn bttn2 bg-success fs-6 fw-light px-4 text-white " ko0l type="submit"> <span><i class="fa-solid fa-eye mx-1"></i></span> visit</button></a></td>
             <td><button class="btn bttn2 fs-6 fw-light px-3 text-white bg-danger"  onclick="deleteSite(${i})" type="submit"><span class="mx-1"><i class="fa-solid fa-trash-can"></i></span> delete</button></td>
               </tr>
               `
     }
     document.getElementById("tbody").innerHTML = cartoona;
 }

 function deleteSite(index) {
     allSite.splice(index, 1);
     localStorage.setItem("sites", JSON.stringify(allSite))
     display();
 }


 function validSite() {
     var regex = /^[A-Z][a-z]{2,}[0-9]{0,}$/
     if (regex.test(siteName.value) == true) {
         return true;
     }
     else {
         return false;
     }
 }

 function validUrl(){
    var regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/
    if(regex.test(siteUrl.value)==true){
     return true;
     }
     else{
     return false;
     
     }
 }

















// var siteName = document.getElementById("sitename");
// var siteUrl = document.getElementById("siteurl");
// var alertsite = document.getElementById("alertSite");
// var overlay = document.getElementById("overlay");

// var allSite = [];

// // Load the sites from localStorage if they exist
// if (localStorage.getItem("sites") !== null) {
//     allSite = JSON.parse(localStorage.getItem("sites"));
//     display(); // Display the stored sites after the page loads
// }

//  function addSite() {
//      if (validSite() && validUrl() == true) {
//          var site = {
//              name: siteName.value,
//              url: siteUrl.value,

//          }
//          allSite.push(site);
//          console.log(allSite);
//          clr();
//          display();
//      }

//      localStorage.setItem("sites", JSON.stringify(allSite));
//  }

// function clr() {
//     siteName.value = "";
//     siteUrl.value = "";
// }

//  function display() {
//      var cartoona = "";
//      //to collect the data in the array
//      for (var i = 0; i < allSite.length; i++) {
//          cartoona += ` 
//          <tr>
      
//          <td>${i + 1}</td> 
      
//             <td>${allSite[i].name}</td>
//        <td>
//             <a href="${allSite[i].url}" target="_blank"><button class="btn bttn2 bg-success fs-6 fw-light px-4 text-white " ko0l type="submit"> <span><i class="fa-solid fa-eye mx-1"></i></span> visit</button></a></td>
//              <td><button class="btn bttn2 fs-6 fw-light px-3 text-white bg-danger"  onclick="deleteSite(${i})" type="submit"><span class="mx-1"><i class="fa-solid fa-trash-can"></i></span> delete</button></td>
//                </tr>
//                `
//      }
//      document.getElementById("tbody").innerHTML = cartoona;
//  }

//  function deleteSite(index) {
//      allSite.splice(index, 1);
//      localStorage.setItem("sites", JSON.stringify(allSite))
//      display();
//  }

//  function validSite() {
//      var regex = /^[A-Z][a-z]{2,}[0-9]{0,}$/
//      if (regex.test(siteName.value) == true) {
//          return true;
//      }
//      else {
//          return false;
//      }
//  }



//  function validUrl() {
//      var regex = /^(http:\/\/|https:\/\/)[a-z]{5,}/
//      if (regex.test(siteUrl.value) == true) {
//          return true;
//      }
//      else {
//          return false;

//      }
//  }
