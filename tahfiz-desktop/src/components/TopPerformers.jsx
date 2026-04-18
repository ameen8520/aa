import React from 'react';
import './TopPerformers.css';

function TopPerformers({ students }) {
  const medals = ['🥇', '🥈', '🥉'];
  
  const topStudents = [...students]
    .sort((a, b) => {
      const scoreA = (a.evaluation?.weeklyScore || 0);
      const scoreB = (b.evaluation?.weeklyScore || 0);
      return scoreB - scoreA;
    })
    .slice(0, 10);

  return (
    <div className="top-performers">
      <h2>🌟 أفضل 10 طلاب مجتهدين (هذا الأسبوع)</h2>
      <div className="performers-list">
        {topStudents.map((student, index) => (
          <div key={index} className={`performer-item rank-${index + 1}`}>
            <div className="performer-rank">
              <span className="medal">{index < 3 ? medals[index] : `${index + 1}`}</span>
            </div>
            <div className="performer-info">
              <h3>{student.fullName}</h3>
              <p className="performer-id">الرقم: {student.nationalID}</p>
            </div>
            <div className="performer-score">
              <span className="score">{student.evaluation?.weeklyScore || 0}</span>
              <span className="label">نقطة</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPerformers;
