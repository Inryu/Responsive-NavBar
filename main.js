const toggleBtn=document.querySelector('.navbar__toggleBtn'); //이 클래스를 가진 애들 연결시켜 할당.
const menu=document.querySelector('.navbar_menu'); //이 클래스를 가진 애들 연결시켜 할당.
const icons=document.querySelector('.navbar_icons'); //이 클래스를 가진 애들 연결시켜 할당.


//클릭될 때마다
toggleBtn.addEventListener('click',()=>{

    //toggle : 없으면 더해주고, 있으면 빼줌!
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    
})