import Flickity from 'flickity';

const elem = document.querySelector('.main-carousel');
export const flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: true
});

