let grid = document.getElementById('grid-container');


let selector = document.getElementById('myRange');

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


const fillGrid = function(){

for (i=1; i<=256; i++){
    
    let gridElement = document.createElement('div');
    grid.appendChild(gridElement);

    gridElement.classList.add('gridElement')

    //gridElement.innerHTML= i;

    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);

  
    }
}

const changeColor = function (e){
    console.log(e)
    if (e.type === 'mouseover' && !mouseDown) return
    else if(e.which===1){
        e.path[0].classList.add('painted')
    }
    else if (e.which===3){
        e.path[0].classList.remove('painted')
    }

}


fillGrid();

