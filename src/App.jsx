import Footer from "./components/Footer";
import Form from "./components/VaultBoard/Form";
import Header from "./components/Header";
import VaultBoard from "./components/VaultBoard/VaultBoard";

export default function app() {
  return(
    <>
      <Header />
      <Form />
      <VaultBoard />
      <Footer />
    </>
  )
}