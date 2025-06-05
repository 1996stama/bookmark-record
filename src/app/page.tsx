import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider>
      <div className="p-8 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui Components Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button>Button</Button>
              <Badge>Badge</Badge>
            </div>
            <Input placeholder="Input" />
            <Textarea placeholder="Textarea" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="test">Test</SelectItem>
              </SelectContent>
            </Select>
            <Separator />
            <Skeleton className="h-4 w-20" />
            <div className="flex gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Alert Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Test</AlertDialogTitle>
                    <AlertDialogDescription>
                      Test alert dialog
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>OK</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Test Dialog</DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Test Sheet</SheetTitle>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>Test tooltip</TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
