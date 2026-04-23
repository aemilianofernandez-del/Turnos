async function cargarEmpresa() {
  const slug = new URLSearchParams(window.location.search).get('empresa');
  if (!slug) return null;

  try {
    const res   = await fetch('./empresas.json');
    const lista = await res.json();
    const found = lista.find(e => e.slug === slug);
    if (found) CONFIG.appsScriptUrl = found.url;
    return found || null;
  } catch (e) {
    console.error('No se pudo cargar el registro de empresas:', e);
    return null;
  }
}
