const container = document.querySelector('#container');

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm Red!"
red.style.cssText = "color:red;"

container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "I'm a blue h3!"
blue.style.cssText = "color:blue;"

container.appendChild(blue);

const pinkDiv = document.createElement('div');