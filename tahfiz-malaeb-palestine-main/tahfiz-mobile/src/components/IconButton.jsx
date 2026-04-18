import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function IconButton({ icon, label, onPress, type = 'primary' }) {
  const styles = getStyles(type);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

function getStyles(type) {
  const baseStyles = StyleSheet.create({
    button: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
    },
    icon: {
      fontSize: 32,
      marginBottom: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  const typeStyles = {
    primary: { button: { backgroundColor: '#FF6B35' }, label: { color: '#fff' } },
    success: { button: { backgroundColor: '#28a745' }, label: { color: '#fff' } },
    warning: { button: { backgroundColor: '#ffc107' }, label: { color: '#1A1A1A' } },
  };

  return { ...baseStyles, ...typeStyles[type] };
}
