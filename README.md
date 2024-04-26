# MERN Single Page Web Application


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installing

Clone the repository to your local machine:

```
git clone git@github.com:Retr0gr/singlepage-auth-web-app.git
cd singlepage-auth-web-app
```

Install dependencies for the server:

```
cd backend
npm install
```

Install dependencies for the client:

```
cd ../frontend
npm install
```

### Configuration

Create a `.env` file in the server directory to store environment variables:

```
DB_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=yourjwtsecret
```

### Running the Application

Start the backend server:

```
cd backend
npm start
```

In a new terminal, start the React client:

```
cd frontend
npm start
```

The application will be running at [http://localhost:3000](http://localhost:3000).

