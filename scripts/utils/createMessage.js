/**
 * Creates a message container and appends it to the parentElement
 * @param {*} parentElement
 * @param {string} messageType
 * @param {string} messageText
 * @example
 * const postFeedContainer = document.querySelector('#feed');
 * createMessage(postFeedContainer, 'error', 'There was a problem while loading the feed')
 */
export function createMessage(parentElement, messageType, messageText) {
  const message = document.createElement("div");
  message.classList.add(messageType);
  message.innerText = messageText;

  parentElement.append(message);
}
