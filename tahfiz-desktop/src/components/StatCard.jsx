import React from 'react';
import './StatCard.css';

function StatCard({ icon, title, value, color = 'primary' }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <p className="stat-title">{title}</p>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;
