import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import './SignUpComponent.css';

function SignUpComponent () {
    return (
      <div className="signupcenter">
        <Card className="mx-auto max-w-sm heightadjust">
        <CardHeader>
          <CardTitle className="text-xl">Registrieren</CardTitle>
          <CardDescription>
            Geben Sie folgende Informationen an, um sich zu registrieren 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Vorname</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Nachname</Label>
                <Input id="last-name" placeholder="Mustermann" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="maxmustermann@beispiel.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Passwort</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Registrieren
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Schon ein Konto?{" "}
            <a href="#" className="underline">
              Anmelden
            </a>
          </div>
        </CardContent>
      </Card>
      </div>
    )
}

export default SignUpComponent;