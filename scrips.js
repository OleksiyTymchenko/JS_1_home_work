/*=================== 1 task =================*/
const userName = prompt("Your name?");
alert(`Hello  ${userName}`);

/*========================= 2 task ====================================== */
const userYear = +prompt("Year of your birthday?");
const currentYear = 2022;
const userAge = currentYear - userYear;
alert(userAge);
/*============================ 3 task ==========================*/
const sideArea = +prompt("Length os square?");

let squareArea = sideArea + sideArea + sideArea + sideArea;

alert(squareArea);

/*=========================== 4 task ====================================*/

const radiusOfCircle = +prompt("Radius of circle?");

const squareOfCircle = radiusOfCircle * radiusOfCircle * Math.PI;

alert(squareOfCircle);
