const getTreeData = () => {
  return {
    element: 'me.jpg',
    link: 'myinfo.html',
    text: 'Me',
    left: {
      element: 'mama.jpg',
      link: 'mominfo.html',
      text: 'Mama',
      left: {
        element: 'apuL.jpg',
        link: 'llinfo.html',
        text: 'Lola Lydia',
      },
      right: {
        element: 'lolo.jpg',
        link: 'loloinfo.html',
        text: 'Lolo Pablito',
      },
    },
    right: {
      element: 'dad.jpg',
      link: 'dadinfo.html',
      text: 'Daddy',
      left: {
        element: 'apuP.jpg',
        link: 'lpinfo.html',
        text: 'Lola Persing',
      },
      right: {
        element: 'missing.jpg',
        link: 'missinginfo.html',
        text: 'Lolo Fredie',
      },
    },
  };
};

const renderTree = (node) => {
  const { left, right, element, link, text } = node;
  const imageSource = `src="${element}"`;
  const imageAlt = 'alt="Image"';
  const imageWidth = 'width=70';
  const imageHeight = 'height=70';
  const anchorTag = `<a href="${link}"><img ${imageSource} ${imageAlt} ${imageWidth} ${imageHeight} /></a>`;

  return `
    <div class="node__element">
      ${anchorTag}
      <div class="node__text">${text}</div>
    </div>
    ${
      left || right
        ? `
        <div class="node__bottom-line"></div>
        <div class="node__children">
          ${
            left
              ? `
              <div class="node node--left">
                ${renderTree(left)}
              </div>
              `
              : ""
          }
          ${
            right
              ? `
              <div class="node node--right">
                ${renderTree(right)}
              </div>
              `
              : ''
          }
        </div>
        `
        : ""
    }
  `;
};

const main = () => {
  const rootNode = getTreeData();
  const treeDOMElement = document.querySelector('.tree');
  treeDOMElement.innerHTML = renderTree(rootNode);
  const images = document.querySelectorAll('.node__element img');
  images.forEach(img => {
    img.style.border = '2px solid #916d60';
    img.style.borderRadius = '50%';
    img.style.marginTop = '15px';
  });
};

main();
