import React, { useState } from 'react';
import './Gallery.css';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Sample student projects data
  const projects = [
    {
      id: 1,
      title: 'Smart Home Automation',
      student: 'Alice Johnson',
      category: 'IoT',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=400&fit=crop',
      description: 'An IoT-based smart home system that controls lights, temperature, and security using mobile app.',
      technologies: ['Arduino', 'React Native', 'Firebase']
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      student: 'Bob Smith',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=400&fit=crop',
      description: 'Interactive online learning platform with video lectures, quizzes, and progress tracking.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'AI Image Recognition',
      student: 'Carol Davis',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=400&fit=crop',
      description: 'Machine learning model for real-time object detection and classification.',
      technologies: ['Python', 'TensorFlow', 'OpenCV']
    },
    {
      id: 4,
      title: 'Mobile Fitness Tracker',
      student: 'David Lee',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop',
      description: 'Fitness tracking app with workout plans, calorie counter, and progress analytics.',
      technologies: ['Flutter', 'Dart', 'SQLite']
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      student: 'Emma Wilson',
      category: 'Blockchain',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=400&fit=crop',
      description: 'Secure and transparent voting system using blockchain technology.',
      technologies: ['Solidity', 'Ethereum', 'Web3.js']
    },
    {
      id: 6,
      title: 'Weather Prediction App',
      student: 'Frank Miller',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=400&fit=crop',
      description: 'Weather forecasting application using historical data and machine learning algorithms.',
      technologies: ['Python', 'Scikit-learn', 'API Integration']
    },
    {
      id: 7,
      title: 'Social Media Dashboard',
      student: 'Grace Taylor',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop',
      description: 'Analytics dashboard for managing multiple social media accounts in one place.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL']
    },
    {
      id: 8,
      title: 'AR Museum Guide',
      student: 'Henry Brown',
      category: 'AR/VR',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500&h=400&fit=crop',
      description: 'Augmented reality application for interactive museum tours and exhibitions.',
      technologies: ['Unity', 'ARKit', 'C#']
    },
    {
      id: 9,
      title: 'Task Management System',
      student: 'Ivy Martinez',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
      description: 'Collaborative task management tool with real-time updates and team coordination.',
      technologies: ['Angular', 'Firebase', 'Material UI']
    }
  ];

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="gallery-container">
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
