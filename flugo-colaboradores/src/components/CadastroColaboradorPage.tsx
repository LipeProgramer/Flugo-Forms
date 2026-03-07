import { Box, Typography, LinearProgress } from "@mui/material";
import AppShell from "./AppShell";
import MultiStepForm from "./MultiStepForm";
import { useState } from "react";
import type { Colaborador } from "../types/Colaborador";

interface Props {
  onCancel: () => void;
  onFinish: () => void;
}

export default function CadastroColaboradorPage({
  onCancel,
  onFinish,
}: Props) {
  const [formData, setFormData] = useState<Colaborador>({
    nome: "",
    email: "",
    telefone: "",
    departamento: "",
    cargo: "",
    dataAdmissao: "",
  });

  const [step, setStep] = useState(0);

  const progresso = [0, 50, 100][step];

  return (
    <AppShell>
      <Box sx={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* breadcrumb */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: 14, color: "#64748b" }}>
            Colaboradores • Cadastrar Colaborador
          </Typography>
        </Box>

        {/* barra progresso */}
        <Box sx={{ mb: 4 }}>
          <LinearProgress
            variant="determinate"
            value={progresso}
            sx={{
              height: 4,
              borderRadius: 999,
              backgroundColor: "#dcfce7",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#22c55e",
              },
            }}
          />

          <Typography
            sx={{
              textAlign: "right",
              fontSize: 12,
              color: "#94a3b8",
              mt: 1,
            }}
          >
            {progresso}%
          </Typography>
        </Box>

        {/* formulário */}
        <MultiStepForm
          formData={formData}
          setFormData={setFormData}
          onCancel={onCancel}
          onFinish={onFinish}
          step={step}
          setStep={setStep}
        />
      </Box>
    </AppShell>
  );
}