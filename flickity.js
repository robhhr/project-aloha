var elem = document.querySelector('.slideshow');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.slideshow', {
  // options
});