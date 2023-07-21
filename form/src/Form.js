import React from 'react';

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: ""
        }
    )

    function handlerChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.value]: event.target.name
            }
        })
    }

    return (
        <form>
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

        </form>
    )
}