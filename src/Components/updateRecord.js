import React, { useState, useEffect } from "react";
import Header from "./header";

const UpdateRecord = ({match}) => {

   const [values, setValues] = useState({
        age: 0,
        wheezing: 0,
        allergy: 0,
        coughing: 0,
        fatigue: 0,
        chronicDisease: 0,
        anxiety: 0,
        gender: "",
        smoking: 0,
        peerPressure: 0,
        yellowFingers: 0,
        lungCancer: "",
        chestPain: 0,
        alcoholConsuming: 0,
        swallowingDifficulty: 0,
        shortnessOfBreath: 0
   });
   const [createdDoc, setCreatedDoc] = useState(false);
    
    const {
        age,
        wheezing,
        allergy,
        coughing,
        fatigue,
        chronicDisease,
        anxiety,
        gender,
        smoking,
        peerPressure,
        yellowFingers,
        lungCancer,
        chestPain,
        alcoholConsuming,
        swallowingDifficulty,
        shortnessOfBreath
    } = values;

    const getDocument = (docId) => {
        console.log(docId);
        return fetch(`http://localhost:6039/${docId}`,{
             method: 'GET',
        }).then((response) => {
             return response.json();
             // console.log(response.json());
        }).catch((err)=>console.log("Error Occured"+err));
      }

      const preload = (docId) => {
        getDocument(docId).then((data)=>{
             if(data == null)
             {
                  setValues({...values});
                  console.log("Error in fetching the record to update.!")
             } else {
                  setValues({
                        ...values, 
                        age: data.age,
                        wheezing: data.wheezing,
                        allergy: data.wheezing,
                        coughing: data.coughing,
                        fatigue: data.fatigue,
                        chronicDisease: data.chronicDisease,
                        anxiety: data.anxiety,
                        gender: data.gender,
                        smoking: data.smoking,
                        peerPressure: data.peerPressure,
                        yellowFingers: data.yellowFingers,
                        lungCancer: data.lungCancer,
                        chestPain: data.chestPain,
                        alcoholConsuming:data.alcoholConsuming,
                        swallowingDifficulty:data.swallowingDifficulty,
                        shortnessOfBreath: data.shortnessOfBreath,
                  });
             }
        })
   } 

    useEffect(()=>{
        preload(match.params.docId);
    },[]);

    const updateaRecord = (docId, values) => {
        console.log("DOc: "+docId);
    return fetch(`http://localhost:6039/${docId}`, {
        method: "PUT",
        headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json',
        },
        body: JSON.stringify(values),
   })
        .then((response) => {
            //  console.log(response.json());
             return response.json();
        })
        .catch((err) => console.log("Error in Updating new Record : " + err));
    }

    const handleChange = (name) => (event) => {
        const value = event.target.value;
        // setValues({ ...values, [name]: event.target.value });
        setValues({...values, [name]: value});
        // formData.set(name, value);
   };

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log("Values: " +{values});
        console.log("Updated values: "+JSON.stringify(values));
        setValues({...values});
        // console.log("Values: " +typeof(values.age));
        // console.log("Values: " +typeof(values.maxHR));
        // console.log("Values: " +typeof(values.restingBP));
        updateaRecord(match.params.docId, values).then((data) => {
            if (data.error) {
                // setValues({ ...values, error: data.error, createdProduct: "" });
                console.log("Error Occured, Unable to Update a Record.!");
                setCreatedDoc(false);
            } else {
                setValues({
                    ...values,
                    age: "",
                    wheezing: "",
                    allergy: "",
                    coughing: "",
                    fatigue: "",
                    chronicDisease: "",
                    anxiety:"",
                    gender: "",
                    smoking: "",
                    peerPressure: "",
                    yellowFingers: "",
                    lungCancer: "",
                    chestPain: "",
                    alcoholConsuming: "",
                    swallowingDifficulty: "",
                    shortnessOfBreath: ""
                });
                setCreatedDoc(true);
            }
        });
    };

    const successMessage = () => {
     return (
          <div
               className="alert alert-success mt-3"
               style={{ display: createdDoc ? "" : "none" }}
          >
               <h5>Record Updated Successfully.!</h5>
          </div>
     );
};

    const createDocForm = () => (
        <form>
             <div className="form-group">
                  <span className="">Gender: </span>
                  <input
                       onChange={handleChange("gender")}
                       name="gender"
                       className="form-control"
                       placeholder="M / F"
                       value={gender}
                  />
             </div>

             <div className="form-group">
               <span className="">Age: </span>
                  <input
                       onChange={handleChange("age")}
                       type="number"
                       name="age"
                       className="form-control"
                       placeholder="age"
                       value={age}
                  />
             </div>


             <div className="form-group">
                  <span className="">Smoking: </span>
                  <input
                       onChange={handleChange("smoking")}
                       name="smoking"
                       type="number"
                       className="form-control"
                       placeholder="smoking"
                       value={smoking}
                  />
             </div>
             
             <div className="form-group">
                  <span className="">Yellow Fingers: </span>
                    <input
                       onChange={handleChange("yellowFingers")}
                       name="yellowFingers"
                       type="number"
                       className="form-control"
                       placeholder="yellowFingers"
                       value={yellowFingers}
                  />
             </div>

             <div className="form-group">
                  <span className="">Anxiety: </span>

                  <input
                       onChange={handleChange("anxiety")}
                       name="anxiety"
                       type="number"
                       className="form-control"
                       placeholder="anxiety"
                       value={anxiety}
                  />
             </div>

             <div className="form-group">
             <span className="">Peer Pressure: </span>
                  <input
                       onChange={handleChange("peerPressure")}
                       name="peerPressure"
                       type="number"
                       className="form-control"
                       placeholder="peerPressure"
                       value={peerPressure}
                  />
             </div>

             <div className="form-group">
             <span className="">Chronic Disease: </span>
                  <input
                       onChange={handleChange("chronicDisease")}
                       type="number"
                       name="chronicDisease"
                       className="form-control"
                       placeholder="chronicDisease"
                       value={chronicDisease}
                  />
             </div>

             <div className="form-group">
             <span className="">Fatigue: </span>

                  <input
                       onChange={handleChange("fatigue")}
                       type="number"
                       name="fatigue"
                       className="form-control"
                       placeholder="fatigue"
                       value={fatigue}
                  />
             </div>

             <div className="form-group">
             <span className="">Allergy: </span>

                  <input
                       onChange={handleChange("allergy")}
                       type="number"
                       name="allergy"
                       className="form-control"
                       placeholder="allergy"
                       value={allergy}
                  />
             </div>

             
             <div className="form-group">
             <span className="">Wheezing: </span>

                  <input
                       onChange={handleChange("wheezing")}
                       type="number"
                       name="wheezing"
                       className="form-control"
                       placeholder="wheezing"
                       value={wheezing}
                  />
             </div>

             <div className="form-group">
             <span className="">Alcohol Consuming: </span>

                  <input
                       onChange={handleChange("alcoholConsuming")}
                       name="alcoholConsuming"
                       type="number"
                       className="form-control"
                       placeholder="alcoholConsuming"
                       value={alcoholConsuming}
                  />
             </div>

             <div className="form-group">
             <span className="">Coughing: </span>
                  <input
                       onChange={handleChange("coughing")}
                       type="number"
                       name="coughing"
                       className="form-control"
                       placeholder="coughing"
                       value={coughing}
                  />
             </div>

             <div className="form-group">
             <span className="">Shortness Of Breath: </span>

                  <input
                       onChange={handleChange("shortnessOfBreath")}
                       type="number"
                       name="shortnessOfBreath"
                       className="form-control"
                       placeholder="shortnessOfBreath"
                       value={shortnessOfBreath}
                  />
             </div>

             <div className="form-group">
             <span className="">Swallowing Diffculty: </span>
                  <input
                       onChange={handleChange("swallowingDifficulty")}
                       type="number"
                       name="swallowingDifficulty"
                       className="form-control"
                       placeholder="swallowingDifficulty"
                       value={swallowingDifficulty}
                  />
             </div>

             <div className="form-group">
             <span className="">Chest Pain: </span>

                  <input
                       onChange={handleChange("chestPain")}
                       type="number"
                       name="chestPain"
                       className="form-control"
                       placeholder="chestPain"
                       value={chestPain}
                  />
             </div>

             <div className="form-group">
             <span className="">Lungs Cancer: </span>
                  <input
                       onChange={handleChange("lungCancer")}
                       name="lungCancer"
                       className="form-control"
                       placeholder="lungCancer"
                       value={lungCancer}
                  />
             </div>

             <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-outline-success mb-4"
             >
                  Update Record
             </button>
        </form>
   );

    return (
        <>
            <Header/>
            <div className="container createDoc">
                <div className="col-md-8 offset-md-2">
                    <h3 className="totalRecords1">Update Record</h3>
                    {successMessage()}
                    {createDocForm()}
                    {/* <p>
                        {typeof(values.gender)}
                        {typeof(values.age)}
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default UpdateRecord;