import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonButton, IonIcon } from '@ionic/react';
import { trashOutline, saveOutline } from 'ionicons/icons';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  // Load todos from local storage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          text: newTodoText,
          completed: false
        }
      ]);
      setNewTodoText('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/home" /> {/* Back button */}
          </IonButtons>
          <IonTitle>To Do List</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={saveTodos}>
              <IonIcon icon={saveOutline} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => toggleTodo(todo.id)} />
              <IonLabel>{todo.text}</IonLabel>
              <IonButton fill="clear" onClick={() => deleteTodo(todo.id)}>
                <IonIcon icon={trashOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            placeholder="Enter a task"
            value={newTodoText}
            onIonChange={(e) => setNewTodoText(e.detail.value!)}
          />
          <IonButton onClick={addTodo}>Add Task</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
