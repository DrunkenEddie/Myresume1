const containerE1 = document.querySelector(".container");

const careers =["Sushovan Ghosh", "web Developer", "Freelancer", "Instructor","Jio Dhandhanadhan"];

let carrerIndex =0;

let charecterIndex =0;

updateText();

function updateText(){
  charecterIndex++;
containerE1.innerHTML=`
<h1>I am ${careers[carrerIndex].
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

