/**
 * Google
 *
 * You are given a hash table where the key is a course code, and the value is a list of all the course codes that are prerequisites for the key.
 *  Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.
    Example:
        {
            'CSC300': ['CSC100', 'CSC200'],
            'CSC200': ['CSC100'],
            'CSC100': []
        }
    This input should return the order that we need to take these courses: ['CSC100', 'CSC200', 'CSCS300']
 */

const getPrerequisites = (hashTable) => {
    let q = [];
    let max, maxLen = 0;
    for (const key in hashTable) {
        if (hashTable[key]) {
            const e = hashTable[key];
            if (e.length > maxLen) {
                maxLen = e.length;
                max = key;
            }
        }
    }
    q.push(max);
    while (q.length) {

    }
    return q;
};

const courses = {
    'CSC300': ['CSC100', 'CSC200'],
    'CSC200': ['CSC100'],
    'CSC100': []
};
console.log(getPrerequisites(courses));