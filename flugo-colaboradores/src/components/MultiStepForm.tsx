import StepDadosPessoais from "./steps/StepDadosPessoais";
import StepDadosProfissionais from "./steps/StepDadosProfissionais";
import StepConfirmacao from "./steps/StepConfirmacao";
import type { Colaborador } from "../types/Colaborador";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  formData: Colaborador;
  setFormData: Dispatch<SetStateAction<Colaborador>>;
  onCancel: () => void;
  onFinish: () => void;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function MultiStepForm({
  formData,
  setFormData,
  onCancel,
  onFinish,
  step,
  setStep,
}: Props) {
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      {step === 0 && (
        <StepDadosPessoais
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={onCancel}
        />
      )}

      {step === 1 && (
        <StepDadosProfissionais
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={prevStep}
        />
      )}

      {step === 2 && (
        <StepConfirmacao
          formData={formData}
          onBack={prevStep}
          onFinish={onFinish}
        />
      )}
    </>
  );
}