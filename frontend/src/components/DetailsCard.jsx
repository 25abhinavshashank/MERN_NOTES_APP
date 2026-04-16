import { useState } from "react";

function DetailsCard({ title, description }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);

    // 👉 yaha API call karega (PATCH)
    console.log(newTitle, newDesc);
  };

  const handleDelete = () => {
    // 👉 yaha DELETE API call karega
    console.log("Delete note");
  };

  return (
    <div className="w-[300px] bg-white text-black rounded-xl p-4 shadow">

      {/* Title */}
      <div className="mb-2">
        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
        ) : (
          <h2 className="text-xl font-bold">{newTitle}</h2>
        )}
      </div>

      {/* Description */}
      <div className="mb-4">
        {isEditing ? (
          <textarea
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="w-full h-[100px] border p-2 rounded resize-none"
          />
        ) : (
          <p className="break-words">{newDesc}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">

        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default DetailsCard;