// var arr =[1,2,3,4,5,6,7,8,9,10];
// var res = arr.filter((num)=>{
//     (num%!==0)
//     return num;
// });
// console.log(res);

// var student =[{
//     name:"alex",
//     marks:60
// },{
//     name:"bob",
//     marks:70
// }
// ,{ name:"alice",
//    marks:80

// },{
//     name:"doe",
//     marks:90
// }
// ]

// var res = student.filter((num)=>num.marks>60);
    
// console.log(res);

// var arr = [1,2,3,4,];
// var res = arr.map((num)=>num*2);
// console.log(res);

//              MRF methods H.W
// TO FILTER THE COUNTRIES IN ASIA
// coutries with population less than 2laks
// coutries with  total population

var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
 


request.send();

request.onload=function(){
var data=JSON.parse(request.response);
let result = data.filter((element)=>element.region=="Asia"); // countries in Asia
let result1 = data.filter((element)=>element.population<200000); // population below 2lakhs
let result2 = data.reduce((acc,element)=>acc+element.population,0); // Total population

let result3 = data.filter((element)=>{
    for(let i in element.currencies){
         if(element.currencies[i].code==="USD");
        
}

});
data.forEach((element)=>{console.log(`${element.name},${element.capital},${element.flag}`)})//name,cap,flag using foreach
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
}