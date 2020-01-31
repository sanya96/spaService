var sendMail = function (e){

    e.preventDefault();

    var data = document.querySelector('form');
    var sendData = "name=" + data.name.value + "&email=" + data.mail.value + "&phone=" + data.phone.value + "&message=" + data.message.value;
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://127.0.0.1/spaService/form.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(sendData);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            alert('thank you');
        }
    }
}

document.querySelector('.submit-button').addEventListener('click', sendMail);
