import { useState } from "react";
import FormDetails from "./FormDetails";

const App = () => {
  const [school, setSchool] = useState([]);

  const addToSchool = (newStudent) => {
    newStudent.id = school.length + 1
    setSchool([...school, newStudent]);
  };

  return (
    <>
      <h1>test</h1>
      <div>
        <FormDetails sleepy={addToSchool} />
      </div>
      <ul>
        {school.map((form) => {
          return (
            <li key={form.id}>
              <p>{form.name}</p>
              <p>{form.age}</p>
              <p>{form.height}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
