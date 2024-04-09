# Habibi AI

Habibi AI is a friendly AI imbued with a sense of humor, designed to interact with users in an entertaining and engaging manner.

## API Routes

### `/chat` 
- **Method**: POST
- **Description**: Endpoint for sending and receiving generative AI responses.
- **Security**: Protected

### `/google` 
- **Method**: GET
- **Description**: Google OAuth endpoint for authentication.

### `/redirect` 
- **Method**: GET
- **Description**: Redirect URL for initiating Google OAuth process.

### `/users` 
- **Method**: POST
- **Description**: Endpoint to add a new user to the system.

### `/users/:email` 
- **Method**: GET
- **Description**: Endpoint to retrieve user information based on email.

## Data Storage

Habibi AI utilizes MongoDB to store user data. The schema for user data is as follows:

- **firstname**: string
- **lastname**: string
- **email**: string
- **picture**: string (URL for Google profile picture)

## Getting Started

To start using Habibi AI, follow the API routes and integrate with the provided endpoints. Ensure to handle authentication securely, especially for the protected `/chat` endpoint. Use the MongoDB schema to store and retrieve user data efficiently.

Enjoy interacting with Habibi AI, your friendly and funny AI companion!
