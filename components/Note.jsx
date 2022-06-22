import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDelete }) => {
  return (
    <div className="note note-single">
      <span>{text}</span>
      <div className=" flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDelete(id)}
          className="delete-icon"
          size="1.3rem"
        />
      </div>
    </div>
  );
};

export default Note;
