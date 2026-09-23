import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ReactNode, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { emBreve, voltar } from "./em-breve";
import { HotbarGlobal } from "./HotbarGlobal";

type TipoPainelTela = "perfilresponsavel" | "consultas" | "medicamentos";
type IconName = React.ComponentProps<typeof Ionicons>["name"];

type painelTelaGeral = {
  variante: TipoPainelTela;
};

const purple = "#8e2bb1";
const lightPurple = "#f1e4fa";

function Header({ titulo }: { titulo: string }) {
  return (
    <View style={styles.cabecalho}>
      <TouchableOpacity onPress={() => voltar("/responsavel")} hitSlop={10}>
        <Ionicons color="#b66bd5" name="menu-outline" size={20} />
      </TouchableOpacity>
      <Text style={styles.tituloCabecalho}>{titulo}</Text>
      <TouchableOpacity onPress={() => emBreve("Notificações")} hitSlop={10}>
        <Ionicons color={purple} name="notifications-outline" size={21} />
      </TouchableOpacity>
    </View>
  );
}

function FotoPerfil({ large = false, idoso = false }: { large?: boolean; idoso?: boolean }) {
  return (
    <View style={[styles.perfil, large && styles.avatar]}>
      <Image
        source={idoso ? require("../assets/images/perfilidoso.png") : require("../assets/images/perfilfam.png")}
        style={styles.imagemPerfil}
        resizeMode="cover"
      />
    </View>
  );
}

function NavBaixo({ active }: { active: TipoPainelTela }) {
  const ativo = active === "perfilresponsavel"
    ? "Perfil"
    : active === "consultas"
      ? "Consultas"
      : "Remédios";

  return <HotbarGlobal tipo="responsavel" ativo={ativo} />;
}

function NavLinha({ icon, label, detail }: { icon: IconName; label: string; detail: string }) {
  return (
    <TouchableOpacity style={styles.navLinha} activeOpacity={0.6} onPress={() => emBreve(label)}>
      <View style={styles.navIcon}>
        <Ionicons color={purple} name={icon} size={19} />
      </View>
      <View style={styles.navConteudo}>
        <Text style={styles.navTitulo}>{label}</Text>
        <Text style={styles.navDetalhe}>{detail}</Text>
      </View>
      <Ionicons color={purple} name="chevron-forward" size={17} />
    </TouchableOpacity>
  );
}

function TelaPerfil() {
  return (
    <View style={styles.telaConteudo}>

      <Header titulo="Meu perfil" />
      <ScrollView style={styles.conteudo} contentContainerStyle={styles.perfilConteudo} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">

        <View style={styles.perfilCard}>
          <FotoPerfil large />

          <View>
            <Text style={styles.perfilNome}>Ana Ferreira</Text>
            <Text style={styles.profissao}>Responsável</Text>
            <View style={styles.etiquetaFuncao}><Text style={styles.textoEtiqueta}>Responsável principal</Text></View>
          </View>
        </View>

        <View style={styles.contatoCard}>
          <LinhaContato icon="mail-outline" text="anaferreira140@gmail.com" />
          <LinhaContato icon="call-outline" text="(11) 98755-0973" />
          <LinhaContato icon="location-outline" text="São Paulo, SP" />
        </View>

        <View style={styles.listaCard}>
          <NavLinha detail="Dados da sua conta" icon="person-outline" label="Informações pessoais" />
          <NavLinha detail="Senha, biometria e permissões" icon="globe-outline" label="Segurança e acesso" />
          <NavLinha detail="Preferências de alertas" icon="notifications-outline" label="Notificações" />
          <NavLinha detail="Gerencie seus dispositivos" icon="phone-portrait-outline" label="Dispositivos conectados" />
          <NavLinha detail="Central de ajuda" icon="help-circle-outline" label="Ajuda e suporte" />
          <NavLinha detail="Personalize o aplicativo" icon="settings-outline" label="Configurações" />
        </View>

        <TouchableOpacity style={styles.sairBotao} onPress={() => router.replace("/")}><Ionicons color="#ed656c" name="log-out-outline" size={15} /><Text style={styles.sairTexto}>Sair da conta</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

function LinhaContato({ icon, text }: { icon: IconName; text: string }) {
  return(
  <View style={styles.contatoLinha}>
    <Ionicons color={purple} name={icon} size={17} />
    <Text style={styles.contatoTexto}>{text}</Text>
  </View>
  )
}

function ConsultasCard({ data, mes, ctitulo, doutor, horario, lugar, status, realizadas = false }: { data: string; mes: string; ctitulo: string; doutor: string; horario: string; lugar: string; status: string; realizadas?: boolean }) {
  return (
  <View style={[styles.consultasCard, realizadas && styles.realizadaCard]}>
    <View style={styles.blocoData}>
        <Text style={styles.data}>{data}</Text>
        <Text style={styles.mes}>{mes}</Text>
    </View>

    <View style={styles.consultasConteudo}>
        <Text style={styles.consultasTitulo}>{ctitulo}</Text>
        <Text style={styles.consultasDetaalhes}>{doutor}</Text>
        <Text style={styles.consultasDetaalhes}>◷ {horario}</Text>
        <Text style={styles.consultasDetaalhes}>⌖ {lugar}</Text>
    </View>
    <View style={[styles.situacao, status === "Pendente" && styles.pendentes]}>
        <Text style={styles.statusTexto}>{status}</Text>
    </View>
  </View>
  );
}

function TelaConsultas() {
  return (
    <View style={styles.telaConteudo}>

      <Header titulo="Consultas" />
      <ScrollView style={styles.conteudo} contentContainerStyle={styles.painelConteudo} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">

        <View style={styles.bannerUsuario}>
            <FotoPerfil idoso />

            <View style={styles.bannerConteudo}>
                <Text style={styles.bannerNome}>João Ferreira</Text>
                <Text style={styles.bannerDetalhe}>72 anos · Alzheimer</Text>
            </View>

            <TouchableOpacity onPress={() => router.push("/responsavel/perfil_idoso_responsavel")}>
                <Text style={styles.bannerLinkTexto}>Ver perfil de saúde</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.tituloSecao}>
            <Text style={styles.tituloSecaoTexto}>Próximas consultas</Text>
            <Text style={styles.verTodos} onPress={() => emBreve("A agenda completa")}>Ver agenda</Text>
        </View>

        <ConsultasCard data="20" mes="MAI" ctitulo="Neurologia" doutor="Dr. Ricardo Almeida" horario="10:00" lugar="Hospital das Clínicas" status="Confirmada" />
        <ConsultasCard data="17" mes="JUL" ctitulo="Geriatria" doutor="Dra. Juliana Martins" horario="14:30" lugar="Clínica Bem-Cuidar" status="Pendente" />

        <TouchableOpacity style={styles.addBotao} onPress={() => emBreve("O agendamento de consultas")}>
            <Ionicons color="#fff" name="add" size={15} />
            <Text style={styles.addBotaoTexto}>Agendar nova consulta</Text>
        </TouchableOpacity>

        <View style={styles.tituloSecao}>
            <Text style={styles.tituloSecaoTexto}>Consultas anteriores</Text>
            <Text style={styles.verTodos} onPress={() => emBreve("O histórico de consultas")}>Ver todas</Text>
        </View>

        <ConsultasCard data="10" mes="MAI" ctitulo="Psiquiatria" doutor="Dr. Paulo Menezes" horario="14:30" lugar="Hospital das Clínicas" status="" realizadas />
      </ScrollView>
    </View>
  );
}


function MedicacaoCard({ icone, mtitulo, detalhe, quantidade, status, mcor }: { icone: IconName; mtitulo: string; detalhe: string; quantidade: string; status: string; mcor: string }) {
  return(
    <View style={styles.medicamentosCard}>
      <View style={[styles.medIcone, { backgroundColor: mcor }]}>
        <Ionicons color={purple} name={icone} size={25} />
      </View>

      <View style={styles.medConteudo}>
        <Text style={styles.medTitulo}>{mtitulo}</Text>
        <Text style={styles.medDetalhe}>{detalhe}</Text>
        <Text style={styles.medDetalhe}>{quantidade}</Text>
      </View>

      <Text style={[styles.medSituacao, status === "Em breve" && styles.textoLaranja]}>{status}</Text>
    </View>
  )
}

const listaMedicamentos = [
  { mcor: "#dff4e9", detalhe: "Losartana 50mg", quantidade: "1 comprimido", status: "Concluído", mtitulo: "Remédio - Pressão" },
  { mcor: "#fff0d9", detalhe: "Colecalciferol 7000 UI", quantidade: "1 comprimido", status: "Em breve", mtitulo: "Remédio - Vitamina D" },
  { mcor: "#e9e9ff", detalhe: "Sinvastatina 20mg", quantidade: "1 comprimido", status: "Pendente", mtitulo: "Remédio - Colesterol" },
];

function TelaMedicamentos() {
  const [aba, setAba] = useState<"Hoje" | "Próximos" | "Todos">("Hoje");

  const medicamentosVisiveis = aba === "Próximos"
    ? listaMedicamentos.filter((m) => m.status !== "Concluído")
    : listaMedicamentos;

  return (
    <View style={styles.telaConteudo}>
      <Header titulo="Medicamentos" />
      <ScrollView style={styles.conteudo} contentContainerStyle={styles.painelConteudo} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
        <View style={styles.bannerUsuario}>
            <FotoPerfil idoso />
            <View style={styles.bannerConteudo}>
                <Text style={styles.bannerNome}>João Ferreira</Text>
                <Text style={styles.bannerDetalhe}>72 anos · Alzheimer</Text>
            </View>

            <TouchableOpacity onPress={() => router.push("/responsavel/perfil_idoso_responsavel")}>
                <Text style={styles.bannerLinkTexto}>Editar perfil 〉</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.abas}>
            {(["Hoje", "Próximos", "Todos"] as const).map((nome) => (
              <Text
                key={nome}
                style={aba === nome ? styles.abaAtiva : styles.aba}
                onPress={() => setAba(nome)}
              >
                {nome}
              </Text>
            ))}
        </View>

        {medicamentosVisiveis.map((med) => (
          <MedicacaoCard
            key={med.mtitulo}
            mcor={med.mcor}
            detalhe={med.detalhe}
            quantidade={med.quantidade}
            icone="alarm-outline"
            status={med.status}
            mtitulo={med.mtitulo}
          />
        ))}

        {medicamentosVisiveis.length === 0 && (
          <Text style={styles.listaVazia}>Nenhum medicamento nesta aba.</Text>
        )}

        <View style={styles.dicaCard}>
            <Image source={require("../assets/images/eugenio.png")} style={styles.dicaIcone} resizeMode="contain" />
            <View>
                <Text style={styles.dicaTitulo}>Dica do Eugênio</Text>
                <Text style={styles.dicaTexto}>Mantenha os medicamentos organizados</Text>
                <Text style={styles.dicaTexto}>e horários sempre em dia!</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.addBotao} onPress={() => emBreve("O cadastro de medicamentos")}>
            <Ionicons color="#fff" name="add" size={15} />
            <Text style={styles.addBotaoTexto}>Adicionar novo medicamento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.historicoBotao} onPress={() => emBreve("O histórico de medicamentos")}>
            <Ionicons color={purple} name="bar-chart-outline" size={15} />
            <Text style={styles.historicoTexto}>Ver histórico de medicamentos</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export function painelTela({ variante }: painelTelaGeral) {
  let content: ReactNode;
  if (variante === "consultas") content = <TelaConsultas />;
  else if (variante === "medicamentos") content = <TelaMedicamentos />;
  else content = <TelaPerfil />;

  return (
    <SafeAreaView style={styles.areaSegura}>
        {content}
        <NavBaixo active={variante} />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  areaSegura: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%"

  },
  telaConteudo: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%"
  },
  conteudo: {
    flex: 1,
    width: "100%"
  },
  cabecalho: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    marginTop: -25,
    paddingHorizontal: 8
  },
  tituloCabecalho: {
    color: purple,
    fontSize: 17,
    fontWeight: "800"
  },
  perfilConteudo: {
    backgroundColor: "#fff",
    flexGrow: 1,
    padding: 9,
    paddingBottom: 14
  },
  painelConteudo: {
    backgroundColor: "#fff",
    flexGrow: 1,
    padding: 14,
    paddingBottom: 28
  },
  perfilCard: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
    paddingLeft: 6
  },
  perfil: {
    alignItems: "center",
    backgroundColor: "#f0e9dc",
    borderColor: "#c9b4d5",
    borderRadius: 36,
    borderWidth: 2,
    height: 72,
    justifyContent: "center",
    overflow: "hidden",
    width: 72
  },
  avatar: {
    borderRadius: 44,
    height: 88,
    marginRight: 14,
    width: 88
  },
  imagemPerfil: {
    height: "100%",
    width: "100%"
  },
  textoAvatar: { fontSize: 40 },
  textoAvatarGrande: { fontSize: 52 },
  perfilNome: {
    color: purple,
    fontSize: 23,
    fontWeight: "800"
  },
  profissao: {
    color: purple,
    fontSize: 13,
    marginTop: 1
  },
  etiquetaFuncao: {
    backgroundColor: "#ddc4f5",
    borderRadius: 3,
    marginTop: 5,
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  textoEtiqueta: {
    color: purple,
    fontSize: 10
  },
  contatoCard: {
    borderColor: "#eee",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 9,
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  contatoLinha: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
    paddingVertical: 6
  },
  contatoTexto: {
    color: purple,
    fontSize: 13
  },
  listaCard: {
    borderColor: "#eee",
    borderRadius: 5,
    borderWidth: 1,
    overflow: "hidden"
  },
  navLinha: {
    alignItems: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: "row",
    minHeight: 62,
    paddingHorizontal: 10
  },
  navIcon: {
    alignItems: "center",
    backgroundColor: lightPurple,
    height: 40,
    justifyContent: "center",
    marginRight: 10,
    width: 40
  },
  navConteudo: { flex: 1 },
  navTitulo: {
    color: purple,
    fontSize: 13,
    fontWeight: "700"
  },
  navDetalhe: {
    color: "#9f77ac",
    fontSize: 10,
    marginTop: 3
  },
  sairBotao: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ffd9dc",
    borderRadius: 6,
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    marginTop: 14,
    paddingVertical: 9,
    width: 190
  },
  sairTexto: { color: "#ed656c", fontSize: 12 },
  bannerUsuario: {
    alignItems: "center",
    backgroundColor: "#f5eafa",
    borderRadius: 8,
    flexDirection: "row",
    minHeight: 82,
    padding: 11
  },
  bannerConteudo: { flex: 1, marginLeft: 7 },
  bannerNome: {
    color: purple,
    fontSize: 16,
    fontWeight: "800"
  },
  bannerDetalhe: {
    color: "#8e6597",
    fontSize: 11,
    marginTop: 2
  },
  bannerLinkTexto: {
    backgroundColor: "#fff",
    borderRadius: 7,
    color: purple,
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 6
  },
  tituloSecao: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
    marginTop: 16
  },
  tituloSecaoTexto: {
    color: purple,
    fontSize: 14,
    fontWeight: "800"
  },
  verTodos: { color: purple, fontSize: 11 },
  consultasCard: {
    alignItems: "center",
    borderColor: "#ececec",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 12,
    minHeight: 106,
    overflow: "hidden",
    paddingRight: 7
  },
  realizadaCard: { minHeight: 66 },
  blocoData: {
    alignSelf: "stretch",
    backgroundColor: "#f1e7fb",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  data: {
    color: "#a138d1",
    fontSize: 21,
    fontWeight:
    "800"
  },
  mes: {
    color: purple,
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center"
  },
  consultasConteudo: {
    flex: 1,
    paddingLeft: 8
  },
  consultasTitulo: { color: purple, fontSize: 15, fontWeight: "800" },
  consultasDetaalhes: { color: "#80668b", fontSize: 10, marginTop: 5 },
  situacao: {
    alignSelf: "flex-end",
    backgroundColor: "#d6f5d9",
    borderRadius: 5,
    marginBottom: 8,
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  pendentes: { backgroundColor: "#fff1bb" },
  statusTexto: { color: "#34a34b", fontSize: 10 },
  addBotao: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#bc6bdd",
    borderRadius: 4,
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  addBotaoTexto: { color: "#fff", fontSize: 9, fontWeight: "700" },
  abas: {
    borderBottomColor: "#d6c8da",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
    paddingTop: 7
  },
  aba: { color: purple, fontSize: 10, paddingBottom: 5 },
  abaAtiva: {
    borderBottomColor: purple,
    borderBottomWidth: 2,
    color: purple,
    fontSize: 10,
    fontWeight: "800",
    paddingBottom: 5
  },
  medicamentosCard: {
    alignItems: "center",
    borderColor: "#e8e8e8",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 12,
    minHeight: 88,
    padding: 10
  },
  medIcone: {
    alignItems: "center",
    borderRadius: 4,
    height: 58,
    justifyContent: "center",
    width: 58
  },
  medConteudo: { flex: 1, marginLeft: 8 },
  medTitulo: { color: purple, fontSize: 13, fontWeight: "800" },
  medDetalhe: { color: "#91699b", fontSize: 10, marginTop: 3 },
  medSituacao: { color: "#32a249", fontSize: 11 },
  textoLaranja: { color: "#f2a30c" },
  dicaCard: {
    alignItems: "center",
    backgroundColor: "#f3e8fb",
    borderRadius: 6,
    flexDirection: "row",
    marginBottom: 14,
    padding: 12
  },
  listaVazia: { color: "#866995", fontSize: 12, marginTop: 14, textAlign: "center" },
  dicaIcone: { height: 48, marginRight: 8, width: 48 },
  dicaTitulo: { color: purple, fontSize: 13, fontWeight: "800" },
  dicaTexto: { color: "#866995", fontSize: 10, marginTop: 3 },
  historicoBotao: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    gap: 4,
    marginTop: 6
  },
  historicoTexto: { color: purple, fontSize: 9, fontWeight: "700" },
  navegacaoBaixa: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopColor: "#e7dcec",
    borderTopWidth: 1,
    flexDirection: "row",
    flexShrink: 0,
    height: 64,
    justifyContent: "space-around",
    width: "100%",
    zIndex: 1
  },
  itemNavegacao: { alignItems: "center", flex: 1, flexBasis: 0, justifyContent: "center", minWidth: 0 },
  rotuloNavegacao: { color: "#9e4bc1", fontSize: 8, marginTop: 3 },
  rotuloNavegacaoAtivo: { fontWeight: "800" },
});
