"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LogoExtendido } from "@/icons/LogoExtendido";
// import { SearchBar } from './Searchbar';
// import { ShoppingCar } from './Shoppingcar';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Pages = [
        {
            name: "Inicio",
            url: "/",
            disabled: false,
            soondate: "¡Proximamente!",
        },
        {
            name: "Productos",
            url: "/Products",
            disabled: true,
            soondate: "¡Proximamente!",
        },
        {
            name: "Blog",
            url: "/blog",
            disabled: true,
            soondate: "¡Proximamente!",
        },
        {
            name: "Únete a Nosotros",
            url: "/JoinUs",
            disabled: true,
            soondate: "¡Proximamente!",
        },
        // {
        //     name: "Admin",
        //     url: "/AdminPage",
        //     disabled: true,
        //     soondate: "¡Proximamente!",
        // },
    ];

    const pages = Pages.map((page) => ({
        ...page,
        active: pathname === page.url,
    }));

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50">
            {/* Versión Desktop */}
            <div className="w-full bg-background h-24 p-6 items-center justify-between shadow-lg hidden xl:flex">
                <Link href="/" className="flex items-center h-full px-4">
                    <LogoExtendido
                        color1="var(--primary-color)"
                        color2="#000"
                        Height="48"
                    />
                </Link>

                <nav className="flex justify-center text-color-2">
                    {pages.map(({ name, url, disabled, soondate, active }) => (
                        <div
                            key={name}
                            className="flex flex-col mx-6 text-center"
                        >
                            <Link
                                href={disabled ? "#" : url}
                                className={`${
                                    disabled ? "pointer-events-none" : ""
                                } ${active ? "current-page" : ""}`}
                            >
                                {name}
                            </Link>
                            {disabled && (
                                <span className="text-xs text-primary">
                                    {soondate}
                                </span>
                            )}
                        </div>
                    ))}
                </nav>

                {/* //! DESCOMENTAR */}
                <div className="flex items-center justify-end gap-4">
                    {/* <SearchBar />
                    <ShoppingCar layout="0" />
                    <button className="text-primary font-bold text-lg px-4 py-2 rounded-full hover:bg-[#FFEDD5]">
                        Iniciar Sesión
                    </button> */}
                </div>
            </div>

            {/* Versión Mobile */}
            {/* Cambiar h-24  a h-40 */}
            <div className="w-full bg-background h-24 p-6 shadow-lg flex flex-col space-y-3 xl:hidden">
                <div className="flex items-center justify-between">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-primary text-2xl"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X size={40} id="close-menu" />
                            ) : (
                                <Menu size={40} id="Menu" />
                            )}
                        </button>
                    </div>

                    {/* //! Al descomentar, esto debe volver dentro del div de arriba (junto con el HamMenu) */}
                    <Link href="/" className="flex items-center h-full px-4">
                        <LogoExtendido
                            color1="var(--primary-color)"
                            color2="#000"
                            Height="24"
                        />
                    </Link>

                    {/* <div className="flex items-center justify-end gap-4">
                        <ShoppingCar layout="1" />
                        <button className="text-primary font-bold text-xs rounded-full hover:bg-[#FFEDD5]">
                            Iniciar Sesión
                        </button>
                    </div> */}
                </div>

                {/* <div>
                    <SearchBar />
                </div> */}

                {/* Cambiar top-24  a top-40 */}
                <nav
                    className={`absolute top-24 left-0 w-full bg-section shadow-lg transition-opacity duration-300 ease-in-out ${
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="flex flex-col items-center space-y-10 py-5">
                        {pages.map(
                            ({ name, url, disabled, soondate, active }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center"
                                >
                                    <Link
                                        href={disabled ? "#" : url}
                                        className={`${
                                            active ? "current-page" : ""
                                        } ${
                                            disabled
                                                ? "pointer-events-none"
                                                : ""
                                        }`}
                                        onClick={toggleMenu}
                                    >
                                        {name}
                                    </Link>
                                    {disabled && soondate && (
                                        <span className="text-xs text-primary">
                                            {soondate}
                                        </span>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </nav>
            </div>

            <style>{`
                .current-page {
                    border-bottom: 2px solid var(--primary-color);
                }
            `}</style>
        </header>
    );
}
