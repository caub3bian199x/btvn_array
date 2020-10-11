    //Bai21
// var myArray = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// var sum = 0;
// for(var i = 0; i< myArray.length; i++){
//     sum = sum + myArray[i];
// }
// console.log("sum_my_array = ", sum);



    //Bai22
// var myArray = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// var sum = 0, count = 0, numberMax= myArray[0], numberMin= myArray[0];
// for(var i = 0; i< myArray.length; i++){
//     if(numberMax<= myArray[i]){
//         numberMax= myArray[i];
//     }
//     sum = sum + myArray[i];
//     count++;
// }
// for(var i = 0; i< myArray.length; i++){
//     if(numberMin>= myArray[i]){
//         numberMin= myArray[i];
//     }
// }
// console.log("number max = ", numberMax);
// console.log("number min = ", numberMin);
// console.log("TBC = ", sum/count);



    //Bai23
    //dung reduce()
// var  arr = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
// var occurrences = arr.reduce(function(obj, item) {
//     obj[item] = (obj[item] || 0) + 1;
//     return obj;
//   }, {});
  
//   console.log(occurrences);

// var occurrences = { };
// for (var i = 0; i < arr.length; i++) {
//    occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
// }

// console.log(occurrences);


    // Bai24
// var arr = [1,2,3,2,3,4,6,7];
// for(var i=0; i< arr.length;i++){
//     var count=0;
//     if(arr[i]>=2){
//         for(var index =2; index <=Math.sqrt(arr[i]);index++){
//             if(arr[i]%index ==0){
//                 count++;
//             }
//         }
//         if(count == 0){
//             console.log(arr[i]);
//         }
//     }
// }



    //Bai25
// var a = [1,2,3,2,3,4,6,7];
// for(var i=0;i<a.length;i++){
//     a[i]=a[i]*a[i]
// }
// console.log("Arr b :",a);



    //Bai27, 28, 29 
var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

    //Bai27
// for (var i = 0; i < students.length; i++) {
//     students[i].firstName = students[i].firstName.substring(0, 1).toUpperCase() + (students[i].firstName.substr(1)).toLowerCase();
//     console.log("Tên SV theo chuẩn: ",students[i]);
// }
// console.log('............................................')
// for (var i = 0; i < students.length; i++) {
//     if (students[i].firstName.includes("a")  && students[i].firstName.length >= 3) {
//         console.log("Tìm tên SV theo yêu cầu :", students[i]);
//     }
// }

    //Bai28
// for (let i = 0; i < students.length; i++) {
//     if (students[i].lastName.includes("Do")) {
//     console.log("Tìm SV cá biệt họ Do:", students[i]);
//     }
// }


    //Bai29 sắp xếp SV theo firstname
// students.sort(function(a, b) {
//     if (a.firstName < b.firstName) {
//       return -1;
//     }
//     if (a.firstName > b.firstName) {
//       return 1;
//     }
//     return 0;
//   });
// console.log(students);



    //Bai30
// a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
// // a = [1,1,1,1,1,1,1,1,1,1];
// function maxSecond(a) {
//     a = a.sort();
//     var max = a[a.length - 1];
//     for (var i = a.length - 1; i >= 0; i--) {
//         if (a[i] == max) {
//                 a.pop();
//         }
//     }
//     if (a.length === 0) {
//         return -1;
//     } else {
//             return a[a.length - 1];
//     }
// }
// console.log(a);
// console.log("Số lớn thứ hai: ", maxSecond(a));




//Bai32
// var arr = [1, 3, 6, 9, 11, 20];
// function insertNumber(a, k) {
//     a.push(k);
//     for (var i = a.length - 1; i >= 0; i--) {
//         if (a[i] < a[i - 1]) {
//             var temp = a[i];
//             a[i] = a[i - 1];
//             a[i - 1] = temp;
//         }
//     }
//     return a;
// }

// console.log(arr);
// console.log(insertNumber(arr, 13));


        //Bai33
var a = [9, 8, 7, 6, 4, 5, 3, 2, 1]
function sortArray(a) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a
}
console.log(a)
console.log(sortArray(a))
