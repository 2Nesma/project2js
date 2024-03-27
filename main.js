const question =document.querySelectorAll('.title_content');
question.forEach(function(question) {
    
    const btn1 = question.querySelector('.btn');
      
    btn1.addEventListener("click",function() {
        question.classList.toggle("show-text");
        question.forEach(function(item) {
            if(item !==question) {
                item.classList.remove("show-text");
            }
        })
    })
})