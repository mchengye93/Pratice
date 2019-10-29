/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let closing = {
        '{':'}',
        '(': ')',
        '[' : ']',
    }
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] ==='{' || s[i] === '[') {
            stack.push(closing[s[i]]);
        } else {
            let close = stack.pop();
            if (close !== s[i]) return false;
        }
    }
    return stack.length === 0;
};