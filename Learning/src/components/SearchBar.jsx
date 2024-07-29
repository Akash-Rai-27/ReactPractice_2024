import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import { IconSearch } from '@tabler/icons-react';
import dataFetch from './data.json'
import { IconSquareRoundedX } from '@tabler/icons-react';


function SearchBar() {
    const[data,setData] = useState([])

    const [filterData, setFilterData] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const handleFilter =(event)=>{
        // event.stopPropogation();
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value)=>{
            return(
                value.name.toLowerCase().includes(searchWord.toLowerCase())
            )
        });
        if(searchWord === ""){
            setFilterData([]);
        } else{
            setFilterData(newFilter)
        }

    }

    const clearInput = ()=>{
        setFilterData([]);
        setWordEntered("");

    };

    useEffect(()=>{
        // console.log(dataFetch)
        setData(dataFetch)
        // console.log(data)
    },[])


  return (
    <section className='font-mono flex flex-col'>
        <div>
            <div className='flex flex-row  bg-blue-400 items-center justify-center rounded-lg w-full min-w-96'>
                <input 
                    type='text' 
                    placeholder='Enter a Fruit Name...' 
                    value={wordEntered}
                    onChange={handleFilter}
                    className='p-4 bg-gray-100 rounded-md w-full text-blue-600 text-lg'
                />
                <div className='px-4'>
                    { filterData.length === 0 ? <IconSearch stroke={2}  height={50} width={40} className=' cursor-pointer' /> : <IconSquareRoundedX stroke={2} height={50} width={40} className='cursor-pointer' onClick={clearInput}/>}
                </div>
            </div>

        {
            filterData.length != 0 && 
            <div className=' flex flex-row flex-wrap p-4 justify-evenly items-center'>
                {
                    filterData?.map((item,index)=>(
                    <div key={item.id} className='border border-white px-2 py-2 m-2 rounded-md min-w-60 '>
                        <div className='bg-cyan-800 flex flex-col px-2 py-2 rounded-t-md items-start'>
                            <h2 className='font-semibold'>Name: {item.name}</h2>
                            <h2>Family: {item.family}</h2>
                            <h2>Genus: {item.genus}</h2>
                            <h2>order: {item.order}</h2>
                        </div>
                        <div className='bg-teal-800 flex flex-col p-2 rounded-b-md items-start mt-2 '>
                                <h2 className=''>Calories: {item.nutritions.calories}</h2>
                                <h2>Carbohydrates: {item.nutritions.carbohydrates}</h2>
                                <h2>Fat: {item.nutritions.fat}</h2>
                                <h2>Protein: {item.nutritions.protein}</h2>
                                <h2>Sugar: {item.nutritions.sugar}</h2>
                            </div>
                    </div>
                ))
                
                }
            </div>
        }
        
        </div>
    </section>
  )
}

export default SearchBar;