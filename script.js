// question 1(a)
for(var i=0;i<=10; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

// question 1(b)
var dailyRoutine = ["wake up","eat","pubg","sleep"]

dailyRoutine.forEach(function(routien){
     console.log(routien)
});

// question 1(c)
function sum(number){
    var a = 0;
    for(i=0; i<number.length; i++){
        a = a + number[i];
    } 
    console.log(a)
}
sum([1,2,3,4,5])

// question 1(d)
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var result = [];
function prime(num) {
  if(num < 2) return false;
  for (let i = 2; i < num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = prime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

// question 1(e)
function palindrome(n) {
    var str = String(n);
    return str === [...str].reverse().join('');
}
function sumArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 10 && palindrome(arr[i])) {
            sum += arr[i]
        }   
    }
    console.log(sum);    
}
sumArray([12,313,11,44,9,1])
console.log(313+11+44);


// question 1(f)
function Solution(arr, n){
     if (n % 2 == 0)
     {
       var z = n / 2;
       var e = arr[z];
       var q = arr[z - 1];
       var ans = (e + q) / 2;
       return ans;
     }
    else
     {
       var z = Math.floor(n / 2);
       return arr[z];
     }
}
var arr1 = [ -5, 3, 6, 12, 15 ];
var arr2 = [ -12, -10, -6, -3, 4, 10 ];
 
var i =  arr1.length;
var j =  arr2.length;
 
var l =  i+j;
const arr3 = arr1.concat(arr2);
 
arr3.sort(function(a, b) {
  return a - b;
});
 
console.log(Solution(arr3, l));



//  // question 1(g)
// function removeDuplicates(arr, n){
//     if (n==0 || n==1)
//         return n;
//     var temp = new Array(n);
//     var j = 0;
//     for (var i=0; i<n-1; i++)

//         if (arr[i] != arr[i+1])
//             temp[j++] = arr[i];
//     temp[j++] = arr[n-1];
 
//     for (var i=0; i<j; i++)
//         arr[i] = temp[i];
 
//     return j;
// }
// var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
//     var n = arr.length;
 
//     n = removeDuplicates(arr, n);
//     for (var i=0; i<n; i++)
//        console.log(arr[i]+" ");


       // question 1(h)
       function RightRotate(a, n, k){
           k = k % n;
        
           for (let i = 0; i < n; i++) {
               if (i < k) {
                   console.log(a[n + i - k] + " ");
               }
               else {
                console.log((a[i - k]) + " ");
               }
           }
       }

       let Array = [1, 2, 3, 4, 5];
       let N = Array.length;
       let K = 2;
        
       RightRotate(Array, N, K);


    //    question no3(a)
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    let odds = arr. filter(n => n%2)
    console. log(odds)


    //    question no3(b)
    var dailyRoutine = ["wake up","eat","pubg","sleep"]

dailyRoutine.forEach((routien)=>{
     console.log(routien)
});

//    question no3(c)
var sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);

//    question no3(d)
var newArray = [1, 3, 2, 5, 9, 10, 11];
var prime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
var primeArray = newArray.filter(element => prime(element));
console.log(primeArray);