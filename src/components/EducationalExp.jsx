import { useState } from "react"
import EditButton from "./EditButton";

function SchoolNameInput({ name }) {
  const [schoolName, setSchoolName] = useState(name);

  return (
    <>

    </>
  )
}

function TitleInput({ title }) {
  const [edTitle, setEdTitle] = useState(title);

  return (
    <>

    </>
  )
}

function StudyDateInput({ date }) {
  const [studyDate, setStudyDate] = useState(date);

  return (
    <>

    </>
  )
}


export default function EducationalExp(props) {
  return (
    <>
      <SchoolNameInput></SchoolNameInput>
      <TitleInput></TitleInput>
      <StudyDateInput></StudyDateInput>
      <EditButton></EditButton>
    </>
  )  
}