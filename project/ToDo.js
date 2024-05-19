import react from 'react'
const toDo = ({toDo}) => {
    return (<><div className="todo">
    <p>{toDo.id}</p>
    <p>{toDo.todo}</p>
    <p>{toDo.completed}</p></div>
  
    </>  );
}
 
export default toDo;