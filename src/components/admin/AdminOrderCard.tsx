

export const AdminOrderCard = () => {
  return (
    <div className='bg-card text-primary rounded-md shadow flex flex-col items-center justify-between px-5 py-3'>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-xl font-semibold">Orden #12345</p>
          <p>Alex</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-right text-lg font-semibold">S/ 25.00</p>
          <span className="bg-chart-5 outline-chart-4 px-2 py-1 rounded-2xl">Pendiente</span>
        </div>
      </div>
      <div className="w-full flex justify-between gap-5 mt-4">
        <button className="flex-1 text-center outline-1 outline-border py-2 rounded-md">Ver Resumen</button>
        <button className="flex-1 text-center text-secondary bg-primary py-2 rounded-md">Cambiar Estado</button>
      </div>
    </div>
  )
}
