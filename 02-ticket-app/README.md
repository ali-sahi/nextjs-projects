# Ticket App

This is a simple ticket management application built using Next.js framework. It allows users to create, read, update, and delete tickets.

## Features

- **Create Ticket:** Users can create a new ticket by filling out a form with necessary details.
- **Read Ticket:** All created tickets are listed, and users can view the details of each ticket.
- **Update Ticket:** Users can edit the details of a ticket after creation.
- **Delete Ticket:** Users have the option to delete a ticket.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered applications.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **MongoDB:** Used as a backend database to store and manage ticket data.
- **Mongoose:** An elegant MongoDB object modeling tool designed for asynchronous environments.

## Setup

### 1. Clone the repository:

git clone https://github.com/ali-sahi/nextjs-projects.git

### 2. Navigate to the project directory:

cd ticket-app

### 3. Install dependencies:

npm install
**or**
yarn install

### 4. Set up MongoDB:

1. Set up a MongoDB Atlas account or deploy MongoDB locally.
2. Create a MongoDB database for your project.
3. Add MongoDB connection details in your Next.js project. You can configure the connection using environment variables or directly in your project's configuration files.
   - If using MongoDB Atlas, you'll need to obtain the connection string from your MongoDB Atlas dashboard.
   - If deploying MongoDB locally, ensure your local MongoDB instance is running and specify the appropriate connection details.

Refer to MongoDB documentation for detailed instructions on setting up and configuring MongoDB for your project.

### 5. Start the development server:

npm run dev
**or**
yarn dev

6. Open your browser and visit http://localhost:3000 to view the app.
