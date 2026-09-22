

import { Ionicons } from "@expo/vector-icons";
import { emBreve } from "../../components/em-breve";
import React from "react";
import { HotbarGlobal } from "../../components/HotbarGlobal";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

/*
|--------------------------------------------------------------------------
| TIPOS
|--------------------------------------------------------------------------
*/

type Consulta = {
  data: string;
  mes: string;
  horario: string;
  especialidade: string;
  medico: string;
  local: string;
};

type Lembrete = {
  titulo: string;
  descricao: string;
};


/*
|--------------------------------------------------------------------------
| DADOS DA TELA
|--------------------------------------------------------------------------
| Estes dados podem ser substituídos depois pelos dados reais.
|--------------------------------------------------------------------------
*/

const dadosTela = {
  cuidador: {
    nome: "Maria Aparecida",
    idoso: "João",
  },

  consultas: [
    {
      data: "20",
      mes: "MAI",
      horario: "10:00",
      especialidade: "Neurologia",
      medico: "Dr. Ricardo Almeida",
      local: "Hospital das Clínicas",
    },
    {
      data: "17",
      mes: "JUL",
      horario: "14:30",
      especialidade: "Geriatria",
      medico: "Dra. Juliana Martins",
      local: "Clínica Bem-Cuidar",
    },
  ] as Consulta[],

  lembrete: {
    titulo: "Não se esqueça!",
    descricao: "Leve a lista de medicamentos atualizada na próxima consulta.",
  } as Lembrete,
};


/*
|--------------------------------------------------------------------------
| TELA PRINCIPAL
|--------------------------------------------------------------------------
*/

export default function TelaConsultas() {

  const [modalNovaConsultaVisivel, setModalNovaConsultaVisivel] = React.useState(false);
  const [tipoConsulta, setTipoConsulta] = React.useState("");
  const [localConsulta, setLocalConsulta] = React.useState("");
  const [nomeDoutor, setNomeDoutor] = React.useState("");
  const [descricaoConsulta, setDescricaoConsulta] = React.useState("");
  const [dataConsulta, setDataConsulta] = React.useState("");
  const [horaConsulta, setHoraConsulta] = React.useState("");
  const [erroFormulario, setErroFormulario] = React.useState("");

  /*
   * Estes botões já estão separados em funções.
   * Depois você pode colocar a navegação para as outras telas aqui.
   */

  const abrirPerfilIdoso = () => {
    // Navegar para a tela de perfil do idoso
  };

  const abrirAgenda = () => {
    // Navegar para a tela da agenda
  };

  const abrirNovaConsulta = () => {
    setErroFormulario("");
    setModalNovaConsultaVisivel(true);
  };

  const confirmarNovaConsulta = () => {
    const dataValida = /^\d{2}\/\d{2}\/\d{4}$/.test(dataConsulta);
    const horaValida = /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(horaConsulta);

    if (!tipoConsulta.trim() || !localConsulta.trim() || !dataValida || !horaValida) {
      setErroFormulario("Preencha os campos obrigatórios nos formatos indicados.");
      return;
    }

    setModalNovaConsultaVisivel(false);
    setTipoConsulta("");
    setLocalConsulta("");
    setNomeDoutor("");
    setDescricaoConsulta("");
    setDataConsulta("");
    setHoraConsulta("");
    setErroFormulario("");
  };

  const formatarData = (texto: string) => {
    const numeros = texto.replace(/\D/g, "").slice(0, 8);
    const partes = [numeros.slice(0, 2), numeros.slice(2, 4), numeros.slice(4, 8)]
      .filter(Boolean);
    setDataConsulta(partes.join("/"));
  };

  const formatarHora = (texto: string) => {
    const numeros = texto.replace(/\D/g, "").slice(0, 4);
    const partes = [numeros.slice(0, 2), numeros.slice(2, 4)].filter(Boolean);
    setHoraConsulta(partes.join(":"));
  };

  const abrirTodosLembretes = () => {
    // Abrir tela com todos os lembretes
  };

  return (
    <SafeAreaView style={estilos.areaSegura}>

      <View style={estilos.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.conteudoRolagem}
        >

          {/* =====================================================
              ESPAÇO SUPERIOR
          ===================================================== */}

          <View style={estilos.espacoTopo} />


          {/* =====================================================
              BARRA SUPERIOR
          ===================================================== */}

          <View style={estilos.barraSuperior}>

            {/* ÍCONE DO MENU */}

            <TouchableOpacity
              style={estilos.localImagemMenu}
              activeOpacity={0.7}
              onPress={() => emBreve("O menu lateral")}
              hitSlop={10}
            >
              <Ionicons color="#8A1AAA" name="menu-outline" size={20} />
            </TouchableOpacity>


            {/* ÍCONE DO SININHO */}

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
              TÍTULO
          ===================================================== */}

          <Text style={estilos.tituloPagina}>
            Consultas
          </Text>


          {/* =====================================================
              CARD DO IDOSO
          ===================================================== */}

          <View style={estilos.cartaoIdoso}>

            {/* ESPAÇO PARA FOTO DO IDOSO */}

            <View style={estilos.localImagemIdoso}>
              <Image
                source={require("../../assets/perfilConsultasC.png")}
                style={estilos.imagemIdoso}
                resizeMode="contain"
              />
            </View>


            <View style={estilos.informacoesIdoso}>

              <Text style={estilos.nomeIdoso}>
                {dadosTela.cuidador.nome}
              </Text>

              <Text style={estilos.textoIdoso}>
                Cuidadora de {dadosTela.cuidador.idoso}
              </Text>


              <TouchableOpacity
                style={estilos.botaoPerfil}
                activeOpacity={0.8}
                onPress={abrirPerfilIdoso}
              >
                <Text style={estilos.textoBotaoPerfil}>
                  Ver perfil de {dadosTela.cuidador.idoso}
                </Text>
              </TouchableOpacity>

            </View>

          </View>


          {/* =====================================================
              PRÓXIMAS CONSULTAS
          ===================================================== */}

          <View style={estilos.linhaTituloSecao}>

            <Text style={estilos.tituloSecao}>
              Próximos consultas
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={abrirAgenda}
            >
              <Text style={estilos.linkSecao}>
                Ver agenda
              </Text>
            </TouchableOpacity>

          </View>


          {/* =====================================================
              LISTA DE CONSULTAS
          ===================================================== */}

          <View style={estilos.containerConsultas}>

            {dadosTela.consultas.map((consulta, indice) => (

              <CartaoConsulta
                key={indice}
                consulta={consulta}
              />

            ))}


            {/* BOTÃO NOVA CONSULTA */}

            <TouchableOpacity
              style={estilos.botaoNovaConsulta}
              activeOpacity={0.8}
              onPress={abrirNovaConsulta}
            >
              <Text style={estilos.textoBotaoNovaConsulta}>
                + Agendar nova consulta
              </Text>
            </TouchableOpacity>

          </View>


          {/* =====================================================
              PAPEL COMO CUIDADOR
          ===================================================== */}

          <View style={estilos.cartaoPapelCuidador}>

            <View style={estilos.textosPapelCuidador}>

              <Text style={estilos.tituloPapelCuidador}>
                O Seu papel como cuidador
              </Text>

              <Text style={estilos.textoPapelCuidador}>
                Acompanhe as consultas, prepare João
              </Text>

              <Text style={estilos.textoPapelCuidador}>
                para os atendimentos e registre
              </Text>

              <Text style={estilos.textoPapelCuidador}>
                observações importantes.
              </Text>

            </View>


            {/* ESPAÇO PARA IMAGEM/ÍCONE */}

            <View style={estilos.localImagemPapel}>
              <Image
                source={require("../../assets/papelConsultasC.png")}
                style={estilos.imagemPapel}
                resizeMode="contain"
              />
            </View>

          </View>


          {/* =====================================================
              LEMBRETES
          ===================================================== */}

          <View style={estilos.linhaTituloSecaoLembretes}>

            <Text style={estilos.tituloSecao}>
              Lembretes
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={abrirTodosLembretes}
            >
              <Text style={estilos.linkSecao}>
                Ver todos
              </Text>
            </TouchableOpacity>

          </View>


          <View style={estilos.cartaoLembrete}>

            {/* ESPAÇO PARA ÍCONE */}

            <View style={estilos.localIconeLembrete}>
              <Image
                source={require("../../assets/lembretesConsultasC.png")}
                style={estilos.imagemLembrete}
                resizeMode="contain"
              />
            </View>


            <View style={estilos.textosLembrete}>

              <Text style={estilos.tituloLembrete}>
                {dadosTela.lembrete.titulo}
              </Text>

              <Text style={estilos.descricaoLembrete}>
                {dadosTela.lembrete.descricao}
              </Text>

            </View>

          </View>


          <View style={estilos.espacoFinal} />

        </ScrollView>


        {/* =====================================================
            MENU INFERIOR
        ===================================================== */}

        <HotbarGlobal tipo="cuidador" ativo="Consultas" />

        <Modal
          visible={modalNovaConsultaVisivel}
          transparent
          animationType="fade"
          onRequestClose={() => setModalNovaConsultaVisivel(false)}
        >
          <View style={estilos.fundoModal}>
            <View style={estilos.conteudoModal}>
              <ScrollView
                style={estilos.rolagemModal}
                keyboardShouldPersistTaps="handled"
              >
              <Text style={estilos.tituloModal}>Agendar nova consulta</Text>

              <Text style={estilos.rotuloModal}>Tipo da consulta *</Text>
              <TextInput
                style={estilos.inputModal}
                value={tipoConsulta}
                onChangeText={setTipoConsulta}
                placeholder="Ex.: Consulta de rotina"
                placeholderTextColor="#9B7AA5"
              />

              <Text style={estilos.rotuloModal}>Local *</Text>
              <TextInput
                style={estilos.inputModal}
                value={localConsulta}
                onChangeText={setLocalConsulta}
                placeholder="Ex.: Hospital das Clínicas"
                placeholderTextColor="#9B7AA5"
              />

              <Text style={estilos.rotuloModal}>Nome do profissional</Text>
              <TextInput
                style={estilos.inputModal}
                value={nomeDoutor}
                onChangeText={setNomeDoutor}
                placeholder="Opcional"
                placeholderTextColor="#9B7AA5"
              />

              <Text style={estilos.rotuloModal}>Descrição</Text>
              <TextInput
                style={[estilos.inputModal, estilos.inputDescricaoModal]}
                value={descricaoConsulta}
                onChangeText={setDescricaoConsulta}
                placeholder="Opcional"
                placeholderTextColor="#9B7AA5"
                multiline
                textAlignVertical="top"
              />

              <View style={estilos.linhaDataHoraModal}>
                <View style={estilos.campoDataModal}>
                  <Text style={estilos.rotuloModal}>Data *</Text>
                  <TextInput
                    style={estilos.inputModal}
                    value={dataConsulta}
                    onChangeText={formatarData}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#9B7AA5"
                    keyboardType="numeric"
                    maxLength={10}
                  />
                </View>

                <View style={estilos.campoHoraModal}>
                  <Text style={estilos.rotuloModal}>Hora *</Text>
                  <TextInput
                    style={estilos.inputModal}
                    value={horaConsulta}
                    onChangeText={formatarHora}
                    placeholder="HH:MM"
                    placeholderTextColor="#9B7AA5"
                    keyboardType="numeric"
                    maxLength={5}
                  />
                </View>
              </View>

              {erroFormulario ? (
                <Text style={estilos.erroFormulario}>{erroFormulario}</Text>
              ) : null}

              <View style={estilos.acoesModal}>
                <TouchableOpacity
                  style={estilos.botaoFecharModal}
                  activeOpacity={0.8}
                  onPress={() => setModalNovaConsultaVisivel(false)}
                >
                  <Text style={estilos.textoBotaoFecharModal}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={estilos.botaoConfirmarModal}
                  activeOpacity={0.8}
                  onPress={confirmarNovaConsulta}
                >
                  <Text style={estilos.textoBotaoConfirmarModal}>Confirmar</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

      </View>

    </SafeAreaView>
  );
}


/*
|--------------------------------------------------------------------------
| CARTÃO DE CONSULTA
|--------------------------------------------------------------------------
*/

type PropriedadesCartaoConsulta = {
  consulta: Consulta;
};

function CartaoConsulta({
  consulta,
}: PropriedadesCartaoConsulta) {

  return (

    <View style={estilos.cartaoConsulta}>

      {/* DATA */}

      <View style={estilos.blocoData}>

        <Text style={estilos.numeroData}>
          {consulta.data}
        </Text>

        <Text style={estilos.mesData}>
          {consulta.mes}
        </Text>

      </View>


      {/* INFORMAÇÕES */}

      <View style={estilos.informacoesConsulta}>

        <Text style={estilos.especialidadeConsulta}>
          {consulta.especialidade}
        </Text>

        <Text style={estilos.medicoConsulta}>
          {consulta.medico}
        </Text>


        <View style={estilos.linhaInformacaoConsulta}>

          <Text style={estilos.iconePequeno}>
            ◷
          </Text>

          <Text style={estilos.textoInformacaoConsulta}>
            {consulta.horario}
          </Text>

        </View>


        <View style={estilos.linhaInformacaoConsulta}>

          <Text style={estilos.iconePequeno}>
            ♧
          </Text>

          <Text style={estilos.textoInformacaoConsulta}>
            {consulta.local}
          </Text>

        </View>

      </View>

    </View>
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
    paddingTop: 10,
    paddingBottom: 24,
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

    height: 30,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: 4,

    marginBottom: 0,
  },

  localImagemMenu: {
    width: 30,
    height: 30,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 6,

    backgroundColor: "#F2E6F7",
  },

  localImagemSino: {
    width: 30,
    height: 30,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 6,

    backgroundColor: "#F2E6F7",
  },

  textoImagemTopo: {
    fontSize: 5,

    color: "#8A1AAA",

    fontWeight: "700",
  },

  textoImagem: {
    fontSize: 7,
    color: "#9A21B8",
    fontWeight: "700",
  },


  /*
  |--------------------------------------------------------------------------
  | TÍTULO
  |--------------------------------------------------------------------------
  */

  tituloPagina: {
    fontSize: 20,

    fontWeight: "800",

    color: "#68127E",

    textAlign: "center",

    marginTop: 1,

    marginBottom: 5,
  },


  /*
  |--------------------------------------------------------------------------
  | CARD DO IDOSO
  |--------------------------------------------------------------------------
  */

  cartaoIdoso: {
    width: "100%",

    minHeight: 102,

    backgroundColor: "#F4E9FA",

    borderRadius: 9,

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 9,

    paddingVertical: 6,

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,

    shadowRadius: 3,

    elevation: 3,
  },

  localImagemIdoso: {
    width: 70,
    height: 70,

    borderRadius: 30,

    backgroundColor: "#DCC2E8",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 9,
  },

  imagemIdoso: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },

  informacoesIdoso: {
    flex: 1,

    justifyContent: "center",
  },

  nomeIdoso: {
    fontSize: 14,

    fontWeight: "800",

    color: "#68127E",

    marginBottom: 2,
  },

  textoIdoso: {
    fontSize: 11,

    color: "#68127E",

    fontWeight: "700",

    marginBottom: 4,
  },

  botaoPerfil: {
    alignSelf: "flex-start",

    backgroundColor: "#FFFFFF",

    borderRadius: 8,

    paddingHorizontal: 10,

    paddingVertical: 4,
  },

  textoBotaoPerfil: {
    fontSize: 10,

    color: "#9A21B8",

    fontWeight: "700",
  },


  /*
  |--------------------------------------------------------------------------
  | TÍTULOS DAS SEÇÕES
  |--------------------------------------------------------------------------
  */

  linhaTituloSecao: {
    width: "100%",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    marginTop: 10,

    marginBottom: 5,

    paddingHorizontal: 5,
  },

  linhaTituloSecaoLembretes: {
    width: "100%",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    marginTop: 5,

    marginBottom: 3,

    paddingHorizontal: 5,
  },

  tituloSecao: {
    fontSize: 14,

    fontWeight: "800",

    color: "#71158E",
  },

  linkSecao: {
    fontSize: 10,

    color: "#A72BC5",

    fontWeight: "700",
  },


  /*
  |--------------------------------------------------------------------------
  | CONSULTAS
  |--------------------------------------------------------------------------
  */

  containerConsultas: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderRadius: 8,

    paddingHorizontal: 5,

    paddingTop: 8,

    paddingBottom: 7,

    borderWidth: 1,

    borderColor: "#E7E7E7",

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.12,

    shadowRadius: 2,

    elevation: 2,
  },

  cartaoConsulta: {
    width: "100%",

    minHeight: 132,

    backgroundColor: "#FFFFFF",

    borderBottomWidth: 1,

    borderBottomColor: "#EEEEEE",

    flexDirection: "row",

    overflow: "hidden",
  },

  blocoData: {
    width: 52,

    backgroundColor: "#F1E5FA",

    justifyContent: "center",

    alignItems: "center",

    paddingVertical: 8,
  },

  numeroData: {
    fontSize: 25,

    lineHeight: 28,

    fontWeight: "800",

    color: "#9824C0",
  },

  mesData: {
    fontSize: 15,

    fontWeight: "800",

    color: "#9824C0",

    marginTop: 0,
  },

  informacoesConsulta: {
    flex: 1,

    paddingHorizontal: 7,

    paddingVertical: 8,

    justifyContent: "center",
  },

  especialidadeConsulta: {
    fontSize: 13,

    fontWeight: "800",

    color: "#68127E",

    marginBottom: 1,
  },

  medicoConsulta: {
    fontSize: 10,

    color: "#6C4B76",

    marginBottom: 4,
  },

  linhaInformacaoConsulta: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: 2,
  },

  iconePequeno: {
    width: 11,

    fontSize: 12,

    color: "#8B20A9",

    marginRight: 2,
  },

  textoInformacaoConsulta: {
    flex: 1,

    fontSize: 10,

    color: "#7B4A88",
  },


  /*
  |--------------------------------------------------------------------------
  | BOTÃO NOVA CONSULTA
  |--------------------------------------------------------------------------
  */

  botaoNovaConsulta: {
    alignSelf: "center",

    backgroundColor: "#B45BD1",

    borderRadius: 4,

    paddingHorizontal: 13,

    paddingVertical: 5,

    marginTop: 5,
  },

  textoBotaoNovaConsulta: {
    color: "#FFFFFF",

    fontSize: 11,

    fontWeight: "800",
  },


  /*
  |--------------------------------------------------------------------------
  | PAPEL COMO CUIDADOR
  |--------------------------------------------------------------------------
  */

  cartaoPapelCuidador: {
    width: "100%",

    minHeight: 112,

    backgroundColor: "#F4E9FA",

    borderRadius: 8,

    marginTop: 7,

    paddingHorizontal: 9,

    paddingVertical: 7,

    flexDirection: "row",

    alignItems: "center",
  },

  textosPapelCuidador: {
    flex: 1,
  },

  tituloPapelCuidador: {
    fontSize: 12,

    fontWeight: "800",

    color: "#71158E",

    marginBottom: 3,
  },

  textoPapelCuidador: {
    fontSize: 9,

    lineHeight: 14,

    color: "#A72BC5",
  },

  localImagemPapel: {
    width: 52,

    height: 60,

    justifyContent: "center",

    alignItems: "center",

    marginLeft: 4,
  },

  imagemPapel: {
    width: "100%",
    height: "100%",
  },

  textoImagemPapel: {
    fontSize: 10,

    color: "#9A21B8",

    fontWeight: "700",
  },


  /*
  |--------------------------------------------------------------------------
  | LEMBRETES
  |--------------------------------------------------------------------------
  */

  cartaoLembrete: {
    width: "100%",

    minHeight: 150,

    backgroundColor: "#FFFFFF",

    borderRadius: 6,

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 16,

    paddingVertical: 18,
  },

  localIconeLembrete: {
    width: 62,

    height: 96,

    justifyContent: "center",

    alignItems: "center",

    marginRight: 12,
  },

  imagemLembrete: {
    width: 45,
    height: 70,
  },

  textoIconeLembrete: {
    fontSize: 9,

    color: "#A72BC5",

    fontWeight: "700",
  },

  textosLembrete: {
    flex: 1,
  },

  tituloLembrete: {
    fontSize: 17,

    fontWeight: "800",

    color: "#68127E",

    marginBottom: 6,
  },

  descricaoLembrete: {
    fontSize: 13,

    color: "#8B5B95",

    lineHeight: 20,
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
    fontSize: 8,

    color: "#8C1AA9",
  },

  textoImagemIconeAtivo: {
    color: "#FFFFFF",
  },

  textoNavegacao: {
    fontSize: 10,

    color: "#8E25A9",

    textAlign: "center",
  },

  textoNavegacaoAtivo: {
    fontWeight: "800",

    color: "#85139F",
  },


  fundoModal: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  conteudoModal: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  rolagemModal: {
    width: "100%",
    maxHeight: 560,
  },

  linhaDataHoraModal: {
    flexDirection: "row",
    gap: 12,
  },

  campoDataModal: {
    flex: 1.25,
  },

  campoHoraModal: {
    flex: 1,
  },

  tituloModal: {
    fontSize: 20,
    fontWeight: "800",
    color: "#68127E",
    marginBottom: 20,
  },

  rotuloModal: {
    fontSize: 13,
    fontWeight: "700",
    color: "#68127E",
    marginBottom: 6,
  },

  inputModal: {
    height: 46,
    borderWidth: 1,
    borderColor: "#DCC2E8",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#3F2348",
    marginBottom: 16,
  },

  inputDescricaoModal: {
    height: 80,
    paddingTop: 12,
  },

  erroFormulario: {
    fontSize: 13,
    color: "#C62828",
    fontWeight: "700",
    marginBottom: 8,
  },

  acoesModal: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 8,
  },

  botaoFecharModal: {
    borderWidth: 1,
    borderColor: "#B45BD1",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  textoBotaoFecharModal: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8B20A9",
  },

  botaoConfirmarModal: {
    backgroundColor: "#9B20BB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  textoBotaoConfirmarModal: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },


  /*
  |--------------------------------------------------------------------------
  | ESPAÇO FINAL
  |--------------------------------------------------------------------------
  */

  espacoFinal: {
    height: 28,
  },

});
