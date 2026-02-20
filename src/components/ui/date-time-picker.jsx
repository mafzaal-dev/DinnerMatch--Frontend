"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateTimePicker({ date, onSelect, placeholder = "Pick a date & time", className }) {
  const [selectedDate, setSelectedDate] = React.useState(date ? new Date(date) : undefined);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (date) {
      setSelectedDate(new Date(date));
    } else {
      setSelectedDate(undefined);
    }
  }, [date]);

  const handleDateSelect = (newDate) => {
    if (!newDate) {
        setSelectedDate(undefined);
        onSelect(undefined);
        return;
    }
    // Preserve time from current selection if exists, else set to current time or 12:00
    const currentDate = selectedDate || new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    
    setSelectedDate(newDate);
    onSelect(newDate);
  };

  const handleTimeChange = (type, value) => {
    if (!selectedDate) return;
    const newDate = new Date(selectedDate);
    if (type === "hour") {
      newDate.setHours(parseInt(value));
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value));
    }
    setSelectedDate(newDate);
    onSelect(newDate);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5); // 0, 5, 10...

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
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
          {selectedDate ? (
            format(selectedDate, "PPP p")
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 flex flex-col sm:flex-row" align="start">
        <div className="border-b sm:border-b-0 sm:border-r border-gray-200">
            <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            initialFocus
            />
        </div>
        <div className="flex flex-col p-4 sm:w-48 bg-white max-h-[350px]">
            <div className="text-sm font-medium mb-2 text-center text-gray-500">Time</div>
            <div className="flex gap-2 h-full overflow-hidden">
                <div className="flex flex-col gap-1 overflow-y-auto no-scrollbar flex-1 border-r border-gray-100 pr-2">
                    <span className="text-xs text-gray-400 text-center mb-1">Hr</span>
                    {hours.map((hour) => (
                        <button
                            key={hour}
                            type="button"
                            onClick={() => handleTimeChange("hour", hour)}
                            className={cn(
                                "px-2 py-1 text-sm rounded hover:bg-gray-100 text-center transition-colors",
                                selectedDate && selectedDate.getHours() === hour
                                    ? "bg-orange-500 text-white hover:bg-orange-600"
                                    : "text-gray-700"
                            )}
                        >
                            {hour.toString().padStart(2, '0')}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-1 overflow-y-auto no-scrollbar flex-1 pl-2">
                    <span className="text-xs text-gray-400 text-center mb-1">Min</span>
                    {minutes.map((minute) => (
                        <button
                            key={minute}
                            type="button"
                            onClick={() => handleTimeChange("minute", minute)}
                            className={cn(
                                "px-2 py-1 text-sm rounded hover:bg-gray-100 text-center transition-colors",
                                selectedDate && selectedDate.getMinutes() === minute
                                    ? "bg-orange-500 text-white hover:bg-orange-600"
                                    : "text-gray-700"
                            )}
                        >
                            {minute.toString().padStart(2, '0')}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
