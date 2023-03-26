import { statusFilters } from './constants';
import { combineReducers } from 'redux';

const tasksInitialState = [
  { id: 0, text: 'Field Museum', completed: true },
  { id: 1, text: 'Chokolate', completed: true },
  { id: 2, text: 'Flowers', completed: false },
  { id: 3, text: 'Veuve Clicquot', completed: false },
  { id: 4, text: 'Signature room', completed: false },
  { id: 5, text: 'River walk', completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];
    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = { status: statusFilters.all };

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export const rootReduser = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
