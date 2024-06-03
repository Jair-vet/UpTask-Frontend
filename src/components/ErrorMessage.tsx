export default function ErrorMessage({children} : {children: React.ReactNode}) {
    return (
      <div className="text-center my-1 rounded-md bg-red-100 text-red-600 font-bold p-2 uppercase text-sm">
          {children}
      </div>
    )
  }