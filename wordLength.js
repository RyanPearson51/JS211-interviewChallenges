//const myString = "This is for your own personal journey. May you have excellent navigation as a developer using your own compass."

  //findLongestWord(myString) => 'navigation', 10


  const myString = "This is for your own personal journey. May you have excellent navigation as a developer using your own compass."

  const longestWord = (string) => {
      let str = string.split(" ");
      let longest = 0;
      let word = null;
      for (let i=0; i<str.length; i++) {
          if(longest<str[i].length){
              longest = str[i].length;
              word = str[i];
          }
      }
      return word;
  }

  console.log(longestWord(myString));