import IconsProps from "./interface";

export default function Free({ width, height }: IconsProps) {
  return (
    <svg
      width={width ?? 40}
      height={height ?? 40}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="40" height="40" rx="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00444444)" />
        </pattern>
        <image id="image0_1_20825" width="225" height="225" />
      </defs>
    </svg>
  );
}
