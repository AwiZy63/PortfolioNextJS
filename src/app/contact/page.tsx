import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Flanquart Bastien's Portfolio",
    description: "Contactez-moi pour discuter de vos projets ou si vous avez des questions",
};

export default function Contact() {
    return (
        <div id="contact" className="container w-full md:w-1/2 mx-auto px-4 w-full py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white">Contact</h1>
            <p className="text-gray-300 mt-4">Contactez-moi pour discuter de vos projets</p>
            <form className="mt-8" action="https://formbold.com/s/3GgwM" method="POST">
                <div className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="name" className="text-white">Nom</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-800 text-white p-3 rounded-lg mt-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-white">Email</label>
                        <input type="email" name="email" id="email" className="w-full bg-gray-800 text-white p-3 rounded-lg mt-2" />
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-white">Sujet</label>
                        <input type="text" id="subject" name="subject" className="w-full bg-gray-800 text-white p-3 rounded-lg mt-2" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-white">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-800 text-white p-3 rounded-lg mt-2" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-600 transition">Envoyer</button>
                </div>
            </form>
        </div>
    )
}
