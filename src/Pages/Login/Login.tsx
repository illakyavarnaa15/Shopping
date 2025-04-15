import "./Login.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
const Login = () => {
  const navigate = useNavigate();
  localStorage.setItem("header", "true");
  localStorage.setItem("footer", "true");
  const onNext = () => {
    localStorage.setItem("footer", "false");
    localStorage.setItem("header", "false");
    navigate("/shopping");
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
                type="password"
                placeholder="Password"
              />
              {
                <VisibilityOffIcon
                  sx={{
                    color: "black",
                    fontSize: "1.5rem",
                  }}
                />
              }
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
                backgroundColor: "rgb(241, 186, 6);",
                width: "800px",
                padding: "5px 0",
                color: "black",
                "&:hover": {
                  backgroundColor: "rgb(241, 186, 6)",
                },
              }}
            >
              Login
            </Button>
          </div>
          <div>
            <h3>
              Not a Member?{" "}
              <span style={{ color: "rgb(241, 186, 6)" }}>Sign Up </span>
            </h3>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
