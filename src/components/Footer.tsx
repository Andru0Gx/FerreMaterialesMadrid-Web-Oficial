import Image from "next/image";

export function Footer() {

    const Instagram = "./icons/Instagram.svg";
    const Whatsapp = "./icons/Whatsapp.svg";
    const Clock = "./icons/Clock.svg";
    const Mail = "./icons/Mail.svg";


    return (
        <footer>
            <div
                className="bg-color-3 w-full flex space-y-reverse space-y-10 flex-col-reverse p-6 items-center justify-center lg:flex-row lg:space-y-0 lg:justify-between lg:items-start"
            >
                <ul
                    className="flex flex-col justify-center space-y-4 h-full text-white text-sm w-full items-start"
                >
                    <li>
                        <a
                            href="https://www.instagram.com/ferrematerialesmadrid/"
                            target="_blank"
                            className="flex items-center space-x-5"
                        >

                            <Image
                                src={Instagram}
                                alt="Instagram"
                                width={24}
                                height={24}
                            />
                            <span>@ferrematerialesmadrid </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://wa.me/+584124111616"
                            target="_blank"
                            className="flex items-center space-x-5"
                        >
                            <Image
                                src={Whatsapp}
                                alt="Whatsapp"
                                width={24}
                                height={24}
                            />
                            <span>+58 412-4111616 </span>
                        </a>
                    </li>

                    <li>
                        <div className="flex items-center space-x-5">
                            <Image
                                src={Clock}
                                alt="Clock"
                                width={24}
                                height={24}
                            />
                            <span>Lunes a Sabado | 9:00 AM - 5:00 PM</span>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center space-x-5">
                            <Image
                                src={Mail}
                                alt="Mail"
                                width={24}
                                height={24}
                            />
                            <span>Ferremat.Madrid@gmail.com</span>
                        </div>
                    </li>

                    <li>
                        © {new Date().getFullYear()} Ferre Materiales Madrid. Todos los
                        derechos reservados.
                    </li>
                </ul>

                {/* <div className="flex flex-col space-y-2">
                    <p className="text-white">
                        Suscríbete para recibir ofertas y novedades
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="bg-color-2 sm:w-72 w-52 h-10 p-2 rounded-l-full text-white"
                        />
                        <button
                            className="bg-primary h-10 sm:w-36 p-1 text-white rounded-r-full"
                        >Suscribirse</button
                        >
                    </div>
                </div> */}
            </div>
        </footer>
    );
}