

export function Categories() {
    const catbuttons =
        "bg-background text-color-3 font-bold h-12 w-56 rounded-xl shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:scale-105 transition-all sm:h-16 sm:w-64 sm:text-lg";

    return (
        <>
            <div
                className="bg-section p-10 pt-16 flex flex-col space-y-5 items-center sm:items-stretch"
            >
                <h2 className="text-2xl sm:text-2xl font-bold text-color-3">
                    Categorías Destacadas
                </h2>
                <div
                    className="flex flex-col space-y-4 sm:justify-between sm:space-y-0 sm:flex-row sm:space-x-10"
                >
                    <button className={catbuttons}> Herramientas </button>
                    <button className={catbuttons}> Electricidad </button>
                    <button className={catbuttons}> Plomería </button>
                    <button className={catbuttons}> Pintura </button>
                </div>
            </div >
        </>
    );
}
