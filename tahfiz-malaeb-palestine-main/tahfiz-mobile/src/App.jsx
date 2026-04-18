import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import StudentListScreen from './screens/StudentListScreen';
import SyncScreen from './screens/SyncScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');
  const [students, setStudents] = useState([]);

  const handleLogin = (password) => {
    if (password === 'instructor123') {
      setIsAuthenticated(true);
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <View style={styles.container}>
      {currentScreen === 'home' && (
        <StudentListScreen 
          students={students} 
          onSync={() => setCurrentScreen('sync')}
        />
      )}
      {currentScreen === 'sync' && (
        <SyncScreen 
          onSyncComplete={(newData) => {
            setStudents(newData);
            setCurrentScreen('home');
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
