# Input: [1, 0, 3, 0, 5]
# Output: [1, 3, 5, 0, 0]
#
# Input: [12, 2, 0, 0, 3, 4]
# Output: [12, 2, 3, 4, 0, 0]
#
# Input: [0, 0, 2, 4, 6]
# Output: [2, 4, 6, 0, 0]

def zero_ord_arr(arr)
  z = 0
  i = 1
  while i < arr.length
    if arr[z] != 0 && arr[i] == 0
      z = i
    end
    if arr[z] == 0 && arr[i] != 0
      arr[z], arr[i] = arr[i], arr[z]
      z += 1
    end
    i += 1
  end
  arr
end

zero_ord_arr([1, 0, 3, 0, 5])
