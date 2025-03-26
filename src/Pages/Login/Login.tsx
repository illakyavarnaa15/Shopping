import "./Login.css";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    <div className="container" style={{ padding: "10px" }}>
      <div className="box1">
        <div>
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div
          className="logininputs"
          style={{
            padding: "30px",
          }}
        >
          <div
            className="logininput"
            style={{
              gap: "10px",
              padding: "10px",
            }}
          >
            <input type="email" placeholder="Email ID" />
          </div>
          <div
            className="logininput"
            style={{
              gap: "10px",
              padding: "10px",
            }}
          >
            {/* <img src={password_icon} alt="" /> */}
            <input type="password" placeholder="Password" />
            {
              <VisibilityOffIcon
                sx={{
                  color: "black",
                  padding: "10px",
                }}
              />
            }
          </div>
        </div>

        <div
          className="submit-coitainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained" onClick={onNext}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
