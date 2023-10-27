function Menu(e) {
   
        let list = document.querySelector('ul');
       e.name === 'menu-outline'  ?
       (e.name = "close", list.classList.add('top-[90px]'), list.classList.add('opacity-100')) 
       :  
       (e.name = "menu-outline", list.classList.remove('top-[90px]'), list.classList.remove('opacity-100')) 
       
}