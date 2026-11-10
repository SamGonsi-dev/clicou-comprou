export default function SvgSymbols() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="gb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#78F9AE" />
          <stop offset="0.5" stopColor="#1FD566" />
          <stop offset="1" stopColor="#0B9A45" />
        </linearGradient>

        <symbol id="wa" viewBox="0 0 32 32">
          <path
            fill="currentColor"
            d="M16.04 3C9.4 3 4 8.34 4 14.92c0 2.3.67 4.45 1.83 6.27L4 29l8.02-1.78a12.1 12.1 0 0 0 4.02.69C22.68 27.9 28 22.56 28 15.98 28 9.4 22.68 3 16.04 3Zm0 22.2c-1.3 0-2.56-.34-3.67-.98l-.26-.15-4.76 1.06 1.1-4.55-.17-.28a9.2 9.2 0 0 1-1.4-4.38c0-5.12 4.2-9.28 9.38-9.28 5.18 0 9.38 4.16 9.38 9.28s-4.2 9.28-9.6 9.28Zm5.15-6.9c-.28-.14-1.67-.82-1.93-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.74-1.4-1.66-1.57-1.94-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.49.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.53-.87-2.1-.23-.55-.46-.48-.64-.48h-.54c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37s1.03 2.75 1.17 2.94c.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33Z"
          />
        </symbol>

        <symbol id="mini" viewBox="8 6 144 146">
          <path
            d="M80 12C44 12 16 38 16 72c0 16 7 31 18 41l-8 33 35-16c6 2 12 3 19 3 36 0 64-26 64-61S116 12 80 12Z"
            fill="url(#gb)"
            stroke="#0A8F46"
            strokeOpacity=".7"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M34 40C44 24 62 17 80 17"
            stroke="#fff"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            opacity=".45"
          />
          <ellipse cx="58" cy="66" rx="14" ry="17" fill="#fff" />
          <circle cx="58" cy="68" r="8.5" fill="#062319" />
          <ellipse cx="102" cy="66" rx="14" ry="17" fill="#fff" />
          <circle cx="102" cy="68" r="8.5" fill="#062319" />
          <path
            d="M52 38q8-8 20-2M108 38q-8-8-20-2"
            stroke="#0A6B38"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M64 96q16 14 32 0"
            stroke="#062319"
            strokeWidth="5.5"
            fill="none"
            strokeLinecap="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}

