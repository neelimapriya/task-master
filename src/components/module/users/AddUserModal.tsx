import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userSlice";
import { UseAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


export function AddUserModal() {
  const form = useForm();

  const dispatch = UseAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    dispatch(addUser(data as IUser));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form to add User
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Users</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button className="mt-5" type="submit">
                Add user
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
