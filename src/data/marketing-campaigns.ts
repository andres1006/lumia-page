export interface MarketingCampaign {
  id: string;
  title: string;
  description: string;
  active: boolean;
  startDate: string;
  endDate: string;
  socialMedia: string[];
  terms: string;
  imageUrl?: string;
  discount?: string;
  targetAudience?: string;
  requirements?: string[];
  restrictions?: string[];
  contactInfo?: string;
}

export const marketingCampaigns: MarketingCampaign[] = [
  {
    id: "sorteo-instagram-dic-2024",
    title: "Sorteo Instagram - Navidad 2024",
    description: "Participa en nuestro sorteo de Instagram y gana un tratamiento completo de diseño de sonrisa",
    active: true,
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    socialMedia: ["Instagram", "Facebook"],
    discount: "100% de descuento en diseño de sonrisa",
    targetAudience: "Seguidores de Instagram y Facebook de LUMIA",
    requirements: [
      "Ser mayor de 18 años",
      "Seguir @lumiaodontologia en Instagram",
      "Compartir la publicación en historias",
      "Etiquetar a 3 amigos en los comentarios"
    ],
    restrictions: [
      "No acumulable con otras promociones",
      "Válido solo para nuevos pacientes",
      "No aplica para tratamientos iniciados previamente"
    ],
    terms: `
      LUMIA ODONTOLOGÍA S.A.S. realizará un sorteo a través de sus redes sociales oficiales con las siguientes condiciones:

      1. PERÍODO DE PARTICIPACIÓN: Del 1 al 31 de diciembre de 2024.

      2. REQUISITOS PARA PARTICIPAR:
         - Ser mayor de 18 años
         - Seguir la cuenta oficial @lumiaodontologia en Instagram
         - Compartir la publicación del sorteo en historias de Instagram
         - Etiquetar a 3 amigos en los comentarios de la publicación
         - Completar el formulario de registro en el enlace de la biografía

      3. PREMIO: Un tratamiento completo de diseño de sonrisa valorado en $2,500,000 COP, que incluye:
         - Consulta de valoración inicial
         - Plan de tratamiento personalizado
         - Tratamiento de diseño de sonrisa completo
         - Seguimiento post-tratamiento

      4. SELECCIÓN DEL GANADOR: Se realizará el 2 de enero de 2025 mediante sorteo aleatorio entre todos los participantes que cumplan con los requisitos.

      5. COMUNICACIÓN: El ganador será contactado vía Instagram directo y deberá responder en un plazo máximo de 48 horas. Si no responde, se elegirá un nuevo ganador.

      6. RESTRICCIONES:
         - El premio no es transferible ni canjeable por dinero
         - No acumulable con otras promociones vigentes
         - Válido solo para nuevos pacientes de LUMIA
         - No aplica para tratamientos ya iniciados
         - El tratamiento debe realizarse en la sede de Manizales

      7. VIGENCIA DEL PREMIO: El ganador tiene 6 meses para reclamar y programar su tratamiento a partir de la fecha de notificación.

      8. DATOS PERSONALES: Los datos proporcionados serán tratados conforme a nuestra política de privacidad disponible en www.lumiaodontologia.com/privacidad

      9. EXCLUSIONES: No podrán participar empleados de LUMIA ni familiares directos hasta segundo grado de consanguinidad.

      10. MODIFICACIONES: LUMIA se reserva el derecho de modificar o cancelar esta promoción en cualquier momento, informando a los participantes a través de las redes sociales.
    `,
    contactInfo: "Para consultas: WhatsApp 3164052829 o Instagram @lumiaodontologia"
  },
];

export function getActiveCampaigns(): MarketingCampaign[] {
  return marketingCampaigns.filter(campaign => campaign.active);
}

export function getCampaignById(id: string): MarketingCampaign | undefined {
  return marketingCampaigns.find(campaign => campaign.id === id);
}
