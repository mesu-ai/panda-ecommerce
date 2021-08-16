const hText = document.getElementsByTagName('h2');

for (const text of hText) {
    console.log(text.outerText);
    text.style.backgroundColor = 'lightblue';
    text.style.padding = '10px';
    text.style.borderRadius = '10px';

}

const bagpack = document.getElementById('bagpack-Id');
bagpack.style.backgroundColor = 'tomato';


const cards = document.getElementsByClassName('card');

for (const card of cards) {

    card.style.borderRadius = '30px';
    card.style.backgroundColor = 'yellow';
}

// function add in send buttons
function sendNow() {
    alert('sending....');
    console.log('send');
    document.getElementById('email-submit').value = '';


}

// after click button will gone
const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}

//input focus

document.getElementById('email-submit').addEventListener('focus', function () {

    const emailSubscribe = document.getElementById('subscribe-email');
    emailSubscribe.style.backgroundColor = 'red';

});

// input blur
document.getElementById('email-submit').addEventListener('blur', function () {
    const emailSubscribe = document.getElementById('subscribe-email');
    emailSubscribe.style.backgroundColor = ' #FFF2F1';

});


// input double click

document.getElementById('subscribe-email').addEventListener('dblclick', function () {
    const emailSubscribe = document.getElementById('subscribe-email');
    emailSubscribe.style.backgroundColor = ' violet';

});

//button active and disabled
document.getElementById('email-submit').addEventListener('change', function () {
    const email = document.getElementById('email-submit');
    console.log(email.value);

});

document.getElementById('email-submit').addEventListener('keyup', function (event) {
    const emailSubmit = document.getElementById('email-submit');
    const sendBtn = document.getElementById('send-btn');
    if (event.target.value == 'email') {
        sendBtn.removeAttribute('disabled');


    } else {
        sendBtn.setAttribute('disabled', true);
    }

    // console.log(event.target.value);
});
