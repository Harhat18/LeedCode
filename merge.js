const merge = (nums1, nums2) => {
  const newArr = nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  return newArr;
};
console.log([1, 2, 3, 0, 0, 0], [2, 5, 6]);
