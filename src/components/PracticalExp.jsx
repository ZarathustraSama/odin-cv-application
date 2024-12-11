import { useState } from "react"
import EditButton from "./EditButton";

function CompanyNameInput({ name }) {
  const [companyName, setCompanyName] = useState(name);

  return (
    <>

    </>
  )
}

function PositionTitleInput({ title }) {
  const [positionTitle, setPositionTitle] = useState(title);

  return (
    <>

    </>
  )
}

function JobResponsibilitiesInput({ description }) {
  const [respDescription, setRespDescription] = useState(description);

  return (
    <>

    </>
  )
}

function FromUntilDatesInput({ from, until }) {
  const [fromDate, setFromDate] = useState(from);
  const [untilDate, setUntilDate] = useState(until);

  return (
    <>

    </>
  )
}

export default function PracticalExp(props) {
  return (
    <>
      <CompanyNameInput></CompanyNameInput>
      <PositionTitleInput></PositionTitleInput>
      <JobResponsibilitiesInput></JobResponsibilitiesInput>
      <FromUntilDatesInput></FromUntilDatesInput>
      <EditButton></EditButton>
    </>
  )
}