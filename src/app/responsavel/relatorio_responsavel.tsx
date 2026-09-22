import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { emBreve, voltar } from '../../components/em-breve';
import { HotbarGlobal } from '../../components/HotbarGlobal';

const PERIODOS = ['Dia', 'Semana', 'Mês'] as const;

const INTERVALOS: Record<string, string[]> = {
  'Dia': ['10 de julho', '11 de julho', '12 de julho'],
  'Semana': ['28/06 a 05/07', '05 a 12 de julho', '12 a 19 de julho'],
  'Mês': ['maio', 'junho', 'julho'],
};

export default function RelatoriosScreen() {
  const [periodo, setPeriodo] = useState<(typeof PERIODOS)[number]>('Semana');
  const [indice, setIndice] = useState(1);

  const intervalos = INTERVALOS[periodo];
  const intervalo = intervalos[Math.min(indice, intervalos.length - 1)];

  function mover(passo: number) {
    setIndice((atual) => Math.max(0, Math.min(intervalos.length - 1, atual + passo)));
  }

  return (
    <View style={styles.container}>

      {/* =====================================================
          HEADER
          ===================================================== */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.headerIconArea}
          onPress={() => voltar("/responsavel")}
          hitSlop={10}
        >
          <Image
            source={require('../../assets/perfilGlobalRC.png')}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Relatórios
        </Text>

        <TouchableOpacity
          style={styles.headerIconArea}
          onPress={() => emBreve('O calendário de relatórios')}
          hitSlop={10}
        >
          <Image
            source={require('../../assets/consultaGlobalRC.png')}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* =====================================================
            SELETOR DE DATA
            ===================================================== */}

        <View style={styles.dateSelector}>

          <TouchableOpacity style={styles.dateButton} onPress={() => mover(-1)}>
            <Text style={styles.dateArrow}>
              ‹
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => emBreve('A escolha de data')}>
            <Text style={styles.dateText}>
              {intervalo}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dateButton} onPress={() => mover(1)}>
            <Text style={styles.dateArrow}>
              ›
            </Text>
          </TouchableOpacity>

        </View>


        {/* =====================================================
            ABAS
            ===================================================== */}

        <View style={styles.tabs}>

          {PERIODOS.map((nome) => {
            const ativo = nome === periodo;

            return (
              <TouchableOpacity
                key={nome}
                style={ativo ? styles.activeTab : styles.tab}
                onPress={() => {
                  setPeriodo(nome);
                  setIndice(1);
                }}
              >
                <Text style={ativo ? styles.activeTabText : styles.tabText}>
                  {nome}
                </Text>
              </TouchableOpacity>
            );
          })}

        </View>


        {/* =====================================================
            ADESÃO ÀS ATIVIDADES
            ===================================================== */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Adesão às atividades
          </Text>

          <View style={styles.adherenceContent}>

            {/* GRÁFICO */}

            <View style={styles.circularChart}>
              <View style={styles.circularChartBackground} />
              <View style={styles.chartPurplePart} />
              <View style={styles.chartCenter}>
                <Text style={styles.chartPercentage}>
                  83%
                </Text>
              </View>
            </View>


            {/* INFORMAÇÕES */}

            <View style={styles.statistics}>

              <View style={styles.statBox}>
                <Text style={styles.completedNumber}>
                  15
                </Text>

                <Text style={styles.statText}>
                  concluídas
                </Text>
              </View>


              <View style={styles.statBox}>
                <Text style={styles.pendingNumber}>
                  3
                </Text>

                <Text style={styles.statText}>
                  pendentes
                </Text>
              </View>


              <View style={styles.statBox}>
                <Text style={styles.cancelledNumber}>
                  1
                </Text>

                <Text style={styles.statText}>
                  incompletas
                </Text>
              </View>

            </View>

          </View>

        </View>


        {/* =====================================================
            ADESÃO AOS MEDICAMENTOS
            ===================================================== */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Adesão aos medicamentos
          </Text>

          <View style={styles.adherenceContent}>

            {/* GRÁFICO */}

            <View style={styles.circularChart}>
              <View
                style={[
                  styles.circularChartBackground,
                  {
                    borderColor: '#843BC1',
                  },
                ]}
              />
              <View style={styles.fullPurpleCircle} />
              <View style={styles.chartCenter}>
                <Text style={styles.chartPercentage}>
                  100%
                </Text>
              </View>
            </View>


            {/* INFORMAÇÕES */}

            <View style={styles.statistics}>

              <View style={styles.statBox}>
                <Text style={styles.completedNumber}>
                  20
                </Text>

                <Text style={styles.statText}>
                  concluídas
                </Text>
              </View>


              <View style={styles.statBox}>
                <Text style={styles.pendingNumber}>
                  0
                </Text>

                <Text style={styles.statText}>
                  pendentes
                </Text>
              </View>


              <View style={styles.statBox}>
                <Text style={styles.cancelledNumber}>
                  0
                </Text>

                <Text style={styles.statText}>
                  incompletas
                </Text>
              </View>

            </View>

          </View>

        </View>


        {/* =====================================================
            HUMOR MÉDIO DA SEMANA
            ===================================================== */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Humor médio da semana
          </Text>

          <View style={styles.moodRow}>

            {/* SEGUNDA */}

            <View style={styles.moodItem}>

              {/*
                COLOQUE AQUI A IMAGEM DO HUMOR DE SEGUNDA

                Exemplo:

                <Image
                  source={require('../../assets/alegreExpressaoRelatorioR.png')}
                  style={styles.moodImage}
                />
              */}

              <Image
                source={require('../../../assets/images/imagens/icones/mb.png')}
                style={styles.moodImage}
                resizeMode="contain"
              />

              <Text style={styles.moodDay}>
                Seg
              </Text>

            </View>


            {/* TERÇA */}

            <View style={styles.moodItem}>

              {/*
                COLOQUE AQUI A IMAGEM DO HUMOR DE TERÇA
              */}

              <Image
                source={require('../../../assets/images/imagens/icones/neutro.png')}
                style={styles.moodImage}
                resizeMode="contain"
              />

              <Text style={styles.moodDay}>
                Ter
              </Text>

            </View>


            {/* QUARTA */}

            <View style={styles.moodItem}>

              {/*
                COLOQUE AQUI A IMAGEM DO HUMOR DE QUARTA
              */}

              <Image
                source={require('../../../assets/images/imagens/icones/bravo.png')}
                style={styles.moodImage}
                resizeMode="contain"
              />

              <Text style={styles.moodDay}>
              Qua
              </Text>

            </View>


            {/* QUINTA */}

            <View style={styles.moodItem}>

              {/*
                COLOQUE AQUI A IMAGEM DO HUMOR DE QUINTA
              */}

              <Image
                source={require('../../../assets/images/imagens/icones/triste.png')}
                style={styles.moodImage}
                resizeMode="contain"
              />

              <Text style={styles.moodDay}>
                Qui
              </Text>

            </View>


            {/* SEXTA */}

            <View style={styles.moodItem}>

              {/*
                COLOQUE AQUI A IMAGEM DO HUMOR DE SEXTA
              */}

              <Image
                source={require('../../../assets/images/imagens/icones/neutro.png')}
                style={styles.moodImage}
                resizeMode="contain"
              />

              <Text style={styles.moodDay}>
                Sex
              </Text>

            </View>


            {/* SÁBADO */}

            <View style={styles.moodItem}>

              {/*
                COLOQUE AQUI A IMAGEM DO HUMOR DE SÁBADO
              */}

              <Image
                source={require('../../../assets/images/imagens/icones/mb.png')}
                style={styles.moodImage}
                resizeMode="contain"
              />

              <Text style={styles.moodDay}>
                Sáb
              </Text>

            </View>


            {/* DOMINGO */}

            <View style={styles.moodItem}>

              {/*
                COLOQUE AQUI A IMAGEM DO HUMOR DE DOMINGO
              */}

              <Image
                source={require('../../../assets/images/imagens/icones/triste.png')}
                style={styles.moodImage}
                resizeMode="contain"
              />

              <Text style={styles.moodDay}>
                Dom
              </Text>

            </View>

          </View>

        </View>


        {/* =====================================================
            HORAS DE SONO
            ===================================================== */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Horas de sono (média)
          </Text>


          <View style={styles.sleepHeader}>

            {/*
              COLOQUE AQUI A IMAGEM/ÍCONE DA LUA

              Exemplo:

              <Image
                source={require('../../assets/rotinaGlobalC.png')}
                style={styles.moonImage}
              />
            */}

            <View style={styles.moonPlaceholder} />

            <View>
              <Text style={styles.averageSleep}>
                7h e 28min
              </Text>

              <Text style={styles.averageDescription}>
                Média essa semana
              </Text>
            </View>

          </View>


          {/* GRÁFICO DE SONO */}

          <View style={styles.sleepChart}>

            {/* ESCALA */}

            <View style={styles.sleepScale}>

              <Text style={styles.scaleText}>
                20h
              </Text>

              <Text style={styles.scaleText}>
                15h
              </Text>

              <Text style={styles.scaleText}>
                10h
              </Text>

              <Text style={styles.scaleText}>
                5h
              </Text>

              <Text style={styles.scaleText}>
                0h
              </Text>

            </View>


            {/* ÁREA DAS BARRAS */}

            <View style={styles.barsArea}>

              <View style={styles.horizontalLine} />
              <View style={styles.horizontalLine2} />
              <View style={styles.horizontalLine3} />
              <View style={styles.horizontalLine4} />
              <View style={styles.horizontalLine5} />


              <View style={styles.barsContainer}>

                {/* SEG */}

                <View style={styles.barColumn}>
                  <View
                    style={[
                      styles.sleepBar,
                      { height: 77 },
                    ]}
                  />

                  <Text style={styles.barDay}>
                    Seg
                  </Text>
                </View>


                {/* TER */}

                <View style={styles.barColumn}>
                  <View
                    style={[
                      styles.sleepBar,
                      { height: 89 },
                    ]}
                  />

                  <Text style={styles.barDay}>
                    Ter
                  </Text>
                </View>


                {/* QUA */}

                <View style={styles.barColumn}>
                  <View
                    style={[
                      styles.sleepBar,
                      { height: 70 },
                    ]}
                  />

                  <Text style={styles.barDay}>
                    Qua
                  </Text>
                </View>


                {/* QUI */}

                <View style={styles.barColumn}>
                  <View
                    style={[
                      styles.sleepBar,
                      { height: 76 },
                    ]}
                  />

                  <Text style={styles.barDay}>
                    Qui
                  </Text>
                </View>


                {/* SEX */}

                <View style={styles.barColumn}>
                  <View
                    style={[
                      styles.sleepBar,
                      { height: 91 },
                    ]}
                  />

                  <Text style={styles.barDay}>
                    Sex
                  </Text>
                </View>


                {/* SÁB */}

                <View style={styles.barColumn}>
                  <View
                    style={[
                      styles.sleepBar,
                      { height: 98 },
                    ]}
                  />

                  <Text style={styles.barDay}>
                    Sáb
                  </Text>
                </View>


                {/* DOM */}

                <View style={styles.barColumn}>
                  <View
                    style={[
                      styles.sleepBar,
                      { height: 69 },
                    ]}
                  />

                  <Text style={styles.barDay}>
                    Dom
                  </Text>
                </View>

              </View>

            </View>

          </View>

        </View>

      </ScrollView>


      {/* =====================================================
          NAVEGAÇÃO INFERIOR
          ===================================================== */}

        <HotbarGlobal tipo="responsavel" ativo="Relatórios" />
    </View>
  );
}


/* =========================================================
                        ESTILOS
========================================================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },


  /* ================= HEADER ================= */

  header: {
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#68179E',
  },

  headerIconArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },


  /* ================= SCROLL ================= */

  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 105,
  },


  /* ================= DATA ================= */

  dateSelector: {
    height: 62,
    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 18,

    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,

    elevation: 4,
  },

  dateText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#68179E',
  },

  dateButton: {
    width: 30,
    alignItems: 'center',
  },

  dateArrow: {
    fontSize: 32,
    color: '#111111',
    fontWeight: '300',
  },


  /* ================= ABAS ================= */

  tabs: {
    height: 40,

    flexDirection: 'row',

    borderBottomWidth: 2,
    borderBottomColor: '#E1E1E1',

    marginBottom: 15,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeTab: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 2,
    borderBottomColor: '#843BC1',
  },

  tabText: {
    fontSize: 15,
    color: '#68179E',
  },

  activeTabText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#68179E',
  },


  /* ================= CARD ================= */

  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    padding: 14,

    marginBottom: 13,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 4,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#68179E',

    marginBottom: 12,
  },


  /* ================= GRÁFICOS ================= */

  adherenceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  circularChart: {
    width: 120,
    height: 120,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

  circularChartBackground: {
    position: 'absolute',

    width: 120,
    height: 120,

    borderRadius: 60,

    borderWidth: 13,

    borderColor: '#E7E7E7',
  },

  chartPurplePart: {
    position: 'absolute',

    width: 120,
    height: 120,

    borderRadius: 60,

    borderWidth: 13,

    borderColor: 'transparent',

    borderTopColor: '#843BC1',
    borderRightColor: '#843BC1',
    borderBottomColor: '#843BC1',

    transform: [
      {
        rotate: '-15deg',
      },
    ],
  },

  fullPurpleCircle: {
    position: 'absolute',

    width: 120,
    height: 120,

    borderRadius: 60,

    borderWidth: 13,

    borderColor: '#843BC1',
  },

  chartCenter: {
    width: 88,
    height: 88,

    borderRadius: 44,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  chartPercentage: {
    fontSize: 28,
    fontWeight: '700',
    color: '#68179E',
  },


  /* ================= ESTATÍSTICAS ================= */

  statistics: {
    width: 125,
    gap: 9,
  },

  statBox: {
    height: 38,

    backgroundColor: '#FAFAFA',

    borderRadius: 9,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 12,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 7,
  },

  statText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#68179E',
  },

  completedNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#43C979',
    marginRight: 7,
  },

  pendingNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F5A900',
    marginRight: 7,
  },

  cancelledNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#B887E5',
    marginRight: 7,
  },


  /* ================= HUMOR ================= */

  moodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    paddingHorizontal: 4,
  },

  moodItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  moodPlaceholder: {
    width: 30,
    height: 30,

    borderRadius: 15,

    backgroundColor: '#48CA72',

    marginBottom: 5,
  },

  moodImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },

  moodOrange: {
    backgroundColor: '#FFAA20',
  },

  moodYellow: {
    backgroundColor: '#FFC21C',
  },

  moodRed: {
    backgroundColor: '#F04424',
  },

  moodDay: {
    fontSize: 11,
    color: '#68179E',
  },


  /* ================= SONO ================= */

  sleepHeader: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 12,
  },

  moonPlaceholder: {
    width: 45,
    height: 45,

    borderRadius: 23,

    backgroundColor: '#E9D7F8',

    marginRight: 10,
  },

  moonImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },

  averageSleep: {
    fontSize: 17,
    fontWeight: '700',
    color: '#68179E',
  },

  averageDescription: {
    fontSize: 10,
    color: '#68179E',
  },


  /* ================= GRÁFICO DE SONO ================= */

  sleepChart: {
    height: 175,

    flexDirection: 'row',

    marginTop: 3,
  },

  sleepScale: {
    width: 30,

    height: 145,

    justifyContent: 'space-between',

    alignItems: 'flex-end',
  },

  scaleText: {
    fontSize: 9,
    color: '#777777',
  },

  barsArea: {
    flex: 1,

    height: 145,

    position: 'relative',

    marginLeft: 6,
  },

  horizontalLine: {
    position: 'absolute',

    left: 0,
    right: 0,
    top: 0,

    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
  },

  horizontalLine2: {
    position: 'absolute',

    left: 0,
    right: 0,
    top: 36,

    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
  },

  horizontalLine3: {
    position: 'absolute',

    left: 0,
    right: 0,
    top: 72,

    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
  },

  horizontalLine4: {
    position: 'absolute',

    left: 0,
    right: 0,
    top: 108,

    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
  },

  horizontalLine5: {
    position: 'absolute',

    left: 0,
    right: 0,
    top: 144,

    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
  },

  barsContainer: {
    position: 'absolute',

    left: 5,
    right: 5,
    bottom: 0,

    height: 145,

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'flex-end',
  },

  barColumn: {
    height: 145,

    alignItems: 'center',

    justifyContent: 'flex-end',
  },

  sleepBar: {
    width: 16,

    backgroundColor: '#C28BEA',

    marginBottom: 6,
  },

  barDay: {
    position: 'absolute',

    bottom: -20,

    fontSize: 9,

    color: '#68179E',
  },


  /* ================= NAVEGAÇÃO ================= */

  bottomNavigation: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,

    height: 73,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-around',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: -2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 5,

    elevation: 8,
  },

  navigationItem: {
    height: 60,

    minWidth: 42,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 12,

    paddingHorizontal: 5,
  },

  navigationActive: {
    backgroundColor: '#E9D7F8',

    paddingHorizontal: 10,
  },

  navigationIconPlaceholder: {
    width: 27,
    height: 27,

    marginBottom: 3,
  },

  activeIconPlaceholder: {
    width: 30,
    height: 30,
  },

  navigationText: {
    fontSize: 8,

    color: '#68179E',

    textAlign: 'center',
  },

  navigationActiveText: {
    fontWeight: '700',
  },

});
