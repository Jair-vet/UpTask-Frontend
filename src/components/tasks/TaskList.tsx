import { Task, TaskProject } from "@/types/index"
import { TaskCard } from "./TaskCard"
import { statusTranslations } from "@/locales/es"


type TaskListProps = {
    tasks: TaskProject[]
}

type GroupedTasks = {
    [key: string]: TaskProject[]
}
const initialStatusGroups: GroupedTasks = {
    pending: [],
    onHold: [],
    inProgress: [],
    underReview: [],
    completed: [],
}


const statusStyles: { [key: string]: string } = {
    pending: 'border-t-fuchsia-500',
    onHold: 'border-t-red-500',
    inProgress: 'border-t-blue-500',
    underReview: 'border-t-amber-500',
    completed: 'border-t-emerald-500',
}

export const TaskList = ({tasks} : TaskListProps) => {


    const groupedTasks = tasks.reduce((acc, task) => {
        let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
        currentGroup = [...currentGroup, task]
        return { ...acc, [task.status]: currentGroup };
    }, initialStatusGroups);

    console.log(groupedTasks);


  return (
    <>
        <h2 className="text-3xl text-white uppercase font-black my-10 pl-5">Tareas</h2>

        <div className='w-full bg-slate-800 flex gap-5 pl-4 pr-4 overflow-x-scroll 2xl:overflow-auto pb-32'>
            {Object.entries(groupedTasks).map(([status, tasks]) => (
                <div key={status} className='min-w-[300px] 2xl:min-w-0 2xl:w-1/5'>
                    <div className="border border-dashed border-y-slate-800 border-x-cyan-600">
                        <h3
                            className={`capitalize text-2xl font-bold text-center text-white bg-gray-600 p-3 border-t-8 ${statusStyles[status]} `}
                        >{statusTranslations[status]}</h3>

                        <ul className='mt-5 space-y-5 p-3'>
                            {tasks.length === 0 ? (
                                <li className="text-gray-500 text-center pt-3">No Hay tareas</li>
                            ) : (
                                tasks.map(task => <TaskCard key={task._id} task={task} />)
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}
