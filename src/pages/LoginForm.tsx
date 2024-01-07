import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormState } from "../interface/Interface";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";

// Validation schema using Yup for form validation
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

// Functional component for the login form
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const formMethods = useForm<LoginFormState>({
    resolver: yupResolver(schema),
    defaultValues: { username: "admin", password: "admin@123" },
  });

  const { register, handleSubmit } = formMethods;
  const { errors } = formMethods.formState;

  // Handling form submission
  const onSubmit: SubmitHandler<LoginFormState> = async (data) => {
    const isValid = await formMethods.trigger();

    if (isValid) {
      try {
        // Sending a POST request to the login endpoint with user data
        const response = await axios.post("http://localhost:3000/login", data, {
          withCredentials: true,
        });
        console.log(response.data);

        if (response.data.success) {
          navigate("/products");
          toast.success("Login successful");
        } else {
          toast.error("Invalid username and password");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred during login");
      }
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: 2, color: "#333" }}
        >
          LOGIN
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ my: 2 }}>
            <InputLabel sx={{ fontWeight: "bold", color: "#555" }}>
              Username
              <Typography
                sx={{ color: "red", display: "inline", marginLeft: "4px" }}
              >
                *
              </Typography>
            </InputLabel>
            <TextField
              type="text"
              {...register("username")}
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
              sx={{ backgroundColor: "#fff" }}
            />
            {errors.username && (
              <Typography sx={{ color: "red" }}>
                {errors.username.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ my: 2 }}>
            <InputLabel sx={{ fontWeight: "bold", color: "#555" }}>
              Password
              <Typography
                sx={{ color: "red", display: "inline", marginLeft: "4px" }}
              >
                *
              </Typography>
            </InputLabel>
            <TextField
              type="password"
              {...register("password")}
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={(e) => {
                        e.preventDefault();
                        const passwordField = document.querySelector(
                          'input[name="password"]'
                        ) as HTMLInputElement;
                        passwordField.type =
                          passwordField.type === "password"
                            ? "text"
                            : "password";
                      }}
                      edge="end"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "#fff" }}
            />
            {errors.password && (
              <Typography sx={{ color: "red" }}>
                {errors.password.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ my: 2, textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#189e35",
                color: "#fff",
                "&:hover": { backgroundColor: "#189e35", fontWeight: "bold" },
              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
