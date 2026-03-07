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
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography sx={{ fontSize: 14, color: "#64748b" }}>
              Colaboradores
            </Typography>

            <Typography sx={{ fontSize: 14, color: "#94a3b8" }}>
              ›
            </Typography>

            <Typography
              sx={{ fontSize: 14, color: "#0f172a", fontWeight: 500 }}
            >
              Novo Colaborador
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <LinearProgress
            variant="determinate"
            value={progresso}
            sx={{
              height: 6,
              borderRadius: 999,
              backgroundColor: "#e2e8f0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#22c55e",
                borderRadius: 999,
              },
            }}
          />

          <Typography
            sx={{
              textAlign: "right",
              fontSize: 12,
              color: "#64748b",
              mt: 1,
              fontWeight: 500,
            }}
          >
            Progresso {progresso}%
          </Typography>
        </Box>

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