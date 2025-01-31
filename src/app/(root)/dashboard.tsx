"use client";

import { DataTable } from "@/components/data-table";
import { DialogEditHour } from "@/components/dialog-edit-hour";
import { DialogRegisterHour } from "@/components/dialog-register-hour";
import { SelectMonth } from "@/components/select-month";
import { Button } from "@/components/ui/button";
import { getAllDaysOfMonth } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { getMonth } from "date-fns";

import { CalendarDays, Clock, Clock7, Power, Timer } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import { useMemo, useState } from "react";

interface DashboardProps {
  session: Session;
}

export const Dashboard = ({ session }: DashboardProps) => {
  const currentMonth = getMonth(new Date()) + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.toString());

  const onChageneMonth = (month: string) => {
    setSelectedMonth(month);
  };

  const days = getAllDaysOfMonth(Number(selectedMonth), 2025).map((day) => ({
    ...day,
    entry1: "09h:00m",
    exit1: "12h:00m",
    entry2: "13h:00m",
    exit2: "18h:22m",
    totalHoursWorked: "08h:00m",
  }));

  console.log(days);

  const columns: ColumnDef<typeof days>[] = useMemo(
    () => [
      {
        header: () => (
          <div className="flex items-center gap-1">
            <CalendarDays className="size-4" />
            Date
          </div>
        ),
        accessorKey: "date",
      },
      {
        header: () => (
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            Entrada 1
          </div>
        ),
        accessorKey: "entry1",
      },
      {
        header: () => (
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            Saída 1
          </div>
        ),
        accessorKey: "exit1",
      },
      {
        header: () => (
          <div className="flex items-center gap-1">
            <Timer className="size-4" />
            Intervalo
          </div>
        ),
        id: "interval",
      },
      {
        header: () => (
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            Entrada 2
          </div>
        ),
        accessorKey: "entry2",
      },
      {
        header: () => (
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            Saída 2
          </div>
        ),
        accessorKey: "exit2",
      },
      {
        header: () => (
          <div className="flex items-center gap-1">
            <Clock7 className="size-4" />
            Total Horas Trabalhadas
          </div>
        ),
        accessorKey: "totalHoursWorked",
        cell: ({
          row: {
            original: { totalHoursWorked },
          },
        }) => (
          <div className="flex items-center gap-2">
            {totalHoursWorked}
            <div className="bg-zinc-300/20 size-3.5 rounded-full flex items-center justify-center">
              <div className="size-2.5 rounded-full bg-zinc-400" />
            </div>
          </div>
        ),
      },
      {
        id: "actions",
        cell: () => (
          <div>
            <DialogEditHour />
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="h-full max-w-screen-2xl mx-auto px-20 py-20">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={session.user?.image ?? ""}
            alt={session.user?.name ?? ""}
            width={40}
            height={40}
            className="rounded-full"
          />
          <p>{session.user?.name}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="rounded-full w-fit">
            <Power />
            <p>Sair</p>
          </Button>
        </div>
      </header>

      <div className="w-full h-px bg-zinc-800 my-4" />

      <div className="flex items-center justify-between">
        <SelectMonth
          selectedMonth={selectedMonth}
          onChageneMonth={onChageneMonth}
        />
        <DialogRegisterHour />
      </div>

      <DataTable data={days} columns={columns} />
    </div>
  );
};
