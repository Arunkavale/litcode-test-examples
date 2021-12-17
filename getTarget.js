// //[2,2,11,15] sum = 9 

// //output : 2,4

// // Given Number n = 1 output : what makes answer as 1 
// // N = 16 output = 4 


// function getTwoPower(n) {
//     let powerElement = 2;
//     let count = 0;
//     let power = 1;
//     if(n === 0) return 1;
//     if(n === 1) return 2;
//     for (let i = powerElement; i < n / 2 ; i + powerElement) {
//         if(power === n) {
//             return count;
//         } else {
//             power = power * i;
//             count++;
//         }
//     }
//     return 0;
// }




// let result = getTwoPower(3);
// console.log(result);

// function getTarget (array, sum) {
//     const map = {};
//     if(!array.length) return 0; 
//     for(let i =0 ; i< array.length; i++) {
//         let firstNum = array[i];
//         // for(let j = (i + 1) ; j< array.length; j++) {
//         //     if(  firstNum + array[j] === sum) {
//         //         return console.log(firstNum , array[j]);
//         //     }
//         // } 
//         if(map[array[i]]) {
//             return [map[array[i]], array[i]];
//         } else {
//             map[sum - array[i]] = array[i];
//         }
//     }
//     return 0;
//     // console.log(result);
//     // let sortedArray = array.sort((a, b) => {
//     //     return a - b;
//     // });

//     // while ( left < right) {
//     //     if(sortedArray[right] + sortedArray[left] === sum) {
//     //         return [sortedArray[right], sortedArray[left]];
//     //     } else if( sortedArray[left] + sortedArray[right]  < sum) {
//     //         left++;
//     //     } else {
//     //         right--;
//     //     }
//     // }
//     // return 0;
// }
// // let array = [2,10,2,15, 7]
// // let result = getTarget(array, 9);

// console.log("result :: ", result);

// let count = 0;
// setTimeout(() => {
//     console.log("setInterval");
//     count++;
//     setInterval(() => {
//         count++;
//         console.log("setTimeout ",count);
//     }, 1000);
// }, 500);

// let obj1 = {a: true};
// let obj2 = obj1;
// delete obj1.a;
// console.log(obj1);
// console.log(obj2);

// console.log(5^5);



// function _setInterval(fn, delay) {
//     const wrapper = () => {
//         fn();
//         // setTimeout(fn, 0);
//         return setTimeout(wrapper, delay)
//     }
//     setTimeout(wrapper, delay);
// }

// const test = () => {
//     console.log("IN test");
// }

// setInterval(test, 2000);
// _setInterval(test, 2000);

// function getTargetData(myPramas) {
//     console.log("inside get target data ");
// }
// getTargetData(1);
// console.log("Inside get target");

// for (var index = 0; index < 5; index++) {
//     function clse(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 0);
//     }
//     clse(index)
// }

let obj = {
    firstName:'Arun',
    lastName: 'kavale',
    fullName: function () {
        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    }
};


let obj2 = {
    firstName:'Arun 2',
    lastName: 'kavale',
};

Function.prototype.myBind = function (currentObj, ...arg) {
    console.log(currentObj);
    currentObj.fun = this;
    currentObj.fun(...arg);
};

obj.fullName.myBind(obj2);

