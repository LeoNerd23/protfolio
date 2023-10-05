import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <main className="w-full">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Card className="max-w-3xl m-auto mt-12">
          <CardHeader>
            <CardTitle className="flex gap-x-4">
              <span className="flex-1">Bem vindo ao Gym Maneger, Leonardo</span>
              <ModeToggle />
              <Dialog>
                <DialogTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/LeoNerd23.png" />
                    <AvatarFallback>LN</AvatarFallback>
                  </Avatar>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edite seu perfil</DialogTitle>
                    <DialogDescription>
                      Faça alterações em seu perfil aqui. Clique em salvar
                      quando terminar.
                    </DialogDescription>
                  </DialogHeader>
                  <form action="">
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nome
                        </Label>
                        <Input required id="name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          E-mail
                        </Label>
                        <Input required id="username" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Savar alterações</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </CardTitle>
            <CardDescription>
              Clique na foto para editar os detalher do seu usúario
            </CardDescription>
          </CardHeader>
        </Card>
      </ThemeProvider>
    </main>
  );
}
