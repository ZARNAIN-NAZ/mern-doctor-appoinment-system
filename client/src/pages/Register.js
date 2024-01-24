import React from "react";
import '../styles/RegisterStyle.css';
import {Form , Input , message} from "antd";
import axios from "axios";
import {Link , useNavigate} from 'react-router-dom'
const Register = () => {
const navigate = useNavigate()
axios.defaults.baseURL = 'http://localhost:3000'; // Adjust the URL based on your server's address


  //   form handler
  const onFinishHandler = async(values) => {
try{
const res = await axios.post('/api/v1/user/register', values)
if(res.data.success) {
  message.success('registered successfully')
  navigate('/login')
}
else{
  message.error(res.data.message)
}
}
catch(error){
console.log(error);
message.error("somethig went wrong")
}

  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="register-form" >
            <h3 className="tect-center">Register Form</h3>
          <Form.Item label='Name' name="name">
            <Input type="text"  required/>
          </Form.Item>
          <Form.Item label='Email' name="email">
            <Input type="email"  required/>
          </Form.Item>
          <Form.Item label='Password' name="password">
            <Input type="password"  required/>
          </Form.Item>
          <Link to='/login' className="m-2">
Already user login here
          </Link>
          <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
    
     

      </div>
    </>
  );
};

export default Register;
