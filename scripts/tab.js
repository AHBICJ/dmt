const tabs= document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
let currentSelect = 0;
tabs[currentSelect].classList.add('active');
contents[currentSelect].classList.add('show');
tabs.forEach(ele=>{
    ele.addEventListener('click',e=>{
        if (parseInt(e.currentTarget.dataset.idx)==currentSelect) return;
        else{
            tabs[currentSelect].classList.remove('active');
            contents[currentSelect].classList.remove('show');
            currentSelect=parseInt(e.currentTarget.dataset.idx);
            tabs[currentSelect].classList.add('active');
            contents[currentSelect].classList.add('show');
        }
    })
})
