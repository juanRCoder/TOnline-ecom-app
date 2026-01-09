import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

type props = {
  title: string
  path: string
}

export const Header = ({ title, path }: props) => {
  const navigate = useNavigate()

  return (
    <header className='sticky z-50 top-0 bg-background text-foreground flex justify-between p-4 border-b'>
      <ArrowLeft onClick={() => navigate(path)} strokeWidth={3} className='cursor-pointer' />
      <h2 className="text-2xl text-center flex-1 font-semibold">{title}</h2>
    </header>
  )
}
