import Logo from "@/assets/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-3">
      <div className="flex items-center ">
        <Logo />
        <Link to="/">
          <span className="font-bold ml-5 ">Task Master</span>
        </Link>
      </div>

      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle ></ModeToggle>
      </div>
    </nav>
  );
}
