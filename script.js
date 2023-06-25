function showMessage(message) {
  var messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = `<div class="message">${message}</div>`;
  messageContainer.style.display = "block";

  setTimeout(function() {
    messageContainer.style.display = "none";
  }, 3000);
}

function checkLuckyDegrees(degrees) {
  // Приводим градусы к диапазону от -360 до 360
  degrees = degrees % 360;

  // Нормализуем градусы в диапазоне от -180 до 180
  if (degrees > 180) {
    degrees -= 360;
  } else if (degrees < -180) {
    degrees += 360;
  }

  // Проверяем, находятся ли нормализованные градусы в счастливом диапазоне
  if (degrees >= -37 && degrees <= 37) {
    return true;//"Счастливые координаты!";
  } else {
    return false;//"Несчастливые координаты.";
  }
}

function startRotation() {
    rotateButton.disabled = true;
    var image = document.getElementById("rotateImage");
    image.style.transform = "rotate(0deg)";

    let deg = 5759//Math.floor(Math.random()*360)+360*15 //5759


    let rot = "rotate("+( deg )+"deg)"; //+360*15


    setTimeout(function() {
        var IsWin = checkLuckyDegrees(deg)
        if (IsWin) {
            showMessage("You WIN!");
        }
        else {
            showMessage("You LOOSE!");
        }
        setTimeout(function() {
            if (IsWin) {
                Telegram.WebApp.ready();
                Telegram.WebApp.sendData("1");
            }
            else {
                Telegram.WebApp.ready();
                Telegram.WebApp.sendData("2");
            }
        }, 1000);
    }, 7000);


    image.style.transform = rot;

    //setTimeout(function() {
    //  image.style.transform = "rotate(180deg)";

    //  setTimeout(function() {
    //    image.style.transform = "rotate(360deg)";
    //  }, 1000);
    //}, 1000);
}
