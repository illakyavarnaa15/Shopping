import "./Login.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onNext = () => {
    navigate("/shopping");
  };
  return (
    <div className="container" style={{ padding: "10px" }}>
      <div className="box">
        <div className="header">
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
            }}
          >
            {/* <img src={email_icon} alt="" /> */}
            <EmailIcon
              sx={{
                color: "black",
                padding: "10px",
              }}
            />
            <input type="email" placeholder="Email ID" />
          </div>
          <div
            className="logininput"
            style={{
              gap: "10px",
            }}
          >
            {/* <img src={password_icon} alt="" /> */}
            <LockIcon
              sx={{
                color: "black",
                padding: "10px",
              }}
            />
            <input type="password" placeholder="Password" />
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
