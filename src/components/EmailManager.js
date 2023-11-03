import emailjs from 'emailjs-com';

export function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
      
    emailjs.sendForm('service_nbz34k1', 'template_usbbv8w', e.target, 'WtadiHwWSzDXcairF')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        }
    );
};
