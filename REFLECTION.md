# Campus Connect Reflection

## 1. What did you ask Copilot to help you build? How did you break down the problem?

I asked Copilot to help me build a simple student communication tool called Campus Connect. I broke the project into three separate files: `index.html` for the page structure, `style.css` for the design, and `script.js` for the interactive behavior.

First, I asked for a basic layout with a title, name input, message input, Send Message button, and message area. After that basic version was created, I asked to add a Delete button to each message. Finally, I asked to add a Clear All Messages button. This made the project easier to build one feature at a time.
![Copilot building the Campus Connect application](images/copilot-build.png)

## 2. How did your approach to asking questions change as you worked?

At the beginning, my request was broad because I was deciding what files and structure the project needed. Copilot first explained the recommended files without creating the application.

After the structure was clear, my requests became more specific. I asked Copilot to create the three files, then requested individual message deletion, and then requested clearing all messages. Each new request focused on one feature and included instructions to keep the existing features working and not change the overall design.

## 3. What parts of the development process with GitHub Copilot surprised you?

I was surprised that Copilot could build the initial working version from a short description and then update it in small steps without replacing the existing functionality. For example, the Send Message behavior continued working after Delete and Clear All Messages were added.

I also noticed that Copilot checked the files for errors after making changes. The editor reported no errors in the HTML, CSS, JavaScript, README, or reflection-related files that were checked. A Node.js syntax check was attempted, but Node.js was not available in the environment, so that check could not run.
![Copilot adding the Delete button](images/copilot-delete.png)

## 4. What did you learn about the technology you used that you didn't know before?

I learned how HTML, CSS, and JavaScript work together in a small browser application. HTML creates the form and message area, CSS controls the layout and colors, and JavaScript responds to user actions.

I learned that JavaScript can listen for a form submission, stop the page from refreshing with `preventDefault()`, read input values, and create new HTML elements for messages. I also learned how to attach a separate Delete button to each message and remove that message from the DOM. The Clear All button removes the displayed messages and restores the `No messages yet.` empty state.

The project also showed me that the `required` attribute can prevent empty form fields from being submitted, while JavaScript can trim the input and check it before creating a message.
![Testing the Campus Connect application](images/copilot-test.png)

## 5. What would you do differently if you had to build this again?

If I built Campus Connect again, I would plan the message behavior before writing the code and add tests for each feature while building it. I would test sending several messages, deleting one message, deleting the last message, and clearing all messages.

I would also try the application directly in a browser as part of the development process. In this conversation, the files were checked by the editor, but a browser-based test was not completed. I might also add message persistence later, so messages would not disappear when the page is refreshed, but that was outside the current project requirements.
I would also test each feature more carefully before finishing the project.

## How I Used Copilot Step by Step

1. I asked Copilot which files should be created and requested an explanation before any code was written.
2. I asked Copilot to create `index.html`, `style.css`, and `script.js` for the basic Campus Connect tool.
3. I asked Copilot to add a Delete button to every message while keeping sending messages working.
4. I asked Copilot to add a Clear All Messages button that restores the empty-state text.
5. I asked Copilot to create a README based on the completed project.
6. I used Copilot's validation checks after the changes. The editor found no errors, although the attempted Node.js syntax check could not run because Node.js was unavailable.

The completed features are sending messages, deleting individual messages, and clearing all messages.
