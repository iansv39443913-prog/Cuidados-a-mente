import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BarraIdoso from '../../components/barraIdoso';
import { voltar } from '../../components/em-breve';

export default function Rotina() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top + 12,
          },
        ]}
      >
        <Pressable
          onPress={() => voltar("/idoso")}
          style={styles.botaoVoltar}
        >
          <Image
            source={require('../../../assets/images/imagens/icones/voltar.png')}
            style={styles.iconeVoltar}
          />
        </Pressable>

        <Text style={styles.titulo}>Minha rotina</Text>
      </View>

      {/* CONTEÚDO */}
      <ScrollView
        style={styles.conteudo}
        contentContainerStyle={styles.conteudoInterno}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.secao}>Hoje</Text>

        <View style={[styles.card, styles.remedio]}>
          <Image
            source={require('../../../assets/images/imagens/icones/comprimidoVerde.png')}
            style={styles.iconeR}
          />

          <View style={styles.informacoes}>
            <Text style={styles.horario}>08:00</Text>
            <Text style={styles.atividade}>Tomar remédio</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusLegenda}>Concluído</Text>
          </View>
        </View>

        <View style={[styles.card, styles.alimentacao]}>
          <Image
            source={require('../../../assets/images/imagens/icones/talher.png')}
            style={styles.icone}
          />

          <View style={styles.informacoes}>
            <Text style={styles.horario}>12:00</Text>
            <Text style={styles.atividade}>Almoçar</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusLegendaP}>Pendente</Text>
          </View>
        </View>

        <View style={[styles.card, styles.caminhada]}>
          <Image
            source={require('../../../assets/images/imagens/icones/andar.png')}
            style={styles.icone}
          />

          <View style={styles.informacoes}>
            <Text style={styles.horario}>13:00</Text>
            <Text style={styles.atividade}>Caminhada</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusLegendaP}>Pendente</Text>
          </View>
        </View>

        <Text style={styles.secao}>Amanhã</Text>

        <View style={[styles.card, styles.consulta]}>
          <Image
            source={require('../../../assets/images/imagens/icones/estetoscopio.png')}
            style={styles.icone}
          />

          <View style={styles.informacoes}>
            <Text style={styles.horario}>13:00</Text>
            <Text style={styles.atividade}>Consulta</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusLegendaB}>Em breve</Text>
          </View>
        </View>
      </ScrollView>

      {/* BARRA FIXA */}
      <View style={{ paddingBottom: insets.bottom }}>
        <BarraIdoso />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#BF89D8',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botaoVoltar: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeVoltar: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  conteudo: {
    flex: 1,
  },

  conteudoInterno: {
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 25,
  },

  secao: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5D1186',
    marginBottom: 15,
  },

  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    minHeight: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  remedio: {
    backgroundColor: '#DEFFEC',
  },

  alimentacao: {
    backgroundColor: '#FFECDB',
  },

  caminhada: {
    backgroundColor: '#FFECDB',
  },

  consulta: {
    backgroundColor: '#F0D5FF',
  },

  icone: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },

  iconeR: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    marginRight: 15,
  },

  informacoes: {
    flex: 1,
  },

  horario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D1186',
  },

  atividade: {
    fontSize: 22,
    marginTop: 5,
    color: '#5D1186',
  },

  status: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 10,
    alignSelf: 'stretch',
  },

  statusLegenda: {
    fontSize: 15,
    color: '#5FE58C',
    fontWeight: 'bold',
  },

  statusLegendaP: {
    fontSize: 15,
    color: '#FFBB33',
    fontWeight: 'bold',
  },

  statusLegendaB: {
    fontSize: 15,
    color: '#5D1186',
    fontWeight: 'bold',
  },
});
