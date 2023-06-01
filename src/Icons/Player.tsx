import IconsProps from "./interface";

const Player = ({ width, height }: IconsProps) => {
  return (
    <svg
      width={width ?? 12}
      height={height ?? 14}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 3.64L7.77 7L2.5 10.36V3.64ZM0.5 0V14L11.5 7L0.5 0Z"
        fill="white"
      />
    </svg>
  );
};

export default Player;
