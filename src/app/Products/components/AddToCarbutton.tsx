"use client";
import { useState } from "react";

export function AddToCartButton() {
    const [showQuantityButtons, setShowQuantityButtons] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const MAX_QUANTITY = 10;

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        } else {
            setShowQuantityButtons(false);
        }
    };

    const handlePlus = () => {
        if (quantity < MAX_QUANTITY) {
            setQuantity((prev) => prev + 1);
        }
    };

    const handleAddToCart = () => {
        setShowQuantityButtons(true);
        setQuantity(1);
        // TODO: Implementar lógica para agregar al carrito
    };

    return (
        <div>
            {showQuantityButtons ? (
                <div className="flex justify-between items-center text-lg bg-section rounded-lg border-2 overflow-hidden">
                    <button
                        onClick={handleMinus}
                        className="text-center w-8 lg:w-10 hover:bg-color-1 cursor-pointer"
                        aria-label="Reducir cantidad"
                    >
                        -
                    </button>
                    <span
                        className="bg-background w-10 lg:w-12 text-center select-none"
                        aria-live="polite"
                    >
                        {quantity}
                    </span>
                    <button
                        onClick={handlePlus}
                        className="text-center w-8 lg:w-10 hover:bg-color-1 cursor-pointer"
                        aria-label="Aumentar cantidad"
                    >
                        +
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleAddToCart}
                    className="py-2 px-2 lg:px-6 rounded-lg bg-primary text-white hover:bg-amber-600 cursor-pointer"
                    aria-label="Agregar al carrito"
                >
                    Agregar al Carrito
                </button>
            )}
        </div>
    );
}
