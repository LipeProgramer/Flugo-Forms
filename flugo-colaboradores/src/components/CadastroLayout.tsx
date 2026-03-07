import { Box, Typography, LinearProgress, Avatar } from "@mui/material";
import logo from "../assets/flugo-logo.png";

export default function CadastroLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
      }}
    >
      {/* SIDEBAR */}
      <Box
        sx={{
          width: 220,
          backgroundColor: "#fff",
          borderRight: "1px solid #e5e7eb",
          p: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <img src={logo} alt="Flugo" style={{ width: 28, marginRight: 8 }} />
          <Typography fontWeight={700} fontSize={28}>
            flugo
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#334155",
          }}
        >
          <Box
            sx={{
              width: 18,
              height: 18,
              backgroundColor: "#94a3b8",
              borderRadius: "3px",
            }}
          />
          <Typography fontSize={14}>Colaboradores</Typography>
        </Box>
      </Box>

      {/* CONTEÚDO */}
      <Box sx={{ flex: 1, p: 4 }}>
        {/* AVATAR */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <Avatar />
        </Box>

        {/* BREADCRUMB */}
        <Box
          sx={{
            mb: 2,
            display: "flex",
            gap: 1,
            color: "#94a3b8",
            fontSize: 14,
          }}
        >
          <Typography fontSize={14}>Colaboradores</Typography>
          <Typography fontSize={14}>•</Typography>
          <Typography fontSize={14}>Cadastrar Colaborador</Typography>
        </Box>

        {/* PROGRESS BAR */}
        <Box sx={{ mb: 4 }}>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              height: 4,
              borderRadius: 999,
              backgroundColor: "#d1fae5",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#22c55e",
              },
            }}
          />
          <Typography
            sx={{
              textAlign: "right",
              mt: 1,
              color: "#94a3b8",
              fontSize: 12,
            }}
          >
            50%
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 4 }}>
          {/* ETAPAS */}
          <Box sx={{ width: 180 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                1
              </Box>
              <Typography fontSize={14}>Infos Básicas</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                2
              </Box>
              <Typography fontSize={14}>Infos Profissionais</Typography>
            </Box>
          </Box>

          {/* FORMULÁRIO */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ mb: 3, color: "#475569" }}
            >
              Informações Básicas
            </Typography>

            <Box
              sx={{
                minHeight: 360,
                borderBottom: "1px dashed #cbd5e1",
                pb: 4,
              }}
            >
              <Box sx={{ maxWidth: 720 }}>
                {/* CAMPO NOME */}
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#22c55e",
                    mb: 0.5,
                  }}
                >
                  Título
                </Typography>

                <Box
                  component="input"
                  placeholder="João da Silva"
                  sx={{
                    width: "100%",
                    height: 56,
                    borderRadius: "8px",
                    border: "1px solid #22c55e",
                    px: 2,
                    fontSize: 16,
                    outline: "none",
                    boxSizing: "border-box",
                    mb: 3,
                    backgroundColor: "#fff",
                  }}
                />

                {/* CAMPO EMAIL */}
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#64748b",
                    mb: 0.5,
                  }}
                >
                  E-mail
                </Typography>

                <Box
                  component="input"
                  placeholder="e.g. john@gmail.com"
                  sx={{
                    width: "100%",
                    height: 56,
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    px: 2,
                    fontSize: 16,
                    outline: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#fff",
                  }}
                />
              </Box>
            </Box>

            {/* BOTÕES */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <Typography sx={{ color: "#475569", cursor: "pointer" }}>
                Voltar
              </Typography>

              <Box
                sx={{
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Concluir
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}