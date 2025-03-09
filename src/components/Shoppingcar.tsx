import { ShoppingCart } from "lucide-react";

interface ShoppingCarProps {
    layout: string;
}

export function ShoppingCar({ layout }: ShoppingCarProps) {
    return (
        <div className="size-14 p-2 flex justify-start items-end relative">
            {
                // si el layout es 0 entonces se muestra el carrito Si no se muestra el carrito sin el bg-primary
                (layout === "0" && (
                    <>
                        <div className=" bg-primary text-background flex items-center justify-center rounded-full p-2">
                            <ShoppingCart size="24" />
                        </div>
                        <div
                            className="bg-color-3 size-6 rounded-full absolute right-0 top-0 flex items-center justify-center"
                        >
                            {/* TODO Modify the Quantity if the user has more then 99 just said +99 */}

                            <span className="text-white text-xs">+99</span>
                        </div>
                    </>
                )) || (
                    <>
                        <div className=" text-primary flex items-center justify-center rounded-full p-2">
                            <ShoppingCart size="24" />
                        </div>

                        <div
                            className="size-6 rounded-full absolute right-0 top-0 flex items-center justify-center"
                        >
                            {/* TODO Modify the Quantity if the user has more then 99 just said +99 */}

                            <span className="text-color-3 text-xs">+99</span>
                        </div>
                    </>
                )
            }

        </div>
    );
}