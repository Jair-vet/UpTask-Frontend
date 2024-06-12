export default function ErrorMessage({children} : {children: React.ReactNode}) {
    return (
      <div className="text-center my-1 bg-red-200 rounded-md text-red-700 font-bold p-2 uppercase text-sm">
          {children}
      </div>
    )
  }