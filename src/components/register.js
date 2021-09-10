import React,{ useState, useEffect } from 'react';
import shortid from 'shortid';
import { Container, Label, Input, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { insertData } from '../actions';

const Register = () => {

    const [userData, setUserData] = useState({
        name: '',
        dept: '',
        email: ''
    })

  
    const dispatch = useDispatch();
    const userDetails = useSelector((state)=>{return state.crudOperation});
    console.log(userDetails)

    const handleSubmit = (e) => {
        
        dispatch(insertData({...userData,id:shortid.generate()}))
        setUserData(
            {
                name: '',
                dept: '',
                email: ''
            }
        )  
    }


    return (
        <Container>
            <div>
                <Label>Name : </Label>
                <Input type='text' value={userData.name} onChange={(e)=>{setUserData({...userData,name:e.target.value})}}/><br />
                <Label>Department : </Label>
                <Input type='text' value={userData.dept} onChange={(e)=>{setUserData({...userData,dept:e.target.value})}}/><br />
                <Label>Email : </Label>
                <Input type='text' value={userData.email} onChange={(e)=>{setUserData({...userData,email:e.target.value})}}/><br />
                <Button onClick={handleSubmit}> Add data</Button>
            </div>
        </Container>
        
    );
}

export default Register;
