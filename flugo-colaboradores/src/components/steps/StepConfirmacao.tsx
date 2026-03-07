import { Box, Button, Typography } from "@mui/material";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import type { Colaborador } from "../../types/Colaborador";
import { useState } from "react";

interface Props {
  formData: Colaborador;
  onBack: () => void;
}

export default function StepConfirmacao({ formData, onBack }: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const colaboradoresRef = collection(db, "colaboradores");

      const q = query(colaboradoresRef, where("email", "==", formData.email));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("Já existe um colaborador cadastrado com esse email.");
        return;
      }

      await addDoc(colaboradoresRef, formData);

      alert("Colaborador cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao salvar colaborador.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={4} display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">Confirmação dos dados</Typography>

      <Typography>
        <strong>Nome:</strong> {formData.nome}
      </Typography>
      <Typography>
        <strong>Email:</strong> {formData.email}
      </Typography>
      <Typography>
        <strong>Telefone:</strong> {formData.telefone}
      </Typography>
      <Typography>
        <strong>Departamento:</strong> {formData.departamento}
      </Typography>
      <Typography>
        <strong>Cargo:</strong> {formData.cargo}
      </Typography>
      <Typography>
        <strong>Data de admissão:</strong> {formData.dataAdmissao}
      </Typography>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button onClick={onBack}>Voltar</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={loading}>
          {loading ? "Salvando..." : "Confirmar"}
        </Button>
      </Box>
    </Box>
  );
}
