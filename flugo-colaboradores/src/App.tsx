import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import DashboardColaboradores from "./components/DashboardColaboradores";
import CadastroColaboradorPage from "./components/CadastroColaboradorPage";

export default function App() {
  const [pagina, setPagina] = useState<"dashboard" | "cadastro">("dashboard");

  return (
    <>
      {pagina === "dashboard" && (
        <DashboardColaboradores
          onNovoColaborador={() => setPagina("cadastro")}
        />
      )}

      {pagina === "cadastro" && (
        <CadastroColaboradorPage
          onCancel={() => setPagina("dashboard")}
          onFinish={() => setPagina("dashboard")}
        />
      )}
      <SpeedInsights />
    </>
  );
}