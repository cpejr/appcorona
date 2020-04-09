import React from 'react'
import OngContainer from '../../components/OngContainer'

export default function ONG(props){
    const ong = props.location.state.ong
    return (
        <div style={{'background-color': '#ffcf4f'}}>
            <OngContainer ong={ong}/>
        </div>
    )
}