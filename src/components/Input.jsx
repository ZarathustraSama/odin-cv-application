/* eslint-disable react/prop-types */

export default function Input({ label, type, value, onChange }) {

  return (
    <>
      <label>
        {label}
        {'  '}
        <input 
          type={type}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  )
}