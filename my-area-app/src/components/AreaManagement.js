'use client';

import { useState, useEffect } from 'react';
import { fetchAreas, createArea, updateArea, deleteArea } from '../services/api';
import AreaList from './AreaList';

export default function AreaManagement() {
  const [areas, setAreas] = useState([]);
  const [editingArea, setEditingArea] = useState(null);

  useEffect(() => {
    loadAreas();
  }, []);

  const loadAreas = async () => {
    const result = await fetchAreas();
    setAreas(result.data);
  };

  const handleCreate = async (areaData) => {
    await createArea(areaData);
    loadAreas();
  };

  const handleUpdate = async (areaData) => {
    await updateArea(areaData.id, areaData);
    setEditingArea(null);
    loadAreas();
  };

  const handleDelete = async (id) => {
    await deleteArea(id);
    loadAreas();
  };

  const handleEdit = (area) => {
    setEditingArea(area);
  };

  return (
    <div>
      <h1>Area Management</h1>
      <AreaList
        areas={areas}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
