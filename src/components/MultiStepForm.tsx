import { useState } from "react";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import StepDadosPessoais from "./steps/StepDadosPessoais";
import StepDadosProfissionais from "./steps/StepDadosProfissionais";
import StepConfirmacao from "./steps/StepConfirmacao";
import { Colaborador } from "../types/Colaborador";

const steps = ["Dados Pessoais", "Dados Profissionais", "Confirmação"];

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<Colaborador>({
    nome: "",
    email: "",
    telefone: "",
    departamento: "",
    cargo: "",
    dataAdmissao: ""
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <StepDadosPessoais formData={formData} setFormData={setFormData} onNext={handleNext} />
      )}

      {activeStep === 1 && (
        <StepDadosProfissionais formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} />
      )}

      {activeStep === 2 && (
        <StepConfirmacao formData={formData} onBack={handleBack} />
      )}
    </Box>
  );
}