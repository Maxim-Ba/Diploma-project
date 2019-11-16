export default function removeOldCards(parentElement) {
  const arrChildren = parentElement.childNodes;
  arrChildren.forEach(element => {
    parentElement.removeChild(parentElement.firstChild)
  });
  
}