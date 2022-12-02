chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'inject') {
    const { content } = request;

    console.log(content);

    sendResponse({ status: 'success' });
  }
});
  
  const insert = (content) => {
    // Find Calmly editor input section
const elements = document.getElementsByClassName('droid');

if (elements.length === 0) {
  return;
}

const element = elements[0];
  
const pToRemove = element.childNodes[0];
pToRemove.remove();
  
    const splitContent = content.split('\n');
  
    splitContent.forEach((content) => {
      const p = document.createElement('p');
  
      if (content === '') {
        const br = document.createElement('br');
        p.appendChild(br);
      } else {
        p.textContent = content;
      }
  
      element.appendChild(p);
    });
  
    return true;
  };
  
  // Declare new function
const insert = (content) => {}

chrome.runtime.onMessage.addListener(
  // This is the message listener
  (request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
			
      // Call this insert function
      const result = insert(content);
			
      // If something went wrong, send a failes status
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
  }
);