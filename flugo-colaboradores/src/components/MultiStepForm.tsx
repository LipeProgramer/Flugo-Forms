import { useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

import StepDadosPessoais from "./steps/StepDadosPessoais";
import StepDadosProfissionais from "./steps/StepDadosProfissionais";
import StepConfirmacao from "./steps/StepConfirmacao";

import type { Colaborador } from "../types/Colaborador";

const steps = ["Dados pessoais", "Dados profissionais", "Confirmação"];

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState<Colaborador>({
    nome: "",
    email: "",
    telefone: "",
    departamento: "",
    cargo: "",
    dataAdmissao: "",
  });

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <StepDadosPessoais
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
        />
      )}

      {activeStep === 1 && (
        <StepDadosProfissionais
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={prevStep}
        />
      )}

      {activeStep === 2 && (
        <StepConfirmacao formData={formData} onBack={prevStep} />
      )}
    </Box>
  );
}
