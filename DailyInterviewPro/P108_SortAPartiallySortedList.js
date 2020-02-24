/**
 * Uber
 * 
 * You are given a list of n numbers, where every number is at most k indexes away from its properly sorted index. Write a sorting algorithm (that will be given the number k) for this list that can solve this in O(n log k)

Example:
    Input: [3, 2, 6, 5, 4], k = 2
    Output: [2, 3, 4, 5, 6]
As seen above, every number is at most 2 indexes away from its proper sorted index.
 */

const sortList = (A, k) => {
    // Function to sort an array using insertion sort
    let i, key, j, size = A.length;
    for (i = 1; i < size; i++) {
        key = A[i];
        j = i - 1;

        // Move elements of A[0..i-1], that are greater than key, to one position ahead of their current position. This loop will run at most k times
        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = key;
    }
}

// const kSort = (arr, n, k) => {

//     // min heap 
//     PriorityQueue < Integer > priorityQueue = new PriorityQueue<>();

//     // add first k + 1 items to the min heap 
//     for (let i = 0; i < k + 1; i++) {
//         priorityQueue.add(arr[i]);
//     }

//     let index = 0;
//     for (let i = k + 1; i < n; i++) {
//         arr[index++] = priorityQueue.peek();
//         priorityQueue.poll();
//         priorityQueue.add(arr[i]);
//     }

//     Iterator < Integer > itr = priorityQueue.iterator();

//     while (itr.hasNext()) {
//         arr[index++] = priorityQueue.peek();
//         priorityQueue.poll();
//     }

// }

const arr = [3, 2, 6, 5, 4], k = 2;
sortList(arr, k);
console.log(arr);