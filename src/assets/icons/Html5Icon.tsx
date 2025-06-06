import * as React from "react";
import type { SVGProps } from "react";
const HTML5 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 452 520"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <mask id="mask-html">
        <rect width="452" height="520" fill="white" />
        <path
          fill="black"
          d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
        />
        <path
          fill="black"
          d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
        />
      </mask>
    </defs>

    <path
      fill="currentColor"
      d="M41 460L0 0h451l-41 460-185 52"
      mask="url(#mask-html)"
    />
  </svg>
);
export default HTML5;
