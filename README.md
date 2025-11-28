# Student Projects Gallery

A modern, responsive React image gallery showcasing student projects with filtering and modal view functionality.

## Features

- 📱 Responsive grid layout
- 🎨 Beautiful gradient design
- 🔍 Category filtering
- 🖼️ Modal view for project details
- ✨ Smooth animations and transitions
- 🎯 Clean and modern UI

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Technologies Used

- React 18
- CSS3 with Grid and Flexbox
- React Hooks (useState, useEffect)
- Unsplash images for demo

## Project Structure

```
src/
├── components/
│   ├── Gallery.js          # Main gallery component
│   ├── Gallery.css
│   ├── ProjectCard.js      # Individual project card
│   ├── ProjectCard.css
│   ├── Modal.js            # Project detail modal
│   └── Modal.css
├── App.js                  # Main app component
├── App.css
├── index.js                # Entry point
└── index.css
```

## Customization

To add your own projects, edit the `projects` array in `src/components/Gallery.js`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    student: 'Student Name',
    category: 'Category',
    image: 'image-url',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2', 'Tech3']
  },
  // Add more projects...
];
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## License

MIT
