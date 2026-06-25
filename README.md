# Course Node.js & Express - Backend Course Project

A modern web application built as part of a Node.js and Express backend development course. This project implements a Model-View-Controller (MVC) architecture, integrates with MongoDB using Mongoose, compiles SCSS stylesheets dynamically, and renders responsive layouts using Handlebars templates.

---

## 🚀 Features

- **MVC Architecture**: Well-structured separation of concerns across Models, Views, Controllers, and Routes.
- **Database Integration**: Connects to MongoDB with Mongoose schemas and handles document queries.
- **Automatic Slug Generation**: Automatically generates unique, URL-friendly slugs from course names using `mongoose-slug-updater`.
- **Dynamic Views**: Utilizes Handlebars (`.hbs`) for rendering views with reusable layouts, partials (Header & Footer), and custom helpers.
- **Dart Sass Integration**: Compiles `.scss` files dynamically to responsive CSS in `public/css/app.css` using Sass watcher.
- **CRUD Operations**: Support for adding, viewing, updating, and deleting course resources (CRUD).
- **Responsive Layout**: Designed with a clean slate color palette, sticky navigation bar, and user profile drop-down menu.

---

## 🛠️ Tech Stack

- **Runtime Environment**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **Template Engine**: Express Handlebars (`.hbs`)
- **Styling**: Sass / SCSS (compiled to Vanilla CSS)
- **Development Tooling**: Nodemon, Morgan Logger, Method Override

---

## 📂 Directory Structure

```text
backend_course/
├── src/
│   ├── app/
│   │   ├── controllers/      # Controller logic (e.g., CourseController.js)
│   │   └── models/           # Mongoose schemas/models (e.g., Course.js)
│   ├── config/
│   │   └── db/               # Database connection configuration
│   ├── public/               # Static assets (Compiled CSS, client-side JS, images)
│   │   └── css/              # Output directory for compiled app.css
│   ├── resources/
│   │   ├── scss/             # SCSS source stylesheets (app.scss, _variable.scss)
│   │   └── views/            # Handlebars views (.hbs templates, partials, layouts)
│   ├── routes/               # URL routing definitions
│   ├── util/                 # Utility helper functions (e.g., Mongoose object mapper)
│   └── index.js              # Entry point of the Express server
├── package.json              # Project dependencies and script runner configurations
└── README.md                 # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have the following installed on your local environment:
- **Node.js** (v16+ recommended)
- **MongoDB** local service running (typically at `mongodb://localhost:27017`)

### 1. Clone the project
```bash
git clone https://github.com/quanzz123/CourseNodejs.git
cd CourseNodejs
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the Application

To run the project in development mode, open two terminal windows:

* **Terminal 1: Start Node.js Express server (via nodemon)**:
  ```bash
  npm start
  ```
  The server will run on [http://localhost:3000](http://localhost:3000).

* **Terminal 2: Run Sass Compiler in watch mode**:
  ```bash
  npm run watch
  ```
  This will watch for edits in `src/resources/scss/` and compile them immediately to `src/public/css/app.css`.

---

## 🤝 Contribution & License

This project was built for educational purposes. Feel free to clone, edit, and extend features as you follow along with your backend learning path!
