import useTodo from "../hooks/useTodo";
import Button from "./Button";
import InputRadio from "./InputRadio";
import InputText from "./InputText";
import ContainerRadio from "./ContainerRadio";
import toast, { Toaster } from "react-hot-toast";

const ModalForm = ({ submit, setTrigger }) => {
  const [todo, handleChange] = useTodo({
    name: "",
    priority: "",
    category: "",
    done: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name.trim()) {
      e.target[0].focus();
      return toast.error("Agrega el nombre!", {
        position: "bottom-center",
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
      });
    }
    if (!todo.priority.trim()) {
      return toast.error("Agrega la prioridad!", {
        position: "bottom-center",
      });
    }
    if (!todo.category.trim()) {
      return toast.error("Agrega la categoria!", {
        position: "bottom-center",
      });
    }
    toast.success("Todo successfully created!");
    setTimeout(() => {
      submit(todo);
      setTrigger(false);
    }, 1000);
  };

  const styles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <form style={styles} onSubmit={handleSubmit}>
      <Toaster />
      <InputText
        name="name"
        placeholder="Nombre de la tarea"
        value={todo.name}
        onChange={handleChange}
      />
      <ContainerRadio label={"Priority"}>
        <InputRadio
          value="Low"
          handleChange={handleChange}
          name="priority"
          checked={todo.priority === "Low"}
        />
        <InputRadio
          handleChange={handleChange}
          name="priority"
          value="Medium"
          checked={todo.priority === "Medium"}
        />
        <InputRadio
          handleChange={handleChange}
          name="priority"
          value="High"
          checked={todo.priority === "High"}
        />
      </ContainerRadio>
      <ContainerRadio label={"Category"}>
        <InputRadio
          handleChange={handleChange}
          name="category"
          value="Work"
          checked={todo.category === "Work"}
        />
        <InputRadio
          handleChange={handleChange}
          name="category"
          value="Family"
          checked={todo.category === "Family"}
        />
        <InputRadio
          handleChange={handleChange}
          name="category"
          value="School"
          checked={todo.category === "School"}
        />
      </ContainerRadio>
      <Button>Guardar</Button>
    </form>
  );
};

export default ModalForm;
