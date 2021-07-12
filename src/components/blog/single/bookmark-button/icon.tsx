export function BookmarkIcon({
  disableShadow,
  strokeWidth,
}: {
  strokeWidth?: number;
  disableShadow?: boolean;
}) {
  return (
    <svg
      width="56.455"
      height="71.442"
      viewBox="0 0 56.455 71.442"
      fill="none"
      stroke="#e78182"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth !== undefined ? strokeWidth : 2}
      className="overflow-visible"
    >
      {!disableShadow && (
        <defs>
          <filter
            id="a"
            x="0"
            y="0"
            width="56.455"
            height="71.442"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" in="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="b" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
      )}
      <g
        transform="matrix(1, 0, 0, 1, 0, 0)"
        filter={!disableShadow ? "url(#a)" : undefined}
      >
        <path
          d="M43.955,55.942,25.728,41.652,7.5,55.942V10.216A5.48,5.48,0,0,1,12.708,4.5h26.04a5.48,5.48,0,0,1,5.208,5.716Z"
          transform="translate(2.5 2.5)"
        />
      </g>
    </svg>
  );
}
