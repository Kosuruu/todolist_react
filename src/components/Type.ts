interface Todo {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  }
  
  interface TodoFormProps {
    addTodo: (todo: string) => void;
  }
  
  interface EditTodoFormProps {
    editTodo: (task: string, id: string) => void;
    task: Todo;
  }
  
  interface TodoProps {
    task: Todo;
    deleteTodo: (id: string) => void;
    editTodo: (id: string) => void;
    toggleComplete: (id: string) => void;
  }
  