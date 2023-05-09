// function toggleNoti() {
//     var checkBox = document.getElementById("toggleNoti");
//     var text = document.getElementById("text");
//     if (checkBox.checked == true){
//       text.style.display = "block";
//     } else {
//        text.style.display = "none";
//     }
//   }

  function toggleNoti() {
    var checkBox = document.getElementById("toggleNoti");
    var allowNoti = false;
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        if (checkBox.checked == true) {
            allowNoti = false;
        }
        else {
            allowNoti = true;
        }
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission == "granted") {
            if (checkBox.checked == true) {
                allowNoti = false;
            }
            else {
                allowNoti = true;
            }
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }