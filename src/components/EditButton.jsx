export default function EditButton({ setFunction, newValue }) {
  function onButtonClick(setFunction, newValue) {
    setFunction(newValue);
  }

  return (
    <>
      <button 
        type="button" 
        className="editBtn"
        onClick={onButtonClick}
      >
      {'Edit'}
      </button>
    </>
  )
}