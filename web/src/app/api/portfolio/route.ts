import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const type = formData.get("type") as string;
    
    if (type !== "feria" && type !== "semana-santa") {
      return NextResponse.json({ success: false, error: "Invalid portfolio type" }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public/uploads");
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    let imagePath = "";
    const imageFile = formData.get("image") as File;
    if (imageFile && "arrayBuffer" in imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const filePath = path.join(uploadsDir, filename);
      await fs.writeFile(filePath, buffer);
      imagePath = `/uploads/${filename}`;
    } else {
      return NextResponse.json({ success: false, error: "Image is required" }, { status: 400 });
    }

    const newItem = {
      id: "port_" + Date.now(),
      title: formData.get("title") as string,
      image: imagePath,
    };

    const jsonFilename = type === "feria" ? "feria.json" : "semana-santa.json";
    const jsonPath = path.join(process.cwd(), `src/data/${jsonFilename}`);
    
    const fileContent = await fs.readFile(jsonPath, "utf8");
    const items = JSON.parse(fileContent);
    items.push(newItem);
    await fs.writeFile(jsonPath, JSON.stringify(items, null, 2));

    return NextResponse.json({ success: true, item: newItem });
  } catch (error) {
    console.error("Error processing portfolio upload:", error);
    return NextResponse.json({ success: false, error: "Failed to upload item" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const type = formData.get("type") as string;
    const id = formData.get("id") as string;

    if (!id || (type !== "feria" && type !== "semana-santa")) {
      return NextResponse.json({ success: false, error: "Invalid parameters" }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public/uploads");
    let newImagePath = "";
    
    const imageFile = formData.get("image") as File;
    if (imageFile && "arrayBuffer" in imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const filePath = path.join(uploadsDir, filename);
      await fs.writeFile(filePath, buffer);
      newImagePath = `/uploads/${filename}`;
    }

    const existingImage = formData.get("existingImage") as string;
    const finalImage = newImagePath || existingImage;

    const jsonFilename = type === "feria" ? "feria.json" : "semana-santa.json";
    const jsonPath = path.join(process.cwd(), `src/data/${jsonFilename}`);
    
    const fileContent = await fs.readFile(jsonPath, "utf8");
    const items = JSON.parse(fileContent);
    
    const index = items.findIndex((i: any) => i.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: "Item not found" }, { status: 404 });
    }

    items[index] = {
      ...items[index],
      title: formData.get("title") as string,
      image: finalImage,
    };

    await fs.writeFile(jsonPath, JSON.stringify(items, null, 2));

    return NextResponse.json({ success: true, item: items[index] });
  } catch (error) {
    console.error("Error updating portfolio item:", error);
    return NextResponse.json({ success: false, error: "Failed to update item" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const type = url.searchParams.get("type");

    if (!id || (type !== "feria" && type !== "semana-santa")) {
      return NextResponse.json({ success: false, error: "Invalid parameters" }, { status: 400 });
    }

    const jsonFilename = type === "feria" ? "feria.json" : "semana-santa.json";
    const jsonPath = path.join(process.cwd(), `src/data/${jsonFilename}`);
    
    const fileContent = await fs.readFile(jsonPath, "utf8");
    let items = JSON.parse(fileContent);
    
    const exists = items.some((i: any) => i.id === id);
    if (!exists) {
      return NextResponse.json({ success: false, error: "Item not found" }, { status: 404 });
    }

    items = items.filter((i: any) => i.id !== id);
    await fs.writeFile(jsonPath, JSON.stringify(items, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting portfolio item:", error);
    return NextResponse.json({ success: false, error: "Failed to delete item" }, { status: 500 });
  }
}
