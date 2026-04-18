import React from 'react';
import './StudentDetailPage.css';

function StudentDetailPage({ student, onBack }) {
  const attendancePercentage = Math.round(
    (student.attendance.present / student.attendance.totalSessions) * 100
  );

  return (
    <div className="student-detail-page">
      <button className="back-button" onClick={onBack}>
        ← عودة
      </button>

      <div className="detail-container">
        {/* البيانات الشخصية */}
        <div className="card personal-info">
          <h2>📋 البيانات الشخصية</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>الاسم الرباعي:</label>
              <p>{student.fullName}</p>
            </div>
            <div className="info-item">
              <label>رقم الهوية:</label>
              <p>{student.nationalID}</p>
            </div>
            <div className="info-item">
              <label>تاريخ الميلاد:</label>
              <p>{student.dateOfBirth}</p>
            </div>
            <div className="info-item">
              <label>جوال الأب/الأم:</label>
              <p>{student.guardianPhone}</p>
            </div>
            <div className="info-item">
              <label>اسم الأب/الأم:</label>
              <p>{student.guardianName}</p>
            </div>
          </div>
        </div>

        {/* الحضور والغياب */}
        <div className="card attendance-card">
          <h2>📅 الحضور والغياب</h2>
          <div className="attendance-stats">
            <div className="stat">
              <div className="stat-value present">{student.attendance.present}</div>
              <div className="stat-label">حاضر</div>
            </div>
            <div className="stat">
              <div className="stat-value absent">{student.attendance.absent}</div>
              <div className="stat-label">غائب</div>
            </div>
            <div className="stat">
              <div className="stat-value total">{student.attendance.totalSessions}</div>
              <div className="stat-label">إجمالي الجلسات</div>
            </div>
          </div>

          <div className="progress-section">
            <label>نسبة الحضور:</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${attendancePercentage}%` }}></div>
            </div>
            <p className="progress-text">{attendancePercentage}%</p>
          </div>
        </div>

        {/* الحفظ والتقدم */}
        <div className="card memorization-card">
          <h2>📖 الحفظ والتقدم</h2>
          <div className="memorization-info">
            <div className="info-item">
              <label>السورة الحالية:</label>
              <p>{student.memorization.currentSurah}</p>
            </div>
            <div className="info-item">
              <label>الصفحة ا��حالية:</label>
              <p>{student.memorization.currentPage}</p>
            </div>
            <div className="info-item">
              <label>إجمالي الصفحات المحفوظة:</label>
              <p>{student.memorization.totalPagesMemoized}</p>
            </div>
            <div className="info-item">
              <label>التقدم الأسبوعي:</label>
              <p>{student.memorization.weeklyProgress}</p>
            </div>
          </div>
        </div>

        {/* التقييم الأسبوعي */}
        <div className="card evaluation-card">
          <h2>⭐ التقييم الأسبوعي</h2>
          <div className="evaluation-info">
            <div className="score-box">
              <div className="score">{student.evaluation.weeklyScore}/100</div>
              <p>النقاط الإجمالية</p>
            </div>
            <div className="rank-box">
              <div className="rank">المرتبة: {student.evaluation.rank}</div>
              <p>من بين الطلاب المجتهدين</p>
            </div>
          </div>
          {student.evaluation.notes && (
            <div className="notes">
              <label>ملاحظات المعلم:</label>
              <p>{student.evaluation.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDetailPage;
