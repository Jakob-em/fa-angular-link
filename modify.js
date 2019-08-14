window.addEventListener('load', main, false);

function buildElement(name) {
  return `<fa-icon icon="${name}"></fa-icon>`;
}

function removeBounceAfterFinish(el) {
  setTimeout(() => {
    el.classList.remove('bounceIn');
  }, 500);
}

function main(evt) {
  itemWrapper = document.querySelector(
    'header > .bn.bb-l.bw2.b--gray1 > ul:first-child'
  );
  let nameElement = document.querySelector('h1 > span');
  let dividerIcon = document
    .querySelector('header > .bn.bb-l.bw2.b--gray1  .order-7-l')
    .cloneNode(true);
  dividerIcon.classList.add('order-8-l');
  dividerIcon.classList.add('ml2-l');
  dividerIcon.classList.remove('order-7-l');
  itemWrapper.appendChild(dividerIcon);
  let angularIcon = document.createElement('li');
  angularIcon.style.setProperty('color', '#ff4a2e');
  angularIcon.classList.add('order-8-l');
  angularIcon.classList.add('bounceIn');
  angularIcon.setAttribute('data-balloon', 'Copy as angular element');
  angularIcon.setAttribute('data-balloon-pos', 'down');
  angularIcon.innerHTML = `A`;

  removeBounceAfterFinish(angularIcon);

  angularIcon.onclick = () => {
    angularIcon.classList.add('bounceIn');

    let generatedElement = buildElement(nameElement.textContent);

    navigator.clipboard
      .writeText(generatedElement)
      .then(() => {})
      .catch(err => {
        console.log('Something went wrong', err);
      });

    removeBounceAfterFinish(angularIcon);
  };

  itemWrapper.appendChild(angularIcon);
}
