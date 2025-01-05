/*Correction bug mouse-cursor lors du over sur le text area*/
let textArea = document.querySelector("#message");
  textArea.addEventListener("mouseover", function() {
    mouseCursor.style.transform = "scale(0)";
  })
  textArea.addEventListener("mouseout", function(){
    mouseCursor.style.transform = "scale(0.2)";
})

/*CREATION DES ELEMENTS APRES SOUMMISSION DU FORMULAIRE */
const formElement = document.querySelector(".contact");
/*Création div pour msg d'attente */
const ballElement = document.createElement("div");
ballElement.classList.add("pointDiv");
formElement.appendChild(ballElement);
/*création ball 1 */
const spanFirst = document.createElement("span");
spanFirst.classList.add("msgAfter");
ballElement.appendChild(spanFirst);
/*création ball 2 */
const spanSecond = document.createElement("span");
spanSecond.classList.add("msgAfter1");
ballElement.appendChild(spanSecond);
/*création ball 3 */
const spanThird = document.createElement("span");
spanThird.classList.add("msgAfter2");
ballElement.appendChild(spanThird);

/*création div pour message envoyé */
const spendMsg = document.createElement("div");
spendMsg.classList.add("spendMessage");
formElement.appendChild(spendMsg);

/*création du titre */
const spendMsgTitle = document.createElement("h2");
spendMsgTitle.classList.add("titlespend");
spendMsg.appendChild(spendMsgTitle);

/*création du paragraphe */
const spendMsgParag = document.createElement("p");
spendMsgParag.classList.add("spendMessageParag");
spendMsgParag.innerHTML = "Formula 1 FERRARI va bientot prendre contact avec vous \<br>\🔥 A très vite ! 🔥"
spendMsg.appendChild(spendMsgParag);


/* récuperer mon Formulaire dans une variable */
const contactForm = document.querySelector(".contactform"); 
/*Evenement à la soumission du formulaire */
contactForm.addEventListener("submit", function(clickOnSub){
  clickOnSub.preventDefault();
  sendEmail()
  // activeDisplayTemp()
})
/* fonction pour activer et désactiver les display */
function activeDisplayTemp () {
  contactForm.style.display = "none";
  ballElement.style.display = "flex";
  setTimeout(activeDisplaySpend, 2000);
}
function activeDisplaySpend () {
  ballElement.style.display = "none";
  const firstName = document.querySelector("#firstname").value;
  spendMsgTitle.innerHTML = `Merci ${firstName} !\<br>\ Votre message est transmis à notre équipe.`;
  spendMsg.style.display = "block";
}


function sendEmail() {
  const nameValue = document.querySelector("#name").value;
  const firstName = document.querySelector("#firstname").value;
  const emailform = document.querySelector("#emailform").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;
  activeDisplayTemp()
















  
  // Email
  //  ça fonctionnait mais le systeme a buguer, je n'ai pas eu le temps de le refaire
    // .send({
    //   Host : "smtp.elasticemail.com",
    //   Username : "ferrarifone@gmail.com",
    //   Password : "3AF29241A36D0AC90959290476D533FA919D",
    //   SecureToken: "48B18CEA2B168BCF6082D7953F2ADB4D56D5C7970F731B6DF06B13802A2BB8EBF1CE24FD2BAB7711FCFBB1B267A9D225" ,
    //   To: "ferrarifone@gmail.com",
    //   From: "ferrarifone@gmail.com",
    //   Subject: "Formulaire de contact",
    //   Body: `<p>Nom: ${nameValue}</p>                 
    //         <p>Prénom: ${firstName}</p>
    //         <p>E-mail: ${emailform}</p>
    //         <p>Téléphone: ${phone}</p>
    //         <p>Message: ${message}</p>`,
    // })



    // cette une option pour confirmer a l'utilisateur que le message a bien été envoyer ou que ça n'a pas ete envoyer
    // .then((message) => {
    //   if(message === 'OK') {
    //     activeDisplayTemp()
    //     console.log("Message envoyé avec succès : ", message);
    //   } else {
    //      alert("Votre message n'a pas été envoyé. Veuillez réessayer.")
    //   }
      
    // })
    
}





// FORMULAIRE
// function activeForm(){ desactiver section attente pour activer "message envoyé"
//   const msgAfterDelete = document.querySelector(".pointDiv");
//   msgAfterDelete.style.display = "none";
//   const submitForm = document.querySelector(".spendMessage");
//   submitForm.style.display = "block";
// }
// function msgTempAfter(){/esactiver le formulaire pour activer "message envoyé" delai de 2s
//   const formDelete = document.querySelector(".contactform");
//   formDelete.style.display = "none";
//   const msgAfter = document.querySelector(".pointDiv");
//   msgAfter.style.display = "flex";
//   setTimeout(activeForm, 2000);
// }
// const submitButton = document.querySelector(".contactform"); action 1 lors de la soumission du formaulaire
// submitButton.addEventListener("submit", function(clickOnSub) {
//   clickOnSub.preventDefault();
//   msgTempAfter();  
// })*/


// /*-----------test fct form -----------*/
// const submitButton = document.querySelector(".contactform")
// const msgAfterDelete = document.querySelector(".pointDiv");
// const submitForm = document.querySelector(".spendMessage");
// const formDelete = document.querySelector(".contactform");
// const msgAfter = document.querySelector(".pointDiv");
// /*quand je soumets le formulaire : formDelete : none et msgAfter + timeOut 2s */
// function eventOn(element, status, eventOn) {
//   element.style.diplay = status;
// }
// function eventOff(element, status, eventOn) {
//   element.style.diplay = status;
// }

// function submitForm(callback, )

// function mouseDown(event) {event.addEventListener("mouseout", function() {
//   mouseCursor.style.transform = "scale(0.2)";
// })}
// function mouseUpDown (callback, array) {
//   array.forEach(event => callback(event));
// }
// mouseUpDown(mouseUp, navBar);
// mouseUpDown(mouseDown, navBar);

// function desactiveContent(clickOn, clickOff) {
//   clickOn.style.display = "none";
//   clickOff.style.display = "block";
// }
// const msgAfterDelete = document.querySelector(".pointDiv");
// const submitForm = document.querySelector(".spendMessage");
// const formDelete = document.querySelector(".contactform");
// const msgAfter = document.querySelector(".pointDiv");

// const submitButton = document.querySelector(".contactform"); /* action 1 lors de la soumission du formaulaire*/
// submitButton.addEventListener("submit", function(clickOnSub) {
//   clickOnSub.preventDefault()
//   desactiveContent(formDelete, msgAfter);
//   setTimeout(desactiveContent, 2000);
//   desactiveContent(msgAfterDelete, submitForm);
// })