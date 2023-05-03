import { useEffect, useState } from "react";
import EmployeeInfo from "./EmployeeInfo";
import ApiService from "./ApiService";
import EmployeeInfoEdit from "./EmployeeInfoEdit";
import { Modal } from 'react-bootstrap';

function EmployeeList(){
    
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getEmployeeList = () =>{
        ApiService('/employees', null, (data)=>{
            setList(data);
        });

        ApiService('/employees/count/all', null, (data)=>{
            setCount(data.total)
        });
    }

    useEffect(()=>{
        getEmployeeList();
    },[]);

    const [keyword, setKeyword] = useState('');
    const onKeywordChangeHandler = (e) =>{
        setKeyword(e.target.value);
        ApiService('/employees' + e.target.value, null, (data)=>{
            setList(data);
        });
    }

    const [employeeDetails, setEmployeeDetails] = useState({});

    const onEditHandler = (data) =>{
        ApiService('/employees/' + data.id, null, (data)=>{
            setEmployeeDetails(data);
        });
    }

    const onEmployeeSaveHandler = (formData) =>{
        ApiService('/employees/' + formData.id, formData, (data)=>{
            getEmployeeList();
        }, formData.id === 0 ? "POST" : "PUT");
    }

    const onClickAddHandler = () =>{
        setEmployeeDetails({id:0});
    }

    const onDeleteHandler = (formData) =>{
        setEmployeeDetails(formData);
        setConfirmOpen(true);
    }

    const [confirmOpen, setConfirmOpen] = useState(false);

    const doConfirmedDeleteHandler = () =>{
        doCloseConfirmHandler();
        ApiService('/employees/' + employeeDetails.id, employeeDetails, (data)=>{
            console.log(data);
            getEmployeeList();
        }, "DELETE");
    }

    const doCloseConfirmHandler = () =>{
        setConfirmOpen(false);
    }

    return (
        <>
            <h3>Employee List ({count})</h3>
            <button className="btn btn-primary" onClick={onClickAddHandler} data-bs-toggle="modal" data-bs-target="#myPopupWin">Add Student</button>
            <form className="mb-3">
                <div className="row">
                    <div className="col-sm-4">
                    <input className="form-control" name="keyword" value={keyword} onChange={onKeywordChangeHandler} placeholder="Search by Name"/> 
                    </div>
                </div>               
            </form>
            <div className="row">
             {list.map((employeeData) => <EmployeeInfo data={employeeData} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler}/>)}
            </div>

            <div id="myPopupWin" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Employee Info</h4>
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <EmployeeInfoEdit data={employeeDetails} onSaveHandler={onEmployeeSaveHandler}/>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={confirmOpen}>
                <Modal.Header>
                    <Modal.Title>Confirm Delete</Modal.Title>
                    <button type="button" className="btn-close btn-sm" onClick={doCloseConfirmHandler}></button>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="text-center mb-5">Are you sure you want to DELETE this record?</h4>
                    <div className="text-center">
                        <button className="btn btn-primary me-3 px-5" onClick={doCloseConfirmHandler}>No</button>
                        <button className="btn btn-success px-5" onClick={doConfirmedDeleteHandler}>Yes</button>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default EmployeeList;