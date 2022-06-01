// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

const trimIt = function(string) {
    let a = " Function Up "
    const b = a.trim();
    console.log(b)
}
 const changetoLowerCase = function(){
    let str = "pyThoN is a hIGH LevEl lanGUAgE";
    let  res = str.toLowerCase();
   console.log(res);
 }


 const changeToUpperCase = function(){
     let a = "pyThoN is a hIGH LevEl lanGUAgE";
     let ress = a.toUpperCase();
     console.log(ress);
 }


 module.exports.trimIt = trimIt
 module.exports.changetoLowerCase = changetoLowerCase
 module.exports.changeToUpperCase = changeToUpperCase
