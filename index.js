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





