//selection des elements
const sqaures = document.querySelectorAll('.sqaure');
const answerDisplay = document.querySelector('.correct');
const colorDisplay = document.querySelector('h1');
const button = document.querySelector('button');
const bEsay = document.querySelector('.Esay');
const bHard = document.querySelector('.Hard');
const header = document.querySelector(".header");
let colours = []
let mode = false

GenerateColor();
assign_couleurs();
getCouleurs();
checkCouleurs();

function GenerateColor() {
   if(mode === false){
      for(let i = 0; i < sqaures.length; i++){
         colours.push(
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
         )
      }
   }else{
      for(let i = 0; i < 3; i++){
         colours.push(
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
         )
      }
   }

  
}

function assign_couleurs() {
      colours.forEach((colour, index) => {
      sqaures[index].style.background = colour;
      //sqaures[index].setAttribute('data-colour', colour);   
   })
}

function getCouleurs() {
   const random = colours[Math.floor(Math.random() * colours.length)];
   colorDisplay.textContent = random;
   return random;
}
let pickCouleurs = getCouleurs();

function checkCouleurs() {
   sqaures.forEach((sqaure) => {
      sqaure.addEventListener('click', (e) => {
         if(sqaure.style.backgroundColor === pickCouleurs){

               for(let i =0 ; i<sqaures.length; i++){
                      sqaures[i].style.background = pickCouleurs;
                      sqaures[i].classList.remove("hide");
                      header.style.backgroundColor = pickCouleurs
               }             
         answerDisplay.textContent = "CORRECT!"; 
         button.innerHTML = "Rejouer !"          
         } else{
            answerDisplay.textContent = "INCORRECT!";
            e.target.classList.add("hide");
         }
      })
   })
}


function reset() {
   colours = []; 
   GenerateColor();
   sqaures.forEach((sqaure) => sqaure.classList.remove("hide"));
   assign_couleurs();
   getCouleurs();
   checkCouleurs();
   pickCouleurs = getCouleurs();
   answerDisplay.textContent ="";
   header.style.background = 'rgb(11, 147, 244)';
   button.innerHTML = "NEW COLORS";  
}

button.addEventListener('click', reset);


function easyMode(){  
   mode = true
   GenerateColor()
  
   sqaures.forEach((sqaure) => {
      sqaures[3].style.display = "none";
      sqaures[4].style.display = "none";
      sqaures[5].style.display = "none";
     
      sqaure.addEventListener('click', (e) => {
       
         if(sqaure.style.backgroundColor === pickCouleurs){
            
               for(let i =0 ; i< 3; i++){
                 
                   mode = true
                   sqaures[i].style.background = pickCouleurs;
                   sqaures[i].classList.remove("hide");
                   header.style.backgroundColor = pickCouleurs
                 
               }             
            answerDisplay.textContent = "CORRECT!"; 
            button.innerHTML = "Rejouer !"

         } else{
            answerDisplay.textContent = "INCORRECT!";
            e.target.classList.add("hide");          
         }
       })
   })
}

function Hard(){ 
   mode =false 
   sqaures[3].style.display = "block";
   sqaures[4].style.display = "block";
   sqaures[5].style.display = "block";
   GenerateColor()
}