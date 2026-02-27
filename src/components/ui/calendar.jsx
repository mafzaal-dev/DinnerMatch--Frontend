"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, UI, SelectionState, DayFlag } from "react-day-picker"
import { format, setMonth, setYear, startOfYear, endOfYear, eachYearOfInterval, addYears, subYears } from "date-fns"

import { cn } from "@/lib/utils"

function YearPicker({ currentYear, onYearSelect, isDark }) {
  const [yearPage, setYearPage] = React.useState(currentYear);
  
  const years = React.useMemo(() => {
    const start = Math.floor(yearPage / 12) * 12;
    return Array.from({ length: 12 }, (_, i) => start + i);
  }, [yearPage]);

  const handlePrev = () => setYearPage(y => y - 12);
  const handleNext = () => setYearPage(y => y + 12);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pt-1 relative">
        <button 
            type="button"
            onClick={handlePrev} 
            className={cn("h-7 w-7 bg-transparent p-0 flex items-center justify-center rounded-md transition-colors border opacity-70 hover:opacity-100", 
            isDark ? "text-[#F5F5F5] border-[#2F3A51] hover:bg-[#2F3A51]" : "text-slate-500 border-slate-200 hover:bg-slate-100"
            )}
        >
            <ChevronLeft className="h-4 w-4" />
        </button>
        <div className={cn("text-sm font-medium", isDark && "text-[#F5F5F5]")}>
            {years[0]} - {years[years.length - 1]}
        </div>
        <button 
            type="button"
            onClick={handleNext} 
            className={cn("h-7 w-7 bg-transparent p-0 flex items-center justify-center rounded-md transition-colors border opacity-70 hover:opacity-100",
            isDark ? "text-[#F5F5F5] border-[#2F3A51] hover:bg-[#2F3A51]" : "text-slate-500 border-slate-200 hover:bg-slate-100"
            )}
        >
            <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {years.map(year => (
          <button
            key={year}
            onClick={() => onYearSelect(year)}
            className={cn(
              "h-10 text-sm rounded-md transition-colors",
              year === currentYear 
                ? "bg-[var(--color-primary-orange)] text-white" 
                : isDark ? "text-[#F5F5F5] hover:bg-[#2F3A51]" : "text-slate-900 hover:bg-slate-100"
            )}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}

function MonthPicker({ currentMonth, onMonthSelect, isDark }) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="space-y-4">
       <div className="flex items-center justify-center pt-1 relative">
        <div className={cn("text-sm font-medium", isDark && "text-[#F5F5F5]")}>
            {currentMonth.getFullYear()}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => onMonthSelect(index)}
            className={cn(
              "h-10 text-sm rounded-md transition-colors",
              index === currentMonth.getMonth()
                ? "bg-[var(--color-primary-orange)] text-white"
                : isDark ? "text-[#F5F5F5] hover:bg-[#2F3A51]" : "text-slate-900 hover:bg-slate-100"
            )}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  isDark = false,
  ...props
}) {
  const [view, setView] = React.useState("days"); // days, months, years
  // Initialize month from props.selected (if single mode) or defaultProps.month or today
  const [internalMonth, setInternalMonth] = React.useState(() => {
    const initialDate = props.selected && props.selected instanceof Date && !isNaN(props.selected)
      ? props.selected 
      : (props.defaultMonth instanceof Date && !isNaN(props.defaultMonth) ? props.defaultMonth : new Date());
    return initialDate;
  });

  // Sync internalMonth with props.month if controlled (though usually uncontrolled in this codebase)
  React.useEffect(() => {
    if (props.month) {
        setInternalMonth(props.month);
    }
  }, [props.month]);

  // Sync with selected date if month not explicitly controlled, to jump to selected date
  React.useEffect(() => {
      if (props.selected && props.selected instanceof Date && !isNaN(props.selected)) {
          // Check if the selected date is in a different month than the current internalMonth
          // or if internalMonth is invalid/default
          // We use time comparison for safety to avoid object reference issues in dependencies if possible, 
          // though internalMonth should be stable enough.
          if (
            internalMonth.getMonth() !== props.selected.getMonth() || 
            internalMonth.getFullYear() !== props.selected.getFullYear()
          ) {
              setInternalMonth(props.selected);
          }
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selected]); // Remove internalMonth from dependency to avoid loop and dynamic size error if internalMonth changes type (though it shouldn't)

  const handleYearSelect = (year) => {
    const newMonth = setYear(internalMonth, year);
    setInternalMonth(newMonth);
    setView("months");
  };

  const handleMonthSelect = (monthIndex) => {
    const newMonth = setMonth(internalMonth, monthIndex);
    setInternalMonth(newMonth);
    setView("days");
  };

  const handleDaySelect = (date, modifiers, e) => {
      // Update internalMonth to the selected month if needed (though DayPicker might do this, we want to be explicit)
      if (date) {
          setInternalMonth(date);
      }
      // Pass the event up
      if (props.onSelect) {
          props.onSelect(date, modifiers, e);
      }
  };

  // Ensure internalMonth is a valid date
  React.useEffect(() => {
    if (isNaN(internalMonth.getTime())) {
        setInternalMonth(new Date());
    }
  }, [internalMonth]);

  const CustomCaptionLabel = (captionProps) => {
      // Use internalMonth directly to ensure header matches the grid being controlled
      const displayDate = internalMonth instanceof Date && !isNaN(internalMonth) 
        ? internalMonth 
        : (captionProps.displayMonth || new Date());

      return (
          <button 
            type="button"
            onClick={() => setView("years")} 
            className={cn("text-sm font-medium hover:opacity-70 transition-opacity", isDark && "text-[#F5F5F5]")}
          >
              {format(displayDate, "MMMM yyyy")}
          </button>
      )
  }

  if (view === "years") {
      return (
          <div className={cn("p-3 w-[276px]", className)}>
              <YearPicker 
                currentYear={internalMonth.getFullYear()} 
                onYearSelect={handleYearSelect} 
                isDark={isDark} 
              />
          </div>
      )
  }

  if (view === "months") {
      return (
          <div className={cn("p-3 w-[276px]", className)}>
              <MonthPicker 
                currentMonth={internalMonth} 
                onMonthSelect={handleMonthSelect} 
                isDark={isDark} 
              />
          </div>
      )
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      month={internalMonth}
      onMonthChange={setInternalMonth}
      onSelect={handleDaySelect}
      className={cn("p-3", className)}
      classNames={{
        [UI.Months]: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 relative",
        [UI.Month]: "space-y-4",
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
        },
        CaptionLabel: CustomCaptionLabel
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
