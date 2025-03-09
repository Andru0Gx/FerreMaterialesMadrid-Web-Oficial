import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    class_name?: string;
    priority?: boolean;
}

export function CustomImage({
    src,
    alt,
    width,
    height,
    class_name = "",
    priority = false,
    fill = false,
}: ImageProps) {
    if (fill === true) {
        return (
            <div className="relative h-full w-full">
                <Image
                    src={src}
                    alt={alt}
                    fill={true}
                    className={class_name + " mix-blend-multiply"}
                    priority={priority}
                    quality={20}
                    sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                />
            </div>
        );
    } else {
        return (
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={class_name + " mix-blend-multiply"}
                priority={priority}
                quality={20}
                sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
        );
    }
}
