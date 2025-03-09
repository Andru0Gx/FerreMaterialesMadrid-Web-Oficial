export function Welcome() {
    return (
        <div
            className="w-full h-64 sm:h-96 bg-primary flex flex-col justify-center items-center text-white space-y-5 p-4"
        >
            <h1 className="text-lg font-bold text-center sm:text-4xl">
                Bienvenido a Ferre Materiales Madrid
            </h1>
            <p className="text-center text-xs sm:text-base">
                Tu ferretería de confianza en Maturín, Venezuela
            </p>
            <button
                className="font-bold text-primary bg-background px-3 py-1 sm:px-4 sm:py-3 rounded-full"
            >
                Comprar Ahora
            </button>
        </div>
    );
}

