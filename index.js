function menuToggle(){
    let menu=document.getElementById('menuItems');
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
}