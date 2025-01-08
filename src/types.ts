export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Low" | "Medium";
  assignedTo:string|null
}
export interface IUser {
  id: string;
  name: string;
}
