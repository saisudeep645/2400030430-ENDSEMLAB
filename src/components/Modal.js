import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title}
            className="modal-image"
          />
        </div>

        <div className="modal-body">
          <span className="modal-category">{project.category}</span>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-student">Created by {project.student}</p>
          
          <div className="modal-section">
            <h3>Project Description</h3>
            <p>{project.description}</p>
          </div>

          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="modal-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
