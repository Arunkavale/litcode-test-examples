var lengthOfLongestSubstring = function(s) {
    let max = 0, substring = '';
    for(let char of s) {
        const charIndex = substring.indexOf(char);
        substring = charIndex === -1 ? substring + char : substring.slice(charIndex + 1) + char;
        max = max < substring.length ? substring.length : max;
    }
    return max;
};

lengthOfLongestSubstring('abcabcbb');