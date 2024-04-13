const number =document.getElementById('number');
const  convert_btn=document.getElementById('convert-btn');
const output=document.getElementById('output');
convert_btn.addEventListener('click',handleQuerySubmit);
number.addEventListener('keydown',(e)=>{
     
    if(e.key=='Enter'){
         
        handleQuerySubmit()
    }
})
function handleQuerySubmit(){
const value=parseFloat(number.value);
 
  console.log(value,'current-value');
if (!value) {
     
    output.innerText = "Please enter a valid number";
} else if (value < 0) {
     
    output.innerText = "Please enter a number greater than or equal to 1";
} 
//   else if (value >= 4000) {
    // you can choose to limit the maximum number a user  can query
     
//    output.innerText = "Please enter a number less than 4000";
// } 

else {
   
    output.innerText= convertToRomanNumber(value);
}


 
}

// roman conversion logic here
function convertToRomanNumber(decimal){
    number.value=''
    const romanNumerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
      };
  let romanNumber=''    
while (decimal>0) {
    for (const key of Object.keys(romanNumerals).reverse()) {
        
      if(decimal>=key){
        romanNumber+=romanNumerals[key];
        decimal-=key;
        break;
      }
    }
}
return romanNumber
}