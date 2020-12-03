
const isAnagram  =(word1,word2)=>{

    if ( word1.length == word2.length){

        for (letter of word1){
            if(word2.indexOf(letter)!=-1){
                word2 = word2.replace(letter,"")
            }
        }

        if(!word2)console.log('es anagrama');
    }else{
        console.log('No es anagrama');
    }


}

isAnagram('casa','saca')