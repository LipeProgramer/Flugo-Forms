import { useState } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { getRandomProfileImageKey } from "../../utils/getRandomProfileImage";
import type { Colaborador } from "../../types/Colaborador";

interface Props {
  formData: Colaborador;
  onBack: () => void;
  onFinish: () => void;
}

export default function StepConfirmacao({
  formData,
  onBack,
  onFinish,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const colaboradoresRef = collection(db, "colaboradores");

      const q = query(
        colaboradoresRef,
        where("email", "==", formData.email)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("Já existe um colaborador cadastrado com esse email.");
        return;
      }

      const profileImage = getRandomProfileImageKey();

      await addDoc(colaboradoresRef, {
        ...formData,
        profileImage,
      });

      setSuccessOpen(true);
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

      <Snackbar
        open={successOpen}
        autoHideDuration={2000}
        onClose={() => {
          setSuccessOpen(false);
          onFinish();
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          Colaborador cadastrado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
}