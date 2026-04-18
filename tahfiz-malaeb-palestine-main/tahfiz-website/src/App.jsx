import React, { useState } from 'react';
import './App.css';
import SearchPage from './pages/SearchPage';
import StudentDetailPage from './pages/StudentDetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState('search');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // بيانات نموذجية (في تطبيق حقيقي ستأتي من API)
  const studentDatabase = [
    {
      id: 1,
      fullName: 'محمد أحمد علي خليل',
      nationalID: '123456789',
      dateOfBirth: '2010-05-15',
      guardianPhone: '+970599123456',
      guardianName: 'أحمد علي خليل',
      attendance: {
        present: 12,
        absent: 2,
        totalSessions: 14,
        attendanceRate: 85
      },
      memorization: {
        currentSurah: 'البقرة',
        currentPage: 45,
        totalPagesMemoized: 45,
        weeklyProgress: '5 صفحات'
      },
      evaluation: {
        weeklyScore: 85,
        rank: 1,
        notes: 'طالب مجتهد جداً'
      }
    },
    {
      id: 2,
      fullName: 'فاطمة محمود حسن أحمد',
      nationalID: '987654321',
      dateOfBirth: '2009-08-20',
      guardianPhone: '+970599654321',
      guardianName: 'محمود حسن أحمد',
      attendance: {
        present: 10,
        absent: 4,
        totalSessions: 14,
        attendanceRate: 71
      },
      memorization: {
        currentSurah: 'آل عمران',
        currentPage: 72,
        totalPagesMemoized: 72,
        weeklyProgress: '3 صفحات'
      },
      evaluation: {
        weeklyScore: 72,
        rank: 5,
        notes: 'متقدمة ومجتهدة'
      }
    }
  ];

  const handleStudentSelect = (nationalID) => {
    const student = studentDatabase.find(s => s.nationalID === nationalID);
    if (student) {
      setSelectedStudent(student);
      setCurrentPage('detail');
    } else {
      alert('لم يتم العثور على الطالب');
    }
  };

  const handleBackToSearch = () => {
    setCurrentPage('search');
    setSelectedStudent(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🎓 مركز تحفيظ ملعب فلسطين</h1>
          <p>منصة الأهالي للاطلاع على تقدم أبنائهم</p>
        </div>
      </header>

      <main className="main-content">
        {currentPage === 'search' && (
          <SearchPage onStudentSelect={handleStudentSelect} />
        )}
        {currentPage === 'detail' && selectedStudent && (
          <StudentDetailPage 
            student={selectedStudent} 
            onBack={handleBackToSearch}
          />
        )}
      </main>

      <footer className="footer">
        <p>© 2026 مركز تحفيظ ملعب فلسطين. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}

export default App;
