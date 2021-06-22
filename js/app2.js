//////
///// This app2.js JUST for test 
/////
'use strict'

let number = 5;
let number2 = [1, 4, 9, 5, 7];
let total = 0;
let flag1 = true;
let flag2 = true;

flag1 = confirm('Now is time to play Another game: ');

let answer1 = "Yes".toLowerCase();
let answer2 = "Y".toLowerCase();

function questionguest1() {

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
                break;

            }
        } else {
            alert(" Oh you waste the 4 guess  ");
        }
    }
}
//questionguest1();

// function questionguest2() {

//     let flag = true;


//     alert("Now you have to guess number, plz enter number between 1-10, You have just 6 time");
//     let num = prompt("Plz guess a number ");
//     for (let i = 0; i < number2.length; i++) {
//         if (num == number2[i]) {
//             alert(" Congratulations the guess right ");
//             break;
//         }
//         else {
//             alert(" Oh you guess wrong, plz try again");
//             num = prompt("Plz guess a number ");
//             continue;
//         }

//     }
// for (let i = 0; i < number2.length; i++) {
//     if (flag == true) {
//             if (num == number2[i]) {
//                 alert(" Congratulations the guess right ");
//                 flag = false;
//                 break;

//             } else {
//                 alert(" Oh you guess wrong, plz try again");
//                 // num = prompt("Plz guess a number ");
//                 continue;
//             }
//         }
//     else {
//         num = prompt("Plz guess a number ");
//         // break;
//     }
// }

//}
function questionguest2() {
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

}


questionguest2();

    // if(flag1==true){

    //     do {
    //         if(total==6){
    //            alert("Congratulations, You answer 5 of 5 question");
    //            break;
    //         }else{
    //           flag2 =confirm("Oh No, you got answer "+ --total +" of 5 question, Would you like to play again");
    //         }
    //     }while(flag2==true);

    // }




