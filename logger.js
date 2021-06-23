var con = 1;

function sayOne(a,b,c){
    console.log(a +b+c)
}
sayOne(1,2,3)
module.exports.con = con //export an object
module.exports = con //export the variable
module.exports.say = sayOne 