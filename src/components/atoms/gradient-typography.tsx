import { Typography, TypographyProps } from "@mui/material";

const GradientTypography = (props: TypographyProps) => {
  return (
    <Typography
      {...props}
      sx={{
        ...props.sx,
        background: "-webkit-linear-gradient(45deg, #f794fd, #fde3ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default GradientTypography;
