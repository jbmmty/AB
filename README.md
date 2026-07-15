# To-Do List Application

A modern, feature-rich to-do list application built with vanilla HTML, CSS, and JavaScript. Tasks are automatically saved to your browser's local storage, so your data persists even after closing the browser.

## Features

✨ **Core Features:**
- ➕ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ❌ Delete tasks
- ✏️ Edit existing tasks
- 📊 View task statistics (total and completed count)
- 🗑️ Clear all completed tasks at once

🎯 **Filtering:**
- View all tasks
- Filter to show only active tasks
- Filter to show only completed tasks

💾 **Local Storage:**
- Automatically saves all tasks to browser local storage
- Tasks persist even after closing the browser
- No server or backend required

🎨 **User Interface:**
- Beautiful gradient design
- Responsive layout (works on mobile and desktop)
- Smooth animations and transitions
- Interactive hover effects
- Empty state messaging

## How to Use

1. **Open the Application**
   - Open `index.html` in your web browser

2. **Add a Task**
   - Type your task in the input field
   - Press Enter or click the "Add Task" button

3. **Complete a Task**
   - Check the checkbox next to the task to mark it as complete
   - Uncheck to mark it as incomplete

4. **Edit a Task**
   - Click the "Edit" button on any task
   - Modify the text and click "Save" or press Enter
   - Click "Cancel" to discard changes

5. **Delete a Task**
   - Click the "Delete" button to remove a task

6. **Filter Tasks**
   - Click "All" to view all tasks
   - Click "Active" to see only incomplete tasks
   - Click "Completed" to see only finished tasks

7. **Clear Completed**
   - Click "Clear Completed" to remove all finished tasks at once

## Local Storage

The application uses the browser's `localStorage` API to persist data. Tasks are automatically saved when you:
- Add a new task
- Complete or uncomplete a task
- Edit a task
- Delete a task

To clear all data, open your browser's developer tools and run:
```javascript
localStorage.removeItem('todoList');
```

## File Structure

```
├── index.html      # HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality and local storage logic
└── README.md       # This file
```

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Flexbox and Grid
- Local Storage API

## Technical Details

- **Language:** Vanilla JavaScript (No frameworks)
- **Storage:** Browser Local Storage
- **Responsive:** Mobile-first design
- **Accessibility:** Semantic HTML and keyboard navigation support

## Tips

- Use keyboard shortcuts for faster navigation (Enter to add tasks)
- Completed tasks are visually distinct with strikethrough text
- Your data is stored locally and never sent to any server
- Close and reopen the browser - your tasks will still be there!

Enjoy organizing your tasks! 📝
