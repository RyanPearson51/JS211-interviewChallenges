/* --------------------------------
const countUpToTen = () => {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }

  countUpToTen()*/

  // ---------------------------
  //Your turn! 
  // * Create a for loop that prints out every multiple of 3 up to 100.
  
/*const multiplesOfThree = () => {
    for (let i = 3; i <=100; i+=3){
        console.log(i);
    }
}
multiplesOfThree()*/


//-----------------------------

const users = {
    232: 'renee',
    5656: 'mark',
    5546: 'devin',
    3353: 'grace',
    4894: 'michael',
    6644: 'becca'
  }

  // * Write a for/of loop that console logs each of the user names in the users object

  const loopOverArray = (obj) => {
      let text = "Name: ";
      let name;

      for (name in obj) {
          text += name;
      }
      return text;
      
  }
  loopOverArray(users)

  // * Write a for/in loop that console logs each of the keys in the users object