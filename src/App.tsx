import React, { useState } from 'react';
import { Button, Typography, TextField, Checkbox, FormControlLabel } from '@material-ui/core';

export default function App () {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (todo) {
      setTodoList([todo, ...todoList]);
      setTodo("");
    }
  };

  return (
    <div style={{textAlign: "center", marginTop: 15}}>
      <Typography variant="h1" component="h2" gutterBottom>TodoApp</Typography>

      <form onSubmit={handleSubmit}>
      <TextField label="Standard" type="text" value={todo} onChange={text => setTodo(text.target.value)}/>
      </form>

      <br/>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
      Submit
      </Button>

      <br/>

      <div style={{marginTop: 16}}>
      {todoList.map(todo => (
        <div style={{marginTop: 4}}>
        <FormControlLabel
        control= {<Checkbox />}
        label={todo}
        />
        </div>
      ))}
      </div>

    </div>
  );
}
