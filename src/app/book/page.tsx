'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toaster'

const destinations = [
  "New York City", "Los Angeles", "Chicago", "Houston", "Phoenix"
]

const seats = Array.from({ length: 20 }, (_, i) => `Seat ${i + 1}`)

const BookingPageContent = () => {
  const searchParams = useSearchParams()
  const initialDestination = searchParams.get('destination') || ''

  const [departure, setDeparture] = useState('')
  const [destination, setDestination] = useState(initialDestination)
  const [travelDate, setTravelDate] = useState('')
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const { toast } = useToast()
  const router = useRouter()

  const handleSeatSelection = (seat: string) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create query string
    const queryParams = new URLSearchParams({
      name,
      departure,
      destination,
      date: travelDate,
      seat: selectedSeats.join(', '),
      price: '$50' // You can replace this with dynamic pricing
    }).toString()

    // Redirect to confirmation page with query params
    router.push(`/confirmation?${queryParams}`)

    toast({
      title: "Booking Confirmed!",
      description: `Your trip to ${destination} has been booked.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Trip</h1>
      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
          <CardDescription>Fill in your trip details below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="departure">Departure</Label>
                <Select onValueChange={setDeparture} required>
                  <SelectTrigger id="departure">
                    <SelectValue placeholder="Select departure city" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Select onValueChange={setDestination} value={destination} required>
                  <SelectTrigger id="destination">
                    <SelectValue placeholder="Select destination city" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="travelDate">Travel Date</Label>
              <Input
                type="date"
                id="travelDate"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Select Seats</Label>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {seats.map(seat => (
                  <Button
                    key={seat}
                    type="button"
                    variant={selectedSeats.includes(seat) ? "default" : "outline"}
                    onClick={() => handleSeatSelection(seat)}
                  >
                    {seat}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">Book Ticket</Button>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  )
}

export default function BookingPageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPageContent />
    </Suspense>
  )
}
