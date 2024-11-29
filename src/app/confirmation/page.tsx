'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { useSearchParams } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { Suspense } from 'react'

const ConfirmationDetails = () => {
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const bookingDetails = {
    name: searchParams.get('name') || 'John Doe',
    departure: searchParams.get('departure') || 'New York City',
    destination: searchParams.get('destination') || 'Los Angeles',
    date: searchParams.get('date') || '2023-07-01',
    seat: searchParams.get('seat') || 'Seat 1',
    price: searchParams.get('price') || '$50',
  }

  const handlePrint = () => {
    window.print()
    toast({
      title: "Ticket Ready!",
      description: "Your ticket is ready to print.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Ticket Confirmation</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Booking Details</CardTitle>
          <CardDescription>Your bus ticket has been successfully booked!</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <dt className="font-medium text-gray-700">Name</dt>
              <dd className="text-lg text-gray-500">{bookingDetails.name}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Departure</dt>
              <dd className="text-lg text-gray-500">{bookingDetails.departure}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Destination</dt>
              <dd className="text-lg text-gray-500">{bookingDetails.destination}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Date</dt>
              <dd className="text-lg text-gray-500">{bookingDetails.date}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Seat</dt>
              <dd className="text-lg text-gray-500">{bookingDetails.seat}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Price</dt>
              <dd className="text-lg text-gray-500">{bookingDetails.price}</dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handlePrint} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Print Ticket
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmationDetails />
    </Suspense>
  )
}
