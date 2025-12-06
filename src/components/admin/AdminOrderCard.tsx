

export const AdminOrderCard = () => {
  return (
    <div className='bg-white rounded-md shadow flex flex-col items-center justify-between px-5 py-3'>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-xl font-semibold">Orden #12345</p>
          <p>Alex</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-right text-lg font-semibold">S/ 25.00</p>
          <span className="bg-yellow-200 outline-amber-400 px-2 py-1 rounded-2xl">Pendiente</span>
        </div>
      </div>
      <div className="w-full flex justify-between gap-5 mt-4">
        <button className="flex-1 text-center outline-1 outline-[#EC6D13] py-2 rounded-md">Ver Resumen</button>
        <button className="flex-1 text-center bg-[#EC6D13] text-white py-2 rounded-md">Cambiar Estado</button>
      </div>
    </div>
  )
}
