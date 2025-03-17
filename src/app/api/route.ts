// app/api/products/route.ts
import { NextResponse } from "next/server";
import { turso } from "@/lib/turso";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    let query = "SELECT * FROM Products WHERE 1=1";
    const params = [];

    // Construir query dinámica
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");
    const stock = searchParams.get("stock");
    const offers = searchParams.get("offers");

    if (category && category !== "All") {
        query += " AND category = ?";
        params.push(category);
    }

    if (brand && brand !== "All") {
        query += " AND brand = ?";
        params.push(brand);
    }

    if (stock === "true") {
        query += " AND stock > 0";
    }

    if (offers === "true") {
        query += " AND isOnSale = true";
    }

    try {
        const result = await turso.execute({ sql: query, args: params });
        return NextResponse.json(result.rows);
    } catch {
        return NextResponse.json(
            { error: "Error fetching products" },
            { status: 500 }
        );
    }
}
