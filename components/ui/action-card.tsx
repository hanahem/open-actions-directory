'use client'

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Gem, PersonStanding, Code } from "lucide-react"

type Action = {
  name: string
  description: string
  type: string
  link?: string,
  builder?: string
}

export function ActionCard({ action } : { action: Action }) {
  return (
    <div className="
      w-full
      sm:w-[calc(50%-10px)]
      md:w-[calc(33.3%-10px)]
      xl:w-[290px]
      mx-[5px] mb-[10px]">
      <Card className="hover:bg-slight hover:text-accent-foreground">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{action.name}</CardTitle>
          <CardDescription>
            {action.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid gap-6">
             {
              action.type === "action" && (
                  <Button className="w-full" variant="outline">
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    Github
                  </Button>
              )
             }
              {
                action.type === "rfp" && (
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <Link
                      href="https://airtable.com/app97gNZWvlLHLDur/shr1ghoUxV9DHuuDM"
                      target="_blank"
                      rel="no-opener"
                    >
                    <Gem width="20" className="mr-2" />
                    Request bounty.
                    </Link>
                    </Button>
                )
              }
              </div>
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                </div>
                {
                  action.builder && (
                    <Button
                      className="w-full"
                    >
                    <PersonStanding className="mr-2" />
                    Developer</Button>
                  )
                }
                {
                  action.type === 'rfp' && (
                    <Button
                      asChild
                      className="w-full"
                    >
                      <Link
                      target="_blank"
                      rel="no-opener"
                      href="https://docs.lens.xyz/v2/docs/creating-a-publication-action">
                        <Code
                          className="mr-2" />
                        <p >Learn how to Build</p>
                    </Link>
                  </Button>
                  )
                }
              </>
        </CardContent>
      </Card>
    </div>
  )
}