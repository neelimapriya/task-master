import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { ITask } from "@/types";
import { RootState } from "@/redux/store";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "hjsdbfjshf",
      title: "sjfh",
      description: "jjjjjsbdja",
      dueDate: "23 32424",
      isCompleted: false,
      priority: "High",
      assignedTo: null,
    },
  ],
  filter: "high",
};
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority"|"assignedTo">;
const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
   
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id == action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority == "Low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority == "Medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority == "High");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.tasks;
};
export const { addTask, toggleCompletedState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
