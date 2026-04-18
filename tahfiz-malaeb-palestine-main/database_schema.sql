-- جدول الطلاب
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
);

-- جدول الحضور
CREATE TABLE IF NOT EXISTS attendance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    session_date TEXT NOT NULL,
    status TEXT DEFAULT 'present', -- present, absent, excused
    notes TEXT,
    FOREIGN KEY(student_id) REFERENCES students(id)
);

-- جدول الحفظ
CREATE TABLE IF NOT EXISTS memorization (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    surah_name TEXT,
    ayah_start INTEGER,
    ayah_end INTEGER,
    completed_date TEXT,
    score INTEGER,
    FOREIGN KEY(student_id) REFERENCES students(id)
);

-- جدول التقييمات الأسبوعية
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
);

-- فهارس للأداء الأفضل
CREATE INDEX idx_national_id ON students(national_id);
CREATE INDEX idx_student_attendance ON attendance(student_id);
CREATE INDEX idx_student_memorization ON memorization(student_id);
CREATE INDEX idx_weekly_evaluation ON weekly_evaluation(week_number, year);
