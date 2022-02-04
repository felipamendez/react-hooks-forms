import Form from "./Form"

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value)
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value)
    }
   
      return (
       <>
        <Form
          firstName={firstName}
          lastName={lastName}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
       </>
      );
    }
    export default ParentComponent