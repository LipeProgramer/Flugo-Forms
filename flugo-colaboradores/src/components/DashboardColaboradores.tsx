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
import logo from "../assets/flugo-logo.png";

interface Props {
  onNovoColaborador: () => void;
}

interface ColaboradorFirebase {
  id: string;
  nome: string;
  email: string;
  departamento: string;
  status?: string;
}

export default function DashboardColaboradores({
  onNovoColaborador,
}: Props) {
  const [colaboradores, setColaboradores] = useState<ColaboradorFirebase[]>([]);

  useEffect(() => {
    const carregarColaboradores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "colaboradores"));

        const lista = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ColaboradorFirebase[];

        setColaboradores(lista);
      } catch (error) {
        console.error("Erro ao buscar colaboradores:", error);
      }
    };

    carregarColaboradores();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: 230,
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          p: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <img src={logo} alt="Flugo" style={{ width: 28, marginRight: 8 }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              color: "#0f172a",
            }}
          >
            flugo
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            color: "#334155",
            fontSize: 14,
          }}
        >
          <Box
            sx={{
              width: 18,
              height: 18,
              borderRadius: "4px",
              backgroundColor: "#94a3b8",
            }}
          />
          <Typography sx={{ fontSize: 14, color: "#334155" }}>
            Colaboradores
          </Typography>
          <Typography sx={{ marginLeft: "auto", color: "#334155" }}>
            ›
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flex: 1, p: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <Avatar sx={{ width: 36, height: 36 }} />
        </Box>

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
            <Typography sx={headerStyle}>Nome ↓</Typography>
            <Typography sx={headerStyle}>Email ↓</Typography>
            <Typography sx={headerStyle}>Departamento ↓</Typography>
            <Typography sx={{ ...headerStyle, textAlign: "right" }}>
              Status ↓
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
                  sx={{
                    width: 36,
                    height: 36,
                    fontSize: 16,
                    backgroundColor: "#f1f5f9",
                    color: "#334155",
                  }}
                >
                  {colaborador.nome?.charAt(0).toUpperCase()}
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
    </Box>
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