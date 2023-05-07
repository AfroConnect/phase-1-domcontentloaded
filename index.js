function changeTextOnLoad() {
    document.addEventListener('DOMContentLoaded', function() {
      let pElement = document.querySelector('p');
      if (pElement.textContent === "JavaScript is so cool. It lets me add text to my page programmatically.") {
        pElement.textContent = "This is really cool!";
      }
    });
  }
  
  changeTextOnLoad();






 