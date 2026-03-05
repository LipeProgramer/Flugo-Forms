import { Box, Button, TextField } from "@mui/material";
import { Colaborador } from "../../types/Colaborador";

interface Props {
  formData: Colaborador;
  setFormData: React.Dispatch<React.SetStateAction<Colaborador>>;
  onNext: () => void;
  onBack: () => void;
}

export default function StepDadosProfissionais({ formData, setFormData, onNext, onBack }: Props) {
  const isValid = formData.departamento && formData.cargo && formData.dataAdmissao;

  return (
    <Box mt={4} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Departamento"
        required
        value={formData.departamento}
        onChange={(e) => setFormData({ ...formData, departamento: e.target.value })}
      />
      <TextField
        label="Cargo"
        required
        value={formData.cargo}
        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
      />
      <TextField
        label="Data de Admissão"
        required
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formData.dataAdmissao}
        onChange={(e) => setFormData({ ...formData, dataAdmissao: e.target.value })}
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