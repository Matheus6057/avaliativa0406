import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../styles/ProfileScreenStyles';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Faixa/banner no topo */}
      <Image
        source={require('../assets/profile.jpg')}  // imagem banner larga
        style={styles.profileImage}
        resizeMode="cover"
      />

      <Text style={styles.title}>Matheus</Text>
      <Text style={styles.subtitle}>Desenvolvedor Front-end | React Native & Web</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📄 Sobre Mim</Text>
        <Text style={styles.text}>
          Sou desenvolvedor apaixonado por criar interfaces modernas e funcionais, com experiência em aplicações móveis e web.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💼 Experiência</Text>
        <Text style={styles.text}>
          - R&C Loja (2023 - atual): Desenvolvimento do app e site da loja.
          {"\n"}- Origens do Sabor (2022 - 2023): Sistema de pedidos online.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎓 Educação</Text>
        <Text style={styles.text}>
          - Curso de Desenvolvimento Mobile com React Native - Rocketseat
          {"\n"}- Técnico em Informática - SENAI
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛠️ Habilidades</Text>
        <Text style={styles.text}>
          React Native, React.js, JavaScript, Expo, Git, Firebase, APIs REST
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;