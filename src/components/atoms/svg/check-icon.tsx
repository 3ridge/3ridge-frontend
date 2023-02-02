import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

function CheckIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        viewBox="-3 -1 23 21"
        fill="none"
      >
        <path
          d="M9.90868 0.433578 C 10.2607 0.175498 10.7393 0.175498 11.0913 0.433578 L 13.1379 1.93422 C 13.2914 2.04679 13.4739 2.11319 13.6638 2.12564 L 16.1962 2.2916 C 16.6317 2.32015 16.9984 2.62784 17.1022 3.05179 L 17.7053 5.51687 C 17.7506 5.70178 17.8477 5.86993 17.9852 6.00156 L 19.8184 7.75648 C 20.1337 8.05828 20.2168 8.5297 20.0238 8.92114 L 18.9013 11.1972 C 18.8171 11.368 18.7834 11.5592 18.8041 11.7484 L 19.0804 14.2711 C 19.1279 14.705 18.8886 15.1195 18.4891 15.2953 L 16.1662 16.3174 C 15.992 16.394 15.8432 16.5189 15.7375 16.6771 L 14.3276 18.7873 C 14.0851 19.1502 13.6353 19.3139 13.2163 19.1917 L 10.7798 18.4816 C 10.5971 18.4283 10.4029 18.4283 10.2202 18.4816 L 7.78375 19.1917 C 7.36473 19.3139 6.91491 19.1502 6.67244 18.7873 L 5.26252 16.6771 C 5.15676 16.5189 5.00803 16.394 4.83379 16.3174 L 2.51089 15.2953 C 2.1114 15.1195 1.87206 14.705 1.91958 14.2711 L 2.19588 11.7484 C 2.21661 11.5592 2.18289 11.368 2.09869 11.1972 L 0.976232 8.92114 C 0.783192 8.5297 0.866316 8.05828 1.18159 7.75648 L 3.01483 6.00156 C 3.15234 5.86993 3.24942 5.70178 3.29467 5.51687 L 3.89785 3.05179 C 4.00158 2.62784 4.36828 2.32015 4.8038 2.2916 L 7.33617 2.12564 C 7.52613 2.1132 7.70858 2.04679 7.86209 1.93422 L 9.90868 0.433578z"
          fill="#3c82f6"
        ></path>
        <path
          d="M7 10L9.5 12.5L14 7.5"
          stroke="url(#paint0_linear_4542_2923)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_4542_2923"
            x1="10.5"
            y1="6.875"
            x2="10.5"
            y2="12.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0.8"></stop>
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export default CheckIcon;
