# Linguify - Real-time Multilingual Translation Platform

Linguify is a web application that provides real-time voice-to-text and text-to-voice translation, supporting multiple Indian regional languages and dialects. The platform is specifically designed to assist individuals with hearing and speech impairments.

## Features

- Real-time voice-to-text translation
- Text-to-voice conversion
- Support for multiple Indian languages
- Accessibility features for hearing and speech impaired users
- Modern, responsive user interface
- Real-time translation display

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js with Express
- Speech Recognition: Web Speech API
- Text-to-Speech: Web Speech API
- Translation: Google Cloud Translation API
- Styling: Tailwind CSS
- Database: MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google Cloud Platform account (for Translation API)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/linguify.git
cd linguify
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
GOOGLE_CLOUD_API_KEY=your_google_cloud_api_key
PORT=5000
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
```

## Project Structure

```
linguify/
├── frontend/           # React frontend application
├── backend/           # Node.js backend server
├── docs/             # Documentation
└── README.md         # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.