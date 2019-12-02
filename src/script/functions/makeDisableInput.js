export default function diasableInput(input) {
  if (input.disabled == true) {
    return input.disabled = false;
  }
  return input.disabled = true;
};