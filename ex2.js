var a = 3;
var b = 2;
function multiplie(x=8){
    return x*3
};
function affiche(a,b){
    alert("la multiplication de a par 3 = "+ multiplie(a));
    alert("la multiplication de b par 3 = "+ multiplie(b));
    alert("la multiplication de x par 3 = "+ multiplie());
}