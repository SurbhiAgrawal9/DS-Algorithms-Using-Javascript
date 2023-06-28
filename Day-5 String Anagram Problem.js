//string 



function anagram(str1,str2){
 
    if(str1.length !== str2.length){
      return false;
    
      }
      let counter = {}
      for(let letter of str1){
        counter[letter] = ( counter[letter] || 0  ) + 1
        // console.log(counter[letter])
        
      }
      for(let letter of str2){
        if(!counter[letter]){
          return false;
        }
        counter[letter] = counter[letter] - 1
      }
      return true;
    }
    
    
    const check = anagram("hello", "lloeh")
    console.log(check)
