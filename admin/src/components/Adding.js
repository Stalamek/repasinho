import { Button, TextField, Toolbar } from '@mui/material';
import { textAlign } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AnswerService from '../services/AnswerService';

const inputs = [
    {
        id: 1,
        name: 'label',
        type: 'text',
        placeholder: 'nombre',
        error: ''
    },
    {
        id: 2,
        name: 'password',
        type: 'text',
        placeholder: 'contrasenia',
        error: ''
    }
]

const Adding = () => {

    const history = useHistory()

    const [errores, setErrores] = useState({
        label: { value: 'write something', error: false },
        password: { value: 'write something', error: false }
    })


    const [val, setVal] = useState({
        label: "",
        password: "",
    })

    // const handleA = (e) => {
    //     setAgregar({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleC = (e) => {

    //     setContra(e.target.value)
    // }

    const handler = (e) => {
        setVal({
            ...val,
            [e.target.name]: e.target.value
        })
    }



    const agregation = async () => {

        const eTemp = {...errores}

        for (const v in val) {
            if (val[v] === "") {
               eTemp[v].error = true;

                // setErrores({
                //     ...errores,
                //     errores[v]: {
                //         error: true
                //     }
                // })
                
            } else {
                eTemp[v] = {...errores[v], error: false}
            }
        }
        setErrores(eTemp)
        console.log(errores, 'este es el ultimo')

        if(errores.label.error && errores.password.error === false) {
            console.log('se envia?')
            envio()
        }
    }

    const envio = async () => {

        const res = await AnswerService.create(val)


        history.push('/puta')
    }



    return (
        <div>
            <Toolbar />
            <div>
                <form>
                    {inputs.map((input) => (
                        <TextField
                            error={errores[input.name].error}
                            label={input.placeholder}
                            margin="normal"
                            variant="filled"
                            name={input.name}
                            value={val[input.name]}
                            onChange={handler}
                            helperText={!errores[input.name].error ? "" : errores[input.name].value}
                        />
                    ))}
                </form>
            </div>
            <Button variant="contained" color='primary' onClick={agregation}>Enviar</Button>
        </div>
    );
};

export default Adding;
