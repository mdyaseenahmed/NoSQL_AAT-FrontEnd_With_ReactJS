import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './header';

const ListData = () => {

    const [data, setData] = useState([]);
    
    const preload = () => { 
        fetch("http://localhost:6039/all",{
            method: "GET",
        })
        .then(res => res.json())
        .then((response) => {
            setData(response)
            // console.log(response)
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        preload();
    }, [data])

    const rowData = data.map((dataItem, index)=>{
        return (
            <tr key={index} className="text-center tableData">
                    {/* {dataItem.swallowingDifficulty}, */}
                    <td>{dataItem.gender}</td>
                    <td>{dataItem.age}</td>
                    <td>{dataItem.smoking}</td>
                    <td>{dataItem.yellowFingers}</td>
                    <td>{dataItem.anxiety}</td>
                    <td>{dataItem.peerPressure}</td>
                    <td>{dataItem.chronicDisease}</td>
                    <td>{dataItem.fatigue}</td>
                    <td>{dataItem.allergy}</td>
                    <td>{dataItem.wheezing}</td>
                    <td>{dataItem.alcoholConsuming}</td>
                    <td>{dataItem.coughing}</td>
                    <td>{dataItem.shortnessOfBreath}</td>
                    <td>{dataItem.swallowingDifficulty}</td>
                    <td>{dataItem.chestPain}</td>
                    <td>{dataItem.lungCancer}</td>
                    <td><Link to={`/updateRec/${dataItem.id}`}><span className="btn btn-success"><i class="fas fa-edit"></i></span></Link></td>
                    <td><button className="btn btn-danger text-center" onClick={()=>{deleteThisRec(dataItem.id);}}>Delete</button></td>
                </tr>
        );
    })

    const deleteRecord = (recId) => {
        return fetch(`http://localhost:6039/${recId}`,{
            method: 'DELETE',
            headers: {
                Accept: "application/json"
            }
        })
    }

    const deleteThisRec = (recId) => {
        deleteRecord(recId).then((data)=>{
            if(data.err)
            {
                console.log(data.err);
                preload();
            }
            else
            {
                preload();
            }
        })
    }

    return (
        <>
            <Header/>
            <div className="container-fluid table-container">
                <h3 className="totalRecords">Total Records: <span className="text text-danger">{data.length}</span></h3>
                <Table bordered hover className="tableContents">
                    <thead>
                        <tr className="tableHeading">
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Smoking</th>
                            <th>YellowFingers</th>
                            <th>Anxiety</th>
                            <th>PeerPressure</th>
                            <th>ChronicDisease</th>
                            <th>Fatigue</th>
                            <th>Allergy</th>
                            <th>Wheezing</th>
                            <th>AlcoholConsuming</th>
                            <th>Coughing</th>
                            <th>ShortnessOfBreath</th>
                            <th>SwallowingDiffculty</th>
                            <th>ChestPain</th>
                            <th>LungCancer</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        {/* {JSON.stringify(data)} */}
                    <tbody>
                        {rowData}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default ListData;
