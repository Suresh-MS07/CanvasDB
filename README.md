# [CanvasDB](https://canvas-db.vercel.app/)

CanvasDB is a full-stack web application built with Next.js, TypeScript, Tailwind CSS, MongoDB, Prisma, and NextAuth for visually designing and managing database schemas.

## Features

- User registration and authentication
- Visual database schema creation
- Relationship mapping between entities
- AI-powered database schema generation from natural language prompts
- Paste-to-visualize feature to instantly convert existing schemas into interactive diagrams

## Demo

You can check out a live demo of the CanvasDB project [here](https://canvas-db.vercel.app/).

## Screenshots

<kbd><img width="944" alt="LoginModal" src="https://github.com/ghantibarun/CanvasDB/blob/main/app/assets/CanvasDB-Login.png"></kbd>

<kbd><img width="944" alt="HomePage" src="https://github.com/ghantibarun/CanvasDB/blob/main/app/assets/CanvasDB_HomePage.png"></kbd>

<kbd><img width="944" alt="Schema-dashboard" src="https://github.com/ghantibarun/CanvasDB/blob/main/app/assets/CanvasDB-File.png"></kbd>

## Prerequisites

Make sure you have the following software installed on your system:

- git If you want to clone the project from GitHub and work with it locally, you will need to have Git installed on your system. You can download and install Git from the official website (https://git-scm.com/).

- Node.js Application requires Node.js to be installed on your system in order to run. You can download and install the latest version of Node.js from the official website (https://nodejs.org/).

## Installation

- Clone the repository:

  ```
  git clone https://github.com/ghantibarun/CanvasDB.git
  ```

- Navigate to the project directory:

  ```
  cd CanvasDB
  ```

- Install the dependencies:

  ```
  npm install
  ```

- Set up the environment variables:

  1.  Create a `.env` file in the root directory.

  2.  Add the following variables to the .env file, replacing the placeholder values with your own:

      ```
      DATABASE_URL=<your-mongodb-uri>
      NEXTAUTH_URL=http://localhost:3000
      NEXTAUTH_SECRET=<your-nextauth-secret>
      GITHUB_ID=<your-github-client-id>
      GITHUB_SECRET=<your-github-client-secret>
      GOOGLE_CLIENT_ID=<your-google-client-id>
      GOOGLE_CLIENT_SECRET=<your-google-client-secret>
      GROQ_API_KEY=<your-groq-api-key>
      ```

## Usage

- Start the development server:

  ```
  npm run dev
  ```

- Open your browser and visit `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
