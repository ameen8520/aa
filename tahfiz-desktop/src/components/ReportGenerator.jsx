import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './ReportGenerator.css';

function ReportGenerator({ students }) {
  const [showQR, setShowQR] = useState(false);

  const exportToJSON = () => {
    const data = {
      students,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tahfiz-backup-${new Date().getTime()}.json`;
    link.click();
  };

  const exportToPDF = () => {
    const content = students.map(s => 
      `${s.fullName} - ${s.nationalID} - الحضور: ${s.attendance?.present || 0}`
    ).join('\n');
    
    alert('يرجى استخدام برامج PDF محترفة لتصدير البيانات');
    // في تطبيق حقيقي، استخدم مكتبة pdfkit
  };

  const generateQRCode = () => {
    return JSON.stringify({
      students,
      timestamp: new Date().getTime()
    });
  };

  return (
    <div className="report-generator">
      <h2>التقارير والتصديرات</h2>

      <div className="export-buttons">
        <button onClick={exportToJSON} className="btn-json">
          📥 تصدير JSON
        </button>
        <button onClick={exportToPDF} className="btn-pdf">
          📄 تصدير PDF
        </button>
        <button onClick={() => setShowQR(!showQR)} className="btn-qr">
          📱 كود QR
        </button>
      </div>

      {showQR && (
        <div className="qr-container">
          <h3>كود QR للمزامنة</h3>
          <QRCode value={generateQRCode()} size={200} />
          <p>امسح هذا الكود من تطبيق الهاتف للمزامنة</p>
        </div>
      )}

      <div className="report-summary">
        <h3>ملخص البيانات</h3>
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-value">{students.length}</span>
            <span className="stat-label">إجمالي الطلاب</span>
          </div>
          <div className="stat">
            <span className="stat-value">{students.filter(s => s.attendance?.present).length}</span>
            <span className="stat-label">الحاضرون اليوم</span>
          </div>
          <div className="stat">
            <span className="stat-value">{Math.round(students.reduce((sum, s) => sum + (s.evaluation?.weeklyScore || 0), 0) / students.length || 0)}</span>
            <span className="stat-label">متوسط النقاط</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportGenerator;
