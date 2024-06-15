document.addEventListener('DOMContentLoaded', () =>{
  const etchSketch = document.querySelector('.etch-a-sketch');
  const height = 600;
  const width = 750;
  grid();

  function grid(){
    for(let i=0; i<16; i++){
      for(let j=0; j<16; j++){
        const divs = document.createElement('div');
        divs.style.width = width/16 + 'px';
        divs.style.height = height/16 + 'px';
        divs.style.border = 'solid';
        divs.setAttribute('class', 'contained-divs')
        etchSketch.appendChild(divs);
      }
    }
    addEventListener();
  }

  function getRandomNumber(){
    return Math.floor(Math.random() * 255 + 1);
  }

  function addEventListener(){
    const etchDivs = document.querySelectorAll('.contained-divs');
    etchDivs.forEach((items) => {
      items.addEventListener('mouseenter', () =>{
        items.style.backgroundColor = 'rgba(' + getRandomNumber() + ',' + getRandomNumber() + ',' + getRandomNumber() + ')';
      });
    });
  }

  const resetBtn = document.querySelector('res')
});