
const buttons = document.querySelectorAll('.accordion__question');

buttons.forEach(button => {
    button.addEventListener('click', () => {
       
        const item = button.closest('.accordion__item');
        const answer = item.querySelector('.accordion-collapse');

        document.querySelectorAll('.accordion__item').forEach(otherItem => {
            
            if (otherItem === item) return;
            const otherAnswer = otherItem.querySelector('.accordion-collapse');
            const otherIconDown = otherItem.querySelector('.arrow-down');
            const otherIconUp = otherItem.querySelector('.arrow-up');
            const otherQuestion = otherItem.querySelector('.accordion__question');
            
            otherAnswer.classList.remove('show');
            otherIconDown.style.display = 'block';
            otherIconUp.style.display = 'none';
            otherQuestion.style.fontWeight = '400';
        });

        const iconDown = item.querySelector('.arrow-down');
        const iconUp = item.querySelector('.arrow-up');

        const isVisible = answer.classList.toggle('show');
       
        iconDown.style.display = isVisible ? 'none' : 'block';
        iconUp.style.display = isVisible ? 'block' : 'none';
        button.style.fontWeight = isVisible ? '700' : '400';
    });
});



