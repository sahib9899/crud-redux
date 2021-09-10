import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../actions";
import { FormControl, Modal, ModalFooter, Button } from "react-bootstrap";
import { updateData } from "../actions";


const Display = () => {
  const data = useSelector((state) => {
    return state.crudOperation;
  });

  const [edit, setEdit] = useState({});
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const updateUser = (user) => {
      setEdit(user)
      setShow(true)
  };

  const fetchData = () => {
    return data.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.dept}</td>
          <td>{user.email}</td>
          <td>
            <button onClick={() => updateUser(user)}>EDIT</button>&nbsp;&nbsp;
            <button onClick={() => dispatch(deleteData(user.id))}>
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };
  //   console.log(data)
  return (
    <>
      <table className="ui celled table">
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>E-mail</th>
          <th>Operations</th>
        </tr>
        {fetchData()}
      </table>

      {
        <Modal show={show}>
            <Modal.Body>
                <Modal.Header>Name</Modal.Header>
                <FormControl type='text' value={edit.name} onChange={(e)=>{setEdit({...edit, name:e.target.value})}} />
                <Modal.Header>Department</Modal.Header>
                <FormControl type='text' value={edit.dept} onChange={(e)=>{setEdit({...edit, dept:e.target.value})}} />
                <Modal.Header>Email</Modal.Header>
                <FormControl type='text' value={edit.email} onChange={(e)=>{setEdit({...edit, email:e.target.value})}}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{dispatch(updateData(edit));setShow(false)}}>Save changes</Button>
                <Button onClick={()=>{setShow(false);setEdit({})}}>Close</Button>

            </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default Display;
