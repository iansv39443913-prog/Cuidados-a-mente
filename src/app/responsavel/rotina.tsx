import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { emBreve } from '../../components/em-breve';
import { HotbarGlobal } from '../../components/HotbarGlobal';

export default function Rotina() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* CABEÇALHO */}
        <View style={styles.header}>

          {/* OPÇÕES */}
          <Pressable onPress={() => emBreve('O menu de opções')} hitSlop={10}>
            <Image
              source={require('../../../assets/images/imagens/icones/opcoes.png')}
              style={styles.opcoes}
            />
          </Pressable>

          {/* CALENDÁRIO */}
          <Pressable onPress={() => emBreve('O calendário')} hitSlop={10}>
            <Image
              source={require('../../../assets/images/imagens/icones/calendario.png')}
              style={styles.calendario}
            />
          </Pressable>

          <Text style={styles.titulo}>
            Rotina de João
          </Text>

        </View>


        {/* RESUMO DA ROTINA */}
        <View style={styles.resumoContainer}>

          {/* HOJE */}
          <View style={styles.resumoCard}>
            <View style={styles.resumoTexto}>
              <Text style={styles.resumoTitulo}>
                Hoje
              </Text>

              <Text style={styles.resumoPorcentagem}>
                77,78% concluído
              </Text>
            </View>

            <Image
              source={require('../../../assets/images/imagens/icones/prancheta.png')}
              style={styles.prancheta}
            />

          </View>


          {/* SEMANA */}
          <View style={styles.resumoCard}>

            <View style={styles.resumoTexto}>
              <Text style={styles.resumoTitulo}>
                Semana
              </Text>

              <Text style={styles.resumoPorcentagem}>
                66,67% concluído
              </Text>
            </View>

            <Image
              source={require('../../../assets/images/imagens/icones/grafico.png')}
              style={styles.grafico}
            />

          </View>

        </View>


        {/* DIAS DA SEMANA */}
        <View style={styles.diasContainer}>

          <View style={styles.diaSelecionado}>
            <Text style={styles.diaSelecionadoNome}>Dom</Text>
            <Text style={styles.diaSelecionadoNumero}>24</Text>
          </View>

          <View style={styles.dia}>
            <Text style={styles.diaNome}>Seg</Text>
            <Text style={styles.diaNumero}>25</Text>
          </View>

          <View style={styles.dia}>
            <Text style={styles.diaNome}>Ter</Text>
            <Text style={styles.diaNumero}>26</Text>
          </View>

          <View style={styles.dia}>
            <Text style={styles.diaNome}>Qua</Text>
            <Text style={styles.diaNumero}>27</Text>
          </View>

          <View style={styles.dia}>
            <Text style={styles.diaNome}>Qui</Text>
            <Text style={styles.diaNumero}>28</Text>
          </View>

          <View style={styles.dia}>
            <Text style={styles.diaNome}>Sex</Text>
            <Text style={styles.diaNumero}>29</Text>
          </View>

          <View style={styles.dia}>
            <Text style={styles.diaNome}>Sáb</Text>
            <Text style={styles.diaNumero}>30</Text>
          </View>

        </View>


        {/* ROTINA */}
        <View style={styles.rotinaContainer}>

          {/* 08:00 - REMÉDIO */}
          <View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>08:00</Text>
            </View>

            <View style={styles.bolinhaVerde} />

            <View style={[styles.atividadeCard, styles.verde]}>

              <Image
                source={require('../../../assets/images/imagens/icones/comprimidoVerde.png')}
                style={styles.atividadeVerde}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Remédio de Pressão
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Tomar 1 comprimido
                </Text>
              </View>

              <Text style={styles.statusConcluido}>
                Concluído
              </Text>

            </View>

          </View>


          {/* 09:00 - CAFÉ */}
          <View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>09:00</Text>
            </View>

            <View style={styles.bolinhaVerde} />

            <View style={[styles.atividadeCard, styles.verde]}>

              <Image
                source={require('../../../assets/images/imagens/icones/cafe.png')}
                style={styles.atividadeIcon}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Café da manhã
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Refeição
                </Text>
              </View>

              <Text style={styles.statusConcluido}>
                Concluído
              </Text>

            </View>

          </View>


          {/* 10:30 - ATIVIDADE FÍSICA */}
          <View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>10:30</Text>
            </View>

            <View style={styles.bolinhaVerde} />

            <View style={[styles.atividadeCard, styles.verde]}>

              <Image
                source={require('../../../assets/images/imagens/icones/andando.png')}
                style={styles.atividadeIcon}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Atividade física
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Caminhada leve
                </Text>
              </View>

              <Text style={styles.statusConcluido}>
                Concluído
              </Text>

            </View>

          </View>


          {/* 12:00 - ALMOÇO */}
          <View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>12:00</Text>
            </View>

            <View style={styles.bolinhaVerde} />

            <View style={[styles.atividadeCard, styles.verde]}>

              <Image
                source={require('../../../assets/images/imagens/icones/talherVerde.png')}
                style={styles.atividadeIcon}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Almoço
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Refeição
                </Text>
              </View>

              <Text style={styles.statusConcluido}>
                Concluído
              </Text>

            </View>

          </View>

<View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>15:00</Text>
            </View>

            <View style={styles.bolinhaAmarela} />

            <View style={[styles.atividadeCard, styles.amarelo]}>

              <Image
                source={require('../../../assets/images/imagens/icones/comprimidoLaranja.png')}
                style={styles.atividadeLaranja}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Remédio - Vitamina D
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Tomar 1 comprimido
                </Text>
              </View>

              <Text style={styles.statusEmBreve}>
                Em breve
              </Text>

            </View>

          </View>


          {/* 16:30 - DESCANSO */}
          <View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>16:30</Text>
            </View>

            <View style={styles.bolinhaRoxa} />

            <View style={[styles.atividadeCard, styles.roxo]}>

              <Image
                source={require('../../../assets/images/imagens/icones/cama.png')}
                style={styles.atividadeIcon}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Descanso
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Hora do descanso
                </Text>
              </View>

              <Text style={styles.statusPendente}>
                Pendente
              </Text>

            </View>

          </View>


          {/* 19:00 - JANTAR */}
          <View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>19:00</Text>
            </View>

            <View style={styles.bolinhaRoxa} />

            <View style={[styles.atividadeCard, styles.roxo]}>

              <Image
                source={require('../../../assets/images/imagens/icones/talherRoxo.png')}
                style={styles.atividadeIcon}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Jantar
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Refeição
                </Text>
              </View>

              <Text style={styles.statusPendente}>
                Pendente
              </Text>

            </View>

          </View>

          {/* 20:30 - LEITURA */}
          <View style={styles.linhaRotina}>

            <View style={styles.horarioContainer}>
              <Text style={styles.horario}>20:30</Text>
            </View>

            <View style={styles.bolinhaRoxa} />

            <View style={[styles.atividadeCard, styles.roxo]}>

              <Image
                source={require('../../../assets/images/imagens/icones/livro.png')}
                style={styles.atividadeIcon}
              />

              <View style={styles.atividadeTexto}>
                <Text style={styles.atividadeTitulo}>
                  Leitura
                </Text>

                <Text style={styles.atividadeSubtitulo}>
                  Momento de relaxamento
                </Text>
              </View>

              <Text style={styles.statusPendente}>
                Pendente
              </Text>

            </View>

          </View>

        </View>


        {/* BOTÃO ADICIONAR */}
        <Pressable style={styles.botaoAdicionar} onPress={() => emBreve('O cadastro de atividades')}>
          <Text style={styles.botaoTexto}>
            + Adicionar atividade
          </Text>
        </Pressable>

      </ScrollView>


      {/* BARRA DE NAVEGAÇÃO */}
      <HotbarGlobal tipo="responsavel" ativo="Rotina" />

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
    height: 70,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  opcoes: {
    position: 'absolute',
    left: 20,
    top: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  calendario: {
    position: 'absolute',
    right: 20,
    top: 10,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  titulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#6B3C7D',
    marginTop: 7,
  },


  /* CARDS DO TOPO */

  resumoContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 5,
  },

  resumoCard: {
    flex: 1,
    height: 60,
    borderRadius: 9,
    backgroundColor: '#F5EEFD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    elevation: 2,
  },

  resumoTexto: {
    justifyContent: 'center',
  },

  resumoTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: '#591691',
    marginBottom: 4,
  },

  resumoPorcentagem: {
    fontSize: 10,
    color: '#AD3EE9',
  },

  prancheta: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  grafico: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },


  /* DIAS */

  diasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 8,
  },

  dia: {
    width: 40,
    alignItems: 'center',
  },

  diaSelecionado: {
    width: 34,
    alignItems: 'center',
  },

  diaNome: {
    fontSize: 15,
    fontWeight: '600',
    color: '#8E8492',
    marginBottom: 2,
  },

  diaNumero: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8E8492',
  },

  diaSelecionadoNome: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B25BE3',
    marginBottom: 2,
  },

  diaSelecionadoNumero: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B25BE3',
  },


  /* ROTINA */

  rotinaContainer: {
    marginTop: 3,
  },

  linhaRotina: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 72,
    position: 'relative',
  },

  horarioContainer: {
    width: 55,
    alignItems: 'flex-end',
    paddingRight: 8,
  },

  horario: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8C31B8',
  },

  bolinhaVerde: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#65D58B',
    zIndex: 2,
  },

  bolinhaRoxa: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#A64CC8',
    zIndex: 2,
  },

  atividadeCard: {
    flex: 1,
    minHeight: 60,
    marginLeft: 9,
    marginRight: 20,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  verde: {
    backgroundColor: '#DDF7E8',
  },

  roxo: {
    backgroundColor: '#F0E5FA',
  },

  atividadeIcon: {
    width: 29,
    height: 29,
    resizeMode: 'contain',
    marginRight: 9,
  },

  atividadeVerde: {
    width: 37,
    height: 37,
    resizeMode: 'contain',
    marginRight: 9,
  },

  atividadeLaranja: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 9,
  },

  atividadeTexto: {
    flex: 1,
  },

  atividadeTitulo: {
    fontSize: 13,
    fontWeight: '700',
    color: '#5D1186',
  },

  atividadeSubtitulo: {
    fontSize: 10,
    color: '#5D1186',
    marginTop: 3,
  },

  statusConcluido: {
    fontSize: 9,
    color: '#3BB96A',
    alignSelf: 'flex-end',
    marginBottom: 8,
  },

  statusPendente: {
    fontSize: 9,
    color: '#9B52C0',
    alignSelf: 'flex-end',
    marginBottom: 8,
  },


  /* BOTÃO */

  botaoAdicionar: {
    height: 35,
    marginHorizontal: 30,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 7,
    backgroundColor: '#C26AE7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },


  /* NAVEGAÇÃO */

  navbar: {
    display: 'none',
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

  navTextSelectedRotina: {
    fontSize: 7,
    color: '#9D3CB0',
    fontWeight: '700',
    marginTop: -9,
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

  navTextMemorias: {
    marginTop: -8,
  },

  navTextIdoso: {
    marginTop: -1,
  },

  bolinhaAmarela: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#F2B83F',
    zIndex: 2,
  },

    amarelo: {
    backgroundColor: '#FFF3D8',
  },

    statusEmBreve: {
    fontSize: 9,
    color: '#E6A51C',
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
});
