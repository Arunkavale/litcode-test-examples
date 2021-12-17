const palinDromString = (s) => {
    let removedSpecialString = s.toLowerCase().replaceAll(",", "").replaceAll(":", "").replaceAll(" ", "");
    console.log(removedSpecialString);
    let right = removedSpecialString.length-1;
    let left = 0;
    while (left < right) {
        if(removedSpecialString[left] !== removedSpecialString[right]) {
            console.log(removedSpecialString[left] , "  ", removedSpecialString[right]);
            return false;
        }
        left++;
        right--;
    }
    return true;
}


let res = palinDromString("A man, a plan, a canal: Panama");
console.log(res);