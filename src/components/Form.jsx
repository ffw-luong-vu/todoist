import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ToDoListContext from "../store/ToDoListContext";
import { useContext, useRef, useState } from "react";
import ModalContext from "../store/ModalContext";

const Form = () => {
  const titleElement = useRef();
  const descriptionElement = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const toDoListStore = useContext(ToDoListContext);
  const modalStore = useContext(ModalContext);

  const submitForm = (e) => {
    e.preventDefault();
    const enteredTitle = titleElement.current.value;
    const enteredDescription = descriptionElement.current.value;
    const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });
    const formattedDate = formatter.format(startDate);

    const item = {
      id: modalStore.isModalEdit
        ? modalStore.itemEdit.id
        : new Date().valueOf(),
      title: enteredTitle,
      description: enteredDescription,
      date: formattedDate,
      completed: false,
    };
    if (modalStore.isModalEdit) {
      toDoListStore.editItem(item);
    } else {
      toDoListStore.addItem(item);
    }
    e.target.reset();
    modalStore.toggleModal();
  };
  return (
    <form onSubmit={submitForm}>
      <h1 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-6xl">
        {modalStore.isModalEdit ? "Edit Task" : "New Task"}
      </h1>
      <div className="grid gap-6">
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
            defaultValue={
              modalStore.isModalEdit ? modalStore?.itemEdit?.title : ""
            }
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
            defaultValue={
              modalStore.isModalEdit ? modalStore?.itemEdit?.description : ""
            }
          />
        </div>
        <div>
          <label
            htmlFor="input-date"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Date
          </label>
          <DatePicker
            showIcon
            dateFormat="MMMM dd, yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="flex items-center gap-8">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            {modalStore.isModalEdit ? "Edit" : "Add"}
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            onClick={() => modalStore.toggleModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
