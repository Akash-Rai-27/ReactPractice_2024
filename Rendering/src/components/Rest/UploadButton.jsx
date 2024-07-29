import React from 'react'
import Button from './Button'

function UploadButton() {
    const handleUploadClick = ()=>{
        alert("Uploading");
    }

  return (
    <Button onClick={handleUploadClick}>
        Upload Image
    </Button>
  )
}

export default UploadButton