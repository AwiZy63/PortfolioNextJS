import Link from "next/link";

export default function Header() {
    return (
        // Responsive tw header component
        <header className="text-center py-20 bg-gray-900 rounded-lg mt-4">
            <h1 className="text-4xl font-bold text-white">Bienvenue sur mon Portfolio</h1>
            <p className="text-gray-300 mt-4">Découvrez mes travaux et projets récents</p>
            <Link href="/contact" className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-600 transition" passHref>Contactez-moi</Link>
        </header>
    )
}
