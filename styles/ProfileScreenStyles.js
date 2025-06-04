import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bannerImage: {
    width: width,        // ocupa toda largura da tela
    height: 200,         // altura da faixa/banner
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 15,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginHorizontal: 15,
    marginBottom: 20,
  },

  section: {
    marginHorizontal: 15,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },

  text: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});

export default styles;