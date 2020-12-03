//cSpell:Ignore descricao
import React, { useState, useEffect } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import DeleteIcon from '@material-ui/icons/DeleteForeverTwoTone'
import EditIcon from '@material-ui/icons/EditTwoTone'
import SaveIcon from '@material-ui/icons/Save'




export default function Tarefas2() {
    const [tarefas, setTarefas] = useState([])
    const valorInicial = { id: '', tipo: '', descricao: '', dataFim: '' }
    const [tarefa, setTarefa] = useState(valorInicial)
    const [editando, setEditando] = useState(false)

    useEffect(() => {
        setTarefas(JSON.parse(localStorage.getItem("tarefas")) || [])
    }, []);

    useEffect(() => {
        salvaDados()
    }, [tarefas]);


    const mudaAtributo = event => {
        const { name, value } = event.target
        setTarefa({ ...tarefa, [name]: value })
    }
    const apagaRegistro = id => {       
        let index = tarefas.map((tarefa) => tarefa.id).indexOf(id);
        if (index > -1) {
            tarefas.splice(index, 1) //o 1o parâmetro é o índice do array e o segundo o número de itens que serão removidos
            setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
        }
    }


    function salvaRegistro(event) {
        event.preventDefault()//Não recarrega o formulário
        if (editando) {
            apagaRegistro(tarefa.id)
        }
        setTarefa({ id: tarefa.id, tipo: tarefa.tipo, descricao: tarefa.descricao, dataFim: tarefa.dataFim })
        setTarefas([...tarefas, tarefa])
        setTarefa(valorInicial) //limpa os campos
        setEditando(false)
    }

    function salvaDados() {
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={salvaRegistro}>
                        <Typography
                            component="h1"
                            align="center"
                        >Cadastro de Produção </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            id="id"
                            label="Número da Ordem de produção"
                            name="id"
                            autoFocus
                            value={tarefa.id}
                            disabled={editando}
                            onChange={mudaAtributo}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="cliente"
                            label="Cliente"
                            name="cliente"
                            value={tarefa.cliente}
                            onChange={mudaAtributo}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="vendedor"
                            label="Vendedor"
                            name="vendedor"
                            value={tarefa.vendedor}
                            onChange={mudaAtributo}
                        />
                        <FormControl fullWidth={true}>
                            <InputLabel id="tipo">Peça montada</InputLabel>
                            <Select
                                labelId="tipo"
                                id="tipo"
                                value={tarefa.tipo}
                                required
                                onChange={e => setTarefa({ ...tarefa, tipo: e.target.value })}
                            >
                                <MenuItem value="Chapa 10x20">Chapa 10x20</MenuItem>
                                <MenuItem value="Chapa 15x30">Chapa 15x30</MenuItem>
                                <MenuItem value="Painel 30x30">Painel 30x30</MenuItem>
                                <MenuItem value="Painel 20x20">Painel 20x20</MenuItem>
                                <MenuItem value="Caixa 8x12">Caixa 8x12</MenuItem>
                                <MenuItem value="Caixa 13x15">Caixa 13x15</MenuItem>
                                <MenuItem value="MoldeA">Molde A</MenuItem>
                                <MenuItem value="MoldeB">Molde B</MenuItem>
                                <MenuItem value="MoldeC">Molde C</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="dataFim"
                            label="Data finalização"
                            name="dataFim"
                            type="date"
                            value={tarefa.dataFim}
                            onChange={mudaAtributo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            <SaveIcon /> Salvar
          </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Relação de Tarefas   ">
                            <TableHead>
                                <TableRow>
                                    <TableCell>OP</TableCell>
                                    <TableCell>Peça</TableCell>
                                    <TableCell>Resultado</TableCell>
                                    <TableCell align="right">Data entrega</TableCell>
                                    <TableCell>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tarefas.map((t) => (
                                    <TableRow key={t.id}>
                                        <TableCell>{t.id}</TableCell>
                                        <TableCell>{t.tipo}</TableCell>
                                        <TableCell>{t.descricao}</TableCell>
                                        <TableCell align="right">{t.dataFim}</TableCell>
                                        <TableCell>
                                            <Button startIcon={<DeleteIcon />}
                                                onClick={() => apagaRegistro(t.id)}
                                                variant="outlined" color="secondary">Apagar</Button>
                                            <Button startIcon={<EditIcon />}
                                                onClick={() => {
                                                    setTarefa(t)
                                                    setEditando(true)
                                                }}
                                                variant="outlined" color="primary">Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}