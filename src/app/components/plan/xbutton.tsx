import { Idata } from '@/app/type/DataType';
import React from 'react';
const getData=async(): Promise<Idata[]> =>{
 const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data= await res.json()
  return data
}
const Xbutton = async() => {
      const data= await getData()
    return (
        <div>
            
        </div>
    );
};

export default Xbutton;