import { useState } from "react";
import Card from "./Card";
import EditForm from "./EditForm";

const ToDo = ({ todo, isToDoDetail }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="w-full leading-tight overflow-hidden text-gray-900 border-b border-gray-200 list-none">
      {!isEditing && (
        <Card
          todo={todo}
          isToDoDetail={isToDoDetail}
          setEditing={setIsEditing}
        />
      )}
      {isEditing && <EditForm todo={todo} setEditing={setIsEditing} />}
    </li>
  );
};

export default ToDo;
