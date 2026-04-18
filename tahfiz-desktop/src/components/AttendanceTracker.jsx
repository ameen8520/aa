import React, { useState } from 'react';
import './AttendanceTracker.css';

function AttendanceTracker({ students }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState({});

  const dayNames = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الجمعة'];
  const today = new Date(selectedDate);
  const dayName = dayNames[today.getDay()];

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const handleSave = () => {
    console.log('تم حفظ الحضور:', attendance);
    alert('تم حفظ سجل الحضور بنجاح!');
  };

  return (
    <div className="attendance-tracker">
      <h2>تسجيل الحضور والغياب</h2>
      
      <div className="attendance-info">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-picker"
        />
        <span className="day-name">{dayName}</span>
      </div>

      <div className="attendance-table">
        <table>
          <thead>
            <tr>
              <th>الطالب</th>
              <th>الرقم الوطني</th>
              <th>حاضر</th>
              <th>غائب</th>
              <th>معذور</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.fullName}</td>
                <td>{student.nationalID}</td>
                <td>
                  <input
                    type="radio"
                    name={`attendance-${index}`}
                    value="present"
                    onChange={() => handleAttendanceChange(student.nationalID, 'present')}
                    checked={attendance[student.nationalID] === 'present'}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={`attendance-${index}`}
                    value="absent"
                    onChange={() => handleAttendanceChange(student.nationalID, 'absent')}
                    checked={attendance[student.nationalID] === 'absent'}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={`attendance-${index}`}
                    value="excused"
                    onChange={() => handleAttendanceChange(student.nationalID, 'excused')}
                    checked={attendance[student.nationalID] === 'excused'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handleSave} className="save-btn">حفظ الحضور</button>
    </div>
  );
}

export default AttendanceTracker;
