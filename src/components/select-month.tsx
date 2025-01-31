"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllMonthsOfYear } from "@/lib/utils";

interface SelectMonthProps {
  selectedMonth: string;
  onChageneMonth: (month: string) => void;
}

export const SelectMonth = ({
  selectedMonth,
  onChageneMonth,
}: SelectMonthProps) => {
  const months = getAllMonthsOfYear();

  return (
    <div className="mb-2">
      <Select value={selectedMonth} onValueChange={onChageneMonth}>
        <SelectTrigger className="w-[180px] bg-zinc-950 ">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {months.map((month) => (
            <SelectItem key={month.number} value={month.number.toString()}>
              {month.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
