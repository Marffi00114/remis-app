import { Box, TextField, Button, FormControl } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export const Login = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => {};

  return (
    <Box
      component={"form"}
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "250px",
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "400px",
      }}
    >
      <Controller
        name={"loginForm"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            required
            id="outlined-required"
            type="email"
            label="Uživatelské jméno"
            sx={{ marginBottom: "30px" }}
          />
        )}
      ></Controller>

      <Button variant={"outlined"} size={"medium"}>
        Přihlásit se
      </Button>
    </Box>
  );
};
