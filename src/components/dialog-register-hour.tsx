import {
  Dialog,
  DialogContent,
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
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle hidden></DialogTitle>
        </DialogHeader>
        <CalendarDays />

        <div className="flex items-center gap-2">
          <Input type="time" />
          <Input type="time" />
        </div>
        <div className="flex items-center gap-2">
          <Input type="time" />
          <Input type="time" />
        </div>

        <Button className="rounded">Registrar</Button>
      </DialogContent>
    </Dialog>
  );
};
