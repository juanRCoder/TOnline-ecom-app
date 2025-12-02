import { ArrowLeft, BoxIcon, ChevronRight, LayoutGrid, NotepadText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="relative max-w-7xl mx-auto outline-1 bg-white text-gray-800 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className='flex items-center justify-between p-4 shadow-sm z-10'>
          <ArrowLeft onClick={() => navigate('/')} strokeWidth={3} className='cursor-pointer' />
          <h2 className="text-2xl text-center flex-1 font-semibold">Panel de administración </h2>
        </div>
        {/* CONTENT */}
        <div className="bg-gray-50 flex-1 flex flex-col px-3 gap-5">
          <div className="flex flex-col justify-center items-center mt-10 py-5 rounded-md bg-white shadow-sm">
            <img
              src="/user_default.png"
              className="h-36 w-36 border-8 border-[#EEE] rounded-full shadow-xl"
            />
            <p className="mt-6 mb-1 text-3xl font-semibold">Ricardo</p>
            <p className="text-2xl text-gray-500">Administrador</p>
          </div>
          <div className="flex items-center justify-between gap-4 py-4 px-3 rounded-md bg-white shadow-sm mt-10">
            <div className="flex items-center gap-4">
              <BoxIcon size={40} />
              <div>
                <p className="font-semibold text-lg">Productos</p>
                <p className="text-gray-500">Gestionar productos y stock</p>
              </div>
            </div>
            <ChevronRight size={40} color="#999" strokeWidth={1.5} />
          </div>
          <div className="flex items-center justify-between gap-4 py-4 px-3 rounded-md bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <LayoutGrid size={40} />
              <div>
                <p className="font-semibold text-lg">Categorias</p>
                <p className="text-gray-500">Organizar categorias</p>
              </div>
            </div>
            <ChevronRight size={40} color="#999" strokeWidth={1.5} />
          </div>
          <div className="flex items-center justify-between gap-4 py-4 px-3 rounded-md bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <NotepadText size={40} />
              <div>
                <p className="font-semibold text-lg">Ordenes</p>
                <p className="text-gray-500">Ver y administrar ordenes</p>
              </div>
            </div>
            <ChevronRight size={40} color="#999" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;