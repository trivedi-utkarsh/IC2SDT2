export default function HeadlineScroller({ headlines = [] }) {
  const headlineText = headlines.join(" • ");

  return (
    <div className="w-full overflow-hidden bg-yellow-100 py-2">
      <div className="relative whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-4 text-yellow-800 font-semibold text-sm">
            {headlineText} - <a className="font-semibold text-red-600 hover:underline" href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIC2SDT2025">click here</a> 
            . {headlineText} - <a className="font-semibold text-red-600 hover:underline" href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIC2SDT2025">click here</a> 
            . {headlineText} - <a className="font-semibold text-red-600 hover:underline" href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIC2SDT2025">click here</a> 
          </span>
        </div>
      </div>
    </div>
  );
}
