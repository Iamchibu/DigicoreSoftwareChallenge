generateInt = (T,J) => {
    const tom = [1,4,7,2,4];
    const jack = [3,4,2,4,4];
    const compareJT = [];
    const result = [1,2];
    
    //library for adding two arrays together..
    const lodash = require('lodash');
       //summing Arrays..
      const sumTom = lodash.sum(tom);
      const sumJack = lodash.sum(jack);
      
      console.log("SumTom:",sumTom)
      console.log("SumJack:",sumJack)
      
       //comparinging Arrays..
      compareJT.push(sumTom, sumJack)
      console.log("compareJT:",compareJT)
      
       //subtracting Arrays..
      var check = arrayAdd(compareJT, result)
      console.log("check:",check)
      
      if(check == [19, 19]){
        return result;
    }return result;
  }

   arrayAdd = (arr1, arr2) => {
    return arr2.map(function (el, i) {
      return Math.abs(el + arr1[i]);
    });
  }

console.log(generateInt());