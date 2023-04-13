import "./App.css";
import Header from "Components/Header";
import Main from "Components/Main";
import Footer from "Components/Footer";
import EntryForm from "Components/Main/EntryForm";
import SubmitButton from "Components/Main/SubmitButton";

export function App() {
  return (
    <>
      <Header />

      <Main>
        <EntryForm />
        <SubmitButton>Submit</SubmitButton>
      </Main>

      <Footer />
    </>
  );
}

export default App;
