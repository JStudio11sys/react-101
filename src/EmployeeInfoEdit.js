import { useEffect, useState } from "react";

function EmployeeInfoEdit({ data, onSaveHandler }) {

    const [employeeData, setEmployeeData] = useState(data);

    const onChangeHandler = (e) => {
        let fieldName = e.target.name;
        let newData = { ...employeeData, [fieldName]: e.target.value };
        setEmployeeData(newData);
    }

    useEffect(() => {
        setEmployeeData(data);
    }, [data]);

    const onClickSaveHandler = () => {
        onSaveHandler(employeeData);
    }

    return (
        <>
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <input type="hidden" name="id" value={employeeData.id} />
                        <div>
                            <label>FirstName:  </label>
                            <input type="text" name="firstName" value={employeeData.firstName} className="form-control"
                                onChange={onChangeHandler} />
                        </div>
                        <div>
                            <label>LastName:  </label>
                            <input type="text" name="lastName" value={employeeData.lastName} className="form-control"
                                onChange={onChangeHandler} />
                        </div>
                        <div>
                            <label>Job Title:  </label>
                            <input type="text" name="jobTitle" value={employeeData.jobTitle} className="form-control"
                                onChange={onChangeHandler} />
                        </div>
                        <div>
                            <label>Age: </label>
                            <input type="text" name="age" value={employeeData.age} className="form-control"
                                onChange={onChangeHandler} />
                        </div>
                        <div>
                            <label>Gender:  </label>
                            <input type="text" name="gender" value={employeeData.gender} className="form-control"
                                onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-danger me-3" data-bs-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary" onClick={onClickSaveHandler}>Save</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default EmployeeInfoEdit;