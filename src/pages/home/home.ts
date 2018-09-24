import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  colors: Array<string> =['black','blue','green','cyan','magenta','red','yellow'];
  grid:Array<Array<string>> = [];
  constructor() {
    this.initialize();
  }

  square(i, j){
    let nextSquare = null;
    let clickedSquare = document.getElementById(i+''+j);
    clickedSquare.classList.remove(clickedSquare.classList[0]);
    if(j == this.colors.length-1){
      nextSquare = document.getElementById((i+1)%this.colors.length+''+(j+1)%this.colors.length);
      clickedSquare.classList.add(
        nextSquare.classList.length > 1
          ? nextSquare.classList[nextSquare.classList.length-1]
          : nextSquare.classList[0]);
    }else if(i != this.colors.length){
      nextSquare = document.getElementById(i%this.colors.length+''+(j+1)%this.colors.length);
      clickedSquare.classList.add(
        nextSquare.classList.length > 1
          ? nextSquare.classList[nextSquare.classList.length-1]
          : nextSquare.classList[0]);
    }
  }

  initialize(){
    for(let i=0; i<= this.colors.length; i++){
      this.grid.push(this.colors);
    }
  }
}
