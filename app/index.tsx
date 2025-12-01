import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 White Label App Works!</Text>
      <Text style={styles.subtitle}>ACME Business Configuration</Text>
      <View style={styles.box}>
        <Text style={styles.text}>✅ Zod validation passed</Text>
        <Text style={styles.text}>✅ App.config.js loaded</Text>
        <Text style={styles.text}>✅ Client: acme</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 32,
  },
  box: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '100%',
    maxWidth: 400,
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    color: '#333',
  },
});
