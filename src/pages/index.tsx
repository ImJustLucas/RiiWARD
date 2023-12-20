import { Header } from "@components/Header/Index";
import { HomeScreen } from "@screens/Homepage";

export default function Home() {
  return (
    <>
      <Header
        textHeader={{
          title: "bring visibility to your project",
          desc: "Transformez les projets académiques en succès professionnels : votre plateforme pour l'excellence étudiante.",
        }}
      />
      <HomeScreen />
    </>
  );
}
