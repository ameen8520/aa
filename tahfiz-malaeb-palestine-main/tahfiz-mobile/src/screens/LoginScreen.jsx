import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password.trim() === '') {
      Alert.alert('تنبيه', 'يرجى إدخال كلمة المرور');
      return;
    }
    onLogin(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>🎓 تحفيظ ملعب فلسطين</Text>
        <Text style={styles.subtitle}>تطبيق الهاتف</Text>

        <TextInput
          style={styles.input}
          placeholder="أدخل كلمة المرور"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#ccc"
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>دخول</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B35',
  },
  loginBox: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#FF6B35',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'right',
    color: '#1A1A1A',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FF6B35',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
