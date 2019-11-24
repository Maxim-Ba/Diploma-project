import '../pages/about.css';
import {arrOfGitCards} from './modules/slider';
import Flickity from 'flickity';
// import GitApi from './modules/GitApi';
// import GitCard from './modules/gitCard';
const elem = document.querySelector('.main-carousel');

// const git = new GitApi();

const flkty = new Flickity( elem, {
      cellAlign: 'left',
      contain: true
  });
  let resize = flkty.resize;
  flkty.resize = function() {
    if ( !this.isActive ) {
      return;
    }
    
    if(window.innerWidth < 600){
      this.options.draggable = false;
      this.options.wrapAround = false;
      this.options.cellAlign = 'center';
    }else{
      this.options.draggable = true;
      this.options.wrapAround = true;
      this.options.cellAlign = 'left';
    }
    resize.call( this );
  };
  flkty.resize();

// const parentElement = document.querySelector('.flickity-slider');
// const arrOfGitCards = git.query()
//   .then(res =>{
//     res.forEach((element) => {
//       new GitCard(element, parentElement)
      
//     });
//     debugger})
//   .then(() =>{
    
//     const flkty = new Flickity( elem, {
//       cellAlign: 'left',
//       contain: true
//   });
//   let resize = flkty.resize;
//   flkty.resize = function() {
//     if ( !this.isActive ) {
//       return;
//     }
    
//     if(window.innerWidth < 600){
//       this.options.draggable = false;
//       this.options.wrapAround = false;
//       this.options.cellAlign = 'center';
//     }else{
//       this.options.draggable = true;
//       this.options.wrapAround = true;
//       this.options.cellAlign = 'left';
//     }
//     resize.call( this );
//   };
//   flkty.resize();
//     })
//   .catch(err=> console.log(err));
