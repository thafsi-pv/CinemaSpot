import { useNavigate } from 'react-router-dom';
import './Error.css'

const Error = () => {
    const navigate=useNavigate()
  return (
    <div className="error-container">
      Error page
      <p onClick={()=>navigate("/home")}>goto home</p>
    </div>
  );
};

export default Error;
