export type TaksCategory = 'work' | 'personal' | 'study';
export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaksCategory;
  status: TaskStatus;
  deadline: string;
}

export interface TaskList {
  [key: string]: Task[];
}

export interface TaskState {
  tasks: TaskList;
}

export interface TaskAction {
  type: string;
  payload: Task;
}

export interface TaskContext {
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
}

