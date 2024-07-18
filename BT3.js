function ktPalindrome(s) {
    if (s.length == 1) {
        return true;
    }
    else {
        const s1 = s.split('').reverse().join('');
        return (s == s1);
    }
}

let str = 'Xin chao';
if (ktPalindrome(str)) {
    console.log(str, 'la chuoi Palindrome');
}
else {
    console.log(str, 'khong la chuoi Palindrome');
}