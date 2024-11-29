"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"


const destinations = [
  { id: 1, name: "New York", price: 50 },
  { id: 2, name: "Los Angeles", price: 75 },
  { id: 3, name: "Chicago", price: 60 },
  { id: 4, name: "Houston", price: 55 },
  { id: 5, name: "Phoenix", price: 65 },
]

export default function BusCompanyFrontend() {
  const [selectedDestination, setSelectedDestination] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  const handlePurchase = () => {
    const destination = destinations.find(d => d.name === selectedDestination)
    if (destination) {
      toast({
        title: "Ticket Purchased!",
        description: `You've bought ${quantity} ticket(s) to ${selectedDestination} for $${destination.price * quantity}.`,
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Bus Express</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Available Destinations</CardTitle>
            <CardDescription>Choose from our popular routes</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              {destinations.map((destination) => (
                <li key={destination.id} className="mb-2">
                  {destination.name} - ${destination.price}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Purchase Tickets</CardTitle>
            <CardDescription>Select your destination and quantity</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="destination">Destination</Label>
                  <Select onValueChange={setSelectedDestination}>
                    <SelectTrigger id="destination">
                      <SelectValue placeholder="Select a destination" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {destinations.map((destination) => (
                        <SelectItem key={destination.id} value={destination.name}>
                          {destination.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e: { target: { value: unknown } }) => setQuantity(Number(e.target.value))}
                    min={1}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handlePurchase} disabled={!selectedDestination}>Purchase Ticket</Button>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}

