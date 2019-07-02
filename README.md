# Running

- From the project root directory, run `npm install`, then run `node server.js`
- Next, go to `http://localhost:3001/` in your browser



# Requirements (bug fixes)

Make it work. Should be able to:    
- Add new `todo`
- Mark a `todo` as complete by clicking checkmark
- Delete a `todo` by clicking trashcan

# Features
- Allow the user to "toggle" a complete
    - Clicking the checkmark once "completes" the task, clicking it again "uncompletes" it
- Convert to OOP!
- Allow the user to set a "priority" for each `todo`
    - "HIGH" priority `todo`s should have a background color of red, "MED" orange, and "LOW" green
- Clicking a `todo` "upgrades" the priority, i.e. clicking a "LOW" priority `todo` will change it to "MED" priority, "MED" to "HIGH", and "HIGH" goes back to "LOW"
- Convert to Handlebars!