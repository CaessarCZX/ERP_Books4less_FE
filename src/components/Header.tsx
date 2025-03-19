import Buscador from "./Buscador";
import Nav from "./Nav";
import '../styles/Header.css'

const Header = () => {
    return (
        <>
            {/* <div classNameName="Header">
                <Nav/>
                <Buscador />
                <a href="./pages/sign-in.html" classNameName="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500">
                  <i classNameName="fa fa-user sm:mr-1"></i>
                  <span classNameName="hidden sm:inline">Sign In</span>
                </a>
            </div> */}

    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main navbar-scroll="true">
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <Nav/>
          <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4">
                <Buscador />
            </div>
            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">           
              <li className="flex items-center">
                <a href="./pages/sign-in.html" className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500">
                  <i className="fa fa-user sm:mr-1"></i>
                  <span className="hidden sm:inline">Sign In</span>
                </a>
              </li>             
            </ul>
          </div>
        </div>
    </nav>
        </>
    )
}

export default Header;