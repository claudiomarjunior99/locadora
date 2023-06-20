import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Carro {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
}

const Locadora = () => {
  const [carros, setCarros] = useState<Carro[]>([]);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoCarro: Carro = {
      id: carros.length + 1,
      marca,
      modelo,
      ano,
    };
    setCarros([...carros, novoCarro]);
    setMarca('');
    setModelo('');
    setAno(0);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'marca', headerName: 'Marca', width: 150 },
    { field: 'modelo', headerName: 'Modelo', width: 150 },
    { field: 'ano', headerName: 'Ano', width: 100 },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            fullWidth
          />
          <TextField
            label="Modelo"
            value={
