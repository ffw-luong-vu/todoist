import { useRef } from "react";
import { useToDoListContext } from "../store/ToDoListContext";

const AddToDo = () => {
  const titleElement = useRef();
  const descriptionElement = useRef();
  const store = useToDoListContext();

  const submitForm = (e) => {
    e.preventDefault();
    const enteredTitle = titleElement.current.value;
    const enteredDescription = descriptionElement.current.value;
    const item = {
      id: new Date().valueOf(),
      title: enteredTitle,
      description: enteredDescription,
      completed: false,
    };
    e.target.reset();
    store.addToDo(item);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="grid gap-6 mb-8 text-sm">
        <div>
          <label htmlFor="input-title" className="block mb-2  font-medium ">
            Title
          </label>
          <input
            type="text"
            id="input-title"
            placeholder="Title"
            ref={titleElement}
            required
          />
        </div>
        <div>
          <label htmlFor="input-title" className="block mb-2  font-medium  ">
            Description
          </label>
          <input
            type="text"
            id="input-description"
            placeholder="Description"
            ref={descriptionElement}
            required
          />
        </div>
        <div className="flex items-center gap-8">
          <button
            type="submit"
            className="bg-blue-500  w-full sm:w-auto  shadow-blue-500/20  hover:shadow-blue-500/40"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddToDo;
