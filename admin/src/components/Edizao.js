import { Button, TextField, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnswerService from '../services/AnswerService';
import { useHistory } from 'react-router-dom';

const Edizao = () => {

    const history = useHistory()

    const url = window.location.href

    const novo = url.replace('http://localhost:3001/', "")

    const [element, setElement] = useState({
        id: 0,
        labelE: ''
    })

    const [edit, setEdit] = useState()

    const getEl = async () => {
        const res = await AnswerService.findById(novo)

        setElement({
            ...element,
            labelE: res.data.label
        })

    }

    const handleChange = (e) => {
        setElement({
            ...element,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        getEl();
    }, []);

    const sendE = async () => {
        const res = await AnswerService.editAnswer(novo, {label: element.labelE})

        history.push('/puta')
    }


    return (
        <div>
            <Toolbar />
            <form>
                <TextField
                    label="edicion"
                    margin="normal"
                    variant="filled"
                    name="labelE"
                    value={element.labelE}
                    onChange={handleChange}
                />
            </form>
            <Button variant="contained" color='primary' onClick={sendE}>Enviar</Button>
        </div>
    )
}

export default Edizao