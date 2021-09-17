import axios from 'axios'
import React, {useState, useEffect} from 'react'

// Level 2 is done
export default function Sensor(){
    const [result, setResult] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/sensors').then((res)=>{
            setResult(res.data)
        })
    }, [])

    return (
        <div className="container">
            <h2>All Sensors models</h2>
            <ul className="list-group">
                {result.map((data)=>(
                 <li key={data.sensor_id} className="list-group-item">{data.model}</li>
                ))}
            </ul>
        </div>
    )
}

