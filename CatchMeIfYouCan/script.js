let position;
var count=0;
let lastRender=0;
let theBox=document.querySelector("#box");
const RENDERSPEED=2;
window.addEventListener('load',()=>{
    theBox.style.position='absolute';
    theBox.style.x=0;
    theBox.style.y=0;
});
function main(currentTime){
    window.requestAnimationFrame(main);
    let secondsSinceLastRender=(currentTime-lastRender)/1000;
    let timeToMoveBox=1/RENDERSPEED;
    if(secondsSinceLastRender<timeToMoveBox)return;
    lastRender=currentTime;
    changePosition(count++);
}
window.requestAnimationFrame(main);
function changePosition(value){
    position=getRandomLocation();
    if(value%2==0){
        theBox.style.top=parseInt(theBox.style.x)+parseInt(position.x)+'px';
        theBox.style.left=parseInt(theBox.style.y)+parseInt(position.y)+'px';
    }
    else{
        theBox.style.top=parseInt(theBox.style.x)-parseInt(position.x)+'px';
        theBox.style.left=parseInt(theBox.style.y)-parseInt(position.y)+'px';
    }

}
function getRandomLocation(){
    return {
        x:Math.floor(Math.random()*500)+1,
        y:Math.floor(Math.random()*500)+1
    }
}