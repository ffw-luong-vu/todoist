import { useContext, useRef } from "react";
import ListContext from "../store/ListContext";

const EditForm = ({ todo, setEditing, isToDoDetail }) => {
  const titleElement = useRef();
  const descriptionElement = useRef();
  const { editItem, getSingleItem } = useContext(ListContext);

  const submitEdit = () => {
    const enteredTitle = titleElement.current.value;
    const enteredDescription = descriptionElement.current.value;
    const newItem = {
      ...todo,
      title: enteredTitle,
      description: enteredDescription,
    };
    editItem(newItem);
    setEditing(false);
    if (isToDoDetail) getSingleItem(todo.id);
  };

  return (
    <form
      onSubmit={submitEdit}
      className="flex justify-between items-center gap-4 py-2 px-4"
    >
      <div className="gap-4 flex flex-col flex-1">
        <input
          type="text"
          id="input-title"
          placeholder="Title"
          ref={titleElement}
          required
          defaultValue={todo.title}
        />
        <input
          type="text"
          id="input-description"
          placeholder="Description"
          ref={descriptionElement}
          required
          defaultValue={todo.description}
        />
      </div>
      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className=" bg-green-500   shadow-green-500/20  hover:shadow-green-500/40 "
        >
          Submit
        </button>
        <button
          type="submit"
          className=" bg-red-500  shadow-red-500/20  hover:shadow-red-500/40 "
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
