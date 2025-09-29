import React, { useState } from "react";
import { MarketingCampaign } from "../../data/marketing-campaigns";

interface CampaignManagerProps {
  campaigns: MarketingCampaign[];
  onToggleCampaign: (campaignId: string) => void;
  onEditCampaign: (campaign: MarketingCampaign) => void;
  onDeleteCampaign: (campaignId: string) => void;
  onCreateCampaign: () => void;
}

const CampaignManager: React.FC<CampaignManagerProps> = ({
  campaigns,
  onToggleCampaign,
  onEditCampaign,
  onDeleteCampaign,
  onCreateCampaign,
}) => {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  const toggleCampaign = (campaignId: string) => {
    onToggleCampaign(campaignId);
  };

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Gestión de Campañas ({campaigns.length})
          </h3>
          <button
            onClick={onCreateCampaign}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Nueva Campaña</span>
          </button>
        </div>

        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className={`border rounded-lg p-4 ${
                campaign.active
                  ? "border-green-200 bg-green-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-1">
                    {campaign.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {campaign.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.active
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {campaign.active ? "ACTIVO" : "INACTIVO"}
                    </span>
                    <span className="text-gray-500">
                      {campaign.startDate} - {campaign.endDate}
                    </span>
                    <span className="text-gray-500">
                      {campaign.socialMedia.join(", ")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setSelectedCampaign(
                        selectedCampaign === campaign.id ? null : campaign.id
                      )
                    }
                    className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {selectedCampaign === campaign.id
                      ? "Ocultar"
                      : "Ver detalles"}
                  </button>

                  <button
                    onClick={() => onEditCampaign(campaign)}
                    className="px-3 py-1 text-sm text-green-600 hover:text-green-800 transition-colors"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => toggleCampaign(campaign.id)}
                    className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                      campaign.active
                        ? "bg-red-100 text-red-700 hover:bg-red-200"
                        : "bg-green-100 text-green-700 hover:bg-green-200"
                    }`}
                  >
                    {campaign.active ? "Desactivar" : "Activar"}
                  </button>

                  <button
                    onClick={() => {
                      if (
                        confirm(
                          `¿Estás seguro de que quieres eliminar la campaña "${campaign.title}"?`
                        )
                      ) {
                        onDeleteCampaign(campaign.id);
                      }
                    }}
                    className="px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              {selectedCampaign === campaign.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="space-y-3">
                    {campaign.discount && (
                      <div>
                        <strong className="text-gray-900">Descuento:</strong>
                        <span className="ml-2 text-gray-700">
                          {campaign.discount}
                        </span>
                      </div>
                    )}

                    {campaign.requirements &&
                      campaign.requirements.length > 0 && (
                        <div>
                          <strong className="text-gray-900">Requisitos:</strong>
                          <ul className="mt-1 ml-4 list-disc text-sm text-gray-700">
                            {campaign.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {campaign.restrictions &&
                      campaign.restrictions.length > 0 && (
                        <div>
                          <strong className="text-gray-900">
                            Restricciones:
                          </strong>
                          <ul className="mt-1 ml-4 list-disc text-sm text-gray-700">
                            {campaign.restrictions.map((restriction, index) => (
                              <li key={index}>{restriction}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {campaign.contactInfo && (
                      <div>
                        <strong className="text-gray-900">Contacto:</strong>
                        <span className="ml-2 text-sm text-gray-700">
                          {campaign.contactInfo}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignManager;
