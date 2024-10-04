

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      <p>{todos.map((todo, index) => {
        return {index}>{todo};
      })}</p>
    </>
  );
};

export default Todos;