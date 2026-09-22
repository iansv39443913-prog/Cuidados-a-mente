import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { HotbarGlobal } from '../../components/HotbarGlobal';

export default function Responsavel() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* CABEÇALHO */}
        <View style={styles.header}>
          {/* ÍCONE DE OPÇÕES */}
          <Image
            source={require('../../../assets/images/imagens/icones/opcoes.png')}
            style={styles.headerIcon}
          />

          {/* ÍCONE DE NOTIFICAÇÃO */}
          <Image
            source={require('../../../assets/images/imagens/icones/notificacao.png')}
            style={styles.headerIconRight}
          />

          {/* TEXTO E PERFIL */}
          <View style={styles.headerContent}>
            <View style={styles.headerText}>
              <Text style={styles.ola}>Olá, Ana!</Text>

              <Text style={styles.responsavelPor}>
                Responsável por
              </Text>

              <View style={styles.perfil}>
                <Image
                  source={require('../../../assets/images/imagens/personagens/joao.png')}
                  style={styles.joaoFoto}
                />

                <Text style={styles.nome}>
                  João Ferreira
                </Text>
              </View>
            </View>

            <Image
              source={require('../../../assets/images/imagens/personagens/eugenioFeliz.png')}
              style={styles.eugenio}
            />
          </View>
        </View>

        {/* RESUMO DO DIA */}
        <Text style={styles.sectionTitle}>
          Resumo do dia
        </Text>

        <View style={styles.resumoContainer}>
          <View style={[styles.resumoCard, styles.concluidoCard]}>
            <Text style={styles.numero}>2/5</Text>

            <Text style={styles.cardText}>
              Tarefas{'\n'}concluídas
            </Text>

            <Image
              source={require('../../../assets/images/imagens/icones/concluido.png')}
              style={styles.resumoIcon}
            />
          </View>

          <View style={[styles.resumoCard, styles.pendenteCard]}>
            <Text style={[styles.numero, styles.numeroPendente]}>
              15
            </Text>

            <Text style={styles.cardText}>
              Tarefas{'\n'}pendentes
            </Text>

            <Image
              source={require('../../../assets/images/imagens/icones/pendente.png')}
              style={styles.resumoIcon}
            />
          </View>

          <View style={[styles.resumoCard, styles.atrasoCard]}>
            <Text style={[styles.numero, styles.numeroAtraso]}>
              0
            </Text>

            <Text style={styles.cardText}>
              Tarefas{'\n'}em atraso
            </Text>

            <Image
              source={require('../../../assets/images/imagens/icones/atraso.png')}
              style={styles.resumoIcon}
            />
          </View>
        </View>

        {/* PRÓXIMA ATIVIDADE */}
        <Text style={styles.sectionTitle}>
          Próxima atividade
        </Text>

        <View style={styles.atividadeCard}>
          <View style={styles.atividadeInfo}>
            <Text style={styles.proximoLembrete}>
              Próximo lembrete
            </Text>

            <Text style={styles.nomeRemedio}>
              Remédio de pressão
            </Text>

            <Text style={styles.atividadeHorario}>
              08:00 · Em 20 minutos
            </Text>
          </View>

          <View style={styles.comprimidoContainer}>
            <Image
              source={require('../../../assets/images/imagens/icones/comprimido.png')}
              style={styles.comprimido}
            />
          </View>
        </View>

        {/* HUMOR */}
        <Text style={styles.sectionTitle}>
          Como João está se sentindo hoje?
        </Text>

        <View style={styles.humorContainer}>
          <View style={styles.humorItem}>
            <View style={[styles.humorCard, styles.muitoBemCard]}>
              <Image
                source={require('../../../assets/images/imagens/icones/mb.png')}
                style={styles.humorIcon}
              />
            </View>

            <Text style={[styles.humorText, styles.muitoBemText]}>
              Muito bem
            </Text>
          </View>

          <View style={styles.humorItem}>
            <View style={[styles.humorCard, styles.bemCard]}>
              <Image
                source={require('../../../assets/images/imagens/icones/bem.png')}
                style={styles.humorIcon}
              />
            </View>

            <Text style={[styles.humorText, styles.bemText]}>
              Bem
            </Text>
          </View>

          <View style={styles.humorItem}>
            <View style={[styles.humorCard, styles.neutroCard]}>
              <Image
                source={require('../../../assets/images/imagens/icones/neutro.png')}
                style={styles.humorIcon}
              />
            </View>

            <Text style={[styles.humorText, styles.neutroText]}>
              Neutro
            </Text>
          </View>

          <View style={styles.humorItem}>
            <View style={[styles.humorCard, styles.bravoCard]}>
              <Image
                source={require('../../../assets/images/imagens/icones/bravo.png')}
                style={styles.humorIcon}
              />
            </View>

            <Text style={[styles.humorText, styles.bravoText]}>
              Bravo
            </Text>
          </View>

          <View style={styles.humorItem}>
            <View style={[styles.humorCard, styles.tristeCard]}>
              <Image
                source={require('../../../assets/images/imagens/icones/triste.png')}
                style={styles.humorIcon}
              />
            </View>

            <Text style={[styles.humorText, styles.tristeText]}>
              Triste
            </Text>
          </View>
        </View>
      </ScrollView>

      <HotbarGlobal tipo="responsavel" ativo="Início" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingBottom: 125,
  },

  /* CABEÇALHO */

  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    position: 'relative',
  },

  headerIcon: {
    position: 'absolute',
    top: 10,
    left: 20,
    width: 25,
    height: 25,
    resizeMode: 'contain',
    zIndex: 2,
  },

  headerIconRight: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: 25,
    height: 25,
    resizeMode: 'contain',
    zIndex: 2,
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45,
  },

  headerText: {
    width: '57%',
  },

  ola: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5B326B',
  },

  responsavelPor: {
    marginTop: 10,
    marginLeft: 2,
    fontSize: 10,
    color: '#8B7A93',
  },

  perfil: {
    marginTop: 2,
    height: 38,
    backgroundColor: '#F3EDF7',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
  },

  joaoFoto: {
    width: 27,
    height: 27,
    borderRadius: 14,
    resizeMode: 'cover',
    marginRight: 7,
  },

  nome: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B5574',
  },

  eugenio: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    marginTop: -8,
    marginRight: -5,
  },

  /* TÍTULOS */

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6B3C7D',
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 10,
  },

  /* RESUMO */

  resumoContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
  },

  resumoCard: {
    flex: 1,
    minHeight: 115,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    elevation: 2,
  },

  concluidoCard: {
    backgroundColor: '#DDF3E5',
  },

  pendenteCard: {
    backgroundColor: '#FFF2C9',
  },

  atrasoCard: {
    backgroundColor: '#F9DFDF',
  },

  numero: {
    fontSize: 21,
    fontWeight: '700',
    color: '#3C9B63',
  },

  numeroPendente: {
    color: '#D99A00',
  },

  numeroAtraso: {
    color: '#D84A4A',
  },

  cardText: {
    fontSize: 9,
    lineHeight: 13,
    color: '#684B72',
  },

  resumoIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  /* LEMBRETE */

  atividadeCard: {
    marginHorizontal: 20,
    minHeight: 115,
    backgroundColor: '#EAE3F5',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  atividadeInfo: {
    flex: 1,
  },

  proximoLembrete: {
    fontSize: 12,
    color: '#7952A1',
    marginBottom: 8,
  },

  nomeRemedio: {
    fontSize: 16,
    fontWeight: '700',
    color: '#684B72',
  },

  atividadeHorario: {
    fontSize: 14,
    color: '#AD3EE9',
    marginTop: 5,
  },

  comprimidoContainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#B789D2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  comprimido: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },

  /* HUMOR */

  humorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },

  humorItem: {
    alignItems: 'center',
    width: 60,
  },

  humorCard: {
    width: 58,
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  muitoBemCard: {
    backgroundColor: '#DDF3E5',
  },

  bemCard: {
    backgroundColor: '#FFE6BF',
  },

  neutroCard: {
    backgroundColor: '#FFF3B8',
  },

  bravoCard: {
    backgroundColor: '#F9D8D8',
  },

  tristeCard: {
    backgroundColor: '#DCE7FA',
  },

  humorIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },

  humorText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },

  muitoBemText: {
    color: '#4E9D68',
  },

  bemText: {
    color: '#D48420',
  },

  neutroText: {
    color: '#B99700',
  },

  bravoText: {
    color: '#C84A4A',
  },

  tristeText: {
    color: '#5D7EB8',
  },

  /* NAVEGAÇÃO */

  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 95,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE7F1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingHorizontal: 3,
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    minHeight: 55,
  },

  navIcon: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },

  navText: {
    fontSize: 10,
    color: '#88738F',
    marginTop: 4,
    textAlign: 'center',
  },

  navTextSelected: {
    fontSize: 7,
    color: '#9D3CB0',
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center',
  },

  navIconRotina: {
  width: 50,
  height: 50,
  resizeMode: 'contain',
},

navIconMemorias: {
  width: 47,
  height: 47,
  resizeMode: 'contain',
},

navIconIdoso: {
  width: 35,
  height: 35,
  resizeMode: 'contain',
},

navTextRotina: {
  marginTop: -9,
},

navTextMemorias: {
  marginTop: -8,
},

navTextIdoso: {
  marginTop: -1,
},
});
