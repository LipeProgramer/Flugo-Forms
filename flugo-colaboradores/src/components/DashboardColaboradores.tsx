import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { profileImages } from "../utils/profileImages";
import AppShell from "./AppShell";

interface Props {
  onNovoColaborador: () => void;
}

interface ColaboradorFirebase {
  id: string;
  nome: string;
  email: string;
  departamento: string;
  status?: string;
  profileImage?: string;
}

export default function DashboardColaboradores({
  onNovoColaborador,
}: Props) {
  const [colaboradores, setColaboradores] = useState<ColaboradorFirebase[]>([]);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarColaboradores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "colaboradores"));

        const lista = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ColaboradorFirebase[];

        const listaOrdenada = lista.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );

        setColaboradores(listaOrdenada);
      } catch (error) {
        console.error("Erro ao buscar colaboradores:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarColaboradores();
  }, []);

  const ordenarPorNome = () => {
    const novaDirecao = sortDirection === "asc" ? "desc" : "asc";

    const listaOrdenada = [...colaboradores].sort((a, b) =>
      novaDirecao === "asc"
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );

    setColaboradores(listaOrdenada);
    setSortDirection(novaDirecao);
  };

  if (loading) {
    return (
      <AppShell>
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: 16, color: "#475569" }}>
            Carregando colaboradores...
          </Typography>
        </Box>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <Box sx={{ maxWidth: 1100, margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Colaboradores
          </Typography>

          <Button
            variant="contained"
            onClick={onNovoColaborador}
            sx={{
              backgroundColor: "#22c55e",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "8px",
              px: 3,
              py: 1.2,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#16a34a",
                boxShadow: "none",
              },
            }}
          >
            Novo Colaborador
          </Button>
        </Box>

        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: "18px",
            backgroundColor: "#fff",
            border: "1px solid #eceff3",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1.5fr 1.2fr 0.7fr",
              px: 3,
              py: 2,
              backgroundColor: "#f8fafc",
              borderBottom: "1px solid #eef2f7",
            }}
          >
            <Typography
              sx={{ ...headerStyle, cursor: "pointer", userSelect: "none" }}
              onClick={ordenarPorNome}
            >
              Nome {sortDirection === "asc" ? "↓" : "↑"}
            </Typography>

            <Typography sx={headerStyle}>Email</Typography>
            <Typography sx={headerStyle}>Departamento</Typography>
            <Typography sx={{ ...headerStyle, textAlign: "right" }}>
              Status
            </Typography>
          </Box>

          {colaboradores.map((colaborador, index) => (
            <Box
              key={colaborador.id}
              sx={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.5fr 1.2fr 0.7fr",
                alignItems: "center",
                px: 3,
                py: 2,
                borderBottom:
                  index !== colaboradores.length - 1
                    ? "1px solid #eef2f7"
                    : "none",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src={
                    colaborador.profileImage
                      ? profileImages[colaborador.profileImage]
                      : undefined
                  }
                  sx={{
                    width: 36,
                    height: 36,
                    fontSize: 16,
                    backgroundColor: "#f1f5f9",
                    color: "#334155",
                  }}
                >
                  {!colaborador.profileImage
                    ? colaborador.nome?.charAt(0).toUpperCase()
                    : ""}
                </Avatar>

                <Typography sx={cellStyle}>{colaborador.nome}</Typography>
              </Box>

              <Typography sx={cellStyle}>{colaborador.email}</Typography>
              <Typography sx={cellStyle}>{colaborador.departamento}</Typography>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Box
                  sx={{
                    px: 1.4,
                    py: 0.5,
                    borderRadius: "8px",
                    fontSize: 12,
                    fontWeight: 600,
                    backgroundColor: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Ativo
                </Box>
              </Box>
            </Box>
          ))}

          {colaboradores.length === 0 && (
            <Box sx={{ px: 3, py: 4 }}>
              <Typography sx={{ color: "#64748b", fontSize: 14 }}>
                Nenhum colaborador encontrado.
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </AppShell>
  );
}

const headerStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: "#334155",
};

const cellStyle = {
  fontSize: 14,
  color: "#0f172a",
};