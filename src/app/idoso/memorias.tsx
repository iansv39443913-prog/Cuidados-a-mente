import { router } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BarraIdoso from '../../components/barraIdoso';
import { voltar } from '../../components/em-breve';

export default function Memorias() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top + 12,
          },
        ]}
      >
        <Pressable
          onPress={() => voltar("/idoso")}
          style={styles.botaoVoltar}
        >
          <Image
            source={require('../../../assets/images/imagens/icones/voltar.png')}
            style={styles.iconeVoltar}
          />
        </Pressable>

        <Text style={styles.titulo}>Minhas memórias</Text>
      </View>

      {/* CONTEÚDO */}
      <ScrollView
        style={styles.conteudo}
        contentContainerStyle={styles.conteudoInterno}
        showsVerticalScrollIndicator={false}
      >

        {/* MINHA FAMÍLIA */}
        <Pressable style={[styles.card, styles.familia]} onPress={() => router.push("/idoso/memorias/familia")}>
          <Image
            source={require('../../../assets/images/imagens/icones/familia.png')}
            style={styles.icone}
          />

          <Text style={styles.nomePasta}>Minha família</Text>
        </Pressable>

        {/* ÁLBUM DE FOTOS */}
        <Pressable style={[styles.card, styles.fotos]} onPress={() => router.push("/idoso/memorias/fotos")}>
          <Image
            source={require('../../../assets/images/imagens/icones/camera.png')}
            style={styles.icone}
          />

          <Text style={styles.nomePasta}>Álbum de fotos</Text>
        </Pressable>

        {/* VÍDEOS */}
        <Pressable style={[styles.card, styles.videos]} onPress={() => router.push("/idoso/memorias/videos")}>
          <Image
            source={require('../../../assets/images/imagens/icones/album.png')}
            style={styles.icone}
          />

          <Text style={styles.nomePasta}>Vídeos</Text>
        </Pressable>

        {/* ÁUDIOS */}
        <Pressable style={[styles.card, styles.audios]} onPress={() => router.push("/idoso/memorias/audios")}>
          <Image
            source={require('../../../assets/images/imagens/icones/microfone.png')}
            style={styles.icone}
          />

          <Text style={styles.nomePasta}>Áudios</Text>
        </Pressable>

        {/* ANIVERSÁRIOS */}
        <Pressable style={[styles.card, styles.aniversarios]} onPress={() => router.push("/idoso/memorias/datas")}>
          <Image
            source={require('../../../assets/images/imagens/icones/bolo.png')}
            style={styles.icone}
          />

          <Text style={styles.nomePasta}>Datas especiais</Text>
        </Pressable>

      </ScrollView>

      {/* BARRA FIXA */}
      <View style={{ paddingBottom: insets.bottom }}>
        <BarraIdoso />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#BF89D8',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botaoVoltar: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeVoltar: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  conteudo: {
    flex: 1,
  },

  conteudoInterno: {
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 25,
  },

  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    minHeight: 115,
    flexDirection: 'row',
    alignItems: 'center',
  },

  familia: {
    backgroundColor: '#F0D5FF',
  },

  fotos: {
    backgroundColor: '#DEFFEC',
  },

  videos: {
    backgroundColor: '#FFECDB',
  },

  audios: {
    backgroundColor: '#F0D5FF',
  },

  aniversarios: {
    backgroundColor: '#DEFFEC',
  },

  icone: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    marginRight: 20,
  },

  nomePasta: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5D1186',
  },
});
