import React, { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";

const Sidebar = () => {

  const [groups, setGroups] = useState(['Group 1', 'Group 2', 'Group 3']);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAddGroup = () => {
    const newGroup = prompt('Enter group name:');
    if (newGroup) {
      setGroups((prevGroups) => [...prevGroups, newGroup]);
    }
  }

  const handleEditGroup = () => {
    const editedGroup = prompt('Edit group name:', selectedGroup);
    if (editedGroup) {
      setGroups((prevGroups) =>
        prevGroups.map((group) => (group === selectedGroup ? editedGroup : group))
      );
    }
  }

  const handleDeleteGroup = () => {
    setGroups((prevGroups) => prevGroups.filter((group) => group !== selectedGroup));
    setSelectedGroup(null);
  }

  return (
    <div className="sidebar">
      <div className="group-actions">
        <VscThreeBars style={{ cursor: "pointer", display: "flex" }} onClick={toggleMenu} />
        <br />
        {menuOpen && (
          <div className="option" style={{ width: "216px" }}>
            <button onClick={handleAddGroup}>Add</button>
            <button onClick={handleEditGroup} disabled={!selectedGroup}>
              Edit
            </button>
            <button onClick={handleDeleteGroup} disabled={!selectedGroup}>
              Delete
            </button>
          </div>
        )}
      </div>
      <br />
      <div className="group-list">
        {groups.map((group) => (
          <div
            key={group}
            className={`group-item ${selectedGroup === group ? 'selected' : ''}`}
            onClick={() => setSelectedGroup(group)}
          >
            {group}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;