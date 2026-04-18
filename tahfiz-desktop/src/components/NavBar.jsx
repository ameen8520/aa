import React from 'react';
import './NavBar.css';

function NavBar({ onNavigate, currentPage }) {
  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'add-student', label: 'إضافة طالب', icon: '➕' },
    { id: 'attendance', label: 'الحضور', icon: '📋' },
    { id: 'reports', label: 'التقارير', icon: '📊' },
    { id: 'settings', label: 'الإعدادات', icon: '⚙️' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🎓</span>
        <h1>تحفيظ ملعب فلسطين</h1>
      </div>

      <div className="nav-items">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="navbar-actions">
        <button className="icon-button" title="المساعدة">
          ❓
        </button>
        <button className="icon-button logout" title="تسجيل الخروج">
          🚪
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
