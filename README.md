# PbS Project

## Overview
PbS is a full-stack application that consists of a Python backend and a React.js frontend. The backend is built using Flask (or FastAPI) and serves as an API for the frontend. The frontend is a React application that provides a user interface for interacting with the backend.

## Project Structure
```
PbS
├── backend
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
├── frontend
│   ├── package.json
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   └── index.js
│   └── README.md
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install the required dependencies using:
   ```
   pip install -r requirements.txt
   ```
3. Run the backend application:
   ```
   python app.py
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install the required dependencies using:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Docker Setup
To run the application using Docker, ensure you have Docker and Docker Compose installed. Then, execute the following command in the root directory of the project:
```
docker-compose up
```

## Usage
Once the backend and frontend are running, you can access the application in your web browser at `http://localhost:3000`. The API can be accessed at `http://localhost:5000` (or the port specified in your configuration).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.