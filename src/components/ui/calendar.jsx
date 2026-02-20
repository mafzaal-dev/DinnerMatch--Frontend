"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, UI, SelectionState, DayFlag } from "react-day-picker"

import { cn } from "@/lib/utils"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  isDark = false,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        [UI.Months]: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 relative",
        [UI.Month]: "space-y-4",
        [UI.MonthCaption]: "flex justify-center pt-1 relative items-center",
        [UI.CaptionLabel]: cn("text-sm font-medium", isDark && "text-[#F5F5F5]"),
        [UI.Nav]: "space-x-1 flex items-center",
        [UI.PreviousMonthButton]: cn(
          "absolute left-1 top-0 h-7 w-7 bg-transparent p-0 flex items-center justify-center rounded-md transition-colors z-10 border opacity-70 hover:opacity-100",
          isDark 
            ? "text-[#F5F5F5] border-[#2F3A51] hover:bg-[#2F3A51]" 
            : "text-slate-500 border-slate-200 hover:bg-slate-100"
        ),
        [UI.NextMonthButton]: cn(
          "absolute right-1 top-0 h-7 w-7 bg-transparent p-0 flex items-center justify-center rounded-md transition-colors z-10 border opacity-70 hover:opacity-100",
          isDark 
            ? "text-[#F5F5F5] border-[#2F3A51] hover:bg-[#2F3A51]" 
            : "text-slate-500 border-slate-200 hover:bg-slate-100"
        ),
        [UI.MonthGrid]: "w-full border-collapse space-y-1",
        [UI.Weekdays]: "flex",
        [UI.Weekday]: cn("rounded-md w-9 font-normal text-[0.8rem]", isDark ? "text-gray-400" : "text-slate-500"),
        [UI.Week]: "flex w-full mt-2",
        [UI.Day]: cn(
          "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          isDark 
            ? "[&:has([aria-selected].day-outside)]:bg-[#2F3A51]/50 [&:has([aria-selected])]:bg-[#2F3A51]" 
            : "[&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100"
        ),
        [UI.DayButton]: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md flex items-center justify-center transition-colors cursor-pointer",
          isDark 
            ? "hover:bg-[#2F3A51] text-[#F5F5F5]" 
            : "hover:bg-slate-100"
        ),
        [SelectionState.range_end]: "day-range-end",
        [SelectionState.selected]:
          "bg-[var(--color-primary-orange)] text-white hover:bg-[var(--color-primary-orange)] hover:text-white focus:bg-[var(--color-primary-orange)] focus:text-white",
        [SelectionState.range_middle]: cn(
          isDark 
            ? "aria-selected:bg-[#2F3A51] aria-selected:text-[#F5F5F5]" 
            : "aria-selected:bg-slate-100 aria-selected:text-slate-900"
        ),
        [DayFlag.today]: cn(
          "font-bold",
          isDark ? "bg-[#2F3A51] text-[#FFAA55]" : "bg-slate-100 text-slate-900"
        ),
        [DayFlag.outside]: cn(
          "day-outside opacity-50 aria-selected:opacity-30",
          isDark 
            ? "text-gray-500 aria-selected:bg-[#2F3A51]/50 aria-selected:text-gray-400" 
            : "text-slate-400 aria-selected:bg-slate-100/50 aria-selected:text-slate-500"
        ),
        [DayFlag.disabled]: cn(
          "opacity-50",
          isDark ? "text-gray-600" : "text-slate-400"
        ),
        [DayFlag.hidden]: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...props }) => {
            if (orientation === "left") {
                return <ChevronLeft className="h-4 w-4" {...props} />
            } 
            return <ChevronRight className="h-4 w-4" {...props} />
        }
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
