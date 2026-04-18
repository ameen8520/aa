import React, { useState } from 'react';
import './SearchPage.css';

function SearchPage({ onStudentSelect }) {
  const [nationalID, setNationalID] = useState('');
  const [showGuide, setShowGuide] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (nationalID.trim()) {
      onStudentSelect(nationalID);
    } else {
      alert('يرجى إدخال رقم الهوية الوطني');
    }
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-card">
          <h2>البحث عن الطالب</h2>
          <p className="subtitle">أدخل رقم الهوية الوطني لعرض بيانات طالبك</p>

          <form onSubmit={handleSearch}>
            <div className="search-input-group">
              <input
                type="text"
                value={nationalID}
                onChange={(e) => setNationalID(e.target.value)}
                placeholder="أدخل رقم الهوية الوطني (9 أرقام)"
                className="search-input"
                maxLength="9"
              />
              <button type="submit" className="search-button">
                🔍 بحث
              </button>
            </div>
          </form>

          <div className="example">
            <p>
              <strong>مثال:</strong> 123456789
            </p>
          </div>
        </div>

        {showGuide && (
          <div className="guide-section">
            <button
              className="close-guide"
              onClick={() => setShowGuide(false)}
            >
              ✕
            </button>
            <h3>📋 دليل الاستخدام</h3>
            <ul>
              <li>أدخل رقم الهوية الوطني الخاص بطالبك</li>
              <li>اضغط على زر البحث</li>
              <li>سيتم عرض تقدم طالبك والبيانات الخاصة به</li>
              <li>يمكنك رؤية الحضور والغياب والتقدم في الحفظ</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
