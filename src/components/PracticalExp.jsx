import { useState } from "react"
import Input from "./Input";


export default function PracticalExp() {
  const [readOnly, setReadOnly] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [jobResp, setJobResp] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [untilDate, setUntilDate] = useState('');

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
          <label>Company Name: </label>
          <p>{companyName}</p>
        </div>
        <div className="detail">
          <label>Position Title: </label>
          <p>{positionTitle}</p>
        </div>
        <div className="detail">
          <label>Job Responsibilities: </label>
          <p>{jobResp}</p>
        </div>
        <div className="detail">
          <label>From: </label>
          <p>{fromDate}</p>
        </div>
        <div className="detail">
          <label>Until: </label>
          <p>{untilDate}</p>
        </div>
        <button 
          type="button" 
          className="edit" 
          onClick={ () => handleClick(false) }
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
          label={'Company Name: '}
          type={'text'}
          value={companyName}
          onChange={e => { handleChange(setCompanyName, e) }}
        ></Input>
        <Input
          label={'Position Title: '}
          type={'text'}
          value={positionTitle}
          onChange={e => { handleChange(setPositionTitle, e) }}
        ></Input>
        <Input
          label={'Job Responsibilities: '}
          type={'text'}
          value={jobResp}
          onChange={e => { handleChange(setJobResp, e) }}
        ></Input>
        <Input
          label={'From: '}
          type={'date'}
          value={fromDate}
          onChange={e => { handleChange(setFromDate, e) }}
        ></Input>
        <Input
          label={'Until: '}
          type={'date'}
          value={untilDate}
          onChange={e => { handleChange(setUntilDate, e) }}
        ></Input>
        <button
          type="button" 
          className="submit" 
          onClick={ () => { handleClick(true) } }
        >
          Submit
        </button>
      </form>
    )
  }
}