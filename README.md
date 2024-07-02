# Todo List Application

Welcome to the Todo List Application! This application allows you to add tasks, mark them as completed, and delete tasks. It is built using Next.js and styled with Tailwind CSS.

## Table of Contents

1. Features
2. Installation
3. Usage
4. Folder Structure
5. Contributing
6. License

## Features

* Add Tasks: Easily add new tasks to your todo list.
* Mark Tasks as Completed: Keep track of your progress by marking tasks as completed.
* Delete Tasks: Remove tasks that are no longer needed.

## Installation

To get started with the Todo List Application, follow these steps:

1. Clone the repository:
    ```bash```
    git clone https://github.com/Uche-Chidi/Todo_list.git
    cd todo-list-app

2. Install dependencies:
    ```bash```
    npm install

3. Run the development server:
    ```bash```
    npm run dev

4. Open http://localhost:3000 with your browser to see the result.

## Usage

### Adding Tasks
* Enter your task in the input field.
* Click the "Add Task" button.

### Marking Tasks as Completed
* Click the checkbox next to the task you want to mark as completed.

### Deleting Tasks
* Click the "Delete" button next to the task you want to remove.

## Folder Structure
```bash```
    todo-list-app/
    ├── public/
    │   ├── favicon.ico
    │   └── vercel.svg
    ├── src/
    │   ├── components/
    │   │   ├── Task.js
    │   │   ├── TaskList.js
    │   │   └── AddTaskForm.js
    │   ├── pages/
    │   │   ├── _app.js
    │   │   ├── index.js
    │   │   └── api/
    │   │       └── tasks.js
    │   ├── styles/
    │   │   ├── globals.css
    │   │   └── tailwind.css
    │   └── utils/
    │       └── taskUtils.js
    ├── .gitignore
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── README.md

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or create a pull request.

1. Fork the repository.

2. Create a new branch:
    ```bash```
    git checkout -b feature/your-feature-name

3. Make your changes and commit them:
    ```bash```
    git commit -m 'Add some feature'

4. Push to the branch
    ```bash```
    git push origin feature/your-feature-name

5. Open a pull request.
