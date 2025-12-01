import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useTranslation } from '../hooks/useTranslation';

export default function Index() {
  const clientConfig = Constants.expoConfig?.extra;
  const { t } = useTranslation();
  const colors = clientConfig?.brandColors || {};

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={styles.headerText}>
          {t('welcome')}
        </Text>
        <Text style={styles.subHeaderText}>
          {clientConfig?.appName}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('clientInfo')}</Text>
          <InfoRow label={t('clientName')} value={clientConfig?.clientName || 'N/A'} />
          <InfoRow label={t('version')} value={clientConfig?.version || 'N/A'} />
          <InfoRow label={t('scheme')} value={clientConfig?.scheme || 'N/A'} />
          <InfoRow label={t('locale')} value={clientConfig?.locale || 'N/A'} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('brandColors')}</Text>
          {Object.entries(colors).map(([key, value]) => (
            <View key={key} style={styles.colorRow}>
              <Text style={styles.colorLabel}>{key}:</Text>
              <View style={[styles.colorBox, { backgroundColor: value as string }]} />
              <Text style={styles.colorValue}>{value as string}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('features')}</Text>
          {clientConfig?.features && Object.entries(clientConfig.features).map(([key, value]) => (
            <InfoRow 
              key={key} 
              label={key} 
              value={value ? '✅ Enabled' : '❌ Disabled'} 
            />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('configuration')}</Text>
          <InfoRow label={t('apiUrl')} value={clientConfig?.apiUrl || 'N/A'} />
          <InfoRow label={t('supportEmail')} value={clientConfig?.supportEmail || 'N/A'} />
        </View>
      </View>
    </ScrollView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  colorLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    width: 100,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  colorValue: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'monospace',
  },
});
