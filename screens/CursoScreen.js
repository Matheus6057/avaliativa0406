import { Text, ScrollView, Image } from 'react-native';
import styles from '../styles/CursoScreenStyles';

export default function CursoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://www.portaldaindustria.com.br/senai/media/images/logo-senai.png' }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Meu Curso no SENAI</Text>

      <Text style={styles.description}>
        Atualmente, estou cursando no SENAI um programa focado em desenvolvimento de software, com ênfase em aplicações móveis e web. O curso tem proporcionado uma base sólida em programação, lógica, design de interface e integração com bancos de dados.
      </Text>

      <Text style={styles.sectionTitle}>🧠 Conteúdos que estou aprendendo</Text>
      <Text style={styles.item}>• Lógica de Programação</Text>
      <Text style={styles.item}>• Desenvolvimento Mobile com React Native</Text>
      <Text style={styles.item}>• Front-end com HTML, CSS e JavaScript</Text>
      <Text style={styles.item}>• Integração com APIs e banco de dados</Text>
      <Text style={styles.item}>• Git e versionamento de código</Text>

      <Text style={styles.sectionTitle}>🎯 Objetivo do Curso</Text>
      <Text style={styles.description}>
        Me tornar um desenvolvedor preparado para o mercado de tecnologia, com foco em soluções modernas e práticas para empresas e usuários.
      </Text>

      <Text style={styles.sectionTitle}>📍 Unidade SENAI</Text>
      <Text style={styles.description}>SENAI [coloque aqui sua unidade, ex: SENAI Alagoinhas - BA]</Text>
    </ScrollView>
  );
}