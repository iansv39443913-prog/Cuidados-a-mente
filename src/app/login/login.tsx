import { Redirect } from "expo-router";

// Mantém a rota antiga funcionando sem duplicar a tela de login.
export default function LoginLegado() {
  return <Redirect href="/" />;
}
