document.getElementById("inputNumberWork").maxLength = 2;

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength || object.value <= 0) {
    object.value = object.value.slice(0, object.maxLength);
  }
}
