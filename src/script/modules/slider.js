// import Flickity from 'flickity';

// const elem = document.querySelector('.main-carousel');
// const flkty = new Flickity( elem, {
//     cellAlign: 'left',
//     contain: true
// });

// let resize = flkty.resize;
// flkty.resize = function() {
//   if ( !this.isActive ) {
//     return;
//   }
  
//   if(window.innerWidth < 600){
//     this.options.draggable = false;
//     this.options.wrapAround = false;
//     this.options.cellAlign = 'center';
//   }else{
//     this.options.draggable = true;
//     this.options.wrapAround = true;
//     this.options.cellAlign = 'left';
//   }
//   resize.call( this );
// };



// export {flkty};
// import '../pages/about.css';
// import {flkty} from './modules/slider';
// import Flickity from 'flickity';
import GitApi from './GitApi';
import GitCard from './gitCard';
// const elem = document.querySelector('.main-carousel');
const git = new GitApi();
const parentElement = document.querySelector('.git__slider');
const arrOfGitCards = git.query()
  .then(res =>{
    res.forEach((element) => {
      new GitCard(element, parentElement)
    });
    debugger
    })
  .catch(err=> console.log(err));
  export {arrOfGitCards} 