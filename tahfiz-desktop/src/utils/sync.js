const QRCode = require('qrcode');
const fs = require('fs');

const syncManager = {
  // توليد QR Code
  generateQRCode: async (data) => {
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify(data));
      return qrCodeDataUrl;
    } catch (err) {
      console.error('Error generating QR code:', err);
      throw err;
    }
  },

  // تصدير إلى JSON
  exportToJSON: (data, fileName) => {
    try {
      const json = JSON.stringify(data, null, 2);
      fs.writeFileSync(fileName, json, 'utf-8');
      return { success: true, path: fileName };
    } catch (err) {
      console.error('Error exporting to JSON:', err);
      throw err;
    }
  },

  // استيراد من JSON
  importFromJSON: (filePath) => {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error importing from JSON:', err);
      throw err;
    }
  },

  // حفظ نسخة احتياطية
  createBackup: (data) => {
    const timestamp = new Date().getTime();
    const fileName = `tahfiz-backup-${timestamp}.json`;
    return syncManager.exportToJSON(data, fileName);
  }
};

module.exports = syncManager;
