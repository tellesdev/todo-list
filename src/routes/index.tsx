import React from 'react';
import { Switch, Route} from 'react-router-dom';
import TodoAdd from '../pages/TodoAdd';
import TodoList from '../pages/TodoList';


const Routes: React.FC = () => {
  return (

    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route exact path="/Add" component={TodoAdd}/>
    </Switch>
  )
}

export default Routes;