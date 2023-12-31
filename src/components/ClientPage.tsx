"use client";
import * as React from "react";
import { createSvgIcon } from "@mui/material";

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus",
);

const LogoIcon = createSvgIcon(
  // all the attributes should be camelCase and not kebab-case, but this is enough to render something visible
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinecap="round"
    strokeMiterlimit="10"
    clipRule="evenodd"
    viewBox="0 0 24 24"
  >
    <g fill="none" stroke="#11999e">
      <circle cx="9.8" cy="7.125" r="6.447" strokeWidth=".81" />
      <path
        strokeWidth=".81"
        d="m6.254 6.641 2.055 2.821M5.65 8.132l1.047 1.37"
      />
      <path
        strokeWidth=".48"
        d="m13.95 13.773-.887-1.088M14.393 11.678l.846 1.128"
      />
      <path
        strokeWidth=".81"
        d="m22.008 20.502-5.923-7.656c-.201-.282-.564-.322-.846-.121l-1.289.967c-.282.202-.323.564-.121.846l5.923 7.656c.483.604 1.37.725 1.974.242a1.33 1.33 0 0 0 .282-1.934Z"
      />
      <circle cx="7.543" cy="17.48" r="5.842" strokeWidth=".81" />
      <path
        strokeWidth=".48"
        d="m6.738 21.63-1.33-.363a.6.6 0 1 1 .282-1.168l1.33.362a.602.602 0 0 1-.282 1.169ZM9.477 19.414l.726-1.209c.161-.282.523-.363.846-.202.282.162.362.524.201.847l-.725 1.208c-.161.282-.524.363-.846.202-.242-.202-.363-.564-.202-.846ZM7.302 18.568l-1.048-.927c-.242-.242-.282-.605-.04-.846.242-.242.604-.282.846-.041l1.047.927c.242.242.283.605.041.846a.623.623 0 0 1-.846.041ZM3.675 15.425l.927-1.048c.242-.242.604-.282.846-.04.242.242.282.604.04.846l-.926 1.048c-.242.241-.605.282-.846.04-.242-.202-.242-.604-.041-.846Z"
      />
      <circle cx="3.474" cy="18.044" r=".604" strokeWidth=".48" />
      <circle cx="7.785" cy="14.78" r=".604" strokeWidth=".48" />
      <circle cx="10.525" cy="15.787" r=".604" strokeWidth=".48" />
    </g>
  </svg>,
  "Logo",
);

export default function ClientPage() {
  return (
    <>
      <h2>Logo built using createSvgIcon</h2>
      <PlusIcon sx={{ fontSize: 100 }} />
      <LogoIcon sx={{ fontSize: 100 }} />
    </>
  );
}
