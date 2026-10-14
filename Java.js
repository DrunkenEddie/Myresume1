const containerE1 = document.querySelector(".container");

const careers =["Excellent serices and quick response, Much appriciated", "Very knowledgeable Helpful and courteous", "Your efforts made a real difference. Appreciate the excellent work!", "Instructor","Jio Dhandhanadhan"];

let carrerIndex =0;

let charecterIndex =0;

updateText();

function updateText(){
  charecterIndex++;
containerE1.innerHTML=`
<h1>from my clients ${careers[carrerIndex].
  slice(0,1) === "I" ? "an":"a"} ${careers[carrerIndex].slice(0,charecterIndex)} </h1>
`;

  
  if(charecterIndex === careers[carrerIndex].length){
      carrerIndex++;
      charecterIndex = 0

  }
  if(carrerIndex === careers.length)
  {
      carrerIndex = 0;

  }
  setTimeout(updateText,400);
}

