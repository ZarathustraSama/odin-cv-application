/* eslint-disable react/prop-types */
import { useState } from "react"
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

function NameInput({ first, last }) {
  const [firstName, setFirstName] = useState(first);
  const [lastName, setLastName] = useState(last);


  return (
    <>
      <label>{'First Name: '}</label>
      <input type="text">{firstName}</input>
      {' '}
      <br />
      <label>{'Last Name: '}</label>
      <input type="text">{lastName}</input>
      <br />
    </>
  )
}

function EmailInput({ email }) {
  const [emailAddress, setEmailAddress] = useState(email);

  return (
    <>

    </>
  )
}

function PhoneInput({ number }) {
  const [phoneNumber, setPhoneNumber] = useState(number);

  return (
    <>
      
    </>
  )
}

export default function GeneralInfo(props) {
  return (
    <>
      <NameInput ></NameInput>
      <EditButton></EditButton>
      <EmailInput></EmailInput>
      <EditButton></EditButton>
      <PhoneInput></PhoneInput>
      <EditButton></EditButton>
      <SubmitButton></SubmitButton>
    </>
  )
}