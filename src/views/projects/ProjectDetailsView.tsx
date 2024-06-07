import { getFullProject } from "@/api/ProjectAPI"
import AddTaskModal from "@/components/tasks/AddTaskModal"
import { TaskList } from "@/components/tasks/TaskList"
import { useQuery } from "@tanstack/react-query"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"

export const ProjectDetailsView = () => {

    const navigate = useNavigate()

    const params = useParams()
    const projectId = params.projectId!
    const { data, isLoading, isError } = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getFullProject(projectId),
        retry: false
    })

    if (isLoading ) return 'Cargando...'
    if (isError) return <Navigate to='/404' />
    if (data ) return (
    <>
       <h1 className="text-4xl text-white font-black pl-5">{data.projectName}</h1>
        <p className="text-xl font-light text-emerald-500 mt-5 p-5">{data.description}</p>

        
        <nav className="my-5 flex gap-3 pl-5">
            <button
                type="button"
                className="rounded-md bg-purple-500 hover:bg-purple-600 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                onClick={() => navigate(location.pathname + '?newTask=true')}
            >Add Task</button>

            <Link
                to={'team'}
                className="rounded-md bg-fuchsia-600 hover:bg-fuchsia-700 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            >Collaborators</Link>
        </nav>
        

        <TaskList 
            tasks={data.tasks}
        />
        <AddTaskModal />
        {/* <EditTaskData />
        <TaskModalDetails /> */}
    </> 

  )
}
