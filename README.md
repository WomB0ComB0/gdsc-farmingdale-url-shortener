# GDSC FSC | Url Shortener

GDSC FSC is a web application designed to be a link shortener for the Google Developer Student Clubs at Farmingdale State College. This application makes it easy to manage and share URLs for staying updated on the latest events and domains.

## Major Components of the Code

### 1. **Frontend**
- **HTML/CSS/JavaScript**: The core of the application is built using HTML, CSS (with Tailwind CSS for styling), and JavaScript (React framework).
- **React Components**: The application uses React components for building the user interface. Components like `Button`, `Card`, `Tooltip`, and various form elements are implemented for a cohesive UI experience.
- **State Management**: The application utilizes React Hooks for managing state and props across components.

### 2. **Progressive Web App (PWA) Configuration**
- **Manifest File**: The `manifest.json` file contains metadata for the web app, such as the app name, icons, and theme colors, allowing it to be installed on devices.
- **Service Worker**: A service worker (`sw.js`) is included to cache assets and enable offline functionality.

### 3. **SEO and Analytics**
- **Meta Tags**: Utilizes meta tags in the HTML to improve SEO and social media sharing.
- **Google Tag Manager**: Integrated for tracking and analyzing user interactions.

### 4. **Dependency Management**
- **npm**: The project uses npm for managing dependencies, with a configured workflow for automatic dependency updates using GitHub Actions.

### 5. **GitHub Actions**
- **Continuous Integration**: Workflows for running checks, applying code formatting (Prettier), and analyzing code quality using CodeQL.

## Installation Instructions

To set up the GDSC FSC Url Shortener locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/GDSC-FSC/gdsc-farmingdale-links.git
   cd gdsc-farmingdale-links
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed (version 16 or higher). Then, run:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   Start the application locally by running:
   ```bash
   npm start
   ```

4. **Open the Application**
   Navigate to `http://localhost:3000` in your web browser to see the application in action.

## Usage Instructions

1. **Creating Short Links**: Enter the URL you want to shorten in the input field and click the 'Shorten' button.
2. **Managing Links**: Users can manage their shortened links via the user interface, which may include options to view, edit, or delete links.
3. **Sharing Links**: Once a link is shortened, it can be easily copied and shared with others.

## Contributing

Contributions are welcome! If you find any bugs or would like to propose features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
For any further questions or support, please reach out to the project maintainers. Enjoy using the GDSC FSC Url Shortener!