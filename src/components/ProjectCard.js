import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="card-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title}
          className="card-image"
        />
        <div className="card-overlay">
          <span className="view-details">View Details</span>
        </div>
      </div>
      <div className="card-content">
        <span className="card-category">{project.category}</span>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-student">By {project.student}</p>
        <div className="card-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
