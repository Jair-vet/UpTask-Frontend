import { Link } from "react-router-dom"

export const CreateProjectView = () => {
  return (
    <>
       <h1 className="text-3xl font-black uppercase">Create Projects</h1>
        <p className="text-xl font-light text-gray-500 mt-5">fill out form to create a project</p>

        <nav className="my-5 ">
            <Link
                className="bg-purple-500 hover:bg-purple-600 px-10 py-3 rounded-lg text-white text-xl font-bold cursor-pointer transition-colors"
                to={'/'}
            >Back to Projects</Link>
        </nav>
    </>
  )
}
