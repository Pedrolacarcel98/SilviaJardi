"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PortfolioItem, PortfolioType } from "@/data/mockPortfolio";

interface PortfolioFormProps {
  type: PortfolioType;
  initialData?: PortfolioItem;
}

export default function PortfolioForm({ type, initialData }: PortfolioFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [title, setTitle] = useState(initialData?.title || "");
  const [existingImage, setExistingImage] = useState<string | null>(initialData?.image || null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newPreview, setNewPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setNewImage(file);
        setNewPreview(URL.createObjectURL(file));
      }
    }
  };

  const removeImage = () => {
    setNewImage(null);
    if (newPreview) URL.revokeObjectURL(newPreview);
    setNewPreview(null);
    setExistingImage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!existingImage && !newImage) {
      setError("Debes añadir una foto.");
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("title", title);

      if (initialData) {
        formData.append("id", initialData.id);
        if (existingImage) {
          formData.append("existingImage", existingImage);
        }
      }

      if (newImage) {
        formData.append("image", newImage);
      }

      const method = initialData ? "PUT" : "POST";
      const response = await fetch("/api/portfolio", {
        method,
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push(`/admin/portfolio/${type}`);
          router.refresh();
        }, 2000);
      } else {
        setError(data.error || "Hubo un error al guardar.");
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
        <span className="material-symbols-outlined text-[64px] text-primary mb-4">check_circle</span>
        <h2 className="font-great-vibes text-[48px] font-normal mb-2">¡Guardado!</h2>
        <p className="font-body-lg">La foto se ha {initialData ? "actualizado" : "añadido"} correctamente.</p>
        <p className="text-sm mt-4 opacity-75">Volviendo a la sección...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-low p-6 md:p-10">
      {error && (
        <div className="bg-error-container text-on-error-container p-4 rounded-lg mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined">error</span>
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block font-label-md text-[14px] text-on-surface-variant mb-2">Título / Modelo *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder={type === "feria" ? "Ej. Traje Canastero Rojo" : "Ej. Túnica de Cola Morada"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <label className="block font-label-md text-[14px] text-on-surface-variant">Foto del Modelo *</label>
          
          {(!existingImage && !newPreview) ? (
            <div 
              className="border-2 border-dashed border-secondary/50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-secondary-container/30 transition-colors bg-surface-container-low aspect-[3/4]"
              onClick={() => fileInputRef.current?.click()}
            >
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileSelect} />
              <span className="material-symbols-outlined text-[48px] text-secondary mb-4">add_a_photo</span>
              <p className="font-body-md text-on-surface font-medium mb-1">Toca aquí para seleccionar</p>
            </div>
          ) : (
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-surface-container-high group max-w-sm mx-auto w-full">
              <Image src={newPreview || existingImage!} alt="Preview" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={removeImage}
                  className="bg-error text-on-error p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 flex justify-end gap-4 border-t border-surface-container pt-6">
        <button
          type="button"
          onClick={() => router.push(`/admin/portfolio/${type}`)}
          className="px-6 py-3 rounded-full font-label-md text-primary hover:bg-surface-container-low transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 rounded-full bg-secondary text-on-secondary font-label-md font-semibold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
              Guardando...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">save</span>
              {initialData ? "Actualizar" : "Publicar"}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
