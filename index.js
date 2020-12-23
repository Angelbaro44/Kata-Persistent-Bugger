function persistence(num) {
      let persist = 0;
      let arr =  num.toString().split('');
         while (arr.length > 1){
        persist++
        arr = arr.reduce((x,y)=>((x*y))).toString().split('');   
      }
      console.log(persist) 
      return persist
      }


//    Test Cases:

      persistence(77) //expected result 4
      persistence(4) //expected result 0
      persistence(69) //expected result 3
      persistence(999) //expected result 4
      persistence(456901) //expected result 1
      persistence(1000000000) //expected result 1
      persistence(900383722382700023421) //expected result 1


