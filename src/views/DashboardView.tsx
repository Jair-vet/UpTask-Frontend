import { Link } from "react-router-dom"

export const DashboardView = () => {
  return (
    <>
        <h1 className="text-3xl font-black uppercase">My projects</h1>
        <p className="text-xl font-light text-gray-500 mt-5">Manage your projects</p>

        <nav className="my-5 ">
            <Link
                className="bg-purple-500 hover:bg-purple-600 px-10 py-3 rounded-lg text-white text-xl font-bold cursor-pointer transition-colors"
                to={'/projects/create'}
            >New Project</Link>
        </nav>

    </>
  )
}
