const messageForm = document.querySelector('#message-form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const messageList = document.querySelector('#message-list');
const clearMessagesButton = document.querySelector('#clear-messages');

clearMessagesButton.addEventListener('click', () => {
  messageList.innerHTML = '<p class="empty-state">No messages yet.</p>';
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    return;
  }

  const emptyState = messageList.querySelector('.empty-state');
  if (emptyState) {
    emptyState.remove();
  }

  const messageElement = document.createElement('article');
  messageElement.className = 'message';

  const nameElement = document.createElement('strong');
  nameElement.textContent = name;

  const textElement = document.createElement('p');
  textElement.textContent = message;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    messageElement.remove();

    if (messageList.children.length === 0) {
      const emptyState = document.createElement('p');
      emptyState.className = 'empty-state';
      emptyState.textContent = 'No messages yet.';
      messageList.appendChild(emptyState);
    }
  });

  messageElement.append(nameElement, textElement, deleteButton);
  messageList.appendChild(messageElement);

  messageForm.reset();
  nameInput.focus();
});