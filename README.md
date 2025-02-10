# GDSC FSC URL Shortener

GDSC FSC URL Shortener is a web application built for managing and sharing shortened URLs, designed to keep users updated on GDSC FSC's latest events and domains.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Contributing](#contributing)
- [License](#license)

## Features
- Easy to use interface for shortening URLs.
- Supports multiple platforms and responsiveness.
- Built with modern technologies including React and TypeScript.
- Automated workflows for pull requests and issues.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GDSC-FSC/gdsc-farmingdale-links.git
   cd gdsc-farmingdale-links
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can use the following features:

- **Shorten URLs:** Enter the URL you want to shorten in the input field and submit.
- **Manage Links:** View, edit, or delete existing shortened URLs.
- **Responsive Design:** The application is designed to work on both desktop and mobile devices.

## Code Overview

The project consists of several key components:

### 1. **Workflows**
- **Labeler:** Automatically applies labels to pull requests based on modified paths.
- **Stale Issues & PRs:** Automatically marks issues and pull requests as stale after a specified period of inactivity.
- **Autofix:** Runs Prettier to format code and automatically commits changes.
- **CodeQL:** Analyzes the codebase for vulnerabilities and code quality.

### 2. **Frontend**
- Built with React and TypeScript, featuring components for UI elements such as buttons, cards, and forms.
- Utilizes utilities from libraries like Tailwind CSS for styling and Radix UI for accessible components.

### 3. **Backend**
- The backend logic handles URL shortening, storage, and management.
- Configured to work with a database for storing shortened URLs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 

---

Feel free to modify the README to better fit your project needs!