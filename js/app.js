'use strict'

let userName;
let total=1;
let number = 5;
let number2 = [1, 4, 9, 5, 7];
//let tota2 = 0;
let flag1=true;
let flag2=true;


alert("Welcome to my site")
userName= prompt("could you please give us your name: ");
alert("Welcome "+userName+" in my site")

flag1=confirm('Now is time to play');

let answer1="Yes".toLowerCase();
let answer2="Y".toLowerCase();

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

    alert("Now you have to guess number, plz enter number between 1-10, You have just 4 time");
    for (let i = 0; i < 4; i++) {
        let time = 0;
        if (time !== 4) {
            let num = prompt("Plz guess a number ");
            if (num < 5) {
                alert(" too low ");
                time++;
                continue;
            } else if (num > 5) {
                alert(" too high ");
                time++;
                continue;
            } else if (num == 5) {
                alert(" Congratulations the guess right ");
                total++;
                break;

            }
        } else {
            alert(" Oh you waste the 4 guess  ");
        }
    }

    let flag = true;
    let answer11=false;
    alert("Now you have to guess number, plz enter number between 1-10, You have just 6 time");
    for (let i = 0; i < 6; i++) {
        if (flag == true) {
            if(answer11==false){
                let num = prompt("Plz guess a number ");
            for (let j = 0; j < 6; j++) {
                if (num == number2[j]) {
                    alert(" Congratulations the guess right ");
                    total++;
                    flag = false;
                    answer11=true;
                    break;
  
                } else {
                    continue;
  
                }
            }
            }
            else{
                alert(" Oh you guess wrong, plz try again");
            }
            
        }
        else {
            break;
        }
    }
  
  

// function questionName(){

//   let MyName=prompt('is my name Abdullah ?').toLowerCase();
//   switch(MyName){
//       case answer1:
//       case answer2:
//             // console.log("Yes,it's correct")
//         alert("Yes,it's correct");
//         total++;
//         break;
//         default:
//             alert("No,it's Not correct");
//             break;

//   }

// }

// function questionAge(){

//     let MyAge=prompt('is my Age 25 ?').toLowerCase();
//     switch(MyAge){
//         case answer1:
//         case answer2:
//            // console.log("Yes,it's correct")
//           alert("Yes,it's correct");
//           total++;
//           break;
//           default:
//               alert("No,it's Not correct");
//               break;

//     }
  
//   }


  
//   function questionUniversity(){

//     let MyUniversity=prompt('am A graduated from the Jadara University?').toLowerCase();
//     switch(MyUniversity){
//         case answer1:
//         case answer2:
//                        // console.log("Yes,it's correct")
//           alert("Yes,it's correct");
//           total++;
//           break;
//           default:
//               alert("No,it's Not correct");
//               break;

//     }
  
//   }
 
//   function questionMajore(){

//     let MyMajored=prompt('it is my majored Software Engineering?').toLowerCase();
//     switch(MyMajored){
//         case answer1:
//         case answer2:
//                        // console.log("Yes,it's correct")
//           alert("Yes,it's correct");
//           total++;
//           break;
//           default:
//               alert("No,it's Not correct");
//               break;

//     }
  
//   }

//   function questionHobbies(){

    // let Myhobbies=prompt('it is my My hobbies are reading novels?').toLowerCase();
    // switch(Myhobbies){
    //     case answer1:
    //     case answer2:
    //                    // console.log("Yes,it's correct")
    //       alert("Yes,it's correct");
    //       total++;
    //       break;
    //       default:
    //           alert("No,it's Not correct");
    //           break;

    // }
  
//   }
//   function questionguest1() {

//     alert("Now you have to guess number, plz enter number between 1-10, You have just 4 time");
//     for (let i = 0; i < 4; i++) {
//         let time = 0;
//         if (time !== 4) {
//             let num = prompt("Plz guess a number ");
//             if (num < 5) {
//                 alert(" too low ");
//                 time++;
//                 continue;
//             } else if (num > 5) {
//                 alert(" too high ");
//                 time++;
//                 continue;
//             } else if (num == 5) {
//                 alert(" Congratulations the guess right ");
//                 total++;
//                 break;

//             }
//         } else {
//             alert(" Oh you waste the 4 guess  ");
//         }
//     }
// }
// function questionguest2() {
//   let flag = true;
//   let answer11=false;
//   alert("Now you have to guess number, plz enter number between 1-10, You have just 6 time");
//   for (let i = 0; i < 6; i++) {
//       if (flag == true) {
//           if(answer11==false){
//               let num = prompt("Plz guess a number ");
//           for (let j = 0; j < 6; j++) {
//               if (num == number2[j]) {
//                   alert(" Congratulations the guess right ");
//                   total++;
//                   flag = false;
//                   answer11=true;
//                   break;

//               } else {
//                   continue;

//               }
//           }
//           }
//           else{
//               alert(" Oh you guess wrong, plz try again");
//           }
          
//       }
//       else {
//           break;
//       }
//   }

// }



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
            // questionName();
            // questionAge();
            // questionUniversity();
            // questionMajore();
            // questionHobbies();
            // questionguest1();
            // questionguest2();
            if(total>5){
               alert("Congratulations, You answer "+total +"of 8 question");
               break;
            }else{
              flag2 =confirm("Oh No, you got answer "+ --total +" of 8 question, Would you like to play again");
            }
        }while(flag2==true);

    }

  


