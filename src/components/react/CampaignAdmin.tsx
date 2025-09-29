import React, { useState, useEffect } from "react";
import { MarketingCampaign } from "../../data/marketing-campaigns";
import CampaignManager from "./CampaignManager";
import CampaignForm from "./CampaignForm";

const CampaignAdmin: React.FC = () => {
  const [campaigns, setCampaigns] = useState<MarketingCampaign[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] =
    useState<MarketingCampaign | null>(null);
  const [formMode, setFormMode] = useState<"create" | "edit">("create");

  // Load campaigns from data attribute
  useEffect(() => {
    const adminElement = document.getElementById("campaign-admin");
    if (adminElement) {
      const campaignsData = adminElement.getAttribute("data-campaigns");
      if (campaignsData) {
        try {
          const parsedCampaigns = JSON.parse(campaignsData);
          setCampaigns(parsedCampaigns);
        } catch (error) {
          console.error("Error parsing campaigns data:", error);
        }
      }
    }
  }, []);

  const handleToggleCampaign = (campaignId: string) => {
    setCampaigns((prevCampaigns) =>
      prevCampaigns.map((campaign) =>
        campaign.id === campaignId
          ? { ...campaign, active: !campaign.active }
          : campaign
      )
    );
  };

  const handleEditCampaign = (campaign: MarketingCampaign) => {
    setEditingCampaign(campaign);
    setFormMode("edit");
    setIsFormOpen(true);
  };

  const handleDeleteCampaign = (campaignId: string) => {
    const campaign = campaigns.find((c) => c.id === campaignId);
    if (
      campaign &&
      confirm(
        `¿Estás seguro de que quieres eliminar la campaña "${campaign.title}"?`
      )
    ) {
      setCampaigns((prevCampaigns) =>
        prevCampaigns.filter((campaign) => campaign.id !== campaignId)
      );
    }
  };

  const handleCreateCampaign = () => {
    setEditingCampaign(null);
    setFormMode("create");
    setIsFormOpen(true);
  };

  const handleSaveCampaign = (campaignData: MarketingCampaign) => {
    if (formMode === "create") {
      // Create new campaign
      const newCampaign: MarketingCampaign = {
        ...campaignData,
        id: `campaign-${Date.now()}`,
      };
      setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
    } else {
      // Update existing campaign
      setCampaigns((prevCampaigns) =>
        prevCampaigns.map((campaign) =>
          campaign.id === editingCampaign?.id
            ? { ...campaign, ...campaignData }
            : campaign
        )
      );
    }
    setIsFormOpen(false);
    setEditingCampaign(null);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingCampaign(null);
  };

  return (
    <>
      <CampaignManager
        campaigns={campaigns}
        onToggleCampaign={handleToggleCampaign}
        onEditCampaign={handleEditCampaign}
        onDeleteCampaign={handleDeleteCampaign}
        onCreateCampaign={handleCreateCampaign}
      />

      <CampaignForm
        campaign={editingCampaign}
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSave={handleSaveCampaign}
        mode={formMode}
      />
    </>
  );
};

export default CampaignAdmin;
