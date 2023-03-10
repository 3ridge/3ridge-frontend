import { GetStaticPaths } from "next";
import React, { ReactElement, useMemo, useState } from "react";
import MainLayout from "../../layouts/main-layout";
import Head from "next/head";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "../../components/atoms/svg/check-icon";
import LanguageIcon from "@mui/icons-material/Language";
import { useTicketsQuery } from "../../page-hook/tickets-query-hook";
import { useLoading } from "../../provider/loading/loading-provider";
import TicketsSection from "../../components/organisms/tickets-section";
import GradientButton from "../../components/atoms/gradient-button";
import { MouseEventWithParam, TicketEventParam } from "../../type";
import { useRouter } from "next/router";
import projectsData from "../projects/data.json";
import TwitterIcon from "@mui/icons-material/Twitter";

export const getStaticPaths: GetStaticPaths<{ id: string }> = (id) => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps() {
  return { props: {} };
}

const Project = () => {
  const iconUrl =
    "https://cdn-2.galxe.com/galaxy/images/1635133810/1635133810-logo-1635133810.jpeg?optimizer=image&width=200&quality=100";
  const { ticketsData, ticketsDataLoading } = useTicketsQuery();
  const [value, setValue] = useState("1");
  const { showLoading, closeLoading } = useLoading();
  const router = useRouter();
  const projectInfo = useMemo(() => {
    if (router.query.id === undefined) {
      return undefined;
    }
    if (typeof router.query.id === "string") {
      const id: string = router.query.id;
      return projectsData[parseInt(id)];
    }
    return undefined;
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>{projectInfo?.name ?? "Project"}</title>
      </Head>
      <Stack direction={"column"} alignItems={"center"}>
        <Stack
          sx={{
            height: 300,
            paddingLeft: 16,
            paddingRight: 16,
            borderStyle: "dashed",
            borderWidth: 0,
            borderBottomWidth: 1,
            borderColor: (theme) => theme.palette.divider,
            background: "",
            width: "100%",
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid
            container={true}
            sx={{
              zIndex: 1,
            }}
            spacing={3}
          >
            <Grid item sx={{ background: "" }} lg={9}>
              <Stack direction={"column"} sx={{ height: "100%" }} spacing={2}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  sx={{ background: "" }}
                >
                  <Avatar
                    sx={{ width: 48, height: 48 }}
                    src={projectInfo?.iconUrl}
                  ></Avatar>
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography variant={"h5"}>{projectInfo?.name}</Typography>
                  </Box>
                  <Box sx={{ marginLeft: 1 }}>
                    <CheckIcon
                      sx={{ width: 36, height: 36, background: "" }}
                    ></CheckIcon>
                  </Box>
                </Stack>
                <Typography
                  variant={"h6"}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {projectInfo?.description}
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={3}>
              <Stack direction={"row"} spacing={1}>
                <IconButton
                  sx={{
                    width: 36,
                    height: 36,
                    //@ts-ignore
                    background: (theme) => theme.palette.neutral["900"],
                    borderRadius: 16,
                  }}
                  onClick={() => {
                    if (projectInfo?.web) {
                      const newWindow = window.open(
                        projectInfo?.web,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      if (newWindow) newWindow.opener = null;
                    }
                  }}
                >
                  <LanguageIcon></LanguageIcon>
                </IconButton>
                <IconButton
                  sx={{
                    width: 36,
                    height: 36,
                    //@ts-ignore
                    background: (theme) => theme.palette.neutral["900"],
                    borderRadius: 16,
                  }}
                  onClick={() => {
                    if (projectInfo?.web) {
                      const newWindow = window.open(
                        projectInfo?.twitter,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      if (newWindow) newWindow.opener = null;
                    }
                  }}
                >
                  <TwitterIcon></TwitterIcon>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              background:
                "linear-gradient(to bottom, rgb(15, 14, 20, 0), rgba(15, 14, 20, 1)), url('https://galxe.com/_nuxt/img/space-detail-bg.569713b.jpg')",
              width: "100%",
              height: 300,
              position: "absolute",
              zIndex: 0,
            }}
          ></div>
        </Stack>
        <Box
          style={{
            flex: 1,
            background: "",
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <TicketsSection
            tickets={ticketsData}
            loading={ticketsDataLoading}
            onTicketClick={async (e) => {
              showLoading();
              const myEvent = e as MouseEventWithParam<TicketEventParam>;
              const { ticket } = myEvent.params;
              await router.push(`/event/${ticket._id}`);
              closeLoading();
            }}
            sx={{
              marginTop: 6,
              marginBottom: 2,
            }}
          ></TicketsSection>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
            }}
          >
            <GradientButton size={"large"} sx={{ width: 156, height: 60 }}>
              Load more
            </GradientButton>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

Project.getLayout = (page: ReactElement | ReactElement[]) => (
  <MainLayout>{page}</MainLayout>
);

export default Project;
