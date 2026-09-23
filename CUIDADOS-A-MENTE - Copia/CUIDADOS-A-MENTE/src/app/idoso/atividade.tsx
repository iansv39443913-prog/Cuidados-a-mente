import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HotbarGlobal } from '../../components/HotbarGlobal';

export default function Atividade() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Atividade</Text>
            </View>
            <HotbarGlobal tipo="idoso" ativo="" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFBFE' },
    content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { color: '#4B315A', fontSize: 24, fontWeight: '700' },
});
