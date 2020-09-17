module.exports = {
     wrap(fn){
         return (...args) => fn(...args).catch(args[2]);
     }
}
