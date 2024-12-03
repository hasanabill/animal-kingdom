# Animal Kingdom

A full-stack web application for managing and adopting pets, built with the MERN stack.

## Features

- View a list of pets available for adoption.
- Add, edit, and delete pet details (Admin functionality).
- Individual pet detail view.
- Responsive design.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB

## Project Structure

```

/client # React frontend
/server # Node.js backend with Express

```

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or a MongoDB Atlas connection string

### Clone the Repository

```bash
git clone https://github.com/hasanabill/animal-kingdom.git
cd animal-kingdom
```

### Setup Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` folder with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Setup Client

1. Navigate to the client directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the client:
   ```bash
   npm run dev
   ```

### Access the Application

- Frontend: `http://localhost:5173/`
- Backend: `http://localhost:5000`

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
