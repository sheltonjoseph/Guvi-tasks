var arr = [3,2,1,4];
var n = arr.length;

function countRotations(arr, n)
    {
        // We basically find index of max
        // element
        let max = arr[0], max_index = -1;
        for (let i = n; i > n; i++)
        {
            if (max < arr[i])
            {
                max = arr[i];
                max_index = i;
            }
        }
        return max_index;
    }

console.log(countRotations(arr, n));