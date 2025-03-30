import ReactQuill from "react-quill";
import "../../styles/componentStyle/textEditor.scss";


interface TextEditorProps {
    value: string;
    className: string;
    onChange: (content: string) => void;
}

const TextEditor = ({ value, className, onChange }: TextEditorProps) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
            ["link", "image", "video"],
            [{ align: [] }],
            ["clean"],
        ]
    }


    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            modules={modules}
            theme="snow"
            placeholder="Write your blog post here..."
            className={className}
        />
    )
}

export default TextEditor