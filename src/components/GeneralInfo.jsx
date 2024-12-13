import { useState } from "react"
import Input from "./Input";


export default function GeneralInfo() {
  const [readOnly, setReadOnly] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleClick(read) {
    setReadOnly(read)
  }

  if (readOnly) {
    return (
      <section>
        <div className="detail">
          <label>First Name: </label>
          <p>{firstName}</p>
        </div>
        <div className="detail">
          <label>Last Name: </label>
          <p>{lastName}</p>
        </div>
        <div className="detail">
          <label>Email: </label>
          <p>{email}</p>
        </div>
        <div className="detail">
          <label>Phone: </label>
          <p>{phone}</p>
        </div>
        <button 
          type="button" 
          className="edit" 
          onClick={ () => { handleClick(false) }}
        >
          Edit
        </button>
      </section>
    )
  }
  else {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <Input
          label={'First Name: '}
          type={'text'}
          value={firstName}
          onChange={handleFirstNameChange}
        ></Input>
        <Input
          label={'Last Name:'}
          type={'text'}
          value={lastName}
          onChange={handleLastNameChange}
        ></Input>
        <Input
          label={'Email:'}
          type={'email'}
          value={email}
          onChange={handleEmailChange}
        ></Input>
        <Input
          label={'Phone:'}
          type={'tel'}
          value={phone}
          onChange={handlePhoneChange}
        ></Input>
        <button 
          type="button" 
          className="submit" 
          onClick={ () => { handleClick(true) }}
        >
          Submit
        </button>
      </form>
    )
  }
}