// @flow

type StateProps = {
  +id: number,
  +text: string,
  +completed: boolean
}

type ActionProps = {
  +type: string,
  +id: number,
  +text: string
}

const todos = (state: Array<StateProps> = [], action: ActionProps) : Array<StateProps> => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
     case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
    default:
      return state
  }
};

export default todos
