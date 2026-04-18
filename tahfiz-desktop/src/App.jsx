import React, { useState, useEffect } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import AttendanceTracker from './components/AttendanceTracker';
import ReportGenerator from './components/ReportGenerator';
import TopPerformers from './components/TopPerformers';

function App() {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (pwd) => {
    if (pwd === 'admin123') {
      setIsAuthenticated(true);
      setPassword(pwd);
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">🎓 تحفيظ ملعب فلسطين</div>
        <div className="nav-buttons">
          <button onClick={() => setCurrentPage('home')}>الرئيسية</button>
          <button onClick={() => setCurrentPage('add-student')}>إضافة طالب</button>
          <button onClick={() => setCurrentPage('attendance')}>الحضور</button>
          <button onClick={() => setCurrentPage('reports')}>التقارير</button>
          <button onClick={() => setIsAuthenticated(false)}>تسجيل الخروج</button>
        </div>
      </nav>

      <div className="container">
        {currentPage === 'home' && (
          <>
            <TopPerformers students={students} />
            <StudentList students={students} />
          </>
        )}
        {currentPage === 'add-student' && <StudentForm onAddStudent={(student) => setStudents([...students, student])} />}
        {currentPage === 'attendance' && <AttendanceTracker students={students} />}
        {currentPage === 'reports' && <ReportGenerator students={students} />}
      </div>
    </div>
  );
}

function LoginPage({ onLogin }) {
  const [pwd, setPwd] = useState('');

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>🎓 تحفيظ ملعب فلسطين</h1>
        <input
          type="password"
          placeholder="أدخل كلمة المرور"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onLogin(pwd)}
        />
        <button onClick={() => onLogin(pwd)}>دخول</button>
      </div>
    </div>
  );
}

export default App;
