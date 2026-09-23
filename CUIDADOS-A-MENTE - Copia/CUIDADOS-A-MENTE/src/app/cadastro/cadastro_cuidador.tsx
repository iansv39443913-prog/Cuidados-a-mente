import { router } from 'expo-router';
import { alertaUniversal } from '../../components/em-breve';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// ============================================
// MÁSCARAS
// ============================================

function formatCPF(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 11);

  if (numbers.length <= 3) return numbers;

  if (numbers.length <= 6) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
  }

  if (numbers.length <= 9) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
  }

  return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9)}`;
}

function formatDate(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 8);

  if (numbers.length <= 2) return numbers;

  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
  }

  return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`;
}

function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 11);

  if (numbers.length <= 2) return numbers;

  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }

  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}

function formatCEP(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 8);

  if (numbers.length <= 5) return numbers;

  return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
}

// ============================================
// TELA
// ============================================

export default function CadastroCuidador() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');

  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');

  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');

  const [temFilhos, setTemFilhos] = useState('');
  const [quantosFilhos, setQuantosFilhos] = useState('');
  const [idadeFilhos, setIdadeFilhos] = useState('');

  const [trabalha, setTrabalha] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [periodo, setPeriodo] = useState('');

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  function efetuarCadastro() {
  if (
    !nome ||
    !email ||
    !senha ||
    cpf.length < 14 ||
    dataNascimento.length < 10
  ) {
    alertaUniversal(
      'Atenção',
      'Preencha corretamente os campos obrigatórios.'
    );
    return;
  }

  alertaUniversal(
    'Cadastro realizado!',
    'O cuidador foi cadastrado com sucesso.',
    [
      {
        text: 'OK',
        onPress: () => router.replace('/confirmacao/verificacao?tipo=cuidador'),
      },
    ]
  );
}

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >

          {/* LOGO */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* TÍTULO */}
          <Text style={styles.titulo}>Cuidador</Text>

          {/* FORMULÁRIO */}
          <View style={styles.formulario}>

            {/* NOME */}
            <View style={styles.campo}>
              <Text style={styles.label}>Nome completo</Text>

              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Digite seu nome completo"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* EMAIL */}
            <View style={styles.campo}>
              <Text style={styles.label}>E-mail</Text>

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="exemplo@email.com"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* SENHA */}
            <View style={styles.campo}>
              <Text style={styles.label}>Senha</Text>

              <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite sua senha"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* CPF */}
            <View style={styles.campo}>
              <Text style={styles.label}>CPF</Text>

              <TextInput
                style={styles.input}
                value={cpf}
                onChangeText={(text) => setCpf(formatCPF(text))}
                keyboardType="numeric"
                maxLength={14}
                placeholder="000.000.000-00"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* RG */}
            <View style={styles.campo}>
              <Text style={styles.label}>RG</Text>

              <TextInput
                style={styles.input}
                value={rg}
                onChangeText={setRg}
                keyboardType="numeric"
                maxLength={12}
                placeholder="00.000.000-0"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* DATA + IDADE */}
            <View style={styles.linha}>

              <View style={styles.data}>
                <Text style={styles.label}>
                  Data de nascimento
                </Text>

                <TextInput
                  style={styles.input}
                  value={dataNascimento}
                  onChangeText={(text) =>
                    setDataNascimento(formatDate(text))
                  }
                  keyboardType="numeric"
                  maxLength={10}
                  placeholder="DD/MM/AAAA"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

              <View style={styles.idade}>
                <Text style={styles.label}>Idade</Text>

                <TextInput
                  style={styles.input}
                  value={idade}
                  onChangeText={setIdade}
                  keyboardType="numeric"
                  placeholder="Idade"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

            </View>

            {/* CELULAR + TELEFONE */}
            <View style={styles.linha}>

              <View style={styles.data}>
                <Text style={styles.label}>Celular</Text>

                <TextInput
                  style={styles.input}
                  value={celular}
                  onChangeText={(text) =>
                    setCelular(formatPhone(text))
                  }
                  keyboardType="phone-pad"
                  maxLength={15}
                  placeholder="(11) 99999-9999"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

              <View style={styles.idade}>
                <Text style={styles.label}>Telefone</Text>

                <TextInput
                  style={styles.input}
                  value={telefone}
                  onChangeText={(text) =>
                    setTelefone(formatPhone(text))
                  }
                  keyboardType="phone-pad"
                  maxLength={14}
                  placeholder="(11) 9999-9999"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

            </View>

            {/* FILHOS */}
            <View style={styles.campo}>
              <Text style={styles.secao}>Filhos</Text>
            </View>

            <View style={styles.linha}>

              <View style={styles.filhosSim}>
                <Text style={styles.label}>Tem filhos?</Text>

                <View style={styles.opcoes}>
                  <TouchableOpacity
                    style={[
                      styles.opcao,
                      temFilhos === 'Sim' && styles.opcaoSelecionada
                    ]}
                    onPress={() => setTemFilhos('Sim')}
                  >
                    <Text style={styles.radio}>
                      {temFilhos === 'Sim' ? '●' : '○'}
                    </Text>

                    <Text style={styles.opcaoTexto}>Sim</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.opcao,
                      temFilhos === 'Não' && styles.opcaoSelecionada
                    ]}
                    onPress={() => setTemFilhos('Não')}
                  >
                    <Text style={styles.radio}>
                      {temFilhos === 'Não' ? '●' : '○'}
                    </Text>

                    <Text style={styles.opcaoTexto}>Não</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.filhosPequeno}>
                <Text style={styles.label}>Quantos?</Text>

                <TextInput
                  style={styles.input}
                  value={quantosFilhos}
                  onChangeText={setQuantosFilhos}
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

              <View style={styles.filhosPequeno}>
                <Text style={styles.label}>Idade</Text>

                <TextInput
                  style={styles.input}
                  value={idadeFilhos}
                  onChangeText={setIdadeFilhos}
                  keyboardType="numeric"
                  placeholder="Idade"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

            </View>

            {/* TRABALHO */}
            <View style={styles.campo}>
              <Text style={styles.secao}>Trabalho</Text>
            </View>

            <View style={styles.linha}>

              <View style={styles.trabalha}>
                <Text style={styles.label}>
                  Trabalha atualmente?
                </Text>

                <View style={styles.opcoes}>
                  <TouchableOpacity
                    style={styles.opcao}
                    onPress={() => setTrabalha('Sim')}
                  >
                    <Text style={styles.radio}>
                      {trabalha === 'Sim' ? '●' : '○'}
                    </Text>

                    <Text style={styles.opcaoTexto}>Sim</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.opcao}
                    onPress={() => setTrabalha('Não')}
                  >
                    <Text style={styles.radio}>
                      {trabalha === 'Não' ? '●' : '○'}
                    </Text>

                    <Text style={styles.opcaoTexto}>Não</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.empresa}>
                <Text style={styles.label}>Empresa</Text>

                <TextInput
                  style={styles.input}
                  value={empresa}
                  onChangeText={setEmpresa}
                  placeholder="Empresa"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

              <View style={styles.periodo}>
                <Text style={styles.label}>Período</Text>

                <TextInput
                  style={styles.input}
                  value={periodo}
                  onChangeText={setPeriodo}
                  placeholder="Período"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

            </View>

            {/* ENDEREÇO */}
            <View style={styles.campo}>
              <Text style={styles.secao}>Endereço</Text>
            </View>

            {/* CEP */}
            <View style={styles.campo}>
              <Text style={styles.label}>CEP</Text>

              <TextInput
                style={styles.input}
                value={cep}
                onChangeText={(text) => setCep(formatCEP(text))}
                keyboardType="numeric"
                maxLength={9}
                placeholder="00000-000"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* RUA */}
            <View style={styles.campo}>
              <Text style={styles.label}>Rua</Text>

              <TextInput
                style={styles.input}
                value={rua}
                onChangeText={setRua}
                placeholder="Nome da rua"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* BAIRRO */}
            <View style={styles.campo}>
              <Text style={styles.label}>Bairro</Text>

              <TextInput
                style={styles.input}
                value={bairro}
                onChangeText={setBairro}
                placeholder="Nome do bairro"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* CIDADE */}
            <View style={styles.campo}>
              <Text style={styles.label}>Cidade</Text>

              <TextInput
                style={styles.input}
                value={cidade}
                onChangeText={setCidade}
                placeholder="Nome da cidade"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* NÚMERO + COMPLEMENTO */}
            <View style={styles.linha}>

              <View style={styles.numero}>
                <Text style={styles.label}>Número</Text>

                <TextInput
                  style={styles.input}
                  value={numero}
                  onChangeText={setNumero}
                  keyboardType="numeric"
                  placeholder="Nº"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

              <View style={styles.complemento}>
                <Text style={styles.label}>Complemento</Text>

                <TextInput
                  style={styles.input}
                  value={complemento}
                  onChangeText={setComplemento}
                  placeholder="Apartamento, casa..."
                  placeholderTextColor="#A5A5A5"
                />
              </View>

            </View>

          </View>

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.botao}
            onPress={efetuarCadastro}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>
              Efetuar cadastro
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ============================================
// ESTILOS
// ============================================

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  keyboard: {
    flex: 1
  },

  scroll: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
    backgroundColor: '#FFFFFF'
  },

  logoContainer: {
    width: '100%',
    alignItems: 'center'
  },

  logo: {
    width: 210,
    height: 55
  },

  titulo: {
    fontSize: 17,
    color: '#A94CE2',
    fontWeight: '600',
    marginBottom: 10
  },

  formulario: {
    width: '100%',
    maxWidth: 340,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 6,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2
  },

  campo: {
    width: '100%',
    marginBottom: 9
  },

  label: {
    fontSize: 9,
    fontWeight: '700',
    color: '#292929',
    marginBottom: 4
  },

  secao: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7415A8',
    marginTop: 3,
    marginBottom: 1
  },

  input: {
    width: '100%',
    height: 34,
    backgroundColor: '#F5F5F7',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 11,
    color: '#222222'
  },

  linha: {
    width: '100%',
    flexDirection: 'row',
    gap: 10
  },

  data: {
    flex: 1.35,
    marginBottom: 9
  },

  idade: {
    flex: 0.75,
    marginBottom: 9
  },

  filhosSim: {
    flex: 1.25,
    marginBottom: 9
  },

  filhosPequeno: {
    flex: 0.65,
    marginBottom: 9
  },

  trabalha: {
    flex: 1.25,
    marginBottom: 9
  },

  empresa: {
    flex: 1,
    marginBottom: 9
  },

  periodo: {
    flex: 0.8,
    marginBottom: 9
  },

  numero: {
    flex: 0.65,
    marginBottom: 9
  },

  complemento: {
    flex: 1.35,
    marginBottom: 9
  },

  opcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },

  opcaoSelecionada: {
    opacity: 1
  },

  radio: {
    color: '#7415A8',
    fontSize: 12
  },

  opcaoTexto: {
    color: '#292929',
    fontSize: 9
  },

  botao: {
    width: 145,
    height: 38,
    backgroundColor: '#6413A3',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700'
  }
});
