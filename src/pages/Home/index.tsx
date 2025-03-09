import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";

function Home() {
  const { logout } = useAuth();
  const auth = getAuth();

  async function handleLogout() {
    await signOut(auth);
    logout();
    window.location.href = "/entrar";
  }

  return (
    <>
      <Button onClick={handleLogout}>Sair</Button>
      <h1>Home</h1>
      <h1>Home</h1>
    </>
  );
}

export default Home;
