# GDSC FSC URL Shortener

## Overview
The GDSC FSC URL Shortener is a web application designed to help users manage and share URLs easily. Built for the Google Developer Student Clubs at Farmingdale State College, this application allows users to shorten links, making it convenient for sharing and managing links for events and resources.

## Major Components

1. **Dependency Management**
   - The project uses GitHub Actions for automating dependency updates via Dependabot for the npm package ecosystem.

2. **CI/CD Workflows**
   - Several GitHub workflows are defined for managing pull requests, performing code analysis with CodeQL, and automating code formatting with Prettier.
   - There’s also a workflow to mark stale issues and pull requests to maintain repository cleanliness.

3. **Frontend Components**
   - The application uses React for building the user interface. Key components include:
     - **Providers**: Wraps the application in context providers for theming and cookie consent.
     - **Head**: Manages the document head for SEO and Open Graph data.
     - **Form Components**: Custom components for handling forms, including input fields, labels, and validation messages.
     - **UI Components**: Reusable UI elements such as buttons, cards, dropdown menus, and tooltips.

4. **Styles**
   - Tailwind CSS is used for styling the application. Custom themes and utility classes are defined for consistent design.

5. **Service Workers**
   - Service workers are employed to enhance performance and provide offline capabilities.

## Installation Instructions

To set up the GDSC FSC URL Shortener locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/GDSC-FSC/gdsc-farmingdale-links.git
   cd gdsc-farmingdale-links
   ```

2. **Install Node.js and npm**
   Ensure you have Node.js (version 16 or later) and npm installed. You can download it from [nodejs.org](https://nodejs.org/).

3. **Install dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

4. **Run the development server**
   Start the application in development mode:
   ```bash
   npm run dev
   ```

5. **Access the application**
   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage Instructions

1. **Shorten URLs**: Enter a long URL in the input field and click the "Shorten" button to generate a shortened link.
2. **Manage Links**: Users can view and manage their shortened links from the dashboard.
3. **Share Links**: Copy the shortened links and share them via social media, emails, or other platforms.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

For more information and updates, please follow the [GDSC Farmingdale GitHub](https://github.com/GDSC-FSC/gdsc-farmingdale-links).