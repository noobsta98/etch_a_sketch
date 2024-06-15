document.addEventListener('DOMContentLoaded', () =>{
  const DEFAULT = 16
  const etchSketch = document.querySelector('.etch-a-sketch');
  const height = 600;
  const width = 750;
  grid();

  function grid(number = DEFAULT){
    for(let i=0; i<number; i++){
      for(let j=0; j<number; j++){
        const divs = document.createElement('div');
        divs.style.width = width/number + 'px';
        divs.style.height = height/number + 'px';
        divs.style.border = 'solid';
        divs.setAttribute('class', 'contained-divs')
        etchSketch.appendChild(divs);
      }
    }
    addEventListener();
  }

  function ungrid(){
    while(etchSketch.firstChild){
      etchSketch.removeChild(etchSketch.firstChild);
    }
  }

  function getRandomNumber(){
    return Math.floor(Math.random() * 255 + 1);
  }

  function addEventListener(){
    const etchDivs = document.querySelectorAll('.contained-divs');
    etchDivs.forEach((items) => {
      items.addEventListener('mouseover', () =>{
        items.style.backgroundColor = 'rgba(' + getRandomNumber() + ',' + getRandomNumber() + ',' + getRandomNumber() + ')';
      });
    });
  }

  const resetBtn = document.querySelector('.reset');
  resetBtn.addEventListener('click', () =>{
    let newEtch = '';
    while(!newEtch || isNaN(newEtch || newEtch < 0 || newEtch > 100)){
      newEtch = prompt('Enter new dimensions');
    }
    ungrid();
    grid(newEtch);  
  });
  
});