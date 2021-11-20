const hamburger = document.querySelector('.nav__hamburger');
const body = document.querySelector('body');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.hero__nav ');
const showDev = document.querySelector('.section__intro > :last-child');
const showDevChild = document.querySelector('.section__intro > :last-child span');

const showHideDevClosure = () =>{
    const whatiCanDo = ['developer' , 'designer' ,'oqtmm'];
    let i = 0;
    const generatedFunc = setInterval(() => {
        if(i === whatiCanDo.length){
            i = 0;
        }
        showDevChild.textContent = whatiCanDo[i++];

        showDev.classList.add('showdev');
        //kol mara ba7ot fe el task queue showdev be 3s we 7atet timeout gowa m4 (interval tany bara we adbdl bnhom) la2en da badeheyan 8abawa 3a4an hybd2o fe nafs el wa2t kol mara fe el browser api fa 3a4an kda 3mlt timeout gowa 3a4an adman en el queuing hy7sl wra el interval 3la tool m4 at the same time 
        setTimeout(() => {
            showDev.classList.remove('showdev');
        } , 1500)
    } , 2500);
    return generatedFunc;
}
//closure 3a4an asave el i we el array fe el function backpack bt3tha m4 el local store mtnsa4
//set interval hdwr 3ndha m4 htla2i httl3 3la backpack generated func htl2eha


const showHideDev = showHideDevClosure;
showHideDev();




body.addEventListener('click' ,  (e) => {
    
    if(e.target != navLinks && navLinks.classList.contains('nav_visible')){
        navLinks.classList.remove('nav_visible');
        
    }
 },true) 
 //hena ba5odha fe el capturing phase 3a4an m4l4 we a7ot fe nafs el w2t fa 
 // checking el body bey7sal abl el hamburger 3a4an el hamburger goz2 mn el body 
 
hamburger.addEventListener('click' ,  () => {
   navLinks.classList.add('nav_visible');
   
})

/* 
nav bar algorithm
1-if my scroll is at 0 background is transparent else background is ay loon ba2a lesa m3rf4
2-4of el 7araka law aktar mn el current e5fi el navbar tyb law a2al zaharo 3a4an kda ana bscroll up
3-we 5od value el 7araka 7otha fe el current kol mara bt3ml scroll
4- ah we 5ali balak en width el browser yob2a aktar mn 768 aw el breakpoint 3a4an mtz3l4 xD
*/
 //momken a3mlha be closure 3a4an a7ot el prevscroll fe 7ta lw7dha bas kda e4ta 
let prevScrollCoordinateY = window.scrollY;
window.addEventListener('scroll',()=>{
    let currentScrollCoordinateY = window.scrollY;
    if(currentScrollCoordinateY != 0){
        nav.style.backgroundColor = '#333';
        nav.style.boxShadow = '0 1px 3px rgba(50, 50, 50, 0.4)';
    }
    else{
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
    }
    if(window.innerWidth > 768 && currentScrollCoordinateY > prevScrollCoordinateY){
        nav.classList.add('moveup');
    }else{
        nav.classList.remove('moveup');
    }
    
    prevScrollCoordinateY = currentScrollCoordinateY;
  

})