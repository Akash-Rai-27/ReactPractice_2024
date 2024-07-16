import React, { useState,useRef } from 'react'
import DeleteDialog from './DeleteDialog';
function DeleteMain() {
    const data = [
        {
            id: 1,
            name : "IphoneX",
            img: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            name : "TATA",
            img: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            name : "ZONO",
            img: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            name : "ROVER",
            img: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    const isProductRef = useRef();
    const [product, setProduct] = useState(data);
    const [dialog, setDialog] = useState({
        message: '',
        isLoading : false,
    })


    const handleDialog = (message, isLoading)=>{
        setDialog({
            message,
            isLoading,
        })
    }

    const handleDelete = (id) => {
        isProductRef.current = id;
        // setProduct(product.filter((each)=> each.id !== id));
        handleDialog('Are you sure',true)
        
        
    }
    const areUSureDelete = (choose)=>{
            if(choose) {
                setProduct(product.filter((item)=>(item.id !== isProductRef.current)))
            } 
            handleDialog("",false);
            
    }
  return (
    <div>
        <div>
            {product.map((item)=>(
                <div key={item.id} style={{display:"flex", flexDirection: "column", alignItems : "center" }}>
                    <h3>{item.name}</h3>
                    <img style={{objectFit: "cover", width: "100px", height:"100px"}} src={item.img} alt={item.name}/>
                    <button style={{backgroundColor: "red", fontWeight:"bolder", border: "none"}} onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
            ))}
            
           {dialog.isLoading && <DeleteDialog onDialog={areUSureDelete} message={"text"}/>}
        </div>
    </div>
  )
}

export default DeleteMain