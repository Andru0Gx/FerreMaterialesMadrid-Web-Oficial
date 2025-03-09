import { MapPin } from "lucide-react";

export function Location() {
    return (
        <div
            className="w-full bg-background h-96 flex flex-col items-center justify-center space-y-5 p-10"
        >
            <h2 className="text-2xl font-bold text-color-3">Nuestra Ubicación</h2>
            <div
                className="flex flex-col items-center justify-center bg-section sm:w-[28rem] h-64 rounded-xl p-4 space-y-5 shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]"
            >
                <MapPin size="50" color="var(--primary-color)" />
                <p className="text-center sm:w-72 text-color-2">
                    Carrera 5, cerca de la Plaza Bolívar a 20M de la Wrangler.<br />
                    Maturín, Estado Monagas, Venezuela
                </p>
                <a
                    className="text-background font-bold bg-primary py-2 px-4 rounded-full"
                    href="https://maps.app.goo.gl/hLSKQWNEKHDwdmRx7"
                    target="_blank"
                >
                    Ver en Google Maps
                </a>
            </div>
        </div>

    );
}