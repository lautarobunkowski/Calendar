import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";

import cn from "clsx";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={es}
      showOutsideDays={showOutsideDays}
      className={cn("p-3 max-w-[350px] ", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption:
          "flex justify-center pt-1 relative items-center w-fit mx-auto mb-6",
        caption_label: "text-base font-md w-[125px]",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "p-0 text-[#0060D4] hover:bg-[#D9E9FF] bg-[#EEF5FF] rounded-full flex items-center justify-center w-11 h-11"
        ),
        nav_button_previous: "absolute -left-9",
        nav_button_next: "absolute",
        table: "border-collapse space-y-1",
        head_row: "flex justify-between w-full",
        head_cell: "font-light text-[11px] w-11 uppercase",
        row: "flex w-full mt-2 gap-x-[0.1rem]",
        cell: cn(
          "w-11 h-11 relative p-0 flex items-center justify-center text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          "h-full w-full p-0 font-bold text-[#0060D4] hover:bg-[#D9E9FF] text-[1rem] aria-selected:opacity-100 rounded-full bg-[#EEF5FF]"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "text-primary-foreground hover:text-primary-foreground",
        day_today: "text-accent-foreground bg-transparent text-gray-400",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-5 w-5" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-5 w-5" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
