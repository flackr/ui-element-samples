'use strict';

function initializeHideyBar(elem) {

  // Find scroller.
  let scroller = elem.parentNode;
  while (scroller && getComputedStyle(scroller).overflow == 'visible')
    scroller = scroller.parentNode;
  if (!scroller) {
    scroller = document.scrollingElement;
  } else {
    // The scroller needs to contain absolute position descendants.
    if (getComputedStyle(scroller).position == 'static')
      scroller.style.position = 'relative';
  }

  // Create an absolute position container for the hidey bar and a spacer to
  // consume the space it takes up in the document.
  let container = document.createElement('div');
  let spacer = document.createElement('div');
  container.style.position = 'absolute';
  container.style.width = '100%';

  spacer.style.height = elem.offsetHeight;
  elem.parentNode.insertBefore(container, elem);
  elem.parentNode.insertBefore(spacer, container);
  container.appendChild(elem);
  
  function updateSizes() {
    let scrollHeight = scroller.scrollHeight;
    let viewportHeight = scroller.clientHeight;
  }
  
  scroller.addEventListener('scroll', updateStaticPosition);
}