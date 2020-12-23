// write all your solution here. 

function question1(input){
   if(Array.isArray(input)){
       return true;
   }
   return false;
}

function question2(arr1 , arr2){
    const arr3 = []
    arrayCount = 0
    if(arr1.length === 0){
        return 'array1 has no elements'
    }

    
    if(arr2.length === 0){
        return 'array2 has no elements'
    }

   while(arrayCount < arr1.length && arrayCount < arr2.length){
        arr3.push(arr1[arrayCount] + arr2[arrayCount])
        arrayCount++
   }

   if(arrayCount === arr1.length){
       for(let i = arrayCount ; i< arr2.length ; i++){
           arr3.push(arr2[i]);
       }
   }else{
    for(let i = arrayCount ; i< arr1.length ; i++){
        arr3.push(arr1[i]);
    }
   }
    return (arr3)
}

function question4(arr){
    arr2 = arr.map(num => Math.ceil(num))
    return arr2
}

function question5(){
    
}



const answer1 = question1([1, 2, 4, 0]);
const answer1_2 = question1('w3resource');
 const answer2 = question2([1,0,2,3,4,] , [3,5,6,7,8,13]);
 const answer4 = question4([1.5, 2.56, 5.1, 12.33]);


console.log(answer1);
console.log(answer1_2);
 console.log(answer2);
console.log(answer4);