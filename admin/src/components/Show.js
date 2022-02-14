import { Box, Toolbar, Typography, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AnswerService from '../services/AnswerService';
import Modal from "simple-react-modal";
import { Link } from 'react-router-dom';


const Show = () => {

    const [info, setInfo] = useState([])
    const [nuevo, setNuevo] = useState({
        id: 0,
        labelN: ''
    })

    const [agregar, setAgregar] = useState({
        label: ''
    })

    const [open, setOpen] = useState(false)

    const [openA, setOpenA] = useState(false)

    const openModal = (i) => {
        setOpen(true)
        setNuevo({
            id: i.id,
            labelN: i.label
        })
    }

    const openAg = () => {
        setOpenA(true)
    }

    const closeAg = () => {
        setOpenA(false)
    }

    const closeModal = () => {
        setOpen(false)
    }

    const getInfo = async () => {
        const res = await AnswerService.find({});
        setInfo(res.data)
        console.log(info)
    }

    useEffect(() => {
        getInfo();
    }, []);

    const delInfo = async (id) => {
        const res = await AnswerService.deleteAnswer(id)
        getInfo()
    }

    const edizao = async () => {
        const res = await AnswerService.editAnswer(nuevo.id, { label: nuevo.labelN })
        getInfo()
        closeModal()
    }

    const agregarI = async () => {
        const res = await AnswerService.create(agregar)
        getInfo()
        closeAg()
    }

    const handleChange = (e) => {
        setNuevo({
            ...nuevo,
            [e.target.name]: e.target.value
        })
    }

    const handleAg = (e) => {
        setAgregar({
            [e.target.name]: e.target.value
        })
    }




    return (
        <div>
            <Modal
                show={open}
                onClose={closeModal}>
                <form>
                    <TextField
                        label="nombre"
                        margin="normal"
                        variant="filled"
                        name="labelN"
                        value={nuevo.labelN}
                        onChange={handleChange}
                    />
                </form>
                <Button onClick={edizao}>Enviar</Button>
            </Modal>
            <Modal
                show={openA}
                onClose={closeAg}
            >
                <form>
                    <TextField
                        label="nombre"
                        margin="normal"
                        variant="filled"
                        name="label"
                        value={agregar.label}
                        onChange={handleAg}
                    />
                </form>
                <Button onClick={agregarI}>Enviar</Button>
            </Modal>
            <Toolbar />
            <div>
                <div align="right" style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Probando
                </div>
                <div align='center'>
                    <Link to='/adding'>
                        <Button variant="contained" color='primary'>Agregar</Button>
                    </Link>
                </div>
                {info.length ? info.map((i) => {
                    return (
                        <>
                            <div style={{ fontSize: 17, display: 'flex', justifyContent: 'space-between', margin: 10, marginLeft: 20 }}>
                                <div>
                                    {i.label}
                                </div>
                                <div>
                                    <Button onClick={() => delInfo(i.id)} variant="contained" color='primary' style={{ marginLeft: 5 }} >Borrar</Button>
                                    <Link to={`/${i.id}`}>
                                        <Button  variant="contained" color='primary' style={{ marginLeft: 5 }} >Editar</Button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                }) : null}
            </div>


        </div>
    );
};

export default Show;
