import axios from 'axios'
import { useForm } from 'react-hook-form';
import React from 'react'
import{Link} from 'react-router-dom'


export default function Sensor(){
    const {register, handleSubmit, formState: { errors }} = useForm();
  
    const onSubmit = (data)=>{
        axios.post('http://localhost:8000/sensor',data).then(res=>{
            alert('Added')
        }).catch(err=>{
            alert('Error')
        })
        
    }
    return (
        <div className="container">
            <h2>Add a new Sensor</h2> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Sensor Id</label>
                    <input type="number" className="form-control" placeholder="1" {...register('sensor_id', { required: true})}/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                    {errors.sensor_id && <small className='text-danger'><strong>Sensor ID is required</strong></small>}
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Model</label>
                    <input type="string" className="form-control" placeholder="Sensor 1" {...register('model', { required: true })}/>
                    {errors.sensor_id && <small className='text-danger'><strong>Model is required</strong></small>}
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Payload</label>
                    <input type="string" className="form-control" placeholder="akjdhf" {...register('payload', { required: true })}/>
                    {errors.sensor_id && <small className='text-danger'><strong>Payload is required</strong></small>}
                </div>  
                <br/>           
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/'><button style={{marginLeft: '30px'}} className="btn btn-danger">Cancel</button></Link>
           </form>           
        </div>
    )
}

