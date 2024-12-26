import { useState } from "react";

const PlayerContainer = ({
  initialName,
  playerSymbol,
  isActive,
  onPlayerNameChange,
 // Receive the player name from the parent
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localName, setLocalName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      // Save the updated name to the parent state when exiting edit mode
      onPlayerNameChange(localName, playerSymbol);
    }
  };

  return (
    <li className={`${isActive ? "playerActive" : ""} flex items-center`}>
      {isEditing ? (
        <input
          type="text"
          className="w-[120px] mr-2"
          value={localName} // Use local state for editing
          onChange={(e) => setLocalName(e.target.value)} // Update local state
        />
      ) : (
        <span className="player-name">{localName}</span> // Display the parent-provided name
      )}
      <span className="player-symbol ml-2">({playerSymbol})</span>
      <button
        className="ml-4 bg-blue-500 text-white px-2 py-1 rounded"
        onClick={handleEdit}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default PlayerContainer;



