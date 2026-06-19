export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const redirectUrl = process.env.REDIRECT_URL || 'https://example.com/offer';
  const adsterraId = process.env.ADSTERA_ID || '';
  const agencyAdUrl = process.env.AGENCY_AD_URL || '';
  const agencyAdLabel = process.env.AGENCY_AD_LABEL || 'Special Agency Offer';

  return res.status(200).json({
    redirectUrl,
    adsterraId,
    agencyAdUrl,
    agencyAdLabel
  });
}

