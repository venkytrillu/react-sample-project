# React Sample Project

This Proof of Concept (POC) demonstrates the initial implementation of a React-based web application with modular component architecture and CSS modules.

## Project Structure

```
react-sample-project/
├── myapp/                  # Main React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   ├── header.jsx
│   │   │   ├── header.module.css
│   │   │   ├── navbar.jsx
│   │   │   └── navbar.css
│   │   ├── App.jsx        # Main App component
│   │   └── index.js       # Entry point
│   └── package.json
├── refresher/             # Learning materials and examples
└── react-web-app/         # Additional React applications
```

## Technologies Used

- **React** v19.2.3
- **React DOM** v19.2.3
- **React Scripts** v5.0.1
- **CSS Modules** for component-scoped styling
- **Testing Library** for component testing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the myapp directory:
   ```bash
   cd myapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Features

- Component-based architecture
- CSS Modules for scoped styling
- Modular header and navbar components
- Responsive design

## Development

This project uses Create React App as its foundation, providing a modern build setup with no configuration required.

### Component Guidelines

- Use CSS Modules for component styling (`.module.css` files)
- Import CSS modules as default: `import styles from './component.module.css'`
- Use functional components with hooks

## License

This is a practice project for learning React concepts.
