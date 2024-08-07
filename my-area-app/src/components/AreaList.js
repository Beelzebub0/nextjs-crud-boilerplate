import React from 'react';

const AreaList = ({ areas, onEdit, onDelete }) => {
  return (
    <ul>
      {areas.map((area) => (
        <li key={area.id}>
          {area.name} - {area.code_area}
          <button onClick={() => onEdit(area)}>Edit</button>
          <button onClick={() => onDelete(area.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AreaList;
