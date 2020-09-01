// leetcode 905 Sort Array By Parity
function sortArrayByParity(A) {
    
};

function bubbleSort(arr) {
    for (let i=1; i<arr.length; i++) {
        for (let j=0; j<arr.length-i; j++) {
            if (!lessOrEqual(arr[j], arr[j + 1])) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function insertSort(arr) {
    for (let i=1; i<arr.length; i++) {
        let key = arr[i], j = i - 1;
        while (j >= 0 && !lessOrEqual(arr[j],  key)) {
            arr[j + 1] = arr[j];
            j -= 1
        }
        arr[j + 1] = key;
    }
}

function quickSort(arr) {

}

function lessOrEqual(num1, num2) {
    return num1 % 2 <= num2 % 2;
}
