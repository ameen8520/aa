import React, { useState } from 'react';
import './StudentForm.css';

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationalID: '',
    guardianPhone: '',
    guardianName: '',
    memorization: {
      currentSurah: 'الفاتحة',
      currentPage: 0,
      weeklyPages: 0
    },
    attendance: {
      present: 0,
      absent: 0,
      totalSessions: 0
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.nationalID) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }
    onAddStudent(formData);
    setFormData({
      fullName: '',
      dateOfBirth: '',
      nationalID: '',
      guardianPhone: '',
      guardianName: '',
      memorization: { currentSurah: 'الفاتحة', currentPage: 0, weeklyPages: 0 },
      attendance: { present: 0, absent: 0, totalSessions: 0 }
    });
    alert('تم إضافة الطالب بنجاح!');
  };

  return (
    <div className="student-form">
      <h2>إضافة طالب جديد</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>الاسم الرباعي *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="محمد أحمد علي خليل"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>تاريخ الميلاد</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>رقم الهوية الوطني *</label>
            <input
              type="text"
              name="nationalID"
              value={formData.nationalID}
              onChange={handleChange}
              placeholder="123456789"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>جوال الأب/الأم *</label>
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              placeholder="+970599123456"
              required
            />
          </div>
          <div className="form-group">
            <label>اسم الأب/الأم</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="أحمد علي خليل"
            />
          </div>
        </div>

        <div className="form-group">
          <label>السورة الحالية</label>
          <input
            type="text"
            name="memorization.currentSurah"
            value={formData.memorization.currentSurah}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              memorization: { ...prev.memorization, currentSurah: e.target.value }
            }))}
          />
        </div>

        <button type="submit" className="submit-btn">إضافة الطالب</button>
      </form>
    </div>
  );
}

export default StudentForm;
