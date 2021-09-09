// Day 5 IIFE AND Arrow functions
// to find odd num
(function()
{
    var arr = [1,2,3,4,5,6,7,8];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
    }
})();

//To Change to title case
(function(){
    var a = "hello world";
    var up = a.toUpperCase();
    console.log(up);
}());

// to sum of nos
var arr=[1,2,3,4,5,6,7];
(function(){
    
    sum=0;
    for(i=0;i<=arr.length;i++){
        sum += arr[i];
        console.log(sum);
    }
}());


//to find prime nos
(function (num) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }else{
        return num;
    }
  }
  console.log(array.filter()); 
});






