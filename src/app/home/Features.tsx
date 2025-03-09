import { Package, Truck, CreditCard } from "lucide-react";

export function Features() {
    return (

        <div
            className="w-full bg-section lg:h-96 flex flex-col items-center justify-evenly p-10"
        >
            <h3 className="text-2xl font-bold text-color-3">
                ¿Por qué Elegir Ferre Materiales Madrid?
            </h3>
            <div className="flex lg:flex-row flex-col justify-evenly w-full items-center">
                <div
                    className="flex
            flex-col
            items-center
            justify-center
            
            w-72
            
            p-4
            space-y-3"
                >
                    <Package size="40" color="var(--primary-color)" />
                    <h4 className="font-bold text-color-3 text-lg">Amplio Catálogo</h4>
                    <p className="text-center lg:w-72 text-color-2">
                        Miles de productos de ferretería para tus proyectos
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-center w-72 p-4 space-y-3"
                >
                    <Truck size="40" color="var(--primary-color)" />
                    <h4 className="font-bold text-color-3 text-lg">Entrega Rápida</h4>
                    <p className="text-center lg:w-72 text-color-2">
                        Recibe tus productos en la comodidad de tu hogar en Maturín
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-center w-72 p-4 space-y-3"
                >
                    <CreditCard size="40" color="var(--primary-color)" />
                    <h4 className="font-bold text-color-3 text-lg">Pago Seguro</h4>
                    <p className="text-center lg:w-72 text-color-2">
                        Múltiples opciones de pago para tu comodidad
                    </p>
                </div>
            </div>
        </div>
    );
}