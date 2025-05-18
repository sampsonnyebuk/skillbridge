"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col gap-6 py-6">
          <Link href="/" className="text-sm font-medium transition-colors" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Browse Jobs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Find Talent
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Vetting
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Button className="w-full" onClick={() => setOpen(false)}>
            Get Started
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
