const file = document.getElementsByName('file')[0];
const progressBar = document.getElementById('progress');
const sendBtn = document.getElementById('send');

console.log(file);

sendBtn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        console.log(`Uploaded ${event.loaded} of ${event.total}`)
    };

    xhr.onloadend = function() {
        if (xhr.status == 200) {
            console.log('done');
        } else {
            console.log(`Error: ${this.status}`)
        }
    };

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(file.value);
});