import { Button, TextField, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AnswerService from '../services/AnswerService';

const Adding = () => {

    const history = useHistory()

    const [agregar, setAgregar] = useState({
        label: ''
    })

    const handleA = (e) => {
        setAgregar({
            [e.target.name]: e.target.value
        })
    }

    const agregation = async () => {
        const res = await AnswerService.create(agregar)
        
        // window.location.href = 'http://localhost:3001/puta'

        history.push('/puta')

    }

    return (
        <div>
            <Toolbar />
            <div>
                <form>
                    <TextField
                        label="nombre"
                        margin="normal"
                        variant="filled"
                        name="label"
                        value={agregar.label}
                        onChange={handleA}
                    />
                </form>
            </div>
            <Link path='/puta'>
                <Button variant="contained" color='primary' onClick={agregation}>Enviar</Button>
            </Link>
        </div>
    );
};

export default Adding;
