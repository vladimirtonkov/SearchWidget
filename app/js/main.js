
const InnerBlock = document.querySelector('.search__inner')
const ShowInsertText = document.querySelector('.search__img')
const Input = document.querySelector('.search__input')

if (ShowInsertText) {
  ShowInsertText.addEventListener('click', () => {

      if (ShowInsertText.closest('.show-input')) {
        InnerBlock.classList.remove('show-input')
        Input.classList.remove('show-placeholder')
        Input.style.color = '#fff';

      } else {
        InnerBlock.classList.add('show-input')
        Input.style.color = '#000';
        Input.classList.add('show-placeholder')

      }
  }) 
}


