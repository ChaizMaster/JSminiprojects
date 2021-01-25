let trumpPosition=document.querySelector("#trump");
const MOVEBY=10;
window.addEventListener("load",()=>{
    trumpPosition.style.position='absolute';
    trumpPosition.style.left=0;
    trumpPosition.style.top=0;
});
window.addEventListener("keydown",(e)=>{
    if(parseInt(trumpPosition.style.top)>=440 && parseInt(trumpPosition.style.left)>=960){
        trumpPosition.style.top='0px';
        trumpPosition.style.left='0px';
    }
    switch(e.key){
        case 'w':
            if(parseInt(trumpPosition.style.top)<=10)return;
            trumpPosition.style.top=parseInt(trumpPosition.style.top)-MOVEBY+'px';
            break;
        case 's':
            if(parseInt(trumpPosition.style.top)>=440)return;
            trumpPosition.style.top=parseInt(trumpPosition.style.top)+MOVEBY+'px';
            break;
        case 'a':
            if(parseInt(trumpPosition.style.left)<=10)return;
            trumpPosition.style.left=parseInt(trumpPosition.style.left)-MOVEBY+'px';
            break;
        case 'd':
            if(parseInt(trumpPosition.style.left)>=1110)return;
            trumpPosition.style.left=parseInt(trumpPosition.style.left)+MOVEBY+'px';
            break;
    }
});