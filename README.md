# GDSC FSC Url Shortener

This project is a web application developed by the Google Developer Student Clubs (GDSC) at Farmingdale State College. It serves as a URL shortener that allows users to easily manage and share shortened links. The application is built using React and includes features such as a responsive design, cookie consent management, and integration with Google Tag Manager for analytics.

## Major Parts of the Code

- **Assets**: Contains images, icons, and SVG files used throughout the application.
  - `/assets/images`: Images used in the application (e.g., logos, backgrounds).
  - `/assets/svgs`: SVG files for scalable vector graphics.

- **PWA Configuration**: Files required for configuring the application as a Progressive Web App (PWA).
  - `/pwa/manifest.json`: Manifest file that provides metadata for the PWA.
  - `/pwa/icons`: Various icon files for different devices and platforms.

- **Service Workers**: 
  - `sw.js`: Service worker file for enabling offline capabilities and caching strategies.
  - `registerSW.js`: Script to register the service worker.

- **Source Code**: 
  - The main application code is primarily located in the `/src` directory, which includes components, utilities, and hooks.
  - The main entry point for the application is located in `index.html` and `main.tsx`.

- **Styling**: 
  - Styles are managed using Tailwind CSS, with utility classes applied throughout the components.

- **GitHub Actions**: 
  - CI/CD workflows for automating tasks such as code linting, dependency updates, and stale issue management.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/GDSC-FSC/gdsc-farmingdale-links.git
   cd gdsc-farmingdale-links
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the application using:
   ```bash
   npm start
   ```

4. **Build for Production**:
   To create a production build of the application, run:
   ```bash
   npm run build
   ```

5. **Deploy**:
   You can deploy the built application to a hosting service of your choice.

## Usage

Once the application is running, you can:

- **Shorten URLs**: Enter a long URL into the input field and click the button to generate a shortened link.
- **Manage Links**: View and manage your shortened links from the dashboard.
- **Share Links**: Copy the shortened links to share with others easily.

The application is designed to be user-friendly and responsive, adapting to different screen sizes and devices.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to help us improve the application.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

Thank you to all contributors and the Google Developer Student Clubs for their support in developing this project.