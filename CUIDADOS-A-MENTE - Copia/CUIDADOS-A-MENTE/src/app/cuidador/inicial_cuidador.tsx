import { Ionicons } from "@expo/vector-icons";
import { emBreve } from "../../components/em-breve";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { HotbarGlobal } from "../../components/HotbarGlobal";

import { SafeAreaView } from 'react-native-safe-area-context';

/*
|--------------------------------------------------------------------------
| TIPOS
|--------------------------------------------------------------------------
*/

type DiaSemana = {
  letra: string;
  selecionado: boolean;
};

type VagaEmprego = {
  nome: string;
  horas: string;
  pagamento: string;
};


/*
|--------------------------------------------------------------------------
| DADOS DA TELA
|--------------------------------------------------------------------------
*/

const dadosTela = {
  nomeUsuario: "Maria",

  lembrete: {
    titulo: "Remédio de pressão",
    horario: "08:00",
    tempoRestante: "Em 20 minutos",
  },

  tarefas: {
    concluidas: 2,
    total: 5,
    pendentes: 15,
    atrasadas: 0,
  },

  vagas: [
    {
      nome: "Maria Santa",
      horas: "07:00 - 15:00",
      pagamento: "R$1.980",
    },

    {
      nome: "Cláudia Thomaz",
      horas: "06:00 - 14:00",
      pagamento: "R$2.200",
    },

    {
      nome: "Juliana Matias da Silva",
      horas: "07:00 - 19:00",
      pagamento: "R$1.500",
    },

    {
      nome: "Fabio Junior",
      horas: "09:00 - 15:00",
      pagamento: "R$1.200",
    },
  ] as VagaEmprego[],
};


/*
|--------------------------------------------------------------------------
| TELA PRINCIPAL
|--------------------------------------------------------------------------
*/

export default function TelaInicial() {

  const { width } = useWindowDimensions();

  const telaPequena = width < 360;

  return (
    <SafeAreaView style={estilos.areaSegura}>

      <View style={estilos.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.conteudoRolagem}
        >

          {/* =====================================================
              ESPAÇO SUPERIOR

              Esse espaço cria uma distância entre o topo do
              celular e os primeiros elementos.
          ===================================================== */}

          <View style={estilos.espacoTopo} />


          {/* =====================================================
              BARRA SUPERIOR

              ESQUERDA:
              espaço reservado para as três listras.

              DIREITA:
              espaço reservado para o sino.
          ===================================================== */}

          <View style={estilos.barraSuperior}>

            {/* ESPAÇO PARA AS TRÊS LISTRAS */}

            <TouchableOpacity
              style={estilos.localImagemMenu}
              activeOpacity={0.7}
              onPress={() => emBreve("O menu lateral")}
              hitSlop={10}
            >
              <Ionicons color="#8A1AAA" name="menu-outline" size={20} />
            </TouchableOpacity>


            {/* ESPAÇO PARA O SININHO */}

            <TouchableOpacity
              style={estilos.localImagemSino}
              activeOpacity={0.7}
              onPress={() => emBreve("As notificações")}
              hitSlop={10}
            >
              <Ionicons color="#8A1AAA" name="notifications-outline" size={19} />
            </TouchableOpacity>

          </View>


          {/* =====================================================
              CABEÇALHO
          ===================================================== */}

          <View style={estilos.cabecalho}>

            <View style={estilos.containerTextoCabecalho}>

              <Text
                style={[
                  estilos.saudacao,
                  telaPequena && estilos.saudacaoPequena,
                ]}
              >
                Olá, {dadosTela.nomeUsuario}!
              </Text>

              <Text style={estilos.descricaoCabecalho}>
                Pronta para acompanhar a rotina
              </Text>

              <Text style={estilos.descricaoCabecalho}>
                de hoje?
              </Text>

            </View>


            {/* =================================================
                ESPAÇO PARA A IMAGEM DO MASCOTE
            ================================================= */}

            <View style={estilos.localImagemMascote}>
              <Image
                source={require("../../assets/mascoteInicioC.png")}
                style={estilos.imagemMascote}
                resizeMode="contain"
              />

            </View>

          </View>


          {/* =====================================================
              LEMBRETE
          ===================================================== */}

          <View style={estilos.cartaoLembrete}>

            <View style={estilos.textosLembrete}>

              <Text style={estilos.rotuloLembrete}>
                Próximo lembrete
              </Text>

              <Text style={estilos.tituloLembrete}>
                {dadosTela.lembrete.titulo}
              </Text>

              <Text style={estilos.horarioLembrete}>
                {dadosTela.lembrete.horario} –{" "}
                {dadosTela.lembrete.tempoRestante}
              </Text>

            </View>


            {/* ESPAÇO PARA IMAGEM DO REMÉDIO */}

            <View style={estilos.localImagemRemedio}>
              <Image
                source={require("../../assets/remedioInicioC.png")}
                style={estilos.imagemRemedio}
                resizeMode="contain"
              />

            </View>

          </View>


          {/* =====================================================
              RESUMO DO DIA
          ===================================================== */}

          <Text style={estilos.tituloSecao}>
            Resumo do dia
          </Text>


          <View style={estilos.containerTarefas}>

            <CartaoTarefa
              numero={`${dadosTela.tarefas.concluidas}/${dadosTela.tarefas.total}`}
              titulo="Tarefas"
              subtitulo="concluídas"
              tipo="concluidas"
              simbolo="✓"
            />

            <CartaoTarefa
              numero={dadosTela.tarefas.pendentes.toString()}
              titulo="Tarefas"
              subtitulo="pendentes"
              tipo="pendentes"
              simbolo="○"
            />

            <CartaoTarefa
              numero={dadosTela.tarefas.atrasadas.toString()}
              titulo="Tarefas"
              subtitulo="em atraso"
              tipo="atrasadas"
              simbolo="×"
            />

          </View>


          {/* =====================================================
              VAGAS
          ===================================================== */}

          <Text style={estilos.tituloVagas}>
            Estão querendo te contratar!
          </Text>


          <View style={estilos.containerVagas}>

            {dadosTela.vagas.map((vaga, indice) => (

              <CartaoVaga
                key={indice}
                vaga={vaga}
              />

            ))}

          </View>

          <View style={estilos.espacoFinal} />

        </ScrollView>


        {/* =====================================================
            MENU INFERIOR
        ===================================================== */}

        <HotbarGlobal tipo="cuidador" ativo="Início" />

      </View>

    </SafeAreaView>
  );
}


/*
|--------------------------------------------------------------------------
| CARTÃO DE TAREFA
|--------------------------------------------------------------------------
*/

type PropriedadesCartaoTarefa = {
  numero: string;
  titulo: string;
  subtitulo: string;
  tipo: "concluidas" | "pendentes" | "atrasadas";
  simbolo: string;
};

function CartaoTarefa({
  numero,
  titulo,
  subtitulo,
  tipo,
  simbolo,
}: PropriedadesCartaoTarefa) {

  return (

    <View
      style={[
        estilos.cartaoTarefa,

        tipo === "concluidas" &&
          estilos.cartaoTarefaConcluida,

        tipo === "pendentes" &&
          estilos.cartaoTarefaPendente,

        tipo === "atrasadas" &&
          estilos.cartaoTarefaAtrasada,
      ]}
    >

      <Text
        style={[
          estilos.numeroTarefa,

          tipo === "concluidas" &&
            estilos.numeroTarefaConcluida,

          tipo === "pendentes" &&
            estilos.numeroTarefaPendente,

          tipo === "atrasadas" &&
            estilos.numeroTarefaAtrasada,
        ]}
      >
        {numero}
      </Text>


      <Text style={estilos.textoTarefa}>
        {titulo}
      </Text>

      <Text style={estilos.textoTarefa}>
        {subtitulo}
      </Text>


      {/* ESPAÇO PARA ÍCONE */}

      <View
        style={[
          estilos.localIconeTarefa,

          tipo === "concluidas" &&
            estilos.iconeTarefaConcluida,

          tipo === "pendentes" &&
            estilos.iconeTarefaPendente,

          tipo === "atrasadas" &&
            estilos.iconeTarefaAtrasada,
        ]}
      >
        <Image
          source={
            tipo === "concluidas"
              ? require("../../assets/concluidoInicioC.png")
              : tipo === "pendentes"
                ? require("../../assets/pendenteInicioC.png")
                : require("../../assets/atrasoInicioC.png")
          }
          style={estilos.imagemIconeTarefa}
          resizeMode="contain"
        />

      </View>

    </View>
  );
}


/*
|--------------------------------------------------------------------------
| CARTÃO DE VAGA
|--------------------------------------------------------------------------
*/

type PropriedadesCartaoVaga = {
  vaga: VagaEmprego;
};

function CartaoVaga({
  vaga,
}: PropriedadesCartaoVaga) {

  return (

    <TouchableOpacity
      activeOpacity={0.8}
      style={estilos.cartaoVaga}
      onPress={() => emBreve(`A vaga "${vaga.nome}"`)}
    >

      <Text style={estilos.nomeVaga}>
        {vaga.nome}
      </Text>


      <Text style={estilos.informacaoVaga}>

        <Text style={estilos.informacaoVagaNegrito}>
          Horas:
        </Text>{" "}

        {vaga.horas}

      </Text>


      <Text style={estilos.informacaoVaga}>

        <Text style={estilos.informacaoVagaNegrito}>
          Pagamento:
        </Text>{" "}

        {vaga.pagamento}

      </Text>

    </TouchableOpacity>
  );
}


/*
|--------------------------------------------------------------------------
| ESTILOS
|--------------------------------------------------------------------------
*/

const estilos = StyleSheet.create({

  /*
  |--------------------------------------------------------------------------
  | TELA
  |--------------------------------------------------------------------------
  */

  areaSegura: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  conteudoRolagem: {
    paddingHorizontal: "3%",
    paddingTop: 0,
  },


  /*
  |--------------------------------------------------------------------------
  | ESPAÇO DO TOPO
  |--------------------------------------------------------------------------
  */

  espacoTopo: {
    height: 18,
  },


  /*
  |--------------------------------------------------------------------------
  | BARRA SUPERIOR
  |--------------------------------------------------------------------------
  */

  barraSuperior: {
    width: "100%",

    height: 35,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: 4,

    marginBottom: 2,
  },


  /*
  |--------------------------------------------------------------------------
  | IMAGEM DAS TRÊS LISTRAS
  |--------------------------------------------------------------------------
  */

  localImagemMenu: {
    width: 30,
    height: 30,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 6,

    backgroundColor: "#F2E6F7",
  },


  /*
  |--------------------------------------------------------------------------
  | IMAGEM DO SININHO
  |--------------------------------------------------------------------------
  */

  localImagemSino: {
    width: 30,
    height: 30,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 6,

    // Cor temporária
    backgroundColor: "#F2E6F7",
  },

  textoImagemTopo: {
    fontSize: 5,

    color: "#8A1AAA",

    fontWeight: "700",
  },


  /*
  |--------------------------------------------------------------------------
  | CABEÇALHO
  |--------------------------------------------------------------------------
  */

  cabecalho: {
    width: "100%",

    minHeight: 120,

    flexDirection: "row",

    justifyContent: "flex-start",

    alignItems: "center",

    paddingHorizontal: 3,

    marginBottom: 5,
  },

  containerTextoCabecalho: {
    width: "54%",

    paddingTop: 5,
  },

  saudacao: {
    fontSize: 22,

    fontWeight: "800",

    color: "#68127E",

    marginBottom: 5,
  },

  saudacaoPequena: {
    fontSize: 20,
  },

  descricaoCabecalho: {
    fontSize: 11,

    lineHeight: 15,

    color: "#999999",
  },


  /*
  |--------------------------------------------------------------------------
  | MASCOTE
  |--------------------------------------------------------------------------
  */

  localImagemMascote: {
    width: 112,
    height: 112,

    borderRadius: 56,

    justifyContent: "center",

    alignItems: "center",

    marginLeft: 0,
  },

  imagemMascote: {
    width: "100%",
    height: "100%",
    borderRadius: 56,
  },

  textoImagem: {
    color: "#FFFFFF",

    fontSize: 7,

    fontWeight: "700",
  },


  /*
  |--------------------------------------------------------------------------
  | LEMBRETE
  |--------------------------------------------------------------------------
  */

  cartaoLembrete: {
    width: "100%",

    minHeight: 82,

    backgroundColor: "#F4E9FA",

    borderRadius: 11,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 16,

    paddingVertical: 12,

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.16,

    shadowRadius: 4,

    elevation: 4,
  },

  textosLembrete: {
    flex: 1,
  },

  rotuloLembrete: {
    fontSize: 9,

    color: "#8C22AC",

    marginBottom: 5,
  },

  tituloLembrete: {
    fontSize: 13,

    fontWeight: "800",

    color: "#64147B",

    marginBottom: 3,
  },

  horarioLembrete: {
    fontSize: 10,

    color: "#8B1EB3",

    fontWeight: "700",
  },

  localImagemRemedio: {
    width: 54,
    height: 54,

    borderRadius: 8,

    backgroundColor: "#A72BC5",

    justifyContent: "center",

    alignItems: "center",
  },

  imagemRemedio: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },


  /*
  |--------------------------------------------------------------------------
  | TÍTULOS
  |--------------------------------------------------------------------------
  */

  tituloSecao: {
    fontSize: 13,

    fontWeight: "800",

    color: "#71158E",

    marginTop: 18,

    marginBottom: 9,
  },

  tituloVagas: {
    fontSize: 13,

    fontWeight: "800",

    color: "#71158E",

    marginTop: 28,

    marginBottom: 9,
  },


  /*
  |--------------------------------------------------------------------------
  | TAREFAS
  |--------------------------------------------------------------------------
  */

  containerTarefas: {
    width: "100%",

    flexDirection: "row",

    justifyContent: "space-between",

    gap: 9,
  },

  cartaoTarefa: {
    flex: 1,

    minHeight: 112,

    borderRadius: 8,

    alignItems: "center",

    justifyContent: "flex-start",

    paddingTop: 10,

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.14,

    shadowRadius: 3,

    elevation: 3,
  },

  cartaoTarefaConcluida: {
    backgroundColor: "#D9F9E8",
  },

  cartaoTarefaPendente: {
    backgroundColor: "#FFFDDC",
  },

  cartaoTarefaAtrasada: {
    backgroundColor: "#FFDCDC",
  },

  numeroTarefa: {
    fontSize: 20,

    fontWeight: "800",

    marginBottom: 4,
  },

  numeroTarefaConcluida: {
    color: "#2AA85A",
  },

  numeroTarefaPendente: {
    color: "#E0BE00",
  },

  numeroTarefaAtrasada: {
    color: "#E51D2B",
  },

  textoTarefa: {
    fontSize: 10,

    lineHeight: 14,

    color: "#252525",

    fontWeight: "600",
  },

  localIconeTarefa: {
    width: 27,
    height: 27,

    borderRadius: 14,

    marginTop: 8,

    alignItems: "center",

    justifyContent: "center",
  },

  imagemIconeTarefa: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
  },

  iconeTarefaConcluida: {
    backgroundColor: "#31AA59",
  },

  iconeTarefaPendente: {
    backgroundColor: "#FFBA1F",
  },

  iconeTarefaAtrasada: {
    backgroundColor: "#E91C2B",
  },

  textoIconeTarefa: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "800",
  },


  /*
  |--------------------------------------------------------------------------
  | VAGAS
  |--------------------------------------------------------------------------
  */

  containerVagas: {
    width: "100%",

    backgroundColor: "#F5EAFE",

    borderRadius: 9,

    padding: 10,

    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-between",

    rowGap: 10,
  },

  cartaoVaga: {
    width: "48.5%",

    backgroundColor: "#FFFFFF",

    borderRadius: 8,

    paddingVertical: 10,

    paddingHorizontal: 6,

    alignItems: "center",

    minHeight: 88,

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.14,

    shadowRadius: 3,

    elevation: 3,
  },

  nomeVaga: {
    fontSize: 15,

    fontWeight: "800",

    color: "#601271",

    marginBottom: 4,

    textAlign: "center",
  },

  informacaoVaga: {
    fontSize: 10,

    color: "#222222",

    lineHeight: 14,

    textAlign: "center",
  },

  informacaoVagaNegrito: {
    color: "#68147E",

    fontWeight: "800",
  },


  /*
  |--------------------------------------------------------------------------
  | NAVEGAÇÃO INFERIOR
  |--------------------------------------------------------------------------
  */

  navegacaoInferior: {
    width: "100%",

    height: 64,

    backgroundColor: "#FFFFFF",

    borderTopWidth: 1,

    borderTopColor: "#EEEEEE",

    flexDirection: "row",

    justifyContent: "space-around",

    alignItems: "center",

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: -2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 3,

    elevation: 8,

    paddingHorizontal: 2,
  },

  itemNavegacao: {
    flex: 1,

    height: "100%",

    alignItems: "center",

    justifyContent: "center",
  },

  localIconeNavegacao: {
    width: 27,

    height: 27,

    borderRadius: 6,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#F2E5F6",

    marginBottom: 3,
  },

  iconeNavegacaoAtivo: {
    backgroundColor: "#9B20BB",
  },

  textoImagemIcone: {
    fontSize: 5,

    color: "#8C1AA9",
  },

  textoNavegacao: {
    fontSize: 7,

    color: "#8E25A9",

    textAlign: "center",
  },

  textoNavegacaoAtivo: {
    fontWeight: "800",

    color: "#85139F",
  },


  /*
  |--------------------------------------------------------------------------
  | ESPAÇO FINAL
  |--------------------------------------------------------------------------
  */

  espacoFinal: {
    height: 30,
  },
});
