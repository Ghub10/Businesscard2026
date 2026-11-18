import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BusinessCard from "../components/BusinessCard/BusinessCard.jsx";
import { isSupabaseConfigured } from "../lib/env";
import { logPageViewRpc } from "../lib/supabase";

/**
 * The public card (served at / and /p/:slug).
 * All card text and links live in src/components/BusinessCard/cardData.js.
 */
export function PublicPage() {
  const { slug = "" } = useParams();

  // Count the visit for the admin stats page, once per browser session.
  // This runs in the background and never blocks or breaks the card.
  useEffect(() => {
    if (!isSupabaseConfigured() || !slug) return;
    const key = `bc26_pv_${slug}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    logPageViewRpc(slug).catch(() => {});
  }, [slug]);

  return <BusinessCard />;
}
