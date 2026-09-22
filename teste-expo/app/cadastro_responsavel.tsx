import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';


// ============================================
// MÁSCARAS
// ============================================

function formatCPF(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 11);

  if (numbers.length <= 3) {
    return numbers;
  }

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

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
  }

  return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`;
}


function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 11);

  if (numbers.length <= 2) {
    return numbers;
  }

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

  if (numbers.length <= 5) {
    return numbers;
  }

  return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
}


// ============================================
// TELA
// ============================================

export default function CadastroResponsavel() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');

  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');

  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');

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

      Alert.alert(
        'Atenção',
        'Preencha corretamente os campos obrigatórios.'
      );

      return;
    }


    Alert.alert(
      'Cadastro realizado!',
      'O responsável foi cadastrado com sucesso.'
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
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >


          {/* ================================= */}
          {/* LOGO */}
          {/* ================================= */}

          <View style={styles.logoContainer}>

            <Image
              source={require('../src/assets/cuidados 1.png')}
              style={styles.logo}
              resizeMode="contain"
            />

          </View>


          {/* ================================= */}
          {/* TÍTULO */}
          {/* ================================= */}

          <Text style={styles.titulo}>
            Responsável
          </Text>


          {/* ================================= */}
          {/* FORMULÁRIO */}
          {/* ================================= */}

          <View style={styles.formulario}>


            {/* NOME */}

            <View style={styles.campo}>

              <Text style={styles.label}>
                Nome completo
              </Text>

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

              <Text style={styles.label}>
                E-mail
              </Text>

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

              <Text style={styles.label}>
                Senha
              </Text>

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


            {/* ================================= */}
            {/* CPF */}
            {/* ================================= */}

            <View style={styles.campo}>

              <Text style={styles.label}>
                CPF
              </Text>

              <TextInput
                style={styles.input}
                value={cpf}
                onChangeText={(text) => {
                  setCpf(formatCPF(text));
                }}
                keyboardType="numeric"
                maxLength={14}
                placeholder="000.000.000-00"
                placeholderTextColor="#A5A5A5"
              />

            </View>


            {/* RG */}



            {/* ================================= */}
            {/* DATA + IDADE */}
            {/* ================================= */}

            <View style={styles.linha}>


              <View style={styles.data}>

                <Text style={styles.label}>
                  Data de nascimento
                </Text>

                <TextInput
                  style={styles.input}
                  value={dataNascimento}
                  onChangeText={(text) => {
                    setDataNascimento(formatDate(text));
                  }}
                  keyboardType="numeric"
                  maxLength={10}
                  placeholder="DD/MM/AAAA"
                  placeholderTextColor="#A5A5A5"
                />

              </View>




            </View>


            {/* ================================= */}
            {/* CELULAR + TELEFONE */}
            {/* ================================= */}

            <View style={styles.linha}>


              <View style={styles.data}>

                <Text style={styles.label}>
                  Celular
                </Text>

                <TextInput
                  style={styles.input}
                  value={celular}
                  onChangeText={(text) => {
                    setCelular(formatPhone(text));
                  }}
                  keyboardType="phone-pad"
                  maxLength={15}
                  placeholder="(11) 99999-9999"
                  placeholderTextColor="#A5A5A5"
                />

              </View>



              <View style={styles.idade}>

                <Text style={styles.label}>
                  Telefone
                </Text>

                <TextInput
                  style={styles.input}
                  value={telefone}
                  onChangeText={(text) => {
                    setTelefone(formatPhone(text));
                  }}
                  keyboardType="phone-pad"
                  maxLength={14}
                  placeholder="(11) 9999-9999"
                  placeholderTextColor="#A5A5A5"
                />

              </View>


            </View>


            {/* ================================= */}
            {/* ENDEREÇO */}
            {/* ================================= */}

            <View style={styles.campo}>

              <Text style={styles.secao}>
                Endereço
              </Text>

            </View>


            {/* CEP */}

            <View style={styles.campo}>

              <Text style={styles.label}>
                CEP
              </Text>

              <TextInput
                style={styles.input}
                value={cep}
                onChangeText={(text) => {
                  setCep(formatCEP(text));
                }}
                keyboardType="numeric"
                maxLength={9}
                placeholder="00000-000"
                placeholderTextColor="#A5A5A5"
              />

            </View>


            {/* RUA */}

            <View style={styles.campo}>

              <Text style={styles.label}>
                Rua
              </Text>

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

              <Text style={styles.label}>
                Bairro
              </Text>

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

              <Text style={styles.label}>
                Cidade
              </Text>

              <TextInput
                style={styles.input}
                value={cidade}
                onChangeText={setCidade}
                placeholder="Nome da cidade"
                placeholderTextColor="#A5A5A5"
              />

            </View>


            {/* ================================= */}
            {/* NÚMERO + COMPLEMENTO */}
            {/* ================================= */}

            <View style={styles.linha}>


              <View style={styles.numero}>

                <Text style={styles.label}>
                  Número
                </Text>

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

                <Text style={styles.label}>
                  Complemento
                </Text>

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


          {/* ================================= */}
          {/* BOTÃO */}
          {/* ================================= */}

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
    backgroundColor: '#FFFFFF',
  },

  keyboard: {
    flex: 1,
  },

  scroll: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 12,

    paddingBottom: 40,

    backgroundColor: '#FFFFFF',
  },


  // ==========================================
  // LOGO
  // ==========================================

  logoContainer: {
    width: '100%',

    alignItems: 'center',

    marginBottom: 0,
  },

  logo: {
    width: 210,

    height: 55,
  },


  // ==========================================
  // TÍTULO
  // ==========================================

  titulo: {
    fontSize: 17,

    color: '#A94CE2',

    fontWeight: '600',

    marginBottom: 10,
  },


  // ==========================================
  // FORMULÁRIO
  // ==========================================

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
      height: 1,
    },

    shadowOpacity: 0.08,

    shadowRadius: 3,

    elevation: 2,
  },


  // ==========================================
  // CAMPO
  // ==========================================

  campo: {
    width: '100%',

    marginBottom: 9,
  },


  label: {
    fontSize: 9,

    fontWeight: '700',

    color: '#292929',

    marginBottom: 4,
  },


  secao: {
    fontSize: 11,

    fontWeight: '700',

    color: '#7415A8',

    marginTop: 3,

    marginBottom: 1,
  },


  // ==========================================
  // INPUT
  // ==========================================

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

    color: '#222222',
  },


  // ==========================================
  // CAMPOS LADO A LADO
  // ==========================================

  linha: {
    width: '100%',

    flexDirection: 'row',

    gap: 10,

    marginBottom: 0,
  },


  data: {
    flex: 1.35,

    marginBottom: 9,
  },


  idade: {
    flex: 0.75,

    marginBottom: 9,
  },


  numero: {
    flex: 0.65,

    marginBottom: 9,
  },


  complemento: {
    flex: 1.35,

    marginBottom: 9,
  },


  // ==========================================
  // BOTÃO
  // ==========================================

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
      height: 2,
    },

    shadowOpacity: 0.15,

    shadowRadius: 3,
  },


  textoBotao: {
    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '700',
  },

});