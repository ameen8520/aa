import React from 'react';
import './ActionButtons.css';

function ActionButtons({ actions }) {
  return (
    <div className="action-buttons">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`action-btn ${action.type}`}
          onClick={action.onClick}
          title={action.label}
        >
          <span className="action-icon">{action.icon}</span>
          <span className="action-label">{action.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ActionButtons;
