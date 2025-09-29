import React, { useState, useEffect } from "react";
import { MarketingCampaign } from "../../data/marketing-campaigns";

interface CampaignFormProps {
  campaign?: MarketingCampaign | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (campaign: MarketingCampaign) => void;
  mode: "create" | "edit";
}

const CampaignForm: React.FC<CampaignFormProps> = ({
  campaign,
  isOpen,
  onClose,
  onSave,
  mode,
}) => {
  const [formData, setFormData] = useState<Partial<MarketingCampaign>>({
    id: "",
    title: "",
    description: "",
    active: false,
    startDate: "",
    endDate: "",
    socialMedia: [],
    discount: "",
    targetAudience: "",
    requirements: [],
    restrictions: [],
    terms: "",
    contactInfo: "",
  });

  const [newRequirement, setNewRequirement] = useState("");
  const [newRestriction, setNewRestriction] = useState("");
  const [newSocialMedia, setNewSocialMedia] = useState("");

  useEffect(() => {
    if (campaign && mode === "edit") {
      setFormData(campaign);
    } else {
      // Reset form for create mode
      setFormData({
        id: "",
        title: "",
        description: "",
        active: false,
        startDate: "",
        endDate: "",
        socialMedia: [],
        discount: "",
        targetAudience: "",
        requirements: [],
        restrictions: [],
        terms: "",
        contactInfo: "",
      });
    }
  }, [campaign, mode, isOpen]);

  const handleInputChange = (field: keyof MarketingCampaign, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setFormData((prev) => ({
        ...prev,
        requirements: [...(prev.requirements || []), newRequirement.trim()],
      }));
      setNewRequirement("");
    }
  };

  const removeRequirement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements?.filter((_, i) => i !== index) || [],
    }));
  };

  const addRestriction = () => {
    if (newRestriction.trim()) {
      setFormData((prev) => ({
        ...prev,
        restrictions: [...(prev.restrictions || []), newRestriction.trim()],
      }));
      setNewRestriction("");
    }
  };

  const removeRestriction = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      restrictions: prev.restrictions?.filter((_, i) => i !== index) || [],
    }));
  };

  const addSocialMedia = () => {
    if (newSocialMedia.trim()) {
      setFormData((prev) => ({
        ...prev,
        socialMedia: [...(prev.socialMedia || []), newSocialMedia.trim()],
      }));
      setNewSocialMedia("");
    }
  };

  const removeSocialMedia = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: prev.socialMedia?.filter((_, i) => i !== index) || [],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "create") {
      formData.id = `campaign-${Date.now()}`;
    }

    onSave(formData as MarketingCampaign);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === "create" ? "Crear Nueva Campaña" : "Editar Campaña"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título de la Campaña
              </label>
              <input
                type="text"
                value={formData.title || ""}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descuento/Premio
              </label>
              <input
                type="text"
                value={formData.discount || ""}
                onChange={(e) => handleInputChange("discount", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej: 30% de descuento en implantes"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              value={formData.description || ""}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Inicio
              </label>
              <input
                type="date"
                value={formData.startDate || ""}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Fin
              </label>
              <input
                type="date"
                value={formData.endDate || ""}
                onChange={(e) => handleInputChange("endDate", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.active || false}
                  onChange={(e) =>
                    handleInputChange("active", e.target.checked)
                  }
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  Campaña Activa
                </span>
              </label>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Redes Sociales
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newSocialMedia}
                onChange={(e) => setNewSocialMedia(e.target.value)}
                placeholder="Instagram, Facebook, etc."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addSocialMedia}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Agregar
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.socialMedia?.map((social, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                >
                  {social}
                  <button
                    type="button"
                    onClick={() => removeSocialMedia(index)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requisitos para Participar
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                placeholder="ej: Ser mayor de 18 años"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addRequirement}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Agregar
              </button>
            </div>
            <ul className="space-y-1">
              {formData.requirements?.map((req, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <span className="text-sm">• {req}</span>
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Restrictions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Restricciones
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newRestriction}
                onChange={(e) => setNewRestriction(e.target.value)}
                placeholder="ej: No acumulable con otras promociones"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addRestriction}
                className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
              >
                Agregar
              </button>
            </div>
            <ul className="space-y-1">
              {formData.restrictions?.map((restriction, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <span className="text-sm">• {restriction}</span>
                  <button
                    type="button"
                    onClick={() => removeRestriction(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms and Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Términos y Condiciones Detallados
            </label>
            <textarea
              value={formData.terms || ""}
              onChange={(e) => handleInputChange("terms", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={8}
              placeholder="Escribe aquí los términos y condiciones completos de la campaña..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Información de Contacto
            </label>
            <input
              type="text"
              value={formData.contactInfo || ""}
              onChange={(e) => handleInputChange("contactInfo", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ej: WhatsApp: 3164052829"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {mode === "create" ? "Crear Campaña" : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;
