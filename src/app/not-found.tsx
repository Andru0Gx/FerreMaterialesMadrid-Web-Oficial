import Link from "next/link";

export default function error() {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-5 m-auto">
                <h1 className="text-9xl font-bold text-color-2">404</h1>
                <h2 className="text-4xl font-bold">¡Ups! Parece que te has perdido...</h2>
                <p className="text-xl text-center">
                    La página que buscas no existe o se ha mudado.<br />No te preocupes,
                    ¡te ayudamos a volver al camino!
                </p>

                <Link
                    href="/"
                    className="text-2xl bg-color-3 text-white no-underline px-6 py-3 rounded-lg"
                >
                    Volver al inicio
                </Link>
            </div>

            <style>
                {`
                body {
                    background-color: var(--primary-color);
                }

                h1 {
                    text-shadow: 5px 5px 0 var(--color-3);
                }
                `}
            </style>
        </>
    );
}
