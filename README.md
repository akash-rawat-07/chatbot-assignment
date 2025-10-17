# Tender Evaluation Platform

## 📋 Description
This is a React's Chatbot Assignment


## 🛠 Technology Stack
- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Build Tool**: Vite

## 📋 Prerequisites
Before running this project, ensure you have the following installed:
- **Node.js** v22.13.0 (LTS) - [Download here](https://nodejs.org/)
- **Yarn** package manager - [Installation guide](https://yarnpkg.com/getting-started/install)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd iocl-fe
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables** (if applicable)
   ```bash
   cp .env
   # Edit .env file with your configuration
   ```

4. **Start the development server**
   ```bash
   yarn start
   ```

The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure
```
src/
├── api/                    # API calling common functions
├── app/                    # Redux store configuration
├── assets/                 # Static media files (images, SVGs)
├── components/             # Reusable UI components
├── containers/             # Small components required by pages
├── css/                    # Custom CSS files
├── data/                   # Hardcoded data and constants
├── features/               # Redux slices for state management
├── hooks/                  # Custom React hooks
├── pages/                  # Main application pages
└── utils/                  # Utility and helper functions
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Runs the app in development mode |
| `yarn build` | Builds the app for production |


## 🐛 Troubleshooting

### Common Issues and Solutions

**Node Version Issues**
```bash
# Use Node Version Manager to switch to the correct version
nvm use 22.13.0
# or install the specific version
nvm install 22.13.0
```

## 🏗 Building for Production

1. **Create production build**
   ```bash
   yarn build
   ```

2. **Serve production build locally** (optional)
   ```bash
   npx serve -s build
   ```

The build folder will contain the optimized production files ready for deployment.

**Made with ❤️ by Frontend Developer**