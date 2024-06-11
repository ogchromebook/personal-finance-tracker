# Personal Finance Tracker

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

The Personal Finance Tracker is a web application designed to help users manage their personal finances. It allows users to track income, expenses, and provides insights into their spending habits. This application is built with Node.js and Express.js to create a RESTful API, and uses Handlebars.js as the template engine. It is backed by a PostgreSQL database with Sequelize ORM for database management. The application also includes user authentication, environment variable protection, and is deployed on Render.

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- PostgreSQL
- Sequelize ORM
- Bcrypt.js (for password hashing)
- Connect-flash (for flash messages)
- Dotenv (for environment variables)
- Express-session (for session management)
- Express-validator (for validation)
- Passport.js (for authentication)
- Passport-local (for local strategy authentication)
- Render (for deployment)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:ogchromebook/personal-finance-tracker.git 
   ```
2. Navigate to the project directory:
   ```bash
   cd personal-finance-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Usage

1. Navigate to the application in your web browser (i.e. http://localhost:3000) or via deployed render link.
2. Register a new account or log in with existing credentials.
3. Add your income, expenses, etc. and view your financial data.

## Authentication

User authentication is handled using express-session and passport. Sessions are used to maintain user state across different pages. Passwords are hashed using bcryptjs.

## Screenshots

![Home Page](link_here.png)
*Home Page*

![Dashboard](link_here.png)
*User Dashboard*

![Login Page](link_here.png)
*Login Page*

![Register Page](link_here.png)
*Register Page*

## Contributing

Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a Pull Request with detailed comments and a summary.

## License
MIT License

Copyright (c) 2024 Sam Kachergius | Danny Kramer | Thannia Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

- [Sam Kachergius](https://github.com/ogchromebook)
- [Thannia Hernandez](https://github.com/thernand09)
- [Danny Kramer](https://github.com/dannylkramer)