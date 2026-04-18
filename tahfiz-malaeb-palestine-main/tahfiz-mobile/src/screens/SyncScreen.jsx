import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default function SyncScreen({ onSyncComplete }) {
  const [loading, setLoading] = useState(false);

  const handleImportJSON = async () => {
    try {
      setLoading(true);
      // محاكاة استيراد الملف
      setTimeout(() => {
        Alert.alert('نجاح', 'تم استيراد البيانات بنجاح');
        onSyncComplete([
          {
            fullName: 'محمد أحمد علي',
            nationalID: '123456789',
            guardianPhone: '+970599123456',
            dateOfBirth: '2010-05-15',
            attendance: { present: 10, absent: 2, totalSessions: 12 },
            memorization: { currentPage: 45, currentSurah: 'البقرة' }
          }
        ]);
        setLoading(false);
      }, 2000);
    } catch (err) {
      Alert.alert('خطأ', 'حدث خطأ في استيراد الملف');
      setLoading(false);
    }
  };

  const handleScanQR = () => {
    Alert.alert('ملاحظة', 'تحتاج إلى تثبيت كاميرا QR');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>المزامنة</Text>
      </View>

      <View style={styles.syncOptions}>
        <TouchableOpacity
          style={styles.syncButton}
          onPress={handleImportJSON}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Text style={styles.syncIcon}>📥</Text>
              <Text style={styles.syncTitle}>استيراد من ملف JSON</Text>
              <Text style={styles.syncDescription}>استيراد البيانات من ملف</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.syncButton, styles.qrButton]}
          onPress={handleScanQR}
        >
          <Text style={styles.syncIcon}>📱</Text>
          <Text style={styles.syncTitle}>مسح كود QR</Text>
          <Text style={styles.syncDescription}>المزامنة السريعة</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF6B35',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  syncOptions: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  syncButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#FF6B35',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  qrButton: {
    borderLeftColor: '#D4AF37',
  },
  syncIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  syncTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 5,
  },
  syncDescription: {
    color: '#666',
    fontSize: 12,
  },
});
