var sendMail = function (e){

    e.preventDefault();

    var data = document.querySelector('form');
    var formMsg = document.querySelector('.form-msg');
    if (data.name.value != '' && data.mail.value != '' && data.phone.value != '') {

        var sendData = "name=" + data.name.value + "&email=" + data.mail.value + "&phone=" + data.phone.value + "&message=" + data.message.value;
        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'form.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(sendData);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                formMsg.textContent = 'The message was sent!';
                formMsg.style.color = '#d0ae5e';

                clearForm(data);
            }
        }
    }
    else{
        formMsg.textContent = 'All * fields must be filled!';
        formMsg.style.color = 'red';
    }
}

var clearForm = function (data){
    for (var i = 0; i < data.length -1; i++){
        data[i].value = '';
    }
}
document.querySelector('.submit-button').addEventListener('click', sendMail);
