window.onload = function() {
  var timeType = document.getElementById('input-date');
  var btn = document.getElementById('submitButton');
  var isValid = false;

  timeType.addEventListener('focusout', function(event) {
    if(!timeType.value) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  btn.addEventListener('click', function(event) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/' + encodeURIComponent(timeType.value), true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById('response').innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
      }
    };
  });

};