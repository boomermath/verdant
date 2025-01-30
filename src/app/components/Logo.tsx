import type React from "react"

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="160"
      height="50"
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="160" height="50" rx="4" fill="url(#grad1)" />
      <path d="M10 40L25 10M25 10H40M25 10V25M40 40V25H25M25 25L40 10" stroke="url(#grad2)" strokeWidth="2" />
      <text x="55" y="35" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="url(#grad3)">
        Verdant
      </text>
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="160" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#004d00" />
          <stop offset="1" stopColor="#006400" />
        </linearGradient>
        <linearGradient id="grad2" x1="10" y1="10" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4AF37" />
          <stop offset="1" stopColor="#e0c158" />
        </linearGradient>
        <linearGradient id="grad3" x1="55" y1="15" x2="55" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff8e1" />
          <stop offset="1" stopColor="#ecd279" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo

