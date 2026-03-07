import { Avatar, Box, Typography } from "@mui/material";
import logo from "../assets/flugo-logo.png";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
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

        {children}
      </Box>
    </Box>
  );
}