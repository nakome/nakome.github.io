const {el,mount} = redom;


class App{
  constructor(){
     this.el = el('h1','Moncho Varela.');
  }
}


const app = new App();
mount(document.querySelector('#root'),app);