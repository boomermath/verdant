"use client"

import { useState } from "react"
import { Playfair_Display } from "next/font/google"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import TimeSlot from "./components/TimeSlot"

const playfair = Playfair_Display({ subsets: ["latin"] })

const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]

export default function ReservationsPage() {
    const [date, setDate] = useState<Date>()
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const handleReservation = () => {
        if (date && selectedTime) {
            alert(`Reservation made for ${format(date, "MMMM d, yyyy")} at ${selectedTime}`)
            // Here you would typically send this data to your backend
        } else {
            alert("Please select both a date and time")
        }
    }

    return (
        <div className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center pt-20">
            <p className="text-center text-lg mb-8">
                Select a date and time for your reservation at Verdant. We look forward to serving you our sustainable,
                delicious cuisine.
            </p>

            <div className="w-full max-w-md">
                <div className="mb-8">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                    </Popover>
                </div>

                {date && (
                    <div className="mb-8">
                        <h2 className={`${playfair.className} text-2xl font-semibold mb-4 text-[var(--dark-green-800)]`}>
                            Available Times
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            {timeSlots.map((time) => (
                                <TimeSlot
                                    key={time}
                                    time={time}
                                    selected={selectedTime === time}
                                    onSelect={() => setSelectedTime(time)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <Button
                    onClick={handleReservation}
                    className="w-full bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)] text-[var(--dark-green-900)] hover:from-[var(--gold-400)] hover:to-[var(--gold-300)]"
                    disabled={!date || !selectedTime}
                >
                    Make Reservation
                </Button>
            </div>
        </div>

    )
}

