import { useState } from "react";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import PasswordInput from "../components/shared/PasswordInput";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import BVI_Logo from '../utils/images/BVI_Logo.png';
import TextInput from "../components/shared/TextInput";

const UploadFile = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [passwordEntered, setPasswordEntered] = useState(false);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [playlistUrl, setFileUrl] = useState("");
    const [uploadedFileName, setUploadedFileName] = useState("");
    const navigate = useNavigate();

    const handlePasswordSubmit = () => {
        // Check if the entered password is correct
        if (password === "admin") {
            setPasswordEntered(true);
        } else {
            alert("Incorrect password. Please try again.");
        }
    };

    const submitFile = async () => {
        const data = { name, track: playlistUrl };
        const response = await makeUnauthenticatedPOSTRequest("/auth/create", data);
        if (response.err) {
            console.log(response.err);
            alert("Could not upload file");
            return;
        }
        alert("Success");
        navigate("/ViewUploads");
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <div className="text-center">
                    <img src={BVI_Logo} alt="BVI Logo" className="mx-auto" style={{ width: "16.5rem" }} />
                </div>
            </div>
            {!passwordEntered ? (
                <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                    <div className="font-bold mb-4 text-2xl text-center">Re-Enter your Password</div>
                    <PasswordInput
                        label="Password"
                        placeholder="Enter Password"
                        value={password}
                        setValue={setPassword}
                    />
                    <button
                        className="bg-red-600 text-white font-semibold p-3 px-10 rounded-full mt-4"
                        onClick={handlePasswordSubmit}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                    <div className="font-bold mb-4 text-2xl text-center">Upload Files</div>
                    <div className="w-2/3 flex space-x-3 justify-center">
                        <div className="w-full lg:w-96">
                            <TextInput
                                label="Name"
                                labelClassName={"text-white"}
                                placeholder="File Name"
                                value={name}
                                setValue={setName}
                                className="my-6 w-full"
                            />
                        </div>
                    </div> 
                    <div className="py-5">
                        {uploadedFileName ? (
                            <div className="bg-red-600 text-white font-semibold p-3 px-10 rounded-full">
                                {uploadedFileName.substring(0, 35)}...
                            </div>
                        ) : (
                            <CloudinaryUpload
                                setUrl={setFileUrl}
                                setName={setUploadedFileName}
                            />
                        )}
                    </div>
                    <button className="bg-red-600 text-white font-semibold p-3 px-10 rounded-full" onClick={submitFile}>
    Submit File
</button>

                </div>
            )}
        </div>
    );
};

export default UploadFile;
