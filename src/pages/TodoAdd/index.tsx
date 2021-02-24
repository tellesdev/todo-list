import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite'
import TodoStore from '../../stores/TodoStore'
import { v4 } from 'uuid'

const TodoAdd: React.FC = () => {

  const [title, setTitle] = useState('')
  const todoStore = useContext(TodoStore)
  const {addTodo, info} = todoStore



  return (
    <>
    <div className="alert alert-dark mt-4">
      <div className="d-inline col-4">
        Total de tarefas: &nbsp;
        <span className="badge badge-info">{info.total}</span>
      </div>
      <div className="d-inline col-4">
        Concluídas: &nbsp;
        <span className="badge badge-success">{info.completed}</span>
      </div>
      <div className="d-inline col-4">
        Pendentes: &nbsp;
        <span className="badge badge-warning">{info.notCompleted}</span>
      </div>
    </div>
    <h3>Incluir Tarefa</h3>

    <div className="form-group">
      <input type="text" 
      className="form-control" 
      value={title} 
      placeholder="Título da tarefa..." 
      onChange={e => setTitle(e.target.value)}
      />
    </div>
    <div className="form-group">
     <button  className="btn btn-info" onClick={_ => { addTodo({
       id: v4(), title: title, completed: false,
     })}}>
        Incluir Tarefa
     </button>
    </div>
  </>
    );
}

export default observer(TodoAdd);