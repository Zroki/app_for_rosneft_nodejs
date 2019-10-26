const btn = document.querySelector('#on');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

btn.addEventListener('click', () => {
  if (num1.value !== '' && num2.value !== '') {
    document.querySelector('#answer').innerText = +num1.value + +num2.value;
  }
});
