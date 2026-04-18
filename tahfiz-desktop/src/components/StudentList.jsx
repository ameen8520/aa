import React from 'react';
import './StudentList.css';

function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>قائمة الطلاب</h2>
      <div className="students-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <div className="student-header">
              <h3>{student.fullName}</h3>
              <span className="id-badge">{student.nationalID}</span>
            </div>
            <div className="student-info">
              <p><strong>تاريخ الميلاد:</strong> {student.dateOfBirth}</p>
              <p><strong>جوال الأب:</strong> {student.guardianPhone}</p>
              <p><strong>الحضور:</strong> {student.attendance?.present || 0}/{student.attendance?.totalSessions || 0}</p>
              <p><strong>التقدم:</strong> {student.memorization?.currentPage || 0} صفحة</p>
            </div>
            <div className="student-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{width: `${(student.attendance?.present / (student.attendance?.totalSessions || 1)) * 100}%`}}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
