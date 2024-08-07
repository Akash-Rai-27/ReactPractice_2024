import React from 'react'

function DeleteDialog({message,onDialog}) {
  return (
    <div style={{
        position:"fixed",
        top:"0",
        left:"0",
        right:"0",
        bottom:"0",
        backgroundColor:"rgba(0,0,0,0,0.5)"
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent : "center",
            position: "absolute",
            top:"50%",
            left:"50%",
            transform: "translate(-50%,-50%)",
            background:"green",
            padding:"50px"
        }}>

        <h3>{message}</h3>
        <div>
            <button onClick={() => onDialog(true)}>Yes</button>
            <button onClick={() => onDialog(false)}>No</button>
        </div>
        </div>
    </div>
  )
}

export default DeleteDialog