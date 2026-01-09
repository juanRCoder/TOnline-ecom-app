import { Header } from "./Header"

type props = {
  title: string
  path: string
  children: React.ReactNode
}

export const AdminLayout = ({ title, path, children }: props) => {
  return (
     <section className="relative min-h-screen flex flex-col">
      <Header title={title} path={path} />
      <div className="flex-1 flex flex-col bg-sidebar">{children}</div>
    </section>
  )
}
