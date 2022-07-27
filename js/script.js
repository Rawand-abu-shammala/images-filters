let filters = document.querySelectorAll('li');
let images = document.querySelectorAll('img');

filters.forEach((li)=> {

    li.addEventListener('click' , function() {
        filters.forEach((li)=>{
            li.classList.remove('active');
            this.classList.add('active');
        })
    });

    li.addEventListener('click', function(){
        images.forEach((img)=>{
            img.style.display = 'none';
        });

        document.querySelectorAll(this.dataset.category).forEach((item)=>{
            item.style.display ='block';
        });
    })



});