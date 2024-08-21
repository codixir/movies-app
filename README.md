# Movie App

A React-based movie browsing application that lets users explore and view detailed information about movies using data from the OMDB API.

## Features

- Browse movies on the homepage.
- View detailed information about a selected movie.

## Technologies Used

- React
- React Router
- OMDB API
- Vercel (for deployment)

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Install Node.js and npm:**

   - **MacOS:**
     ```bash
     brew install node
     ```
   - **Windows:**
     [Download Node.js](https://nodejs.org/) and follow the installation steps.

   - **Verify Installation:**
     ```bash
     node -v
     npm -v
     ```

2. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Obtain an OMDB API key:**
   - Sign up at [OMDB](http://www.omdbapi.com/apikey.aspx).

5. **Set up environment variables:**
   - Create a `.env` file in the root directory:
     ```properties
     REACT_APP_OMDB_API_KEY=your_api_key_here
     ```

### Running the App

Start the development server:
```bash
npm start
```

Access the app at [http://localhost:3000](http://localhost:3000).

### Deployment

1. **Sign up for [Vercel](https://vercel.com/).**

2. **Install the Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy the app:**
   ```bash
   vercel
   ```

4. **Configure environment variables on Vercel:**
   - In your Vercel dashboard, navigate to your project’s settings and add the OMDB API key as an environment variable: `REACT_APP_OMDB_API_KEY`.

## App Overview

- **Home Page**: Displays a list of movies fetched from the OMDB API.
- **Movie Detail Page**: Provides detailed information about a selected movie.

React Router is used to manage navigation between these pages.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [OMDB API](http://www.omdbapi.com/) for movie data
- [Create React App](https://create-react-app.dev/) for project setup

Contributions via issues or pull requests are welcome!