'use strict'

let userName;
let total=1;
let flag1=true;
let flag2=true;


alert("Welcome to my site")
userName= prompt("could you please give us your name: ");
alert("Welcome "+userName+" in my site")

flag1=confirm('Now is time to play');

let answer1="Yes".toLowerCase();
let answer2="Y".toLowerCase();

function questionName(){

  let MyName=prompt('is my name Abdullah ?').toLowerCase();
  switch(MyName){
      case answer1:
      case answer2:
            // console.log("Yes,it's correct")
        alert("Yes,it's correct");
        total++;
        break;
        default:
            alert("No,it's Not correct");
            break;

  }

}

function questionAge(){

    let MyAge=prompt('is my Age 25 ?').toLowerCase();
    switch(MyAge){
        case answer1:
        case answer2:
           // console.log("Yes,it's correct")
          alert("Yes,it's correct");
          total++;
          break;
          default:
              alert("No,it's Not correct");
              break;

    }
  
  }


  
  function questionUniversity(){

    let MyUniversity=prompt('am A graduated from the Jadara University?').toLowerCase();
    switch(MyUniversity){
        case answer1:
        case answer2:
                       // console.log("Yes,it's correct")
          alert("Yes,it's correct");
          total++;
          break;
          default:
              alert("No,it's Not correct");
              break;

    }
  
  }
 
  function questionMajore(){

    let MyMajored=prompt('it is my majored Software Engineering?').toLowerCase();
    switch(MyMajored){
        case answer1:
        case answer2:
                       // console.log("Yes,it's correct")
          alert("Yes,it's correct");
          total++;
          break;
          default:
              alert("No,it's Not correct");
              break;

    }
  
  }

  function questionHobbies(){

    let Myhobbies=prompt('it is my My hobbies are reading novels?').toLowerCase();
    switch(Myhobbies){
        case answer1:
        case answer2:
                       // console.log("Yes,it's correct")
          alert("Yes,it's correct");
          total++;
          break;
          default:
              alert("No,it's Not correct");
              break;

    }
  
  }

//   function again1(){
//     if(total==5){
//         return alert("Congratulations, You answer 5 of 5 question");
//       }
//       else{
//          again =confirm("would you like to play again");
//          return again;
//   }
    if(flag1==true){

        do {
            questionName();
            questionAge();
            questionUniversity();
            questionMajore();
            questionHobbies();
            if(total==6){
               alert("Congratulations, You answer 5 of 5 question");
               break;
            }else{
              flag2 =confirm("Oh No, you got answer "+ --total +" of 5 question, Would you like to play again");
            }
        }while(flag2==true);

    }

  


