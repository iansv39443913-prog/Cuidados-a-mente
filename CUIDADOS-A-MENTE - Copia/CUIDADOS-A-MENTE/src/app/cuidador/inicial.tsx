import { Redirect } from 'expo-router';

// Atalho: /cuidador/inicial -> tela inicial do cuidador.
export default function CuidadorInicialAlias() {
  return <Redirect href="/cuidador/inicial_cuidador" />;
}
