"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>;
}

export function ShareButton() {
  const [label, setLabel] = useState("Share article");

  async function share() {
    const data = {
      title: "Autonomy is the easy part",
      text: "Why trustworthy autonomy starts with the approval gate.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(data.url);
      setLabel("Link copied");
      window.setTimeout(() => setLabel("Share article"), 2200);
    } catch {
      // A dismissed native share sheet does not need an error state.
    }
  }

  return <button className="share-button" onClick={share}>{label}</button>;
}
