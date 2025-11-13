// components/layout/SiteFooter.tsx
export default function SiteFooter() {
  return (
    <footer className="w-full bg-slate-950/95 text-white font-[Poppins] mt-10">

      {/* TOP GRID - FULL WIDTH, padded */}
      <div className="w-full px-10 py-10 grid 
                      grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Personal Finance</h4>
          <span>Student Loans</span>
          <span>Credit Cards</span>
          <span>Personal Loans</span>
          <span>Savings</span>
          <span>Insurances</span>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Economy</h4>
          <span>Government</span>
          <span>Small Business</span>
          <span>Taxes</span>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Markets</h4>
          <span>Stocks</span>
          <span>US Markets</span>
          <span>Crypto Currency</span>
          <span>Futures &</span>
          <span>Commodities</span>
        </div>

        {/* COLUMN 4 */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Lifestyle</h4>
          <span>Entertainment</span>
          <span>Rich and Famous</span>
          <span>Travel</span>
          <span>Cars</span>
        </div>

        {/* COLUMN 5 */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Tech</h4>
          <span>Digital</span>
          <span>Social Media</span>
          <span>Business Tech</span>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-zinc-800" />

      {/* BOTTOM ROW - also full width with padding */}
      <div className="w-full px-10 py-6 flex flex-wrap gap-6 items-center justify-between">

        {/* LOGO BLOCK */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex flex-col">
            <div className="h-10 bg-blue-900 rounded-tl-md" />
            <div className="h-3 bg-red-600 rounded-br-md" />
          </div>
          <div className="text-4xl font-extrabold">KJ</div>
          <div className="text-[10px] font-extrabold">CHANNEL</div>
        </div>

        {/* LINKS */}
        <div className="flex gap-5 text-sm">
          <button className="hover:underline">Terms of Use</button>
          <button className="hover:underline">Privacy Policy</button>
          <button className="hover:underline">Help</button>
          <button className="hover:underline">Contact</button>
        </div>
      </div>
    </footer>
  );
}
