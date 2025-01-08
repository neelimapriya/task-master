import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/userCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function Users() {
  const users = useAppSelector(selectUsers);

  return (
    <div className="mt-5 ">
      <div className="flex justify-end">
        <AddUserModal></AddUserModal>
      </div>
      <div className="space-x-5 mt-5 grid grid-cols-3 ">
        {users.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
}
