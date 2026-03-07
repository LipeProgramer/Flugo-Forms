import type { Dispatch, SetStateAction } from "react";
import { Box, TextField, Button } from "@mui/material";
import type { Colaborador } from "../../types/Colaborador";

interface Props {
  formData: Colaborador;
  setFormData: Dispatch<SetStateAction<Colaborador>>;
  onNext: () => void;
  onBack: () => void;
}

export default function StepDadosProfissionais({
  formData,
  setFormData,
  onNext,
  onBack,
}: Props) {
  const isValid =
    formData.departamento.trim() !== "" &&
    formData.cargo.trim() !== "" &&
    formData.dataAdmissao.trim() !== "";

  return (
    <Box mt={4} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Departamento"
        value={formData.departamento}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, departamento: e.target.value }))
        }
      />

      <TextField
        label="Cargo"
        value={formData.cargo}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, cargo: e.target.value }))
        }
      />

      <TextField
        label="Data de Admissão"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formData.dataAdmissao}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, dataAdmissao: e.target.value }))
        }
      />

      <Box display="flex" justifyContent="space-between">
        <Button onClick={onBack}>Voltar</Button>

        <Button variant="contained" disabled={!isValid} onClick={onNext}>
          Próximo
        </Button>
      </Box>
    </Box>
  );
}
