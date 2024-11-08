const add= document.querySelectorAll('.add'); //targetting or this will target all the items with class add
add.forEach(e=>{
    e.addEventlistener('click',()=>{
        const p=e.previousElementSibling.lastElementChild;   // targetting p element with class hide
        const itemadd = e.firstElementChild;    // targetting element i with class fa- plus
        const itemrmv = e.lastElementChild;   //targetting element i with class fa-minus

        e.classlist.toggle('none');
        itemadd.classlist.toggle('hide');
        itemrmv.classlist.toggle('hide');
        p.classlist.toggle('show');
    })
})
