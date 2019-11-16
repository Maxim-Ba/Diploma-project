export default function displayNoneOrBlock(element, curentClass) {
    element.classList.toggle(curentClass + '_closed')
}