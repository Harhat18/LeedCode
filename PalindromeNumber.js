const isPalindrome = (x) => {
  const num = x;
  return num < 0
    ? -1 *
        Number(
          num
            .toString()
            .split("")
            .filter((r) => r != "-")
            .reverse()
            .join("")
        )
    : Number(num.toString().split("").reverse().join(""));
};
console.log(isPalindrome(10));
