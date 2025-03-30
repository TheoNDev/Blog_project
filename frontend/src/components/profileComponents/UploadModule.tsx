import { ChangeEvent, useState } from "react";
import { VscClose } from "react-icons/vsc";
import Section from "../smallComponents/Section";
import Button from "../smallComponents/Button";


interface IUploadModuleProps {
    onClose: () => void;
    onUpload: (file: File) => void;
    superClass: string;
}

const UploadModule = ({ onClose, onUpload, superClass }: IUploadModuleProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>("");

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileSelected = e.target.files ? e.target.files[0] : null;
        if (fileSelected) {
            setFile(fileSelected);
            const reader = new FileReader();

            reader.onloadend = () => {

                setImagePreview(reader.result as string);
            };

            reader.readAsDataURL(fileSelected);
        }
    };

    const handleUploadClick = () => {
        if (file) {
            onUpload(file);
        }
    };

    return (
        <Section className={`${superClass}__uploadModule`}>
            <div className={`${superClass}__uploadModule__closeDiv`}>
                <VscClose onClick={onClose} className={`${superClass}__uploadModule__closeDiv__btn`} />
            </div>
            {imagePreview && (
                <>
                    <img src={imagePreview} alt="image preview" className={`${superClass}__uploadModule__img`} />
                    <p className={`${superClass}__uploadModule__title`}>Image Preview</p>
                </>
            )}
            <input type="file" onChange={handleFileChange} className={`${superClass}__uploadModule__input`} />
            <Button onClick={handleUploadClick} btnType="button" className={`${superClass}__uploadModule__btn`}>
                Upload
            </Button>
        </Section>
    );
};

export default UploadModule;