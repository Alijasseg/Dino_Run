const rex = document.getElementById("rex");
const tree = document.getElementById("tree");
function jump() {
    if (rex.classList != "jump") {
    rex.classList.add("jump")

setTimeout(function(){
    rex.classList.remove("jump");
}, 300);
}
}
let isAlive = setInterval(function () {
    //get Y position of rex//
let rexTop = parseInt(window.getComputedStyle(rex).getPropertyValue("top"));
//get tree  x position//
let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));


//detect impact//
if (treeLeft <60 && treeLeft > 0 && rexTop >= 140){
    //impact//
    alert("Extinction!");
}

}, 10);

document.addEventListener("keydown", function(event){
    jump();
});

