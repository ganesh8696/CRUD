import { useRef, useState } from "react";
import styles from "./styles.module.css";

export const Crud = () => {
  const list = [
    {
      id: 1,
      name: "ganesh",
      age: "26",
    },
    {
      id: 2,
      name: "vasanth",
      age: "26",
    },
  ];
  //////////////////////////////////////////////////////////////////////
  const [value, setValue] = useState(list);
  const [edit, setEdit] = useState(-1);
  const nameRef = useRef();
  const ageRef = useRef();
  //////////////////////////////////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;
    const newList = [
      {
        id: 3,
        name,
        age,
      },
    ];
    setValue((i) => i.concat(newList));
    nameRef.current.value = "";
    ageRef.current.value = "";
  };
  //////////////////////////////////////////////////////////////////////
  const handleDelete = (id) => {
    const deleteList = value.filter((li) => li.id !== id);
    setValue(deleteList);
  };
  //////////////////////////////////////////////////////////////////////
  const handleEdit = (id) => {
    setEdit(id);
  };
  //////////////////////////////////////////////////////////////////////
  const handleUpdated = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;
    const newName = value.map((li) =>
      li.id === edit ? { ...li, name: name, age: age } : li
    );
    setValue(newName);
    setEdit(-1);
  };
  //////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.input}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input1}>
                <label style={{ width: "20%", color: "white" }}>Name :</label>
                <input
                  style={{ width: "80%", padding: "5px 30px" }}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  ref={nameRef}
                />
              </div>
              <div className={styles.input1}>
                <label style={{ width: "20%", color: "white" }}>Age :</label>
                <input
                  style={{
                    width: "80%",
                    marginTop: "20px",
                    marginBottom: "20px",
                    padding: "5px 30px",
                  }}
                  type="text"
                  name="age"
                  required
                  placeholder="Enter your age"
                  ref={ageRef}
                />
              </div>
              <button type="submit" className={styles.button}>
                Add
              </button>
            </form>
          </div>
          <form className={styles.form2} onSubmit={handleUpdated}>
            <table className={styles.table}>
              <h1>Entered Data</h1>
              {value.map((i) =>
                edit === i.id ? (
                  <EditList current={i} value={value} setValue={setValue} />
                ) : (
                  <tr className={styles.value}>
                    <td
                      style={{
                        padding: "5px",
                        fontSize: "20px",
                      }}
                    >
                      YourName: {i.name}
                    </td>
                    <td
                      style={{
                        padding: "5px",
                        fontSize: "20px",
                      }}
                    >
                      YourAge: {i.age}
                    </td>
                    <td>
                      <button
                        className={styles.button1}
                        onClick={() => handleEdit(i.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className={styles.button1}
                        onClick={() => handleDelete(i.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </table>
          </form>
        </div>
      </div>
    </>
  );
};
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function EditList({ current, value, setValue }) {
  const handleUpdatedName = (e) => {
    const name = e.target.value;
    const newName = value.map((li) =>
      li.id === current.id ? { ...li, name: name } : li
    );
    setValue(newName);
  };
  const handleUpdatedAge = (e) => {
    const age = e.target.value;
    const newAge = value.map((li) =>
      li.id === current.id ? { ...li, age: age } : li
    );
    setValue(newAge);
  };

  return (
    <tr className={styles.value2}>
      <td>
        <input
          style={{ width: "75%", padding: "5px 30px" }}
          type="text"
          onChange={handleUpdatedName}
          name="name"
          required
          placeholder="Update your name"
          value={current.name}
        />
      </td>
      <td>
        <input
          style={{ width: "75%", padding: "5px 30px" }}
          type="number"
          name="age"
          required
          placeholder="Update your age"
          onChange={handleUpdatedAge}
          value={current.age}
        />
      </td>
      <td>
        <button className={styles.button1} type="submit">
          updated
        </button>
      </td>
    </tr>
  );
}
