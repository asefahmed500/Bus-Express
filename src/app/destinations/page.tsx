/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

const destinations = [
    { id: 1, name: "New York City", image: "/placeholder.svg?height=200&width=300", price: 50, departureDate: "2023-07-01" },
    { id: 2, name: "Los Angeles", image: "/placeholder.svg?height=200&width=300", price: 75, departureDate: "2023-07-02" },
    { id: 3, name: "Chicago", image: "/placeholder.svg?height=200&width=300", price: 60, departureDate: "2023-07-03" },
    { id: 4, name: "Houston", image: "/placeholder.svg?height=200&width=300", price: 55, departureDate: "2023-07-04" },
    { id: 5, name: "Phoenix", image: "/placeholder.svg?height=200&width=300", price: 65, departureDate: "2023-07-05" },
]

export default function DestinationsPage() {
    const [filteredDestinations, setFilteredDestinations] = useState(destinations)
    const [searchTerm, setSearchTerm] = useState("")
    const [priceFilter, setPriceFilter] = useState("")
    const [dateFilter, setDateFilter] = useState("")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase()
        setSearchTerm(term)
        filterDestinations(term, priceFilter, dateFilter)
    }

    const handlePriceFilter = (value: string) => {
        setPriceFilter(value)
        filterDestinations(searchTerm, value, dateFilter)
    }

    const handleDateFilter = (value: string) => {
        setDateFilter(value)
        filterDestinations(searchTerm, priceFilter, value)
    }

    const filterDestinations = (term: string, price: string, date: string) => {
        let filtered = destinations.filter(dest =>
            dest.name.toLowerCase().includes(term)
        )

        if (price) {
            filtered = filtered.filter(dest => dest.price <= parseInt(price))
        }

        if (date) {
            filtered = filtered.filter(dest => dest.departureDate >= date)
        }

        setFilteredDestinations(filtered)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Our Destinations</h1>

            <div className="mb-6 flex flex-col md:flex-row gap-4">
                <Input
                    type="text"
                    placeholder="Search destinations"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="md:w-1/3"
                />
                <Select onValueChange={handlePriceFilter}>
                    <SelectTrigger className="md:w-1/3">
                        <SelectValue placeholder="Filter by price" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="50">Up to $50</SelectItem>
                        <SelectItem value="75">Up to $75</SelectItem>
                        <SelectItem value="100">Up to $100</SelectItem>
                    </SelectContent>
                </Select>
                <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => handleDateFilter(e.target.value)}
                    className="md:w-1/3"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                    <Card key={destination.id}>
                        <CardHeader>
                            <CardTitle>{destination.name}</CardTitle>
                            <CardDescription>${destination.price}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-md" />
                            <p className="mt-2">Departure: {destination.departureDate}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild>
                                <Link href={`/book?destination=${destination.name}`}>Book Now</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

