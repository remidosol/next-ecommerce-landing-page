# Sneakers Landing Page

A fully responsive landing page showcasing collectible sneakers. This project is built using modern web technologies such as **Next.js**, **TailwindCSS**, **TypeScript**, **Storybook**, and **Docker Compose** to provide an elegant and efficient developer experience.

## Tech Stack

### Frontend

- **Next.js (with /app folder structure)**: The latest **Next.js** feature which uses the `/app` folder structure for optimized routing and layout handling.
- **React**: A JavaScript library for building user interfaces, with reusable components for flexibility.
- **TailwindCSS**: A utility-first CSS framework to create responsive designs faster and more efficiently.
- **TypeScript**: Superset of JavaScript providing strong type definitions to improve code reliability and developer experience.
- **CSS Modules**: CSS scoped to each component to avoid style conflicts.

### Development Tools

- **Storybook**: A tool to visualize components in isolation, allowing for better development and documentation of reusable components.
- **Docker Compose**: Provides an isolated environment to run the application and all necessary services easily and consistently.

## Features

- **Responsive Design**: Fully responsive UI for all devices, ensuring a great user experience across desktops, tablets, and mobiles.
- **Reusable Components**: Modular React components that follow clean code and best practices for easy maintenance and reuse.
- **Storybook Integration**: Visual documentation of UI components, enabling efficient development and testing.
- **Dockerized Setup**: Easily deploy and run the project in a containerized environment.
- **TailwindCSS Customization**: Tailored configurations for design consistency throughout the project.

## Project Structure

The project follows the `/app` directory structure introduced in Next.js for modular layout and routing. Below is the directory structure:

```
.
├── app
│   ├── header                  # Header section
│   ├── hero                    # Hero section
│   ├── features                # Features section
│   ├── why-join-us             # Why Join Us section
│   ├── customer-testimonals    # Customer Testimonals section
│   ├── collection              # Collection section
│   ├── global-community        # Global Community section
│   ├── footer                  # Footer section
│   ├── components
│   │   ├── Buttons         # Custom button components
│   │   │   └── *.stories.tsx   # Storybook files for visualizing components.
│   │   ├── Cards           # Custom card components for specific pages.
│   │   └── ... Other Custom Components
│   ├── styles
│   │   └── globals.css     # Global styles applied to the entire application.
│   ├── layout.tsx              # Main layout file for the landing page.
│   ├── page.tsx                # Main entry point of the landing page.
├── hooks
│   └── useDimensions.ts    # Custom hook for managing window and screen dimensions.
├── public
│   └── images              # Images used in the landing page.
├── tailwind.config.js      # TailwindCSS configuration.
├── docker-compose.yml      # Docker Compose setup for easy environment creation.
└── README.md               # Project documentation.
```

## Installation

Follow these steps to get the landing page up and running locally:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd sneakers-landing-page
   ```

2. **Install Dependencies**:

   Install all the required dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Project Locally**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application should now be running on `http://localhost:3000`.

4. **Run Storybook**:

   Launch Storybook to view individual components:

   ```bash
   npm run storybook
   # or
   yarn storybook
   ```

   Storybook should be running on `http://localhost:6006`.

5. **Run with Docker Compose**:

   If you prefer using **Docker Compose** for consistent environments, you can use the provided Docker setup.

   ```bash
   docker-compose up --build
   ```

   This will start the services defined in `docker-compose.yml`.

## Docker Compose Setup

The **Docker Compose** setup in this project allows for an isolated and consistent environment for development and deployment. The provided `docker-compose.yml` contains services for:

- **Node.js server** running the Next.js application.
- **Storybook** server for visualizing components.

### Running the Application with Docker Compose

To run the project using Docker Compose, simply execute:

```bash
docker-compose up --build
```

This will build and run the containerized version of the project, making it accessible at `http://localhost:3000`.

## Available Scripts

- **`npm run dev`**: Runs the app in the development mode.
- **`npm run storybook`**: Launches Storybook to visualize and develop components in isolation.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Runs ESLint checks for code quality.

## Component Overview

### HeroSection

- Showcases the main product.
- Includes responsive sneaker images and prominent call-to-action buttons.

### ProductShowcase

- Highlights various sneaker designs.
- Includes “Buy Now” buttons with hover effects.

### Testimonials

- Displays customer testimonials with avatars and descriptions.
- Styled using reusable CSS classes for a clean appearance.

### Footer

- Contains navigation links, social media icons, and contact information.

## License

This project is licensed under the MIT License. See the **LICENSE** file for more details.
