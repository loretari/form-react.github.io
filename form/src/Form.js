import React from 'react';

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )



    function handlerChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
               [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        //submitToApi(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type= "text"
                placeholder= "First Name"
                onChange= {handlerChange}
                name= "firstName"
                value={formData.firstName}
                />
            <input
                type= "text"
                placeholder= "Last Name"
                onChange= {handlerChange}
                name= "lastName"
                value={formData.lastName}
            />
            <input
                type= "email"
                placeholder= "Email"
                onChange= {handlerChange}
                name= "email"
                value={formData.email}
            />

            <textarea
                value= {formData.comments}
                placeholder = "Comments"
                onChange = {handlerChange}
                name= "comments"
      />
            <input
                type= "checkbox"
                id= "isFriendly"
                checked={formData.isFriendly}
                onChange={handlerChange}
                name= "isFriendly"
            />
            <label htmlFor= "isFriendly">Is Friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                type= "radio"
                id= "unemployed"
                name= "employment"
                value= "unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handlerChange}
                />
                <label htmlFor= "unemployed">Unemployed</label>
                <br/>

                <input
                    type= "radio"
                    id= "part-time"
                    name= "employment"
                    value= "part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handlerChange}
                />
                <label htmlFor= "part-time">Part-time</label>
                <br/>

                <input
                    type= "radio"
                    id= "full-time"
                    name= "employment"
                    value= "full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handlerChange}
                />
                <label htmlFor= "full-time">Full-time</label>
                <br/>

            </fieldset>
            <br/>
            <select
                id= "favColor"
                value= {formData.favColor}
                onChange={handlerChange}
                name= "favColor"
            >
              <option value= "red">Red</option>
              <option value= "orange">Orange</option>
              <option value= "yellow">Yellow</option>
              <option value= "green">Green</option>
              <option value= "blue">Blue</option>
              <option value= "indigo">Indigo</option>
              <option value= "violet">Violet</option>

            </select>
             <br/>
             <br/>
             <button>Submit</button>
        </form>
    )
}