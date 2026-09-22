import { Redirect, useLocalSearchParams } from 'expo-router';

export default function VerificacaoAlias() {
  const params = useLocalSearchParams<{ tipo?: string }>();
  const query = params.tipo ? `?tipo=${encodeURIComponent(String(params.tipo))}` : '';
  return <Redirect href={`/confirmacao/verificacao${query}`} />;
}
