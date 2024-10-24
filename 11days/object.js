/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(typeof(obj) !== null){
        return Object.keys(obj).length === 0;
    }
    return true;
    
};
console.log(isEmpty);
