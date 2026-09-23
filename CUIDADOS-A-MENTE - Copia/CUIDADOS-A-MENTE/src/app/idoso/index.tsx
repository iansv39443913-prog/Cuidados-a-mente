import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraIdoso from '../../components/barraIdoso';

function dataDeHoje() {
  const texto = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export default function Idoso() {
  return (
    <SafeAreaView style={styles.container}>

     <View style={styles.header}>

  <Image
    source={require('../../../assets/images/imagens/personagens/joao.png')}
    style={styles.foto}
  />

  <View style={styles.headerText}>
    <Text style={styles.hello}>Olá,</Text>
    <Text style={styles.name}>Seu João!</Text>
    <Text style={styles.date}>{dataDeHoje()}</Text>
  </View>

</View>

      <ScrollView contentContainerStyle={styles.cards} showsVerticalScrollIndicator={false}>

        <Pressable
          onPress={() => router.push('/idoso/rotina')}
          style={[styles.card, styles.rotina]}
        >
           <Image
            source={require('../../../assets/images/imagens/icones/casinha.png')}
            style={styles.icone}
            />

          <Text style={styles.cardText}>Minha rotina</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/idoso/memorias')}
          style={[styles.card, styles.memorias]}
        >
           <Image
            source={require('../../../assets/images/imagens/icones/foto.png')}
            style={styles.icone}
            />

          <Text style={styles.cardText}>Minhas memórias</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/idoso/emergencia')}
          style={[styles.card, styles.emergencia]}
        >
           <Image
            source={require('../../../assets/images/imagens/icones/telefone.png')}
            style={styles.icone}
            />
          <Text style={styles.cardText}>Emergência</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/idoso/atividade')}
          style={[styles.card, styles.atividade]}
        >
           <Image
            source={require('../../../assets/images/imagens/icones/musica.png')}
            style={styles.icone}
            />
          <Text style={styles.cardText}>Atividade do dia</Text>
        </Pressable>

      </ScrollView>

      <BarraIdoso />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

header: {
  paddingHorizontal: 24,
  paddingTop: 18,
  paddingBottom: 18,
  backgroundColor: '#F3DBFF',
  flexDirection: 'row',
  alignItems: 'center',
},


  hello: {
    fontSize: 20,
    color: '#5D1186'
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5D1186'
  },

  date: {
    fontSize: 17,
    marginTop: 5,
    color: '#5D1186'
  },

  cards: {
    paddingTop: 30,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },

  card: {
  minHeight: 110,
  paddingHorizontal: 24,
  marginBottom: 15,
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
},

 cardText: {
  fontSize: 22,
  fontWeight: '600',
  color: '#5D1186',
},

  rotina: {
    backgroundColor: '#FFECDB',
  },

  memorias: {
    backgroundColor: '#C5FFD9',
  },

  emergencia: {
    backgroundColor: '#FFD9D9',
  },

  atividade: {
    backgroundColor: '#F0D5FF',
  },

 icone: {
  width: 60,
  height: 60,
  resizeMode: 'contain',
  marginRight: 20,
},

headerText: {
  marginLeft: 18,
},

foto: {
  width: 95,
  height: 95,
  borderRadius: 47.5,
  resizeMode: 'cover',
},
});
