/**
 * Facebook
 * 
 * Given a file path with folder names, '..' (Parent directory), and '.' (Current directory), return the shortest possible file path (Eliminate all the '..' and '.').

    Example
        Input: '/Users/Joma/Documents/../Desktop/./../'
        Output: '/Users/Joma'

        Input : /home/
        Output : /home

        Input : /a/./b/../../c/
        Output : /c

        Input : /a/..
        Output:/

        Input : /a/../
        Output : /

        Input : /../../../../../a
        Output : /a

        Input : /a/./b/./c/./d/
        Output : /a/b/c/d

        Input : /a/../.././../../.
        Output:/

        Input : /a//b//c//////d
        Output : /a/b/c/d
 */

const getAbsolutePath = path => {
    let dir = path.split('/');
    // console.log(dir);
    let stack = [];
    for (let i = 0; i < dir.length; i++) {
        let e = dir[i];
        if (e === '..') {
            stack.pop();
        } else if (e === '.') {
            continue;
        } else if (e !== '' && e !== ' ') {
            stack.push(e);
        }
    }
    return '/' + stack.join('/');
}

const path = '/Users/Joma/Documents/../Desktop/./../';
console.log(getAbsolutePath(path)); // '/Users/Joma'

const path2 = '/home/';
console.log(getAbsolutePath(path2)); // '/home'

const path3 = '/a/./b/../../c/';
console.log(getAbsolutePath(path3)); // '/c'

const path4 = '/a/..';
console.log(getAbsolutePath(path4)); // '/'

const path5 = '/a/../';
console.log(getAbsolutePath(path5)); // '/'

const path6 = '/../../../../../a';
console.log(getAbsolutePath(path6)); // '/a'

const path7 = '/a/./b/./c/./d/';
console.log(getAbsolutePath(path7)); // '/a/b/c/d'

const path8 = '/a/../.././../../.';
console.log(getAbsolutePath(path8)); // '/'

const path9 = '/a//b//c//////d';
console.log(getAbsolutePath(path9)); // '/a/b/c/d'