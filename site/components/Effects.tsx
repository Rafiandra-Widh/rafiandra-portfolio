"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Effects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Pointer interactions + ring lerp loop (mount once).
  // The custom cursor only runs on a real pointer device wider than the tablet
  // breakpoint — on touch/tablet a tap would otherwise flash the dot.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 821px) and (pointer: fine)");
    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const hideAll = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (previewRef.current) previewRef.current.style.opacity = "0";
    };

    // Hide the native cursor only while the custom one is active.
    const applyMode = () => {
      if (mq.matches) {
        document.documentElement.classList.add("cursorhide");
      } else {
        document.documentElement.classList.remove("cursorhide");
        hideAll();
      }
    };

    const onMove = (e: MouseEvent) => {
      if (!mq.matches) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const dot = cursorRef.current;
      if (dot) {
        dot.style.opacity = "1";
        dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      }
      const target = e.target as HTMLElement;
      const tgt = target.closest?.("a,button,[data-cursor]");
      const r = ringRef.current;
      if (r) {
        r.style.opacity = "1";
        r.dataset.h = tgt ? "1" : "0";
      }
      const mag = target.closest?.("[data-magnet]") as HTMLElement | null;
      if (mag) {
        const b = mag.getBoundingClientRect();
        const mx = e.clientX - (b.left + b.width / 2);
        const my = e.clientY - (b.top + b.height / 2);
        mag.style.transform = `translate(${mx * 0.28}px,${my * 0.4}px)`;
      }
      const pv = previewRef.current;
      const prev = target.closest?.("[data-preview]") as HTMLElement | null;
      if (prev && pv) {
        pv.style.opacity = "1";
        pv.style.background = prev.getAttribute("data-grad") || "#888";
        if (pv.lastChild) (pv.lastChild as HTMLElement).textContent = prev.getAttribute("data-preview") || "";
        pv.style.transform = `translate(${e.clientX + 26}px,${e.clientY - 85}px)`;
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const mag = target.closest?.("[data-magnet]") as HTMLElement | null;
      if (mag) mag.style.transform = "";
      const prev = target.closest?.("[data-preview]") as HTMLElement | null;
      const pv = previewRef.current;
      if (prev && pv) {
        const rel = e.relatedTarget as HTMLElement | null;
        const into = rel?.closest?.("[data-preview]");
        if (into !== prev) pv.style.opacity = "0";
      }
    };

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const loop = () => {
      const r = ringRef.current;
      if (r) {
        ring.x += (mouse.x - ring.x) * 0.2;
        ring.y += (mouse.y - ring.y) * 0.2;
        const s = r.dataset.h === "1" ? 1.7 : 1;
        r.style.transform = `translate(${ring.x}px,${ring.y}px) translate(-50%,-50%) scale(${s})`;
      }
      raf = requestAnimationFrame(loop);
    };

    applyMode();
    mq.addEventListener("change", applyMode);
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onOut, true);
    document.addEventListener("mouseleave", onLeave);
    loop();

    return () => {
      mq.removeEventListener("change", applyMode);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut, true);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursorhide");
    };
  }, []);

  // Scroll-reveal: re-observe on each route change. Reset chrome on navigation.
  useEffect(() => {
    // Hide preview + reset magnets on navigation.
    if (previewRef.current) previewRef.current.style.opacity = "0";
    if (ringRef.current) ringRef.current.dataset.h = "0";
    document.querySelectorAll<HTMLElement>("[data-magnet]").forEach((m) => (m.style.transform = ""));

    let io: IntersectionObserver | null = null;
    const revealAll = () =>
      document.querySelectorAll("[data-reveal]").forEach((el) => el.setAttribute("data-shown", "1"));

    try {
      if (!("IntersectionObserver" in window)) {
        revealAll();
      } else {
        io = new IntersectionObserver(
          (ents) => {
            ents.forEach((en) => {
              if (en.isIntersecting) {
                const el = en.target as HTMLElement;
                const d = parseInt(el.getAttribute("data-delay") || "0", 10);
                el.style.animationDelay = d / 1000 + "s";
                el.setAttribute("data-shown", "1");
                io?.unobserve(el);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
        );
        document.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => io!.observe(el));
      }
    } catch {
      revealAll();
    }

    // Safety net: reveal everything after 1.5s regardless.
    const t = setTimeout(revealAll, 1500);
    return () => {
      clearTimeout(t);
      io?.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-layer"
        style={{
          position: "fixed", top: 0, left: 0, width: 6, height: 6, margin: "-3px 0 0 -3px",
          borderRadius: "50%", background: "#fff", zIndex: 9999, pointerEvents: "none",
          mixBlendMode: "difference", opacity: 0, transition: "opacity .3s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-layer"
        style={{
          position: "fixed", top: 0, left: 0, width: 34, height: 34, border: "1px solid #fff",
          borderRadius: "50%", zIndex: 9998, pointerEvents: "none", mixBlendMode: "difference",
          opacity: 0, transition: "opacity .3s, width .25s, height .25s", willChange: "transform",
        }}
      />
      <div
        ref={previewRef}
        className="cursor-layer"
        style={{
          position: "fixed", top: 0, left: 0, width: 260, height: 170, borderRadius: 10, zIndex: 9990,
          pointerEvents: "none", opacity: 0, transition: "opacity .35s cubic-bezier(.2,.7,.2,1)",
          overflow: "hidden", boxShadow: "0 24px 60px -20px rgba(0,0,0,.45)", display: "flex",
          alignItems: "flex-end", willChange: "transform",
        }}
      >
        <span
          style={{
            fontFamily: "ui-monospace,monospace", fontSize: 11, letterSpacing: ".04em", color: "#fff",
            padding: "12px 14px", textShadow: "0 1px 6px rgba(0,0,0,.5)",
          }}
        >
          preview
        </span>
      </div>
    </>
  );
}
