const nameData = {
  zory: {
    title: 'warzone',
    content: 't.me/zorynem',
  },
  federal: {
    title: 'federal',
    content: 't.me/fd13201391',
  },
  someguy: {
    title: 'someguy',
    content: 't.me/simswapist',
  },
  soul: {
    title: 'soul',
    content: 't.me/zeropec',
  },
  jerked: {
    title: 'jerked',
    content: 't.me/skidegoer',
  },
  tormentzone: {
    title: 'tormentzone',
    content: 't.me/illegalizing',
  },
  courtzone: {
    title: 'courtzone',
    content: 't.me/digenic',
  },
// no more fed you cant do more
};
// hello skids from fed
const nameLinks = document.querySelectorAll('.names a');
nameLinks.forEach(link => {
  link.addEventListener('click', () => {
    const name = link.getAttribute('class');

    const { title, content } = nameData[name];

    const windowElement = document.createElement('div');
    windowElement.classList.add('window');

    const windowHeader = document.createElement('div');
    windowHeader.classList.add('window-header');

    const windowTitle = document.createElement('div');
    windowTitle.classList.add('window-title');
    windowTitle.textContent = title;

    const closeButton = document.createElement('div');
    closeButton.classList.add('window-close');
    closeButton.textContent = 'x';

    const windowContent = document.createElement('div');
    windowContent.classList.add('window-content');
    
    const paragraphs = content.split('\n');
    const firstParagraph = paragraphs[0];

    if (firstParagraph.includes('.')) {
      const linkElement = document.createElement('a');
      linkElement.href = 'https://' + firstParagraph;
      linkElement.target = '_blank';
      linkElement.textContent = firstParagraph;
      windowContent.appendChild(linkElement);

      if (paragraphs.length > 1) {
        const remainingContent = paragraphs.slice(1).join('\n');
        const remainingParagraph = document.createElement('p');
        remainingParagraph.textContent = remainingContent;
        windowContent.appendChild(remainingParagraph);
      }
    } else {
      const contentParagraph = document.createElement('p');
      contentParagraph.textContent = firstParagraph;
      windowContent.appendChild(contentParagraph);
    }

    windowHeader.appendChild(windowTitle);
    windowHeader.appendChild(closeButton);

    windowElement.appendChild(windowHeader);
    windowElement.appendChild(windowContent);

    document.body.appendChild(windowElement);

    let isDragging = false;
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;

    const handleDragStart = (event) => {
      isDragging = true;
      mouseOffsetX = event.clientX - windowElement.offsetLeft;
      mouseOffsetY = event.clientY - windowElement.offsetTop;
    };

    const handleDrag = (event) => {
      if (isDragging) {
        const newX = event.clientX - mouseOffsetX;
        const newY = event.clientY - mouseOffsetY;
        windowElement.style.left = `${newX}px`;
        windowElement.style.top = `${newY}px`;
      }
    };

    const handleDragEnd = () => {
      isDragging = false;
    };

    windowHeader.addEventListener('mousedown', handleDragStart);
    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('mouseup', handleDragEnd);

    closeButton.addEventListener('click', () => {
      document.body.removeChild(windowElement);
    });
  });
});

var button = document.getElementById('fullscreen-button');
var video = document.getElementById('video');
var audio = new Audio('audio/music.mp3');
audio.loop = true;

  var fadeInInterval = setInterval(function() {
    opacity += interval / duration;
    video.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInInterval);
    }
  }, interval);

button.addEventListener('click', function() {
  audio.play();
  button.style.display = 'none';
  fadeInVideo();
});

