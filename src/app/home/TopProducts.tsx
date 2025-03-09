import { Box } from "lucide-react";
import { HighlightedProducts } from "@/consts/HighlightedProducts";
import { CustomImage } from "@/components/Image";

export function TopProducts() {
    const cards =
        "bg-section text-color-3 h-96 w-60 sm:w-80 p-5 rounded-xl shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] xl:hover:scale-105 transition-all";
    return (
        <div className="bg-background p-10 pt-8 flex flex-col space-y-5 overflow-hidden">
            <h2 className="text-2xl font-bold text-color-3">
                Productos Destacados
            </h2>
            <div className="lg:flex grid grid-flow-col space-x-10 justify-evenly overflow-x-auto p-5">
                {HighlightedProducts.map(({ name, price, ref, image }) => (
                    <div key={name} className={cards}>
                        <div className="h-48 bg-background rounded-t-xl overflow-hidden items-center justify-center flex">
                            {image === null ? (
                                <Box size="100" />
                            ) : (
                                <CustomImage
                                    src={image}
                                    alt={name}
                                    fill={true}
                                    class_name="object-contain "
                                />

                                // <Image
                                //     src={image}
                                //     alt={name}
                                //     className="h-full w-full object-cover"
                                // />
                            )}
                        </div>
                        <div className="pt-3 flex flex-col space-y-2">
                            <h3 className="text-xl font-bold">{name}</h3>
                            <div className="text-color-1 text-base">
                                <p>{price}</p>
                                <p>{ref}</p>
                            </div>
                            <button className="bg-primary font-bold text-white w-full h-12 rounded-xl">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
