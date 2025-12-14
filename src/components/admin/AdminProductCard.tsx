import { Edit2, Trash2 } from "lucide-react"

export const AdminProductCard = () => {
  return (
    <div className='bg-card rounded-md shadow flex items-center justify-between p-5 dark:outline-1'>
      <div className="flex gap-6">
        <div className="flex justify-center items-center rounded-xl">
          <img
            src={'/default-img.png'}
            className={`object-contain w-24 h-24 rounded-xl outline-1 outline-border`}
          />
        </div>
        <div className="flex flex-col gap-1 text-primary">
          <p className="font-semibold text-lg">Coca-Cola</p>
          <p className="font-medium">Bebidas</p>
          <p className="text-foreground">$2.50</p>
          <p>Stock: 40</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Edit2 size={16} className="cursor-pointer text-foreground"/>
        <Trash2 size={16} className="cursor-pointer text-destructive" />
      </div>
    </div>
  )
}
