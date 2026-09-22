import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { emBreve } from '../../components/em-breve';
import { HotbarGlobal } from '../../components/HotbarGlobal';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

const dadosTela = {
  nome: 'João Ferreira',
  idade: 72,
  diagnostico: 'Alzheimer nível intermediário',

  // Coloque aqui o caminho da imagem do idoso quando tiver
  imagemIdoso: require('../../assets/perfilPerfilidosoR.png'),

  opcoes: [
    {
      titulo: 'Perfil e saúde',
      descricao: 'Informações e histórico clínico',
      imagem: require('../../assets/perfilsaudePerfilidosoR.png'),
    },
    {
      titulo: 'Medicamentos',
      descricao: 'Gerencie todos os medicamentos',
      imagem: require('../../assets/medicamentosPerfilidosoR.png'),
    },
    {
      titulo: 'Consultas',
      descricao: 'Agende e acompanhe consultas',
      imagem: require('../../assets/consultasPerfilidosoR.png'),
    },
    {
      titulo: 'Contatos de emergência',
      descricao: 'Gerencie contatos importantes',
      imagem: require('../../assets/contatosPerfilidosoR.png'),
    },
    {
      titulo: 'Permissões de acesso',
      descricao: 'Controle o acesso de cuidadores',
      imagem: require('../../assets/permissoesPerfilidosoR.png'),
    },
    {
      titulo: 'Banco de memórias',
      descricao: 'Reviva momentos especiais',
      imagem: require('../../assets/bancoPerfilidosoR.png'),
    },
    {
      titulo: 'Dispositivos conectados',
      descricao: 'Gerencie dispositivos vinculados',
      imagem: require('../../assets/dispositivoPerfiilidosoR.png'),
    },
    {
      titulo: 'Configurações',
      descricao: 'Ajustes do aplicativo',
      imagem: require('../../assets/configuracoesPerfilidosoR.png'),
    },
  ],
};

export default function PerfilIdoso() {

  const abrirOpcao = (titulo: string) => {
    const destinos: Record<string, string> = {
      'Medicamentos': '/medicamentos',
      'Consultas': '/consultas',
      'Banco de memórias': '/responsavel/banco_de_memorias_responsavel',
    };

    const destino = destinos[titulo];

    if (destino) {
      router.push(destino as any);
      return;
    }

    emBreve(titulo);
  };

  const editarPerfil = () => {
    emBreve('A edição do perfil');
  };

  const navegar = (tela: string) => {
    console.log('Navegar para:', tela);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Abrir menu')}
        >
          <View style={styles.menuLinha} />
          <View style={styles.menuLinha} />
          <View style={styles.menuLinha} />
        </TouchableOpacity>

        <Text style={styles.tituloHeader}>
          Perfil do Idoso
        </Text>

      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >

        {/* CARTÃO DO IDOSO */}
        <View style={styles.cardIdoso}>

          <View style={styles.areaImagemIdoso}>

            {dadosTela.imagemIdoso ? (
              /*
                COLOQUE SUA IMAGEM AQUI

                Exemplo:

                <Image
                  source={dadosTela.imagemIdoso}
                  style={styles.imagemIdoso}
                />
              */
              <Image
                source={dadosTela.imagemIdoso}
                style={styles.imagemIdoso}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={require('../../assets/images/perfilidoso.png')}
                style={styles.imagemIdoso}
                resizeMode="cover"
              />
            )}

          </View>

          <View style={styles.informacoesIdoso}>

            <Text style={styles.nomeIdoso}>
              {dadosTela.nome}
            </Text>

            <Text style={styles.informacao}>
              Idade: {dadosTela.idade} anos
            </Text>

            <Text style={styles.informacao}>
              Diagnóstico: {dadosTela.diagnostico}
            </Text>

          </View>

          {/* BOTÃO EDITAR */}
          <TouchableOpacity
            style={styles.botaoEditar}
            onPress={editarPerfil}
          >
            <Image
              source={require('../../assets/editarPerfilidoso.png')}
              style={styles.imagemEditar}
              resizeMode="contain"
            />
          </TouchableOpacity>

        </View>


        {/* OPÇÕES */}
        <View style={styles.listaOpcoes}>

          {dadosTela.opcoes.map((opcao, index) => (

            <TouchableOpacity
              key={index}
              style={styles.cardOpcao}
              onPress={() => abrirOpcao(opcao.titulo)}
              activeOpacity={0.7}
            >

              {/* ÁREA DA IMAGEM/ÍCONE */}
              <View
                style={[
                  styles.areaImagemOpcao,
                  opcao.titulo === 'Dispositivos conectados' &&
                    styles.fundoDispositivo,
                ]}
              >

                {opcao.imagem ? (
                  /*
                    COLOQUE A IMAGEM/ÍCONE DA OPÇÃO AQUI
                  */
                  <Image
                    source={opcao.imagem}
                    style={styles.imagemOpcao}
                    resizeMode="contain"
                  />
                ) : (
                  <Ionicons color="#8A1AAA" name="ellipse-outline" size={22} />
                )}

              </View>

              {/* TEXTOS */}
              <View style={styles.textosOpcao}>

                <Text style={styles.tituloOpcao}>
                  {opcao.titulo}
                </Text>

                <Text style={styles.descricaoOpcao}>
                  {opcao.descricao}
                </Text>

              </View>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>


      {/* BARRA INFERIOR */}
      <HotbarGlobal tipo="responsavel" ativo="Perfil" />
      <View style={[styles.bottomBar, { display: 'none' }]}>

        <TouchableOpacity
          style={styles.itemBottom}
          onPress={() => navegar('Inicio')}
        >
          <View style={styles.iconeBottom}>
            <View style={styles.casaIcone} />
          </View>

          <Text style={styles.textoBottom}>
            Início
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.itemBottom}
          onPress={() => navegar('Rotina')}
        >
          <View style={styles.iconeBottom}>
            <View style={styles.calendarioIcone} />
          </View>

          <Text style={styles.textoBottom}>
            Rotina
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.itemBottom}
          onPress={() => navegar('Memórias')}
        >
          <View style={styles.iconeBottom}>
            <View style={styles.imagemIcone} />
          </View>

          <Text style={styles.textoBottom}>
            Memórias
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.itemBottom}
          onPress={() => navegar('Idoso')}
        >
          <View style={styles.iconeBottom}>
            <View style={styles.idosoIcone} />
          </View>

          <Text style={styles.textoBottom}>
            Idoso
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.itemBottom}
          onPress={() => navegar('Consultas')}
        >
          <View style={styles.iconeBottom}>
            <View style={styles.consultaIcone} />
          </View>

          <Text style={styles.textoBottom}>
            Consultas
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.itemBottom}
          onPress={() => navegar('Relatórios')}
        >
          <View style={styles.iconeBottom}>
            <View style={styles.relatorioIcone} />
          </View>

          <Text style={styles.textoBottom}>
            Relatórios
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.itemBottom}
          onPress={() => navegar('Perfil')}
        >
          <View style={styles.iconeBottom}>
            <View style={styles.perfilIcone} />
          </View>

          <Text style={styles.textoBottom}>
            Perfil
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* =========================
     CABEÇALHO
  ========================= */

  header: {
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  tituloHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#68158D',
  },

  menuButton: {
    position: 'absolute',
    left: 16,
    top: 20,
    width: 27,
    height: 29,
    justifyContent: 'center',
    gap: 3,
  },

  menuLinha: {
    width: 19,
    height: 3,
    backgroundColor: '#B55DE3',
    borderRadius: 2,
  },


  /* =========================
     SCROLL
  ========================= */

  scroll: {
    flex: 1,
  },

  conteudo: {
    paddingHorizontal: 14,
    paddingBottom: 18,
  },


  /* =========================
     CARTÃO DO IDOSO
  ========================= */

  cardIdoso: {
    height: 122,
    backgroundColor: '#F2E5FC',
    borderRadius: 12,
    marginBottom: 12,

    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 12,

    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  areaImagemIdoso: {
    width: 98,
    height: 98,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50,
    overflow: 'hidden',
  },

  placeholderImagem: {
    width: 92,
    height: 92,
    borderRadius: 50,

    backgroundColor: '#DDEEFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  imagemIdoso: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  placeholderTexto: {
    fontSize: 11,
    color: '#7D4C9B',
  },

  informacoesIdoso: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },

  nomeIdoso: {
    fontSize: 20,
    fontWeight: '700',
    color: '#64138A',
    marginBottom: 6,
  },

  informacao: {
    fontSize: 11,
    fontWeight: '500',
    color: '#64138A',
    marginBottom: 4,
  },

  botaoEditar: {
    width: 42,
    height: 64,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    marginRight: 8,
  },

  imagemEditar: {
    width: 30,
    height: 30,
  },

  /* LÁPIS FEITO COM VIEW */
  lapisArea: {
    width: 23,
    height: 23,
    transform: [{ rotate: '-45deg' }],
  },

  lapisCorpo: {
    position: 'absolute',
    width: 6,
    height: 16,
    backgroundColor: '#A74ADB',
    left: 8,
    top: 1,
    borderRadius: 1,
  },

  lapisPonta: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#A74ADB',
    left: 7,
    top: 16,
  },


  /* =========================
     OPÇÕES
  ========================= */

  listaOpcoes: {
    gap: 12,
  },

  cardOpcao: {
    height: 70,

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    borderWidth: 1,
    borderColor: '#E7E7E7',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,

    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },

  areaImagemOpcao: {
    width: 52,
    height: 52,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  fundoDispositivo: {
    backgroundColor: '#F4E9FA',
    borderRadius: 8,
  },

  placeholderOpcao: {
    width: 44,
    height: 44,

    borderRadius: 8,

    backgroundColor: '#F4E9FA',

    justifyContent: 'center',
    alignItems: 'center',
  },

  imagemOpcao: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  placeholderOpcaoTexto: {
    fontSize: 8,
    color: '#8D3DB6',
  },

  textosOpcao: {
    flex: 1,
    justifyContent: 'center',
  },

  tituloOpcao: {
    fontSize: 16,
    fontWeight: '700',
    color: '#64138A',
    marginBottom: 2,
  },

  descricaoOpcao: {
    fontSize: 12,
    color: '#64138A',
  },


  /* =========================
     BARRA INFERIOR
  ========================= */

  bottomBar: {
    height: 73,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    paddingHorizontal: 2,
  },

  itemBottom: {
    width: 52,
    height: 68,

    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeBottom: {
    width: 34,
    height: 36,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 1,
  },

  textoBottom: {
    fontSize: 10,
    color: '#8E27C2',
    fontWeight: '600',
  },


  /* =========================
     ÍCONES DA BARRA
  ========================= */

  casaIcone: {
    width: 17,
    height: 14,
    borderWidth: 2,
    borderColor: '#A42AD2',
    borderTopWidth: 0,
    marginTop: 7,
  },

  calendarioIcone: {
    width: 19,
    height: 17,
    borderWidth: 2,
    borderColor: '#A42AD2',
    borderRadius: 3,
  },

  imagemIcone: {
    width: 19,
    height: 16,
    borderWidth: 2,
    borderColor: '#A42AD2',
    borderRadius: 3,
  },

  idosoIcone: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A42AD2',
  },

  consultaIcone: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#A42AD2',
  },

  relatorioIcone: {
    width: 20,
    height: 18,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#A42AD2',
  },

  perfilIcone: {
    width: 21,
    height: 21,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#A42AD2',
  },

});
