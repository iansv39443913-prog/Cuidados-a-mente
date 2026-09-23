import { useRouter } from 'expo-router';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

      {/* CARD PRINCIPAL */}
      <View style={styles.card}>

        {/* RESPONSÁVEL */}
        <View style={styles.option}>
          <Image source={require('../assets/images/perfilfam.png')} style={styles.person} resizeMode="contain" />

          <TouchableOpacity style={[styles.button, styles.buttonDark]} activeOpacity={0.8} onPress={() => router.push('/cadastro/cadastro_responsavel')} >
            <Text style={styles.buttonText}>
              › Acessar responsável
            </Text>
          </TouchableOpacity>
        </View>

        {/* CUIDADOR */}
        <View style={styles.option}>
          <Image source={require('../assets/images/perfilcuida.png')} style={styles.person} resizeMode="contain" />

          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => router.push('/cadastro/cadastro_cuidador')}>
            <Text style={styles.buttonTextDark}>
              › Acessar cuidador
            </Text>
          </TouchableOpacity>
        </View>

        {/* IDOSO */}
        <View style={styles.option}>
          <Image source={require('../assets/images/perfilidoso.png')} style={styles.person} resizeMode="contain" />

          <TouchableOpacity style={styles.button} activeOpacity={0.8}  onPress={() => router.push('/cadastro/cadastro_idoso')}>
            <Text style={styles.buttonTextDark}>
              › Acessar idoso
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* PARTE INFERIOR */}
      <View style={styles.footer}>
        <Text style={styles.title}> Cuide da Mente! </Text>

        {/* INSCRIÇÃO */}
        <TouchableOpacity activeOpacity={0.6} onPress={() => router.push('/cadastro')} >
          <Text style={styles.registerText}> Inscreva-se aqui </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  // TELA
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  // LOGO
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 45,
  },

  logo: {
    width: 260,
    height: 70,
  },

  // CARD
  card: {
    width: '88%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,

    paddingVertical: 28,
    paddingHorizontal: 18,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 6,
  },

  // OPÇÕES
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  // FOTOS
  person: {
    width: 85,
    height: 85,
    marginRight: 18,
  },

  // BOTÕES
  button: {
    flex: 1,

    height: 58,

    borderRadius: 12,

    backgroundColor: '#C06BE8',

    justifyContent: 'center',

    paddingHorizontal: 12,
  },

  buttonDark: {
    backgroundColor: '#6B169C',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  buttonTextDark: {
    color: '#321044',
    fontSize: 17,
    fontWeight: '700',
  },

  // RODAPÉ
  footer: {
    alignItems: 'center',
    marginTop: 45,
  },

  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#321044',
    marginBottom: 8,
  },

  // INSCREVA-SE
  registerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2684FF',
    textDecorationLine: 'underline',
  },

});
