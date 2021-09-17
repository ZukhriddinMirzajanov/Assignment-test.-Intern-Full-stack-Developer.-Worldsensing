import{Link} from 'react-router-dom'

// Level 2 is done
const Navbar = ()=>{
    return(
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className=" container collapse navbar-collapse">
            <Link to='/'><a className="navbar-brand" href="#">Sensors</a></Link>
            <Link to='/add_new_sensor'><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Sensor</button></Link>
            
        </div>
    </nav>
    )
}

export default Navbar