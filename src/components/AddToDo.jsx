import { useRef } from "react";
import ListContext from "../store/ListContext";
import { useContext } from "react";

const AddToDo = () => {
  const titleElement = useRef();
  const descriptionElement = useRef();
  const store = useContext(ListContext);

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
    store.addItem(item);
    e.target.reset();
  };

  return (
    <form onSubmit={submitForm}>
      <div className="grid gap-6 mb-8">
        <div>
          <label
            htmlFor="input-title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="input-title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title"
            ref={titleElement}
            required
          />
        </div>
        <div>
          <label
            htmlFor="input-title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <input
            type="text"
            id="input-description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Description"
            ref={descriptionElement}
            required
          />
        </div>
        <div className="flex items-center gap-8">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddToDo;
