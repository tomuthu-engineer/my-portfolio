"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { toPng } from "html-to-image";

/* ---------------- TYPES ---------------- */

type TextAlignment = "left" | "center" | "right" | "justify";

type Template = {
  id: string;
  name: string;
  quoteSize: string;
  authorSize: string;
  accentColor: string;
  padding: string;
};

/* ---------------- CONSTANTS ---------------- */

const HD_SIZE = 1080;
const WHITE_COLOR = "#ffffff";

/* ---------------- TEMPLATES ---------------- */

const TEMPLATES: Template[] = [
  {
    id: "bold",
    name: "Bold Minimal",
    quoteSize: "text-6xl",
    authorSize: "text-3xl",
    accentColor: "#00ff99",
    padding: "p-24",
  },
  {
    id: "classic",
    name: "Classic Quote",
    quoteSize: "text-5xl",
    authorSize: "text-2xl",
    accentColor: "#ffffff",
    padding: "p-28",
  },
  {
    id: "modern",
    name: "Modern Compact",
    quoteSize: "text-4xl",
    authorSize: "text-xl",
    accentColor: "#22c55e",
    padding: "p-20",
  },
];

/* ---------------- COMPONENT ---------------- */

const CreatePost = () => {
  const previewRef = useRef<HTMLDivElement | null>(null);

  const [quote, setQuote] = useState(
    "Consistency beats [[motivation]]\nEvery single time"
  );
  const [author, setAuthor] = useState("");
  const [alignment, setAlignment] = useState<TextAlignment>("center");
  const [templateId, setTemplateId] = useState("bold");

  const template = TEMPLATES.find((t) => t.id === templateId)!;

  /* ---------------- HELPERS ---------------- */

  const getItemsAlign = (): "flex-start" | "center" | "flex-end" => {
    if (alignment === "right") return "flex-end";
    if (alignment === "center") return "center";
    return "flex-start";
  };

  const renderQuote = (text: string) => {
    const lines = text.split("\n");

    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\[\[.*?\]\])/g);

      return (
        <span key={lineIndex}>
          {parts.map((part, partIndex) => {
            if (part.startsWith("[[") && part.endsWith("]]")) {
              return (
                <span key={partIndex} style={{ color: WHITE_COLOR }}>
                  {part.slice(2, -2)}
                </span>
              );
            }

            return (
              <span
                key={partIndex}
                style={{ color: template.accentColor }}
              >
                {part}
              </span>
            );
          })}
          <br />
        </span>
      );
    });
  };

  const downloadImage = async () => {
    if (!previewRef.current) return;

    const dataUrl = await toPng(previewRef.current, {
      cacheBust: true,
      pixelRatio: 1,
      backgroundColor: "#000000",
    });

    const link = document.createElement("a");
    link.download = "muthupandi-post-hd.png";
    link.href = dataUrl;
    link.click();
  };

  /* ---------------- RENDER ---------------- */

  return (
    <section className="h-full py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-accent text-sm uppercase tracking-widest">
            Social Media
          </span>
          <h1 className="h1 mt-2">Create Post</h1>
          <p className="text-white/70 max-w-xl mt-4">
            Choose a template and create HD Instagram-ready posts.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">
          {/* LEFT – CONTROLS */}
          <div className="space-y-8">
            {/* Quote */}
            <div>
              <label className="text-sm text-white/80 block mb-2">
                Quote / Text
              </label>
              <textarea
                className="w-full h-36 rounded-xl bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
              <p className="text-xs text-white/50 mt-2">
                Use <span className="text-white">[[word]]</span> for white text •
                Enter for new line
              </p>
            </div>

            {/* Author */}
            <div>
              <label className="text-sm text-white/80 block mb-2">
                Author (optional)
              </label>
              <input
                className="w-full rounded-xl bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Leave empty if unknown"
              />
            </div>

            {/* Template */}
            <div>
              <label className="text-sm text-white/80 block mb-2">
                Template
              </label>
              <select
                className="w-full rounded-xl bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition"
                value={templateId}
                onChange={(e) => setTemplateId(e.target.value)}
              >
                {TEMPLATES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Alignment */}
            <div>
              <label className="text-sm text-white/80 block mb-2">
                Text Alignment
              </label>
              <select
                className="w-full rounded-xl bg-primary border border-white/10 p-4 text-white"
                value={alignment}
                onChange={(e) =>
                  setAlignment(e.target.value as TextAlignment)
                }
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
              </select>
            </div>

            {/* Download */}
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              onClick={downloadImage}
            >
              <span>Download HD PNG</span>
              <FiDownload className="text-xl" />
            </Button>
          </div>

          {/* RIGHT – PREVIEW */}
          <div className="flex justify-center xl:justify-end">
            <div style={{ zoom: 0.33 }}>
              <div
                ref={previewRef}
                style={{
                  width: HD_SIZE,
                  height: HD_SIZE,
                  backgroundColor: "#000000",
                  textAlign: alignment,
                  textAlignLast:
                    alignment === "justify" ? "left" : undefined,
                }}
                className={`relative rounded-2xl flex flex-col justify-center ${template.padding}`}
              >
                {/* MAIN CONTENT */}
                <div
                  className="flex flex-col"
                  style={{ alignItems: getItemsAlign() }}
                >
                  <p
                    className={`${template.quoteSize} font-bold leading-snug`}
                  >
                    {renderQuote(quote)}
                  </p>

                  {author.trim() && (
                    <span
                      className={`mt-10 ${template.authorSize}`}
                      style={{ color: WHITE_COLOR }}
                    >
                      — {author}
                    </span>
                  )}
                </div>

                {/* SUB TEXT */}
                <div
                  className="absolute bottom-16 right-16 text-xl tracking-wide"
                  style={{ color: "#999999" }}
                >
                  www.muthupandi.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
