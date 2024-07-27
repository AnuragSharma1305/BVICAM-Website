import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import BVI_Logo from '../utils/images/BVI_Logo.png';
import TextInput from "../components/shared/TextInput"; 
import PasswordInput from "../components/shared/PasswordInput"; 

const AuthorizationSignupComponent = () => {
  const [AuthpasswordEntered, setAuthPasswordEntered] = useState(false);
  const [Authpassword, setAuthPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleAuthPasswordSubmit = () => {
    if (Authpassword === "admin") {
      setAuthPasswordEntered(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const handleAuthPasswordChange = useCallback((e) => {
    setAuthPassword(e.target.value);
  }, [setAuthPassword]);

  const signUp = async () => {
    if (email !== confirmEmail) {
      alert("Email and confirm email fields must match. Please check again");
      return;
    }
    const data = { email, password, username, firstName, lastName };
    const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
    if (response && !response.err) {
      alert("Success");
      navigate("/login");
    } else {
      alert("Failure");
    }
  };

  if (!AuthpasswordEntered) {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <div className="text-center">
          <img src={BVI_Logo} alt="BVI Logo" className="mx-auto" style={{ width: "16.5rem" }} />
        </div>
        <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
          <div className="font-bold mb-4 text-2xl text-center">Enter your Password</div>
          <PasswordInput
              label="Password"
              placeholder="Enter Password"
              value={Authpassword}
              setValue={setAuthPassword}
          />
          <button
              className="bg-red-600 text-white font-semibold p-3 px-10 rounded-full mt-4"
              onClick={handleAuthPasswordSubmit}
          >
              Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <div className="text-center">
          <img src={BVI_Logo} alt="BVI Logo" className="mx-auto" style={{ width: "16.5rem" }} />
        </div>
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-4 text-2xl">
          Register a New Admin User
        </div>
        <TextInput
          label="Email address"
          placeholder="Enter your email"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm Email Address"
          placeholder="Enter your email again"
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="Username"
          placeholder="Enter your username"
          className="mb-6"
          value={username}
          setValue={setUsername}
        />
        <PasswordInput
          label="Create Password"
          placeholder="Enter a strong password here"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeholder="Enter Your First Name"
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter Your Last Name"
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <div className=" w-full flex items-center justify-center my-8">
          <button
            className="bg-red-600 text-white font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">
          Already a registered User? 
        </div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/login" className="text-red-600 font-semibold"> Login Instead</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationSignupComponent;
