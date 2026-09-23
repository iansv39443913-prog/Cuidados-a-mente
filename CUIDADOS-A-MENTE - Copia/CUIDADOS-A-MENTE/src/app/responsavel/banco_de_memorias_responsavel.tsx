import { Ionicons } from "@expo/vector-icons";
import { emBreve } from "../../components/em-breve";
import React, { useState } from "react";
import { HotbarGlobal } from "../../components/HotbarGlobal";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";

const dadosTela = {
  categorias: [
    {
      titulo: "Fotos",
      imagem: require("../../assets/fotosBancoRC.png"),
    },
    {
      titulo: "Vídeos",
      imagem: require("../../assets/videosBancoRC.png"),
    },
    {
      titulo: "Áudios",
      imagem: require("../../assets/audiosBancoRC.png"),
    },
    {
      titulo: "Histórias",
      imagem: require("../../assets/historiasBancoRC.png"),
    },
  ],
  pastas: ["Maio", "Junho", "Julho"],
  memorias: [
    {
      titulo: "Passeio no parque",
      imagem: require("../../assets/passeioBancoRC.png"),
    },
    {
      titulo: "Reunião de família",
      imagem: require("../../assets/reuniaoBancoRC.png"),
    },
    {
      titulo: "Dia das crianças",
      imagem: require("../../assets/diaBancoRC.png"),
    },
  ],
  anos: ["2023", "2024", "2025"],
};

export default function TelaMemorias() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Fotos");

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.conteudo}
        >
          <View style={estilos.espacoTopo} />

          <View style={estilos.cabecalho}>
            <Text style={estilos.titulo}>Banco de Memórias</Text>

            <View style={estilos.localImagemCabecalho}>
              <Ionicons color="#8A1AAA" name="images-outline" size={18} />
            </View>

            <TouchableOpacity style={estilos.botaoPesquisa} onPress={() => emBreve('A busca de memórias')}>
              <Text style={estilos.pesquisa}>⌕</Text>
            </TouchableOpacity>
          </View>

          <View style={estilos.linhaCategorias}>
            {dadosTela.categorias.map((categoria) => {
              const ativa = categoria.titulo === categoriaAtiva;

              return (
              <TouchableOpacity
                key={categoria.titulo}
                style={[
                  estilos.cartaoCategoria,
                  ativa && estilos.cartaoCategoriaAtivo,
                ]}
                activeOpacity={0.8}
                onPress={() => setCategoriaAtiva(categoria.titulo)}
              >
                <View
                  style={[
                    estilos.localImagemCategoria,
                  ]}
                >
                  {categoria.imagem ? (
                    <Image
                      source={categoria.imagem}
                      style={estilos.imagemCategoriaArquivo}
                      resizeMode="cover"
                    />
                  ) : (
                    <Ionicons color="#8A1AAA" name="image-outline" size={16} />
                  )}
                </View>
                <Text
                  style={[
                    estilos.textoCategoria,
                    ativa && estilos.textoCategoriaAtivo,
                  ]}
                >
                  {categoria.titulo}
                </Text>
              </TouchableOpacity>
              );
            })}
          </View>

          <CabecalhoSecao titulo="Pastas de momentos" textoBotao="Ver todos" />

          <View style={estilos.linhaPastas}>
            {dadosTela.pastas.map((pasta) => (
              <TouchableOpacity
                key={pasta}
                style={estilos.pasta}
                activeOpacity={0.8}
                onPress={() => emBreve('A busca de memórias')}
              >
                <View style={estilos.abaPasta} />
                <View style={estilos.corpoPasta}>
                  <Text style={estilos.textoPasta}>{pasta}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <CabecalhoSecao titulo="Memórias recentes" textoBotao="Ver todas" />

          <View style={estilos.linhaMemorias}>
            {dadosTela.memorias.map((memoria) => (
              <TouchableOpacity
                key={memoria.titulo}
                style={estilos.cartaoMemoria}
                activeOpacity={0.8}
                onPress={() => emBreve('A busca de memórias')}
              >
                {/* ESPAÇO PARA COLOCAR A IMAGEM DA MEMÓRIA */}
                <Image
                  source={memoria.imagem}
                  style={estilos.imagemMemoria}
                  resizeMode="cover"
                />
                <Text numberOfLines={1} style={estilos.tituloMemoria}>
                  {memoria.titulo}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <CabecalhoSecao titulo="Por ano" textoBotao="Ver todos" />

          <View style={estilos.linhaAnos}>
            {dadosTela.anos.map((ano) => (
              <TouchableOpacity
                key={ano}
                style={estilos.pastaAno}
                activeOpacity={0.8}
                onPress={() => emBreve('A busca de memórias')}
              >
                <View style={estilos.abaAno} />
                <View style={estilos.corpoAno}>
                  <Text style={estilos.textoAno}>{ano}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={estilos.botaoAdicionar}
            activeOpacity={0.8}
            onPress={() => emBreve('A busca de memórias')}
          >
            <Text style={estilos.textoAdicionar}>+ Adicionar memória</Text>
          </TouchableOpacity>

          <View style={{ height: 12 }} />
        </ScrollView>

        <HotbarGlobal tipo="responsavel" ativo="Memórias" />
      </View>
    </SafeAreaView>
  );
}

function CabecalhoSecao({
  titulo,
  textoBotao,
}: {
  titulo: string;
  textoBotao: string;
}) {
  return (
    <View style={estilos.cabecalhoSecao}>
      <Text style={estilos.tituloSecao}>{titulo}</Text>

      <TouchableOpacity activeOpacity={0.7} onPress={() => emBreve('A busca de memórias')}>
        <Text style={estilos.botaoVerTodos}>{textoBotao}</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  conteudo: {
    paddingHorizontal: "4%",
    paddingBottom: 8,
  },

  espacoTopo: {
    height: 28,
  },

  cabecalho: {
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "800",
    color: "#5E147D",
  },

  localImagemCabecalho: {
    position: "absolute",
    left: "39%",
    width: 48,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  imagemPequena: {
    fontSize: 7,
    color: "#8D2AAD",
  },

  botaoPesquisa: {
    position: "absolute",
    right: 1,
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  pesquisa: {
    fontSize: 28,
    color: "#777777",
  },

  linhaCategorias: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  cartaoCategoria: {
    width: "23.5%",
    height: 76,
    borderRadius: 8,

	backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#9C88FF",
    alignItems: "center",
    justifyContent: "center",
  },

  cartaoCategoriaAtivo: {
    backgroundColor: "#9C88FF",
  },

  localImagemCategoria: {
    width: 36,
    height: 34,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },

  localImagemCategoriaInativa: {
    borderColor: "#FFFFFF",
  },

  imagemCategoria: {
    color: "#FFFFFF",
    fontSize: 7,
  },

  imagemCategoriaArquivo: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
  },

  textoCategoria: {
    color: "#681981",
    fontSize: 13,
    fontWeight: "700",
  },

  textoCategoriaAtivo: {
    color: "#FFFFFF",
  },

  cabecalhoSecao: {
    height: 36,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  tituloSecao: {
    fontSize: 17,
    color: "#64127E",
    fontWeight: "800",
  },

  botaoVerTodos: {
    fontSize: 12,
    color: "#8A22AA",
  },

  linhaPastas: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pasta: {
    width: "30.8%",
    height: 150,
    position: "relative",
  },

  abaPasta: {
    position: "absolute",
    top: 0,
    left: 10,
    width: 68,
    height: 18,
    backgroundColor: "#B66DDE",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  corpoPasta: {
    position: "absolute",
    top: 15,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#EAD9F4",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    borderColor: "#D4B5E6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#681981",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 3,
  },

  textoPasta: {
    color: "#681981",
    fontSize: 18,
    fontWeight: "700",
  },

  linhaMemorias: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cartaoMemoria: {
    width: "31.5%",
    height: 146,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    backgroundColor: "#FFFFFF",
    padding: 4,
  },

  imagemMemoria: {
    flex: 1,
    width: "100%",
    borderRadius: 3,
  },

  tituloMemoria: {
    color: "#66167E",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 4,
  },

  linhaAnos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pastaAno: {
    width: "31.5%",
    height: 94,
    position: "relative",
  },

  abaAno: {
    position: "absolute",
    top: 0,
    left: 8,
    width: 58,
    height: 15,
    backgroundColor: "#B66DDE",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  corpoAno: {
    position: "absolute",
    top: 13,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#C58BE8",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    borderWidth: 1,
    borderColor: "#A96ACF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#681981",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 3,
  },

  textoAno: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  botaoAdicionar: {
    height: 42,
    width: "100%",
    marginTop: 18,
    borderRadius: 8,
    backgroundColor: "#D8A6EE",
    alignItems: "center",
    justifyContent: "center",
  },

  textoAdicionar: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  navegacaoInferior: {
    height: 73,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 8,
  },

  itemNavegacao: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  localIcone: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#F1E5F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },

  localIconeAtivo: {
    backgroundColor: "#9C27B8",
  },

  textoIcone: {
    color: "#8B20A8",
    fontSize: 8,
  },

  textoIconeAtivo: {
    color: "#FFFFFF",
  },

  textoNavegacao: {
    color: "#7D218F",
    fontSize: 10,
    textAlign: "center",
  },

  textoNavegacaoAtivo: {
    color: "#80149D",
    fontWeight: "800",
  },
});
