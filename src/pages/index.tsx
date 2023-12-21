import { Header } from "@components/Header/Index";
import { HomeScreen } from "@screens/Homepage";

export default function Home() {
  return (
    <>
      <Header
        textHeader={{
          title: "bring visibility to your project",
          desc: "Turn academic projects into professional success: your platform for student excellence.",
        }}
      />
      <HomeScreen />
    </>
  );
}
