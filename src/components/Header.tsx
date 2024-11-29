import Link from 'next/link'


export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-blue-600">Bus Express</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                        <li><Link href="/destinations" className="hover:text-blue-600">Destinations</Link></li>
                        <li><Link href="/book" className="hover:text-blue-600">Book Tickets</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                        <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

