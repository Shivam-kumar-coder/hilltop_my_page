module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const redirectUrl = process.env.REDIRECT_URL || process.env.NEXT_PUBLIC_REDIRECT_URL || '';
  const adScriptUrl = process.env.AD_SCRIPT_URL || process.env.NEXT_PUBLIC_AD_SCRIPT_URL || '';
  const adZoneId = process.env.AD_ZONE_ID || process.env.NEXT_PUBLIC_AD_ZONE_ID || '';
  const vignetteId = process.env.VIGNETTE_ID || process.env.NEXT_PUBLIC_VIGNETTE_ID || '';
  const inPagePushId = process.env.IN_PAGE_PUSH_ID || process.env.NEXT_PUBLIC_IN_PAGE_PUSH_ID || process.env.PUSH_ID || process.env.NEXT_PUBLIC_PUSH_ID || '11189726';
  const pushNotifyId = process.env.PUSH_NOTIFY_ID || process.env.NEXT_PUBLIC_PUSH_NOTIFY_ID || '11189728';

  return res.status(200).json({
    redirectUrl,
    adScriptUrl,
    adZoneId,
    vignetteId,
    inPagePushId,
    pushNotifyId
  });
};
