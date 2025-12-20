import { Edit2, Trash2 } from "lucide-react"
import { Button, Card, CardContent } from "@/components/ui"

export const AdminProductCard = () => {
  return (
    <Card className='flex flex-row items-center justify-between px-4'>
      <CardContent className="flex gap-6 px-0">
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
      </CardContent>
      <CardContent className="flex flex-col px-0">
        <Button variant='ghost' className="h-16 w-16 cursor-pointer rounded-full">
          <Edit2 className="text-foreground size-5" />
        </Button>
        <Button variant='ghost' className="h-16 w-16 cursor-pointer rounded-full">
          <Trash2 className="text-destructive size-5" />
        </Button>
      </CardContent>
    </Card>
  )
}
