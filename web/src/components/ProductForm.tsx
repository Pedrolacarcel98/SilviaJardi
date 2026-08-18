"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/data/mockProducts";

interface ProductFormProps {
  categorySlug: string;
  categoryName: string;
  initialData?: Product;
}

export default function ProductForm({ categorySlug, categoryName, initialData }: ProductFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Form state
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [price, setPrice] = useState(initialData?.price.toString() || "");
  const [salePrice, setSalePrice] = useState(initialData?.salePrice?.toString() || "");
  const [materials, setMaterials] = useState(initialData?.materials.join("\n") || "");
  const [careGuide, setCareGuide] = useState(initialData?.careGuide || "");
  
  // Images
  const [existingImages, setExistingImages] = useState<string[]>(initialData?.images || []);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newPreviews, setNewPreviews] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = (files: File[]) => {
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    
    setNewImages(prev => [...prev, ...validFiles]);
    
    // Generate previews
    const generatedPreviews = validFiles.map(file => URL.createObjectURL(file));
    setNewPreviews(prev => [...prev, ...generatedPreviews]);
  };

  const removeExistingImage = (index: number) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeNewImage = (index: number) => {
    setNewImages(prev => prev.filter((_, i) => i !== index));
    URL.revokeObjectURL(newPreviews[index]);
    setNewPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (existingImages.length === 0 && newImages.length === 0) {
      setError("Debes dejar al menos una foto del producto.");
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("salePrice", salePrice);
      formData.append("materials", materials);
      formData.append("careGuide", careGuide);
      formData.append("category", categorySlug);

      if (initialData) {
        formData.append("id", initialData.id);
        formData.append("existingImages", JSON.stringify(existingImages));
        newImages.forEach(image => {
          formData.append("newImages", image);
        });
      } else {
        newImages.forEach(image => {
          formData.append("images", image);
        });
      }

      const method = initialData ? "PUT" : "POST";
      const response = await fetch("/api/products", {
        method,
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        if (!initialData) {
          // Clean up form only if it's a new product
          setName("");
          setDescription("");
          setPrice("");
          setSalePrice("");
          setMaterials("");
          setCareGuide("");
          setNewImages([]);
        }
        
        newPreviews.forEach(p => URL.revokeObjectURL(p));
        setNewPreviews([]);
        
        setTimeout(() => {
          router.push(`/admin/categoria/${categorySlug}`);
          router.refresh();
        }, 2000);
      } else {
        setError(data.error || "Hubo un error al guardar el producto.");
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-primary-container text-on-primary-container p-8 rounded-xl text-center shadow-sm">
        <span className="material-symbols-outlined text-[64px] text-primary mb-4">
          check_circle
        </span>
        <h2 className="font-great-vibes text-[48px] font-normal mb-2">¡Guardado!</h2>
        <p className="font-body-lg">El producto se ha {initialData ? "actualizado" : "añadido"} correctamente.</p>
        <p className="text-sm mt-4 opacity-75">Volviendo a la categoría...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-low p-6 md:p-10 mb-12">
      {error && (
        <div className="bg-error-container text-on-error-container p-4 rounded-lg mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined">error</span>
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Basic Info */}
        <div className="flex flex-col gap-6">
          <div>
            <label className="block font-label-md text-[14px] text-on-surface-variant mb-2">
              Título del Producto *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="Ej. Pelele de Punto Celeste"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-label-md text-[14px] text-on-surface-variant mb-2">
                Precio (€) *
              </label>
              <input
                type="number"
                step="0.01"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="38.50"
              />
            </div>
            <div>
              <label className="block font-label-md text-[14px] text-on-surface-variant mb-2">
                Precio Rebajado (Opcional)
              </label>
              <input
                type="number"
                step="0.01"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                className="w-full bg-surface-container-low border border-error/50 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-error focus:ring-1 focus:ring-error transition-colors"
                placeholder="29.99"
              />
            </div>
          </div>

          <div>
            <label className="block font-label-md text-[14px] text-on-surface-variant mb-2">
              Descripción *
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              placeholder="Describe los detalles del producto..."
            />
          </div>

          <div>
            <label className="block font-label-md text-[14px] text-on-surface-variant mb-2">
              Materiales (Opcional, uno por línea)
            </label>
            <textarea
              value={materials}
              onChange={(e) => setMaterials(e.target.value)}
              rows={3}
              className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              placeholder="100% Algodón&#10;Forro polar"
            />
          </div>

          <div>
            <label className="block font-label-md text-[14px] text-on-surface-variant mb-2">
              Cuidados (Opcional)
            </label>
            <input
              type="text"
              value={careGuide}
              onChange={(e) => setCareGuide(e.target.value)}
              className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="Ej. Lavado a máquina a 30º"
            />
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="flex flex-col gap-6">
          <label className="block font-label-md text-[14px] text-on-surface-variant">
            Fotos del Producto *
          </label>
          
          <div 
            className="border-2 border-dashed border-secondary/50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-secondary-container/30 transition-colors bg-surface-container-low min-h-[200px]"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
            <span className="material-symbols-outlined text-[48px] text-secondary mb-4">
              add_a_photo
            </span>
            <p className="font-body-md text-on-surface font-medium mb-1">
              Toca aquí para seleccionar fotos
            </p>
            <p className="font-body-sm text-[14px] text-on-surface-variant">
              o arrastra las imágenes hasta este recuadro
            </p>
          </div>

          {/* Previews (Existing + New) */}
          {(existingImages.length > 0 || newPreviews.length > 0) && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {/* Existing Images */}
              {existingImages.map((img, index) => (
                <div key={`exist-${index}`} className="relative aspect-square rounded-lg overflow-hidden border border-surface-container-high group">
                  <Image src={img} alt={`Existing ${index}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeExistingImage(index);
                      }}
                      className="bg-error text-on-error p-2 rounded-full hover:scale-110 transition-transform"
                      title="Eliminar foto"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
              
              {/* New Previews */}
              {newPreviews.map((preview, index) => (
                <div key={`new-${index}`} className="relative aspect-square rounded-lg overflow-hidden border-2 border-secondary group">
                  <Image src={preview} alt={`New ${index}`} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-secondary text-on-secondary text-[10px] px-2 py-1 rounded-full font-bold">NUEVA</div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeNewImage(index);
                      }}
                      className="bg-error text-on-error p-2 rounded-full hover:scale-110 transition-transform"
                      title="Eliminar foto"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 flex justify-end gap-4 border-t border-surface-container pt-6">
        <button
          type="button"
          onClick={() => router.push(`/admin/categoria/${categorySlug}`)}
          className="px-6 py-3 rounded-full font-label-md text-primary hover:bg-surface-container-low transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 rounded-full bg-secondary text-on-secondary font-label-md font-semibold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
              Guardando...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">save</span>
              {initialData ? "Actualizar Producto" : "Publicar Producto"}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
