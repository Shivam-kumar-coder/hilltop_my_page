export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const redirectUrl = process.env.REDIRECT_URL || '';
  const adScriptUrl = process.env.NEXT_PUBLIC_AD_SCRIPT_URL || process.env.AD_SCRIPT_URL || '';
  const adZoneId = process.env.NEXT_PUBLIC_AD_ZONE_ID || process.env.AD_ZONE_ID || '';
  const vignetteId = process.env.NEXT_PUBLIC_VIGNETTE_ID || process.env.VIGNETTE_ID || '';
  const pushId = process.env.NEXT_PUBLIC_PUSH_ID || process.env.PUSH_ID || '';

  return res.status(200).json({
    redirectUrl,
    adScriptUrl,
    adZoneId,
    vignetteId,
    pushId
  });
}
