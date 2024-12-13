import { useState } from "react"
import Input from "./Input";


export default function GeneralInfo() {
  const [readOnly, setReadOnly] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleChange(setFunction, e) {
    setFunction(e.target.value);
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
          onChange={ e => { handleChange(setFirstName, e) }}
        ></Input>
        <Input
          label={'Last Name:'}
          type={'text'}
          value={lastName}
          onChange={ e => { handleChange(setLastName, e) }}
        ></Input>
        <Input
          label={'Email:'}
          type={'email'}
          value={email}
          onChange={ e => { handleChange(setEmail, e) }}
        ></Input>
        <Input
          label={'Phone:'}
          type={'tel'}
          value={phone}
          onChange={ e => { handleChange(setPhone, e) }}
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