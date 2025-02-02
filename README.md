# FAQ Backend API

This is a backend API for managing FAQs with multi-language support and a WYSIWYG editor. It uses Node, mongoose, Express, and Redis for caching. Translations are handled via the Google Translate API. The project includes unit tests, and documentation.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Admin Panel](#admin-panel)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This Node.js project develops a REST API for managing Frequently Asked Questions, which supports multilingual capabilities. It allows storing FAQs with their translations in more than one language and uses WYSIWYG editors for formatting the answers into rich text. The API will support language selection through a query parameter, while translations are cached using Redis to ensure efficient retrieval. The project will include automated translations (using a translation service like Google Translate or a similar library), fallback to English if a translation isn't available, and comprehensive unit tests. The codebase will follow best practices and include a detailed README with installation instructions and API usage examples. Version control will be managed with Git, following conventional commit message formatting.
## Tech Stack

- **Node.js**: JavaScript runtime for building scalable backend applications.
- **Express**: Web framework for Node.js to handle HTTP requests and routes.
- **MongoDB**: NoSQL database for storing FAQ data.
- **Mongoose**: ODM (Object Document Mapper) for interacting with MongoDB.
- **AdminJS**: Admin panel to manage the FAQ data.
- **Supertest**: For testing the API endpoints.
- **Jest**: JavaScript testing framework for running unit and integration tests.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **dotenv**: For managing environment variables.

## Features

- **Read FAQ**: Retrieve all FAQs or a single FAQ by ID.
- **Admin Panel**: A web-based interface to manage FAQs using AdminJS.
- **API Security**: Basic security measures implemented for the API.

## Installation

### Prerequisites

To get this project up and running, you need the following tools installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance like MongoDB Atlas)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management
- [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/) (Latest version)

### Setup Instructions

1. **Clone the repository:**

   ```bash
   https://github.com/sparshbhardwaj209/BharatFDFaqs.git

2. **Install the required node modules**
   ```bash
   npm install or npm i

3. **Make sure you have MongoDB compass Installed**

4. **Make sure you have installed Redis in your system**

     *follow these steps to install redis:(If you are using Windows!)*
     - wsl --install
     - curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
     - echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
     - sudo apt-get update
     - sudo apt-get install redis

5. **Time to start Redis-server**
    ```bash
    sudo service redis-server start
    ```
    *check if it is running correctly or not:*
    ```bash
    ping
    ```
    (If it sends back PONG it is up and running)

6. Now create some sample documents in the MongoDB database. Example: 
   ```bash
   {
      "_id": {
      "$oid": "679e690e4f6de34419bcb49f"
    },
      "question": "What are you doing?",
      "answer": "<p>I am playing with Node JS</p>"
    }

7. Now you are all set to Hit the API
   ```bash
   npm run start
   ```

   *If you want to start the app in development mode:*
   ```bash
   npm run dev
   ```

   *If you want to run unit test cases:*
   ```bash
   npm test
   
8. Time to hit GET API:
   ```bash
   http://localhost:8000/api/faqs
   ```

   *This will give you the list of all the stored documents*
    
9. To translate the returned documents/faqs into Hindi:
    ```bash
    http://localhost:8000/api/faqs?lang=hi
    ```

   *This will give you the list of all the stored documents in Hindi*

10. To translate the returned documents/faqs into Bangla:
    ```bash
    http://localhost:8000/api/faqs?lang=bn
    ```

   *This will give you the list of all the stored documents in Bangla*

11. You can explore the Admin Section using:
     ```bash
    http://localhost:8000/admin
    ```

12. Perform Unit Testing:
     ```bash
    npm test
    ```
