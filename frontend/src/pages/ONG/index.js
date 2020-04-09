import React from 'react'
import OngContainer from '../../components/OngContainer'

export default function ONG(props){
    const ong = props.location.state.ong
    return (
        <div>
            <OngContainer ong={ong}/>
        </div>
    )
}