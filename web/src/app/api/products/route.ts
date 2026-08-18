import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    // Process images
    const images: string[] = [];
    for (const [key, value] of formData.entries()) {
      if (key === "images" && typeof value === "object" && "arrayBuffer" in value) {
        const file = value as File;
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        // Use a unique name
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
        const filePath = path.join(uploadsDir, filename);
        
        await fs.writeFile(filePath, buffer);
        images.push(`/uploads/${filename}`);
      }
    }

    // Process other fields
    const newProduct: any = {
      id: "prod_" + Date.now(),
      name: formData.get("name") as string,
      price: parseFloat(formData.get("price") as string),
      description: formData.get("description") as string,
      materials: (formData.get("materials") as string)?.split("\n").filter(Boolean) || [],
      careGuide: formData.get("careGuide") as string,
      category: formData.get("category") as string,
      sizes: ["Talla Única"], // Simplification for the form
      isNew: true,
      images: images,
    };
    
    const salePriceStr = formData.get("salePrice") as string;
    if (salePriceStr && !isNaN(parseFloat(salePriceStr))) {
      newProduct.salePrice = parseFloat(salePriceStr);
    }

    // Update products.json
    const jsonPath = path.join(process.cwd(), "src/data/products.json");
    const fileContent = await fs.readFile(jsonPath, "utf8");
    const products = JSON.parse(fileContent);
    
    products.push(newProduct);
    
    await fs.writeFile(jsonPath, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Error processing product upload:", error);
    return NextResponse.json(
      { success: false, error: "Failed to upload product" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const id = formData.get("id") as string;
    
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing product ID" }, { status: 400 });
    }
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    // Process new images if any
    const newImages: string[] = [];
    for (const [key, value] of formData.entries()) {
      if (key === "newImages" && typeof value === "object" && "arrayBuffer" in value) {
        const file = value as File;
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
        const filePath = path.join(uploadsDir, filename);
        
        await fs.writeFile(filePath, buffer);
        newImages.push(`/uploads/${filename}`);
      }
    }
    
    // Get existing images that were kept
    const existingImagesRaw = formData.get("existingImages") as string;
    const existingImages: string[] = existingImagesRaw ? JSON.parse(existingImagesRaw) : [];

    const finalImages = [...existingImages, ...newImages];

    const jsonPath = path.join(process.cwd(), "src/data/products.json");
    const fileContent = await fs.readFile(jsonPath, "utf8");
    const products = JSON.parse(fileContent);
    
    const productIndex = products.findIndex((p: any) => p.id === id);
    if (productIndex === -1) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
    }

    const updatedProduct = {
      ...products[productIndex],
      name: formData.get("name") as string,
      price: parseFloat(formData.get("price") as string),
      description: formData.get("description") as string,
      materials: (formData.get("materials") as string)?.split("\n").filter(Boolean) || [],
      careGuide: formData.get("careGuide") as string,
      images: finalImages.length > 0 ? finalImages : products[productIndex].images, // Fallback to old if empty somehow
    };
    
    const salePriceStr = formData.get("salePrice") as string;
    if (salePriceStr && !isNaN(parseFloat(salePriceStr))) {
      updatedProduct.salePrice = parseFloat(salePriceStr);
    } else {
      delete updatedProduct.salePrice; // Remove sale if cleared
    }

    products[productIndex] = updatedProduct;
    
    await fs.writeFile(jsonPath, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error("Error processing product update:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing product ID" }, { status: 400 });
    }

    const jsonPath = path.join(process.cwd(), "src/data/products.json");
    const fileContent = await fs.readFile(jsonPath, "utf8");
    let products = JSON.parse(fileContent);
    
    const productExists = products.some((p: any) => p.id === id);
    if (!productExists) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
    }

    products = products.filter((p: any) => p.id !== id);
    
    await fs.writeFile(jsonPath, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
