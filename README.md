# serving-data-to-web-application Project
https://serving-data-to-web-application.vercel.app/

## Overview

This project is a web application built to demonstrate the ability to set up a database, fill it with data, and build a web application that communicates with the database through APIs to serve the data. The project uses Svelte for the front end, JavaScript and TypeScript for scripting, Supabase for the database, and Vercel for deployment.

## Features

- **Svelte Frontend**: The web application is built using Svelte, a modern front-end framework that provides a highly reactive and efficient user interface.
- **Supabase Database**: Supabase is used as the backend database to store and manage the data.
- **TypeScript and JavaScript**: TypeScript and JavaScript are used for scripting and adding functionality to the application.
- **APIs**: The application communicates with the database through APIs to fetch and serve data dynamically.
- **Vercel Deployment**: The application is deployed on Vercel, ensuring a fast and reliable hosting solution.

## Technologies Used

- **Svelte**: A front-end framework for building highly reactive user interfaces.
- **JavaScript**: A programming language used for client-side scripting.
- **TypeScript**: A strongly typed superset of JavaScript that adds static types.
- **Supabase**: An open-source Firebase alternative providing all backend needs.
- **Vercel**: A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.

## Setup and Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/joseraul42/serving-data-to-web-application.git
    cd serving-data-to-web-application
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Configure Supabase**:
    - Sign up at [Supabase](https://supabase.io/) and create a new project.
    - Note your Supabase URL and API key.
    - Create tables and populate them with your data as needed.

4. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add your Supabase URL and API key to the `.env` file:
      ```env
      VITE_SUPABASE_URL=your-supabase-url
      VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
      ```

5. **Run the development server**:
    ```sh
    npm run dev
    ```

6. **Build for production**:
    ```sh
    npm run build
    ```

7. **Deploy on Vercel**:
    - Follow the [Vercel documentation](https://vercel.com/docs) to deploy your project.

## Usage

Once the project is set up and running, you can access the web application at `http://localhost:(Your port number)` (or the Vercel-provided URL if deployed). The application will fetch data from the Supabase database and display it dynamically.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions and suggestions!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Svelte](https://svelte.dev/)
- [Supabase](https://supabase.io/)
- [Vercel](https://vercel.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

