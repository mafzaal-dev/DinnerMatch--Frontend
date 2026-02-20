"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({ date, onSelect, placeholder = "Pick a date", className, popoverClassName, calendarClassName, ...props }) {
  const [selectedDate, setSelectedDate] = React.useState(date)

  React.useEffect(() => {
    if (date) {
        setSelectedDate(date)
    } else {
        setSelectedDate(undefined)
    }
  }, [date])

  const handleSelect = (newDate) => {
    setSelectedDate(newDate)
    if (onSelect) {
      onSelect(newDate)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "w-full px-4 py-2 flex items-center justify-start text-left font-normal border border-[#E5E7EB] rounded-lg text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors",
            !date && "text-gray-500",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
          {date ? format(date, "PPP") : <span className="text-gray-500">{placeholder}</span>}
        </button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0", popoverClassName)} align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          initialFocus
          className={calendarClassName}
          {...props}
        />
      </PopoverContent>
    </Popover>
  )
}
