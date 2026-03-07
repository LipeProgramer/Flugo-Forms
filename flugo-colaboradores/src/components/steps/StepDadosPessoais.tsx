import type { Dispatch, SetStateAction } from "react";
import { Box, TextField, Button } from "@mui/material";
import type { Colaborador } from "../../types/Colaborador";

interface Props {
  formData: Colaborador;
  setFormData: Dispatch<SetStateAction<Colaborador>>;
  onNext: () => void;
  onBack: () => void;
}

function formatarNome(valor: string) {
  const apenasLetrasEspacos = valor.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
  return apenasLetrasEspacos
    .toLowerCase()
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

function formatarTelefone(valor: string) {
  const numeros = valor.replace(/\D/g, "").slice(0, 11);

  if (numeros.length <= 2) {
    return numeros.length ? `(${numeros}` : "";
  }

  if (numeros.length <= 7) {
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
  }

  return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
}

function validarNome(nome: string) {
  if (!nome.trim()) return "O nome é obrigatório.";

  const nomeValido = /^[A-ZÀ-Ý][a-zà-ÿ]+(?:\s[A-ZÀ-Ý][a-zà-ÿ]+)+$/.test(nome.trim());

  if (!nomeValido) {
    return "Digite nome e sobrenome com iniciais maiúsculas.";
  }

  return "";
}

function validarEmail(email: string) {
  if (!email.trim()) return "O e-mail é obrigatório.";

  const emailValido =
    /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.com$/i.test(email.trim());

  if (!emailValido) {
    return "Use um e-mail válido: gmail.com, hotmail.com ou outlook.com.";
  }

  return "";
}

function validarTelefone(telefone: string) {
  if (!telefone.trim()) return "O telefone é obrigatório.";

  const numeros = telefone.replace(/\D/g, "");

  if (numeros.length !== 11) {
    return "Digite um telefone válido com 11 números.";
  }

  return "";
}

export default function StepDadosPessoais({
  formData,
  setFormData,
  onNext,
  onBack,
}: Props) {
  const erroNome = validarNome(formData.nome);
  const erroEmail = validarEmail(formData.email);
  const erroTelefone = validarTelefone(formData.telefone);

  const isValid = !erroNome && !erroEmail && !erroTelefone;

  const handleNext = () => {
    if (!isValid) return;
    onNext();
  };

  return (
    <Box mt={4} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Nome"
        value={formData.nome}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            nome: formatarNome(e.target.value),
          }))
        }
        error={!!erroNome}
        helperText={erroNome || " "}
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            email: e.target.value.toLowerCase(),
          }))
        }
        error={!!erroEmail}
        helperText={erroEmail || " "}
        fullWidth
      />

      <TextField
        label="Telefone"
        value={formData.telefone}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            telefone: formatarTelefone(e.target.value),
          }))
        }
        error={!!erroTelefone}
        helperText={erroTelefone || " "}
        fullWidth
      />

      <Box display="flex" justifyContent="space-between">
        <Button onClick={onBack}>Voltar</Button>

        <Button variant="contained" disabled={!isValid} onClick={handleNext}>
          Próximo
        </Button>
      </Box>
    </Box>
  );
}