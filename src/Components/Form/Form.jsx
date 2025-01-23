import React, {useState, useEffect} from 'react'
import fstyle from './Form.module.css'
function Form() {
    const [color, setColor] = useState('')
    const [input, setInput] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [gender, setGender] = useState('')
    const [url, setUrl] = useState('')

    useEffect(() => {
        setColor('red')
    }, [input])

    function fname(event) {
        setfirstName(event.target.value)
    }
    function lname(event) {
        setLastName(event.target.value)
    }
    function femail(event) {
        setEmail(event.target.value)
    }
    function fcontact(event) {
        setContact(event.target.value)
    }
    function fgender(event) {
        setGender(event.target.value)
    }
    function furl(event) {
        setUrl(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setInput(<>
            <p><b>First Name:</b> {firstName}</p>
            <p><b>Last Name:</b> {lastName}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Contact:</b> {contact}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Url:</b> {url}</p>
            
        </>)
        if(firstName == "" ||
            lastName == "" ||
            email == "" ||
            contact == "" ||
            gender == "" ||
            url == ""
        ) {
            setInput(<p style={{color}} className={fstyle.note}>All sections required. Please fill all inputs</p>)
        }  
    }
    
    function handleReset(event) {
        event.preventDefault()
        setfirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setGender('');
        setUrl('');
        setInput('')
    }

        
    return (
        <>
        <div className={fstyle.bcont}>
            <div className={fstyle.display}>{input}</div>
            <div className={fstyle.fcont}>
                <h2 className={fstyle.heading}>Form in React</h2>
                <form action="get" className={fstyle.form} >
                    <label htmlFor="firtName">First Name</label>
                    <input type="text" onChange={fname} value={firstName} name="firstName" id="firstName"/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={lname} value={lastName} name="lastName" id="lastName" />

                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={femail} value={email} name="email" id="email" />

                    <label htmlFor="contact">Contact</label>
                    <input type="tel" onChange={fcontact} value={contact} name="contact" id="contact" />

                    <label htmlFor="">Gender</label>

                    <div className={fstyle.gcont}>
                        <label htmlFor="male">Male
                            <input type="radio" onChange={fgender} value='male' name="gender" id="male" />
                        </label>
                        
                        <label htmlFor="female">Female
                            <input type="radio" onChange={fgender} value='female' name="gender" id="female" />
                        </label>
                        <label htmlFor="other">Other
                            <input type="radio" onChange={fgender} value='other' name='gender' id="other" />
                        </label>
                    </div>

                    <label htmlFor="url">Enter URL</label>
                    <input type="url" onChange={furl} value={url} name="url" id="url" />

                    <div className={fstyle.btncont}>
                        <button onClick={handleReset}>Reset</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <hr />
        </>
        
    )
}
export default Form