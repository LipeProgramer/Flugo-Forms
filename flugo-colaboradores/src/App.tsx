import { useState } from "react";
import DashboardColaboradores from "./components/DashboardColaboradores";
import MultiStepForm from "./components/MultiStepForm";
import type { Colaborador } from "./types/Colaborador";

function App() {
  const [currentScreen, setCurrentScreen] = useState<"dashboard" | "form">("dashboard");

  const [formData, setFormData] = useState<Colaborador>({
    nome: "",
    email: "",
    telefone: "",
    departamento: "",
    cargo: "",
    dataAdmissao: "",
  });

  const openForm = () => {
    setCurrentScreen("form");
  };

  const goToDashboard = () => {
    setCurrentScreen("dashboard");
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      departamento: "",
      cargo: "",
      dataAdmissao: "",
    });
  };

  return (
    <>
      {currentScreen === "dashboard" && (
        <DashboardColaboradores onNovoColaborador={openForm} />
      )}

      {currentScreen === "form" && (
        <MultiStepForm
          formData={formData}
          setFormData={setFormData}
          onCancel={goToDashboard}
          onFinish={() => {
            resetForm();
            goToDashboard();
          }}
        />
      )}
    </>
  );
}

export default App;