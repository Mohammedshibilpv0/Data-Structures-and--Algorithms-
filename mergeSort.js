function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
    const merged = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            merged.push(left[leftIdx]);
            leftIdx++;
        } else {
            merged.push(right[rightIdx]);
            rightIdx++;
        }
    }

    return merged.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}


const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);



