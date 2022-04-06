const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {


const titleCased = () => tutorials.map((sentence) => {
  let splitStr = sentence.split(" ");
  debugger
      
  const test2= splitStr.map(word => {

    let newWord = []
    for(let i = 0; i < word.length; i++){
      debugger
      if(i===0){
        newWord[i] = word[i].toUpperCase()
      }else{
        newWord[i] = word[i]
      }
    } return newWord.join('')
    
  })

  return test2.join(" ")
}
)

//function titleCased(){
//  return titleCased2
//}

/*
let newTitleArray = []
const getTitleCase = tutorials.map(function (sentence){
  let titleCase = sentence.split(' ').map(word => {
    debugger
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    debugger
  return newTitleArray.push(titleCase)
})
function titleCased(){
  return newTitleArray
}
*/
