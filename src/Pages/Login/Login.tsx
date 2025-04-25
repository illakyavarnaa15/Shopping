import "./Login.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  localStorage.setItem("header", "true");
  localStorage.setItem("footer", "true");
  const onNext = () => {
    localStorage.setItem("footer", "false");
    localStorage.setItem("header", "false");
    navigate("/shopping");
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <div className="container">
      <Paper elevation={5} className="box1" style={{ width: "1000px" }}>
        <div>
          <div>
            <div className="text">Login</div>
          </div>
          <div
            className="logininputs"
            style={{
              padding: "20px",
            }}
          >
            <div
              className="logininput"
              style={{
                gap: "10px",
                padding: "10px",
              }}
            >
              <TextField
                variant="standard"
                type="email"
                placeholder="Email ID"
              />
            </div>
            <div
              className="logininput"
              style={{
                gap: "10px",
                padding: "10px",
              }}
            >
              {/* <img src={password_icon} alt="" /> */}
              <TextField
                variant="standard"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>

          <div
            className="submit-coitainer"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={onNext}
              sx={{
                backgroundColor: "#CEA05F;",
                width: "800px",
                padding: "5px 0",
                color: "black",
                "&:hover": {
                  backgroundColor: "#CEA05F",
                },
              }}
            >
              Login
            </Button>
          </div>
          <div>
            <h3>
              Not a Member? <span style={{ color: "#CEA05F" }}>Sign Up </span>
            </h3>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
