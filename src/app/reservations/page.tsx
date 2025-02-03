"use client"

import { useState } from "react"
import { format, addDays, isBefore, isAfter, setHours, setMinutes } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TimeSlot from "./components/TimeSlot"


const restaurantHours = {
    openTime: { hours: 17, minutes: 0 }, // 5:00 PM
    closeTime: { hours: 22, minutes: 0 }, // 10:00 PM
    interval: 30, // 30 minutes between each slot
}

const generateTimeSlots = (date: Date) => {
    const slots = []
    let currentTime = setHours(setMinutes(date, restaurantHours.openTime.minutes), restaurantHours.openTime.hours)
    const closeTime = setHours(setMinutes(date, restaurantHours.closeTime.minutes), restaurantHours.closeTime.hours)

    while (isBefore(currentTime, closeTime)) {
        slots.push(format(currentTime, "HH:mm"))
        currentTime = addDays(currentTime, restaurantHours.interval)
    }

    return slots
}

export default function ReservationsPage() {
    const [date, setDate] = useState<Date>()
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [partySize, setPartySize] = useState("2")

    const timeSlots = date ? generateTimeSlots(date) : []

    const handleReservation = async () => {
        if (date && selectedTime && name && (email || phone)) {
            // In a real application, this would be an API call to your backend
            const reservationData = {
                date: format(date, "yyyy-MM-dd"),
                time: selectedTime,
                name,
                email,
                phone,
                partySize,
            }

            console.log("Reservation data:", reservationData)

            // Simulating an API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            alert(
                `Reservation confirmed for ${format(date, "MMMM d, yyyy")} at ${selectedTime}. A confirmation has been sent to your email/phone.`,
            )

            // Reset form
            setDate(undefined)
            setSelectedTime(null)
            setName("")
            setEmail("")
            setPhone("")
            setPartySize("2")
        } else {
            alert("Please fill in all required fields")
        }
    }

    return (
        <div className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center">
            <p className="text-center text-lg mb-8">
                Select a date and time for your reservation at Verdant. We look forward to serving you our sustainable,
                delicious cuisine.
            </p>

            <div className="w-full max-w-md">
                <div className="mb-8">
                    <Label htmlFor="date-picker">Select Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date-picker"
                                variant={"outline"}
                                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => isBefore(date, new Date()) || isAfter(date, addDays(new Date(), 30))}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {date && (
                    <div className="mb-8">
                        <Label>Select Time</Label>
                        <div className="grid grid-cols-3 gap-4 mt-2">
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

                <div className="space-y-4 mb-8">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(123) 456-7890"
                        />
                    </div>
                    <div>
                        <Label htmlFor="party-size">Party Size</Label>
                        <select
                            id="party-size"
                            value={partySize}
                            onChange={(e) => setPartySize(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                                <option key={size} value={size}>
                                    {size} {size === 1 ? "person" : "people"}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <Button
                    onClick={handleReservation}
                    className="w-full bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)] text-[var(--dark-green-900)] hover:from-[var(--gold-400)] hover:to-[var(--gold-300)]"
                    disabled={!date || !selectedTime || !name || (!email && !phone)}
                >
                    Make Reservation
                </Button>
            </div>
        </div>
    )
}