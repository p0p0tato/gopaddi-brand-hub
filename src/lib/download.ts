import JSZip from "jszip";

export function downloadFile(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export interface ZipFile {
  name: string;
  url: string;
}

export async function downloadZip(files: ZipFile[], zipName: string) {
  const zip = new JSZip();
  await Promise.all(
    files.map(async (f) => {
      const res = await fetch(f.url);
      if (!res.ok) throw new Error(`Failed to fetch ${f.url}`);
      const blob = await res.blob();
      zip.file(f.name, blob);
    })
  );
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  downloadFile(url, zipName);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
