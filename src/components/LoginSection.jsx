import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const LoginSection = () => {
  return  (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Anmelden</h1>
          <p className="text-balance text-muted-foreground">
          Geben Sie unten Ihre E-Mail-Adresse an, um sich bei Ihrem Konto anzumelden
          </p>
        </div>
        <div className="grid gap-4">
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
            <div className="flex items-center">
              <Label htmlFor="password">Passwort</Label>
              <a
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Passwort vergessen?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Anmelden
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Noch kein Konto?{" "}
          <a href="#" className="underline">
            Registrieren
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginSection;