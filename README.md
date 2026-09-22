# Campus Connect

Campus Connect is a simple student communication tool for sharing messages in a clean, browser-based interface. Users can enter their name and a message, display it in the message list, and manage displayed messages with delete controls.

## Features

- Campus Connect header and clean responsive layout
- Name and message input fields
- Send messages to the on-page message list
- Delete individual messages
- Clear all displayed messages at once
- Empty-state message when no messages are available
- Client-side input validation through required fields

## Technologies Used

- HTML5 for page structure
- CSS3 for layout and styling
- Vanilla JavaScript for form handling and message management

## How to Run the Application

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser.

No server, package installation, or build process is required.

## How to Use the Application

1. Enter your name in the **Name** field.
2. Enter your message in the **Message** field.
3. Select **Send Message** to add the message to the list.
4. Select **Delete** on a message to remove only that message.
5. Select **Clear All Messages** to remove every displayed message.

The message list displays **No messages yet.** whenever it is empty. Messages are stored only in the current browser page and are not saved after the page is refreshed.

## Project Structure

```text
campus-connect/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Development Note

GitHub Copilot was used during development to assist with implementation and documentation.
