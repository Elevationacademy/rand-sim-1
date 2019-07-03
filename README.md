# Running/Environment

- Make sure you **fork** this repository to your own Github, then clone it to your computer
- From the project root directory, run `npm install`, then run `node server.js`
- Next, go to `http://localhost:3001/` in your browser
- **Note**: if you make changes in `api.js` you **must** "exit the server" by pressing `ctrl + c` in the terminal, and then run `node server.js` again to "start the server" again

### Debugging
When you do a `console.log` inside of `api.js`, you won't see the log in the browser. You'll see it in the terminal where you ran `node server.js`, so make sure to look there as well for errors/logs.


# Requirements (bug fixes)

Make it work. Should be able to:    
- Add new `todo` properly
- Mark a `todo` as complete by clicking checkmark
- Delete a `todo` by clicking trashcan

Files you should be working with:
- `index.html`
- `main.js`
- `api.js` (inside of `/server/routes`)

# Features
- Allow the user to "toggle" a complete
    - Clicking the checkmark once "completes" the task, clicking it again "uncompletes" it
- Convert to OOP!
- Allow the user to set a "priority" for each `todo`
    - "HIGH" priority `todo`s should have a background color of red, "MED" orange, and "LOW" green
- Clicking a `todo` "upgrades" the priority, i.e. clicking a "LOW" priority `todo` will change it to "MED" priority, "MED" to "HIGH", and "HIGH" goes back to "LOW"
- Convert to Handlebars!
