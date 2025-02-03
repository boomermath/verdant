import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface TimeSlotProps {
  time: string
  selected: boolean
  onSelect: () => void
}

export default function TimeSlot({ time, selected, onSelect }: TimeSlotProps) {
  return (
    <Button
      variant={selected ? "default" : "outline"}
      className={`w-full ${
        selected
          ? "bg-[var(--dark-green-800)] text-[var(--cream-100)]"
          : "text-[var(--dark-green-800)] hover:bg-[var(--dark-green-800)] hover:text-[var(--cream-100)]"
      }`}
      onClick={onSelect}
    >
      <Clock className="w-4 h-4 mr-2" />
      {time}
    </Button>
  )
}

