import LoginButton from "../login";
import LogoutButton from "../logout";
import Profile from "../profile";

function Sidebar() {
    return (
        <aside>
            <nav className="flex flex-col gap-3 h-full">
                <ul className="h-full">
                    <li><a href="#home">Home</a></li>
                </ul>
                <div className="">
                    <Profile></Profile>
                    <LoginButton></LoginButton>
                    <LogoutButton></LogoutButton>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;