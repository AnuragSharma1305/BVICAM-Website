import {openUploadWidget} from "../../utils/CloudinaryService";
import {cloudinary_upload_preset} from "../../config";

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dzqxgezfi",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-red-600 text-white font-semibold p-3 px-10 rounded-full"
            onClick={uploadImageWidget}
        >
            Select File
        </button>
    );
};

export default CloudinaryUpload;
