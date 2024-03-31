// Game Code
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".comp_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");


optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "pic/rock.jpg";
    result.textContent = "Wait...";

    
    optionImages.forEach((image2, index2) => {
      
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");
    
    
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      
      let imageSrc = e.target.querySelector("img").src;
      
      userResult.src = imageSrc;
      
      let randomNumber = Math.floor(Math.random() * 3);
      
      let cpuImages = ["pic/rock.jpg", "pic/paper.jpg", "pic/scissors.jpg"];

      
      cpuResult.src = cpuImages[randomNumber];
      
      let cpuValue = ["R", "P", "S"][randomNumber];
     
      let userValue = ["R", "P", "S"][index];
      
      let outcomes = {
        RR: "Tied",
        RP: "Ed Won",
        RS: "You Won",
        PP: "Tied",
        PR: "You Won",
        PS: "Ed Won",
        SS: "Tied",
        SR: "Ed Won",
        SP: "You Won",
      };
      
      let outComeValue = outcomes[userValue + cpuValue];
      
      result.textContent = userValue === cpuValue ? "You Tied!" : `${outComeValue} !!`;
    }, 2100);
  });
});




// Home Page Connect Us Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm").reset();
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}