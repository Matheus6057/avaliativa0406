import { Text, ScrollView, Image } from 'react-native';
import styles from '../styles/SenaiScreenStyles';

export default function SenaiScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://www.portaldaindustria.com.br/senai/media/images/logo-senai.png' }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>SENAI - Serviço Nacional de Aprendizagem Industrial</Text>

      <Text style={styles.description}>
        O SENAI é uma das principais instituições de educação profissional do Brasil, oferecendo cursos técnicos,
        profissionalizantes e de qualificação nas áreas da indústria e tecnologia. Fundado em 1942, o SENAI tem sido
        fundamental na formação de profissionais capacitados para o mercado de trabalho industrial.
      </Text>

      <Text style={styles.sectionTitle}>📚 O que o SENAI oferece?</Text>
      <Text style={styles.item}>• Cursos técnicos e profissionalizantes</Text>
      <Text style={styles.item}>• Formação continuada e EAD</Text>
      <Text style={styles.item}>• Projetos de inovação e tecnologia</Text>
      <Text style={styles.item}>• Laboratórios e infraestrutura de ponta</Text>

      <Text style={styles.sectionTitle}>🎯 Missão</Text>
      <Text style={styles.description}>
        Contribuir para o aumento da competitividade da indústria brasileira por meio da educação profissional e da inovação tecnológica.
      </Text>

      <Text style={styles.sectionTitle}>🌐 Site oficial</Text>
      <Text style={styles.link}>https://www.portaldaindustria.com.br/senai</Text>
    </ScrollView>
  );
}
