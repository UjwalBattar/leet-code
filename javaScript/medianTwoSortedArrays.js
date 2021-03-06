// There are two sorted arrays nums1 and nums2 of size
// m and n respectively.
//
// Find the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
//
// You may assume nums1 and nums2 cannot be both empty.
//
// Example 1:
//
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
//
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let joined = [];

  while (nums1.length > 0 && nums2.length > 0) {
  	if (nums1[0] <= nums2[0]) {
  		joined.push(nums1.shift());
  	} else {
  		joined.push(nums2.shift());
  	}
  }

  joined = joined.concat(nums1, nums2);

  let mid = Math.floor(joined.length / 2);
	if (joined.length % 2 === 0) {
		return (joined[mid] + joined[mid - 1]) / 2;
	} else {
		return joined[mid];
	}
};
