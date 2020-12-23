// write all your solution here. 

function question1(val){
    if(val !== false || val!== null || val!==0 || val!=='')
    return val;
}
const valArray = [58, '', 'abcd', true, null, false, 0]

// Solution 2
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function question2(a , b){
    let ftitle = a.title.toLowerCase();
    let stitle = b.title.toLowerCase();
    if(ftitle < stitle){
        return -1
    }
    if(ftitle > stitle){
        return 1
    }

    return 0
}

// Solution 3
function question3(number){
   const str = number.toString();  
   let numArray = [];
    for(let i=0; i<str.length; i++)
  {
    if((str[i+1]%2 === 0 && str[i]%2 === 0))
     {
        numArray.push(str[i] , '-');
     }
    else
     {
        numArray.push(str[i]);
     }
  }
    return (numArray.join(''))
    }

    
 





const answer1 = valArray.filter(question1);
 const answer2 = library.sort(question2);
 const answer3 = question3(25468);

console.log(answer1);
 console.log(answer2);
 console.log(answer3);
