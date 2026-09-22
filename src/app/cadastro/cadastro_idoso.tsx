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

export default function CadastroIdoso() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');

  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');

  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');

  // RESPONSÁVEL
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [celularResponsavel, setCelularResponsavel] = useState('');
  const [telefoneResponsavel, setTelefoneResponsavel] = useState('');

  // CONTATO DE EMERGÊNCIA
  const [nomeEmergencia, setNomeEmergencia] = useState('');
  const [telefoneEmergencia, setTelefoneEmergencia] = useState('');

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
    'O idoso foi cadastrado com sucesso.',
    [
      {
        text: 'OK',
        onPress: () => router.replace('/idoso'),
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
          <Text style={styles.titulo}>Idoso</Text>

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
                placeholder="Digite o nome completo"
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

            {/* RESPONSÁVEL */}
            <View style={styles.campo}>
              <Text style={styles.secao}>
                Dados do responsável
              </Text>
            </View>

            {/* NOME RESPONSÁVEL */}
            <View style={styles.campo}>
              <Text style={styles.label}>
                Nome completo do responsável
              </Text>

              <TextInput
                style={styles.input}
                value={nomeResponsavel}
                onChangeText={setNomeResponsavel}
                autoCapitalize="words"
                placeholder="Nome completo"
                placeholderTextColor="#A5A5A5"
              />
            </View>

            {/* CELULAR + TELEFONE RESPONSÁVEL */}
            <View style={styles.linha}>

              <View style={styles.data}>
                <Text style={styles.label}>Celular</Text>

                <TextInput
                  style={styles.input}
                  value={celularResponsavel}
                  onChangeText={(text) =>
                    setCelularResponsavel(formatPhone(text))
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
                  value={telefoneResponsavel}
                  onChangeText={(text) =>
                    setTelefoneResponsavel(formatPhone(text))
                  }
                  keyboardType="phone-pad"
                  maxLength={14}
                  placeholder="(11) 9999-9999"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

            </View>

            {/* CONTATO DE EMERGÊNCIA */}
            <View style={styles.campo}>
              <Text style={styles.secao}>
                Contato de emergência
              </Text>
            </View>

            {/* NOME + TELEFONE */}
            <View style={styles.linha}>

              <View style={styles.data}>
                <Text style={styles.label}>Nome</Text>

                <TextInput
                  style={styles.input}
                  value={nomeEmergencia}
                  onChangeText={setNomeEmergencia}
                  autoCapitalize="words"
                  placeholder="Nome"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

              <View style={styles.data}>
                <Text style={styles.label}>Telefone</Text>

                <TextInput
                  style={styles.input}
                  value={telefoneEmergencia}
                  onChangeText={(text) =>
                    setTelefoneEmergencia(formatPhone(text))
                  }
                  keyboardType="phone-pad"
                  maxLength={15}
                  placeholder="(11) 99999-9999"
                  placeholderTextColor="#A5A5A5"
                />
              </View>

              <TouchableOpacity
                style={styles.botaoMais}
                onPress={() =>
                  alertaUniversal(
                    'Contato',
                    'Você poderá adicionar outro contato aqui.'
                  )
                }
              >
                <Text style={styles.mais}>+</Text>
              </TouchableOpacity>

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

  botaoMais: {
    width: 20,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  },

  mais: {
    color: '#7415A8',
    fontSize: 22,
    fontWeight: '400'
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
