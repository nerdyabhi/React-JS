const container = document.querySelector('.container');

function customRender(reactElement) {
  const element = document.createElement(reactElement.type);
  for (prop in reactElement.props) {
    element.setAttribute(prop, reactElement.props[prop]);
  }
  element.innerHTML = reactElement.children;
  container.appendChild(element);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.github.com/nerdyabhi',
    target: '_blank',
  },

  children: 'Checkout my github page',
};

customRender(reactElement);
