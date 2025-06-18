import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Nav />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}
export default App;
