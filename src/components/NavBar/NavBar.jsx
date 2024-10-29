
const NavBar = () => {
    return (
        
        <div>
            <div className="navbar bg-blue-500 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost px-2 lg:hidden">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Restaurant BD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="input w-[140px] md:w[250px] input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <a className="btn ml-2">Search</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;