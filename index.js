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




      persistence(77) //expected result 4
      persistence(4) //expected result 0
      persistence(69) //expected result 3
    


