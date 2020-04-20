import React, { useState, useEffect } from 'react'
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

export default function CategContainer({ categNames, onChange }) {

    const [state, setState] = useState({});
    console.log(categNames);

    useEffect(() => {
        let newState = {};
        for (let i = 0; i < categNames.length; i++) {
            newState[categNames[i]] = false;
        }
        setState(newState);
    }, [categNames])

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    onChange(state);

    return (
        <FormGroup row>
            {Object.keys(state).map((name) => {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state[name]}
                                onChange={handleChange}
                                name={name}
                                color="primary"
                            />
                        }
                        label={name}
                    />
                )
            })
            }
        </FormGroup>
    )
}