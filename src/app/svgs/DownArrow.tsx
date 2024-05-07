import * as React from "react"
import { SVGProps } from "react"
const DownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill={props?.color?props?.color:"#636363"}
      d="M12.22.273a1.068 1.068 0 0 1 1.425 1.59s-5.6 5.14-6.005 5.503c-.406.364-.88.364-1.285 0l-6-5.503A1.068 1.068 0 0 1 1.78.273L7 5.137 12.22.273Z"
    />
  </svg>
)
export default DownArrow
