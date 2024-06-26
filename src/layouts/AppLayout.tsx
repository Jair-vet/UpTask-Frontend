import { Link, Outlet } from "react-router-dom"
import { Logo } from "@/components/Logo"
import NavMenu from "@/components/NavMenu"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const AppLayout = () => {
  return (
    <>
        <header className="bg-gray-800 py-5">
            <div className="max-w-screen-2xl mx-10 flex flex-col md:flex-row justify-between items-center ">
               {/* Logo */}
                <div className="w-52">
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                </div>

                {/* Hamburger Navbar */}
                <NavMenu />
            </div>
        </header>
        
        <section className="max-w-screen-2xl mx-auto mt-10">
            <Outlet />
        </section>

        <footer className="py-5">
            <p className="text-center text-green-500">Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
        </footer>

        <ToastContainer 
            pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
    </>
  )
}
