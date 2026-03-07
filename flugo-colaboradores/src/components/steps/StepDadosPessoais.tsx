import { Box, TextField, Button } from "@mui/material"
import { Colaborador } from "../../types/Colaborador"

interface Props {
  formData: Colaborador
  setFormData: React.Dispatch<React.SetStateAction<Colaborador>>
  onNext: () => void
}

export default function StepDadosPessoais({ formData, setFormData, onNext }: Props) {

  const isValid =
    formData.nome !== "" &&
    formData.email !== "" &&
    formData.telefone !== ""

  return (
    <Box mt={4} display="flex" flexDirection="column" gap={2}>

      <TextField
        label="Nome"
        required
        value={formData.nome}
        onChange={(e) =>
          setFormData({ ...formData, nome: e.target.value })
        }
      />

      <TextField
        label="Email"
        required
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <TextField
        label="Telefone"
        required
        value={formData.telefone}
        onChange={(e) =>
          setFormData({ ...formData, telefone: e.target.value })
        }
      />

      <Button
        variant="contained"
        disabled={!isValid}
        onClick={onNext}
      >
        Próximo
      </Button>

    </Box>
  )
}