function isValidForm() {

  var gender = document.forms["EnrollmentForm"]["Gender"].value;

  if (checkGender(gender)) {
    if (checkSkills())
      if (confirm('Do you want to submit the form?')) {
        addRow();

        return true;
      }
  }
}

function checkGender(gender) {
  if (gender == "") {
    alert("Choose the gender");
    return false;
  }
  return true;
}

function checkSkills() {
  var java = document.getElementById("Java");
  var html = document.getElementById("HTML");
  var css = document.getElementById("CSS");
  if (java.checked == false && html.checked == false && css.checked == false) {
    alert("Choose at least 1 skill");
    return false;
  }
  return true;
}


function addRow() {
  // Input all the values
  var name = document.getElementById('UserName').value;
  var email = document.getElementById('Email').value;
  var web = document.getElementById('Website').value;
  var image = document.getElementById('ImageLink').value;
  var gender = document.forms["EnrollmentForm"]["Gender"].value;
  var java = document.getElementById("Java");
  var html = document.getElementById("HTML");
  var css = document.getElementById("CSS");
  var skills = " ";

  // Check Skills
  if (java.checked == true) {
    skills = skills + java.value;
    if (html.checked == true) {

      skills = skills + ", " + html.value;
      if (css.checked == true) {

        skills = skills + ", " + css.value + " ";
      }
    }
    else if (css.checked == true) {

      skills = skills + ", " + css.value;
    }

  }

  else if (html.checked == true) {

    skills = skills + html.value;
    if (css.checked == true) {

      skills = skills + ", " + css.value + " ";
    }
  }

  else if (css.checked == true) {

    skills = skills + css.value;
  }


  // make the html table
  var table = document.getElementsByTagName('table')[0];

  var img = document.createElement('img');
  img.src = image;

  // add an empty row in the table
  var newRow = table.insertRow(table.rows.length);

  // add cells in the row
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var fade = "fade-in";

  // add values in the cells
  cel1.innerHTML = "<div class=" + fade + "><ul><li> <b>" + name + "</b></li><li>" + gender + "</li><li>" + email + "</li><li> <a href=" + web + " target= _blank>" + web + "</a></li><li>" + skills + " </li></ul>";
  cel2.innerHTML = "<div class=" + fade + "><img src= " + image + " alt=User Image class = responsive>";

  var sPathTodomImg = src = "static/default_image.png";

  var replaceImageWithPlaceholderIfNotAvail = function (domImg) {

    // sanitize domImg
    if (!domImg || !domImg.nodeName || domImg.nodeName != 'IMG') {
      // get all images from DOM
      aImg = document.getElementsByTagName('IMG');
      i = aImg.length;
      if (i) {
        while (i--) {
          replaceImageWithPlaceholderIfNotAvail(aImg[i]);
        }
      }
      return;
    }

    // New_image
    oImg = new Image();
    oImg.onerror = function () {
      domImg.src = sPathTodomImg;
    };
    oImg.src = domImg.src;

  };

  // function_call
  replaceImageWithPlaceholderIfNotAvail()




  $('#subBtn').on('click', function () {
    if ($('#UserTable').css('opacity') == 0) $('#UserTable').css('opacity', 1);
    else { $('#UserTable').css('opacity', 0); }

    $('#UserTable').css('opacity', 1).delay(5000);

  });
}