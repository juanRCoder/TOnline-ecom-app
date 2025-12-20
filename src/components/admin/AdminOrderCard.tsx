import { Button } from "@/components/ui"


export const AdminOrderCard = () => {
  return (
    <div className='bg-card text-primary rounded-md shadow flex flex-col items-center justify-between px-5 py-3 gap-2 outline-1 outline-border'>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-xl font-semibold pb-2">Orden #12345</p>
          <p>Alex</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-right text-lg font-semibold">S/ 25.00</p>
          <span className="bg-chart-5 outline-chart-4 px-2 py-1 rounded-2xl">Pendiente</span>
        </div>
      </div>
      <div className="w-full flex justify-between gap-5 mt-4">
        <Button variant='outline' className="flex-1 py-4 cursor-pointer">
          Ver Resumen
        </Button>
        <Button variant='default' className="flex-1 py-4 cursor-pointer">
          Cambiar Estado
        </Button>
      </div>
    </div>
  )
}
