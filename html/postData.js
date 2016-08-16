function postData() {
    $("#reset-button").addEventListener("click", function (e) {
        e.preventDefault();
        var co = $("#console");
        co.innerHTML = "";
        ajaxSpin('POST', "http://posttestserver.com/post.php",
          function (resp) { showNotification("Resetting esp-link"); co.textEnd = 0; fetchText(2000, false); },
          function (s, st) { showWarning("Error resetting esp-link"); }
        );
    });
}
