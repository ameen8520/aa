const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../tahfiz.db');

let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database');
    initializeTables();
  }
});

function initializeTables() {
  db.serialize(() => {
    // جدول الطلاب
    db.run(`
      CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        date_of_birth TEXT,
        national_id TEXT NOT NULL UNIQUE,
        guardian_phone TEXT NOT NULL,
        guardian_name TEXT,
        current_surah TEXT DEFAULT 'الفاتحة',
        current_page INTEGER DEFAULT 0,
        enrollment_date TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // جدول الحضور
    db.run(`
      CREATE TABLE IF NOT EXISTS attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        session_date TEXT NOT NULL,
        status TEXT DEFAULT 'present',
        notes TEXT,
        FOREIGN KEY(student_id) REFERENCES students(id)
      )
    `);

    // جدول الحفظ
    db.run(`
      CREATE TABLE IF NOT EXISTS memorization (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        surah_name TEXT,
        ayah_start INTEGER,
        ayah_end INTEGER,
        completed_date TEXT,
        score INTEGER,
        FOREIGN KEY(student_id) REFERENCES students(id)
      )
    `);

    // جدول التقييمات الأسبوعية
    db.run(`
      CREATE TABLE IF NOT EXISTS weekly_evaluation (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        week_number INTEGER,
        year INTEGER,
        attendance_score INTEGER DEFAULT 0,
        memorization_score INTEGER DEFAULT 0,
        effort_score INTEGER DEFAULT 0,
        total_score INTEGER DEFAULT 0,
        rank INTEGER,
        FOREIGN KEY(student_id) REFERENCES students(id)
      )
    `);
  });
}

// دوال العمليات
const dbOperations = {
  // إضافة طالب
  addStudent: (studentData) => {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO students (full_name, date_of_birth, national_id, guardian_phone, guardian_name) 
         VALUES (?, ?, ?, ?, ?)`,
        [studentData.fullName, studentData.dateOfBirth, studentData.nationalID, studentData.guardianPhone, studentData.guardianName],
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  },

  // الحصول على جميع الطلاب
  getAllStudents: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM students', (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  // إضافة حضور
  addAttendance: (studentId, date, status) => {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO attendance (student_id, session_date, status) VALUES (?, ?, ?)`,
        [studentId, date, status],
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  },

  // تقييم أسبوعي
  addWeeklyEvaluation: (studentId, week, scores) => {
    return new Promise((resolve, reject) => {
      const total = scores.attendance + scores.memorization + scores.effort;
      db.run(
        `INSERT INTO weekly_evaluation (student_id, week_number, attendance_score, memorization_score, effort_score, total_score) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [studentId, week, scores.attendance, scores.memorization, scores.effort, total],
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  },

  // إغلاق قاعدة البيانات
  closeDatabase: () => {
    db.close();
  }
};

module.exports = dbOperations;
