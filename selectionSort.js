let arr=[10,6,7,56,3,2,1]

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n ; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}


selectionSort(arr)