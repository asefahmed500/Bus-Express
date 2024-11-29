/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import Link from "next/link"

import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

const destinations = [
  { id: 1, name: "New York City", image: "/placeholder.svg?height=200&width=300", price: 50 },
  { id: 2, name: "Los Angeles", image: "/placeholder.svg?height=200&width=300", price: 75 },
  { id: 3, name: "Chicago", image: "/placeholder.svg?height=200&width=300", price: 60 },
]

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState("")
  const { toast } = useToast()

  const handleSearch = () => {
    if (selectedDestination) {
      toast({
        title: "Searching for trips",
        description: `Looking for trips to ${selectedDestination}`,
      })
    } else {
      toast({
        title: "Error",
        description: "Please select a destination",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-blue-600 text-white p-12 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Bus Express</h1>
          <p className="text-xl mb-6">Your journey begins here. Where do you want to go?</p>
          <div className="flex gap-4">
            <Select onValueChange={setSelectedDestination}>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.name}>
                    {dest.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id}>
              <CardHeader>
                <CardTitle>{destination.name}</CardTitle>
                <CardDescription>Starting from ${destination.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-md" />
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/book?destination=${destination.name}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <Button asChild size="lg">
          <Link href="/book">Book Your Tickets Now</Link>
        </Button>
      </section>

      <Toaster />
    </div>
  )
}

