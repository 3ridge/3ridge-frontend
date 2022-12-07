import { Box, Stack, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import SecondaryButton from "../../atoms/secondary-button";
import { useTheme } from "@mui/material/styles";

const footerData = [
  {
    title: "Connect",
    subMenus: [
      {
        title: "Email Us",
        url: "/",
      },
      {
        title: "Twitter",
        url: "/",
      },
      {
        title: "Discord",
        url: "/",
      },
      {
        title: "Discord Bot",
        url: "/",
      },
    ],
  },
  {
    title: "Docs",
    subMenus: [
      {
        title: "Documentation",
        url: "/",
      },
      {
        title: "Code of Conduct",
        url: "/",
      },
      {
        title: "Terms of Service",
        url: "/",
      },
      {
        title: "Privacy Policy",
        url: "/",
      },
    ],
  },
  {
    title: "Company",
    subMenus: [
      {
        title: "Careers",
        url: "/",
      },
      {
        title: "Blog",
        url: "/",
      },
    ],
  },
];

const HomeFooter = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        background: theme.palette.background.default,
        width: "100%",
      }}
    >
      <Stack direction={"column"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ padding: 3 }}
        >
          <Stack direction={"column"} spacing={2}>
            <Typography variant={"h5"}>Grow with Layer3</Typography>
            <Box>
              <Typography
                variant={"body1"}
                // @ts-ignore
                sx={{ color: theme.palette.neutral["400"] }}
              >
                Layer3 helps you reach, acquire, and retain users
              </Typography>
              <Typography
                variant={"body1"}
                // @ts-ignore
                sx={{ color: theme.palette.neutral["400"] }}
              >
                with powerful, interactive experiences.
              </Typography>
            </Box>
            <SecondaryButton
              variant={"contained"}
              color={"secondary"}
              style={{ width: 180 }}
            >
              Get Started
            </SecondaryButton>
          </Stack>
          <Stack direction={"row-reverse"} spacing={12}>
            {footerData.map((x, xIdx) => {
              return (
                <Stack key={xIdx} direction={"column"} spacing={3}>
                  <Typography variant={"h5"}>{x.title}</Typography>
                  <Stack direction={"column"} spacing={2}>
                    {x.subMenus.map((y, yIdx) => {
                      return (
                        <NextLink key={yIdx} href="/">
                          <Typography
                            variant={"body1"}
                            sx={{
                              // @ts-ignore
                              color: theme.palette.neutral["400"],
                              "&:hover": {
                                color: theme.palette.action.hover,
                                // backgroundColor: theme.palette.action.hover,
                              },
                            }}
                          >
                            {y.title}
                          </Typography>
                        </NextLink>
                      );
                    })}
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Box sx={{ padding: 3 }}>
          <Typography
            variant={"body2"}
            //@ts-ignore
            sx={{ color: theme.palette.neutral["600"] }}
          >
            © Copyright 2022 Layer3 XYZ, Inc.
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default HomeFooter;
