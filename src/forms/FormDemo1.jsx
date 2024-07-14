import React, { useState } from 'react'

export const FormDemo1 = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [gender, setGender] = useState("")
    const [skills, setskills] = useState([])
    const [country, setcountry] = useState("")

    const nameHandler = (e)=>{
        //console.log(e)
        console.log(e.target.value)
        setname(e.target.value)
    }
    const submitHandler = ()=>{
        alert("Name = "+name + " " + "Email = "+email + " \n" + "Gender = "+gender + " "+ "Skills = "+skills + " "+
            "country =" + country 

        )

    }
  return (
    <div>
        <h1>FORM DEMO 1</h1>
        <div>
            <input onChange={(e)=>{nameHandler(e)}} type='text' placeholder='enter name'></input>
            <span>{name}</span>
        </div>
        <div>
            <input onChange={(e)=>setemail(e.target.value)} type='text' placeholder='enter email'></input>
            <span>{email}</span>
        </div>
        <div>
            <label>GENDER</label>
            MALE <input type='radio' value="male" name="gender" onChange={(e)=>{setGender(e.target.value)}}></input>
            FEMALE <input type='radio' value="female" name="gender" onChange={(e)=>{setGender(e.target.value)}}></input>
        </div>
        <div>
            <label>SKILLS</label>
            HTML <input type='checkbox' value="html" onChange={(e)=>{setskills([...skills, e.target.value])}}></input>
            CSS <input type='checkbox' value="css" onChange={(e)=>{setskills([...skills, e.target.value])}}></input>
            JS <input type='checkbox' value="js" onChange={(e)=>{setskills([...skills, e.target.value])}}></input>
        </div>
        <div>
            <label>Country</label>
            <select onChange={(e)=>setcountry(e.target.value)}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select>
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>submit</button>
        </div>
    </div>
  )
}
