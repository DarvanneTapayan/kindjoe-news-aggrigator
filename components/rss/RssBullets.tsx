// components/rss/RssBullets.tsx
export function RssBullets({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="flex flex-col gap-3">
      {items.map((t, i) => (
        <li key={i} className="font-[Poppins] text-sm md:text-base text-black leading-snug">
          {t}
        </li>
      ))}
    </ul>
  );
}
