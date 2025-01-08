import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { ITask } from "@/types";
import { RootState } from "@/redux/store";


interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium";
}

const initialState: InitialState = {
  tasks: [{
    id: "hjsdbfjshf",
  title: "sjfh",
  description: "jjjjjsbdja",
  dueDate: "23 32424",
  isCompleted: false,
  priority: "High"
  }],
  filter: "all",
};
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.tasks;
};
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
