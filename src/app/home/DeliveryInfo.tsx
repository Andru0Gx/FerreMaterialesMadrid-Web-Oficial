import { Clock, MapPin, Bike } from "lucide-react";
import Image from "next/image";
import DeliveryPhoto from "../../../public/img/Delivery.webp";

export function DeliveryInfo() {
    return (
        <div className="bg-section p-10 flex flex-col space-y-5">
            <h2 className="text-2xl sm:text-2xl font-bold text-color-3">
                Delivery Solo en Maturín
            </h2>

            <div className="sm:flex-row flex flex-col sm:space-x-14 space-y-5 items-center">
                <Image
                    src={DeliveryPhoto}
                    alt="Delivery"
                    className="lg:size-96 sm:size-80 size-60 rounded-3xl"
                />

                <div className="flex flex-col space-y-5">
                    <h3 className="text-lg sm:text-xl font-bold text-color-3">
                        Rápido y Conveniente
                    </h3>
                    <p className="text-color-1 sm:text-base text-sm">
                        Disfruta de nuestro servicio de entrega a domicilio en
                        Maturín. Te llevamos tus productos directamente a tu
                        puerta.
                    </p>
                    <ul className="text-primary space-y-5 text-xs sm:text-base">
                        <li className="flex items-center space-x-2">
                            <Clock size="24" />
                            <p className="text-color-3">
                                Entrega el mismo día para pedidos antes de las 4
                                PM
                            </p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MapPin size="24" />
                            <p className="text-color-3">
                                Cobertura en todo Maturín
                            </p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Bike size="24" />
                            <p className="text-color-3">Facil y rápido</p>
                        </li>
                    </ul>

                    <a className="bg-primary font-bold text-white w-48 h-10 rounded-3xl items-center justify-center flex">
                        Hacer una compra
                    </a>
                </div>
            </div>
        </div>
    );
}
