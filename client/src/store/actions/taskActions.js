import { taskService } from '../../services/taskService';

export function loadTasks() {
  return async dispatch => {
    try {
      const tasks = await taskService.getTasks();
      dispatch({ type: 'GET_TASKS', tasks });
    } catch (err) {
      console.log('err in loadTask', err);

    } 
  };
}
