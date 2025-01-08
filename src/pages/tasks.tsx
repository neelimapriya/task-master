import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { UseAppDispatch, useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  //   const filter = useAppSelector(selectFilter);
  const dispatch=UseAppDispatch()
  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger onClick={()=>dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
          <TabsTrigger  onClick={()=>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
          <TabsTrigger  onClick={()=>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
          <TabsTrigger  onClick={()=>dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
        </TabsList>
        </Tabs>
        
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}
