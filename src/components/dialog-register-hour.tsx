import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CalendarDays } from "./calendar";
import { Input } from "./ui/input";

export const DialogRegisterHour = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="rounded" variant="default">
          Registrar Horas
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-100">
        <DialogHeader>
          <DialogTitle hidden></DialogTitle>
        </DialogHeader>
        <CalendarDays />

        <Input />
      </DialogContent>
    </Dialog>
  );
};
