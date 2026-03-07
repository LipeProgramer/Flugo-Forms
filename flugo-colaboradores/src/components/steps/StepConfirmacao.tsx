import { Box, Button, Typography } from "@mui/material"
import { Colaborador } from "../../types/Colaborador"

import { db } from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

interface Props {
  formData: Colaborador
  onBack: () => void
}

export default function StepConfirmacao({ formData, onBack }: Props) {

  const handleSubmit = async () => {

    try {

      await addDoc(
        collection(db, "colaboradores"),
        formData
      )

      alert("Colaborador cadastrado com sucesso!")

    } catch (error) {

      alert("Erro ao salvar colaborador")

    }

  }

  return (
    <Box mt={4}>

      <Typography variant="h6">
        Confirme os dados
      </Typography>

      <Typography>Nome: {formData.nome}</Typography>
      <Typography>Email: {formData.email}</Typography>
      <Typography>Telefone: {formData.telefone}</Typography>
      <Typography>Departamento: {formData.departamento}</Typography>
      <Typography>Cargo: {formData.cargo}</Typography>
      <Typography>Admissão: {formData.dataAdmissao}</Typography>

      <Box mt={3} display="flex" justifyContent="space-between">

        <Button onClick={onBack}>
          Voltar
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Confirmar
        </Button>

      </Box>

    </Box>
  )
}