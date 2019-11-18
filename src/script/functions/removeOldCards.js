export default function removeOldCards(parentElement) {
  const arrChildren = parentElement.childNodes;
  while (parentElement.firstChild) {
    console.log(arrChildren);
    console.log(parentElement.firstChild);
    parentElement.removeChild(parentElement.firstChild);
    console.log(arrChildren);
  }

  // arrChildren.forEach(element => {
  //   element.remove();
  //   console.log(arrChildren)
  
  // });
  
}