var clientId = "MyApp";
var clientSecret = "MySecret";

var authorizationBasic = $.base64.btoa(clientId + ':' + clientSecret);

var request = new XMLHttpRequest();
request.open('POST', oAuth.AuthorizationServer, true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.setRequestHeader('Authorization', 'Basic ' + authorizationBasic);
request.setRequestHeader('Accept', 'application/json');
request.send("username=John&password=Smith&grant_type=password");

request.onreadystatechange = function () {
    if (request.readyState == 4) {
    alert(request.responseText);
    }
};

function fetchData() {
  //ajaxJson("GET", "/mqtt", displayMqtt, function () {
  //  window.setTimeout(fetchMqtt, 1000);
  //});
}

