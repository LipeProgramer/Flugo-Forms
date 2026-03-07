import type { Dispatch, SetStateAction } from "react";
import { Box, TextField, Button } from "@mui/material";
import type { Colaborador } from "../../types/Colaborador";

interface Props {
  formData: Colaborador;
  setFormData: Dispatch<SetStateAction<Colaborador>>;
  onNext: () => void;
}

export default function StepDadosPessoais({
  formData,
  setFormData,
  onNext,
}: Props) {
  const isValid =
    formData.nome.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.telefone.trim() !== "";

  return (
    <Box mt={4} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Nome"
        value={formData.nome}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, nome: e.target.value }))
        }
      />

      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />

      <TextField
        label="Telefone"
        value={formData.telefone}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, telefone: e.target.value }))
        }
      />

      <Button variant="contained" disabled={!isValid} onClick={onNext}>
        Próximo
      </Button>
    </Box>
  );
}
