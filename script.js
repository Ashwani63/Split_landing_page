let left = document.getElementById('left');
let right = document.getElementById('right') ;
let ps = document.getElementById('ps') ;
let xbox = document.getElementById('xbox') ;
let content1 = document.getElementById('content1') ;
let content2 = document.getElementById('content2') ;

left.addEventListener('mouseenter',(e)=>{
    xbox.style.left = '900px' ;
    ps.style.transform = 'scale(1.2,1.2)' ;
    content1.style.left = '250px' ;
    content2.style.right = '-20px' ;
})

left.addEventListener('mouseleave' , (e)=>{
    xbox.style.left = '700px' ;
    ps.style.transform = 'none' ;
    content1.style.left = '150px' ;
    content2.style.right = '150px' ;
})

right.addEventListener('mouseenter' , (e)=>{
    xbox.style.left = '350px' ;
    content1.style.left = '-10px' ;
    content2.style.right = '400px' ;
})

right.addEventListener('mouseleave',(e)=>{
    xbox.style.left = '700px'
    content1.style.left = '150px' ;
    content2.style.right = '150px' ;
})