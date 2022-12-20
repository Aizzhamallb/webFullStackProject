import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import "../styles/AuthModal.css";
// import image from "../../src/media/icons8-close-48.png";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(true);
  const [regLogInpValue, setRegLogInpValue] = useState("");
  const [regPasswordInpValue, setRegPasswordInpValue] = useState("");
  const [regEmailInpValue, setRegEmailInpValue] = useState("");
  const [regSecondPasswordInpValue, setRegSecondPasswordInpValue] =
    useState("");
  const [logInpValue, setLogInpValue] = useState("");
  const [passwordInpValue, setPasswordInpValue] = useState("");

  return (
    <div className="navBlock">
      <div className="navContainer">
        <div className="navElements">
          <div className="navElementsLinks" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="navElementsLinks">Booking</div>
          <div
            className="navElementsLinks modal-btn"
            htmlFor="modal-toggle"
            onClick={() => {
              setModal(!modal);
              setInputs(false);
            }}>
            Register
          </div>
          <div
            className="navElementsLinks"
            onClick={() => {
              setModal(!modal);
              setInputs(true);
            }}>
            Log in
          </div>
        </div>
      </div>
      <div
        style={
          modal
            ? {
                position: "fixed",
                height: "5000px",
                backgroundColor: "black",
                opacity: "0.5",
                width: "100%",
              }
            : null
        }></div>
      {modal ? (
        <div className="modalBlock">
          <div
            className="closeBtn"
            onClick={() => {
              setModal(false);
              setLogInpValue("");
              setPasswordInpValue("");
              setRegEmailInpValue("");
              setRegLogInpValue("");
              setRegPasswordInpValue("");
              setRegPasswordInpValue("");
            }}>
            {/* <img src={image} alt="" width="20px" height="20px" /> */}
          </div>
          {inputs ? (
            // Это бло с входом в аккаунт
            <div className="modalContent">
              <div className="changeInputs">
                <div
                  className="changeToLogIn"
                  style={{
                    backgroundColor: "#e4cfa9",
                    color: "#002939",
                  }}
                  onClick={() => {
                    setRegEmailInpValue("");
                    setRegLogInpValue("");
                    setRegPasswordInpValue("");
                    setRegPasswordInpValue("");
                    setInputs(true);
                  }}>
                  Вход
                </div>
                <div className="changeLine"></div>
                <div
                  className="changeToSignUp"
                  onClick={() => {
                    setLogInpValue("");
                    setPasswordInpValue("");
                    setInputs(false);
                  }}>
                  Регистрация
                </div>
              </div>
              <div className="authModule">
                <input
                  type="email"
                  className="loginInp"
                  placeholder="Email"
                  value={logInpValue}
                  onChange={e => {
                    setLogInpValue(e.target.value);
                  }}
                />
                <input
                  value={passwordInpValue}
                  type="password"
                  className="passwordInp"
                  placeholder="Password"
                  onChange={e => setPasswordInpValue(e.target.value)}
                />
                <div className="loginBtn">Войти</div>
              </div>
            </div>
          ) : (
            // Это блок с регистрацией
            <div className="modalContent ">
              <div className="changeInputs">
                <div
                  className="changeToLogIn"
                  onClick={() => {
                    setRegEmailInpValue("");
                    setRegLogInpValue("");
                    setRegPasswordInpValue("");
                    setRegPasswordInpValue("");
                    setInputs(true);
                  }}>
                  Вход
                </div>
                <div className="changeLine"></div>
                <div
                  className="changeToSignUp"
                  style={{ backgroundColor: "#e4cfa9", color: "#002939" }}
                  onClick={() => {
                    setLogInpValue("");
                    setPasswordInpValue("");
                    setInputs(false);
                  }}>
                  Регистрация
                </div>
              </div>
              <div className="regModule">
                <input
                  type="email"
                  className="loginInp"
                  placeholder="Set your email"
                  value={regEmailInpValue}
                  onChange={e => {
                    setRegEmailInpValue(e.target.value);
                  }}
                />
                <input
                  type="text"
                  value={regLogInpValue}
                  className="usernameInp"
                  placeholder="Set your username"
                  onChange={e => setRegLogInpValue(e.target.value)}
                />
                <input
                  type="password"
                  value={regPasswordInpValue}
                  className="passwordInp"
                  placeholder="Set password"
                  onChange={e => setRegPasswordInpValue(e.target.value)}
                />
                <input
                  type="password"
                  value={regSecondPasswordInpValue}
                  className="secondPasswordInp"
                  placeholder="Repeat your password"
                  onChange={e => setRegSecondPasswordInpValue(e.target.value)}
                />
                <div className="regBtn">Зарегистрироваться</div>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
