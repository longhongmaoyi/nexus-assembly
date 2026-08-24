export default function NexusLogo({
  className = 'w-full h-auto max-w-sm',
}: {
  className?: string
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 150" className={className}>
      <defs>
        <linearGradient id="x-split" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="48%" stopColor="#8CC63F" />
          <stop offset="48%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>

      <text
        x="10"
        y="85"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="82"
        fill="#FFFFFF"
        letterSpacing="-1"
      >
        NE
        <tspan fill="url(#x-split)">X</tspan>US
      </text>

      <text
        x="15"
        y="125"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#8CC63F"
        letterSpacing="1.5"
      >
        ASSEMBLY CENTRE
      </text>
    </svg>
  );
}
