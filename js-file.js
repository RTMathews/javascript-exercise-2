const container = document.querySelector('#container');

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm Red!"
red.style.cssText = "color:red;"

container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');