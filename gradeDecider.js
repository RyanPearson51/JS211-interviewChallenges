const letterGrade = (grade) => {
    if (grade>=90 && grade<=100){
      return "A"
    } 
    else if(grade>=80){
      return "B"
    }
    else if(grade>=75){
      return "C"
    }
    else if (grade>=70){
      return "D"
    }
    else{
      return "F"
    }
  }
  
  console.log(letterGrade(98));
  console.log(letterGrade(88));
  console.log(letterGrade(78));
  console.log(letterGrade(73));
  console.log(letterGrade(48));
  console.log('------')