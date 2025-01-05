const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");


const executeCodes = () => {
  cookieBox.classList.add("show");
  const localCookie = window.sessionStorage.getItem("cookie");
  console.log(localCookie)
  if(localCookie === "true") {
    cookieBox.classList.remove("show");
    return;
  };  

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "declineBtn") {
        cookieBox.classList.remove("show");
        return;
      } 
      window.sessionStorage.setItem("cookie", true);
      cookieBox.classList.remove("show");
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);  
