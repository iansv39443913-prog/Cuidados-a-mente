import { Linking, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BarraIdoso from '../../components/barraIdoso';
import { emBreve } from '../../components/em-breve';

const CONTATOS = [
    { nome: 'Ana (filha)', numero: '11987550973', cor: '#FFD9D9' },
    { nome: 'Carlos (cuidador)', numero: '11987551234', cor: '#FFECDB' },
    { nome: 'SAMU', numero: '192', cor: '#FFC9C9' },
];

export default function Emergencia() {
    function ligar(numero: string, nome: string) {
        Linking.openURL(`tel:${numero}`).catch(() => emBreve(`A ligação para ${nome}`));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Emergência</Text>
                <Text style={styles.subtitle}>Toque em quem você quer chamar</Text>

                {CONTATOS.map((c) => (
                    <Pressable
                        key={c.numero}
                        style={[styles.botao, { backgroundColor: c.cor }]}
                        onPress={() => ligar(c.numero, c.nome)}
                    >
                        <Text style={styles.botaoTexto}>{c.nome}</Text>
                        <Text style={styles.botaoNumero}>{c.numero}</Text>
                    </Pressable>
                ))}
            </View>

            <BarraIdoso />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFBFE' },
    content: { flex: 1, justifyContent: 'center', paddingHorizontal: 24 },
    title: { color: '#4B315A', fontSize: 30, fontWeight: '700', textAlign: 'center' },
    subtitle: { color: '#8A6A9B', fontSize: 17, textAlign: 'center', marginTop: 8, marginBottom: 28 },
    botao: {
        minHeight: 92,
        borderRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    botaoTexto: { color: '#5D1186', fontSize: 23, fontWeight: '700' },
    botaoNumero: { color: '#8A6A9B', fontSize: 17, marginTop: 4 },
});
