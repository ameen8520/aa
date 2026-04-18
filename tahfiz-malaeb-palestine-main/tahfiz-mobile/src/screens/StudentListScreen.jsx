import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function StudentListScreen({ students, onSync }) {
  const renderStudentItem = ({ item }) => (
    <View style={styles.studentCard}>
      <View style={styles.studentHeader}>
        <Text style={styles.studentName}>{item.fullName}</Text>
        <Text style={styles.studentId}>{item.nationalID}</Text>
      </View>
      <View style={styles.studentInfo}>
        <Text style={styles.infoText}>📱 {item.guardianPhone}</Text>
        <Text style={styles.infoText}>📅 {item.dateOfBirth}</Text>
      </View>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${
                ((item.attendance?.present || 0) /
                  (item.attendance?.totalSessions || 1)) *
                100
              }%`,
            },
          ]}
        />
      </View>
      <Text style={styles.progressText}>
        الحضور: {item.attendance?.present || 0}/{item.attendance?.totalSessions || 0}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>قائمة الطلاب</Text>
        <TouchableOpacity style={styles.syncButton} onPress={onSync}>
          <Text style={styles.syncButtonText}>🔄 مزامنة</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={students}
        renderItem={renderStudentItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />

      {students.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>لا توجد بيانات</Text>
          <Text style={styles.emptyStateSubtext}>قم بالمزامنة لتحميل البيانات</Text>
        </View>
      )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  syncButton: {
    backgroundColor: '#D4AF37',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  syncButtonText: {
    color: '#1A1A1A',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 10,
  },
  studentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderRightWidth: 5,
    borderRightColor: '#FF6B35',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  studentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
    paddingBottom: 10,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  studentId: {
    backgroundColor: '#FF6B35',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  studentInfo: {
    marginBottom: 10,
  },
  infoText: {
    color: '#333',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF6B35',
  },
  progressText: {
    color: '#666',
    fontSize: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 10,
  },
});
