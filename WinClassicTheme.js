let version = '2021.02.05.01';

let el;

const css = `@import url("https://slippinggitty.github.io/WinClassic.css");`;

let obj = {
    onImport: async function () {
      el = document.createElement('style');
  
      document.head.appendChild(el);
  
      el.appendChild(document.createTextNode(css));
    },
  
    remove: async function () {
      el.remove();
    },
  
    name: 'WinClassic',
    description: 'It sucks less.',
  
    author: ['SlippingGitty'],
  
    version
  };
  
  obj
