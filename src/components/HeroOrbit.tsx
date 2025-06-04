import { PropsWithChildren } from "react";

export default function HeroOrbit({
  children,
  size,
  rotation,
  orbitDuration,
  orbitAnimated = false,
  spinDuration,
  spinAnimated = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  orbitAnimated?: boolean;
  spinDuration?: string;
  spinAnimated?: boolean;
}>) {
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        className={`${orbitAnimated === true && "animate-spin"}`}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div
            className={`${spinAnimated === true && "animate-spin"}`}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline-flex justify-center items-center"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
