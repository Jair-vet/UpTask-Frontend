import { Task } from "@/types/index"
import { AddNoteForm } from "./AddNoteForm"
import { NoteDetails } from "./NoteDetails"


type NotesPanelProps = {
    notes: Task['notes'],
}

export const NotesPanel = ({notes} : NotesPanelProps) => {
    
  return (
    <>
        <AddNoteForm />

        <div className="divide-y divide-gray-100 mt-10">
            {notes.length ? (
                <>
                    <p className="font-bold text-2xl text-slate-600 my-5">Notas:</p>
                    {notes.map(note => <NoteDetails key={note._id} note={note}/>)}
                </>
            ) : <p className="text-yellow-300 font-extrabold uppercase text-xl text-center pt-3">No hay notas</p>}
        </div>

    
    </>

  )
}
