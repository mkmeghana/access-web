import Image from "next/image";
import card1 from '../images/card1.png';

export default function Card() {
    return (
        <>
            <div className="relative w-80 p-4">
                <Image src={card1} alt="Card image cap" />
                <p className="absolute text-red-400 bottom-20">Dive into the Thrilling World of Full-Stack Development:</p>
                <div>
                    <h3 className="text-white">Access Bootcamp is a one-stop-shop for learning all the basics and advanced skills in web development.</h3>
                </div>
            </div>
        </>
    )
}
