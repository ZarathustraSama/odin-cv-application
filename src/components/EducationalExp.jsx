import { useState } from "react"
import Input from "./Input";


export default function EducationalExp() {
  const [readOnly, setReadOnly] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [title, setTitle] = useState('');
  const [studyDate, setStudyDate] = useState('');

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleStudyDateChange(e) {
    setStudyDate(e.target.value);
  }

  function handleClick(read) {
    setReadOnly(read);
  }

  if (readOnly) {
    return (
      <section>
        <div className="detail">
          <label>School Name: </label>
          <p>{schoolName}</p>
        </div>
        <div className="detail">
          <label>Title: </label>
          <p>{title}</p>
        </div>
        <div className="detail">
          <label>Study Date: </label>
          <p>{studyDate}</p>
        </div>
        <button
          type="button"
          className="edit"
          onClick={ () => { handleClick(false) } }
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
          label={'School Name: '}
          type={'text'}
          value={schoolName}
          onChange={handleSchoolNameChange}
        ></Input>
        <Input
          label={'Title: '}
          type={'text'}
          value={title}
          onChange={handleTitleChange}
        ></Input>
        <Input
          label={'Study Date: '}
          type={'date'}
          value={studyDate}
          onChange={handleStudyDateChange}
        ></Input>
        <button 
          className="submit" 
          onClick={ () => { handleClick(true) } }
        >
          Submit
        </button>
      </form>
    )  
  }
}