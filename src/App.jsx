import GeneralInfo from './components/GeneralInfo';
import EducationalExp from './components/EducationalExp';
import PracticalExp from './components/PracticalExp';
import './App.css';
import './styles/style.css';

function App() {

  return (
    <>
      <h1>CV Application</h1>
      <div className="grid">
        <h2>General Informations</h2>
        <GeneralInfo></GeneralInfo>
        <h2>Educational Experience</h2>
        <EducationalExp></EducationalExp>
        <h2>Practical Experience</h2>
        <PracticalExp></PracticalExp>
      </div>
    </>
  )
}

export default App
