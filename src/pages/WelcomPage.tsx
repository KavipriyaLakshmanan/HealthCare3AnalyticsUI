import { Box, Container, IconButton, Typography } from "@mui/material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { Fade } from "react-awesome-reveal";

const WelcomePage = () => {
  return (
    <Container
      sx={{
        marginTop: { xs: "50px", sm: "70px", md: "100px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", md: "72vh" },
          textAlign: "center",
          background: "linear-gradient(to top, #4caf50, #f7f7f7)",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          padding: { xs: "20px", md: "40px" },
        }}
      >
        <Fade direction="down" cascade duration={1000}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#4caf50",
              fontWeight: "bold",
              marginBottom: "20px",
              paddingY: { xs: 2, md: 5 },
            }}
          >
            Welcome to HealthCare Services
          </Typography>
        </Fade>
        <Fade direction="up" cascade duration={1000}>
          <Box sx={{ maxWidth: "800px", width: "100%" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
                gap: { xs: "20px", md: "40px" },
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <IconButton sx={{ fontSize: "3rem", color: "#4caf50" }}>
                <MonitorHeartIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  marginLeft: { xs: 0, md: "8px" },
                  color: "#333",
                }}
              >
                At Health Care, we are dedicated to providing reliable and
                accessible information to empower you on your health journey.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
                gap: { xs: "20px", md: "40px" },
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <IconButton sx={{ fontSize: "3rem", color: "#4caf50" }}>
                <MonitorHeartIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  color: "#333",
                }}
              >
                Our team of medical experts and writers strive to deliver
                accurate, up-to-date, and trustworthy content to help you make
                informed decisions about your well-being.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default WelcomePage;
