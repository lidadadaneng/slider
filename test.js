const isIterable = obj => obj!=null && typeof obj[Symbol.iterator]==='function';
function iterative(fn){
    return function (subject,...rest){
        if(isIterable(subject)){
            const ret = [];
            for (let obj of subject) {
                ret.push(fn.apply(this, [obj,...rest]));
            }
            return ret
        }
        return fn.apply(this,[subject,...rest])
    }
}
const sum = (a,b=0,c=0)=> a+b+c;
console.log(iterative(sum)([1,2,6,3,5,6],5,20))
