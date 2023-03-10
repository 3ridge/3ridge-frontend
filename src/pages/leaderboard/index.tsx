import Head from "next/head";
import React, { ReactElement, useMemo } from "react";
import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import MainLayout from "../../layouts/main-layout";
import { useLeaderUsersQuery } from "../../page-hook/leader-users-query-hook";
import XpChip from "../../components/atoms/styled/xp-chip";
import { DEFAULT_PROFILE_IMAGE_DATA_SRC } from "../../const";
import { User } from "../../type";
import { useSignedUserQuery } from "../../page-hook/user-query-hook";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import StringHelper from "../../helper/string-helper";
import GradientTypography from "../../components/atoms/gradient-typography";

const RankCard = ({ user, rank }: { user: User; rank: number }) => {
  const { profileImageUrl, name, rewardPoint } = user;

  const convertedName = useMemo(() => {
    if (name?.substring(0, 2).toLocaleLowerCase() === "0x") {
      return StringHelper.getInstance().getMidEllipsisString(name, 10, 8);
    }
    return name;
  }, [name]);

  const renderRankBadge = (rank: number) => {
    if (rank > 3 || rank < 1) {
      return (
        <RemoveCircleOutlineIcon
          sx={{
            width: 32,
            height: 32,
            color: (theme) => theme.palette.neutral["500"],
          }}
        />
      );
    }
    if (rank === 1) {
      return <Typography variant={"h4"}>🥇</Typography>;
    } else if (rank === 2) {
      return <Typography variant={"h4"}>🥈</Typography>;
    } else if (rank === 3) {
      return <Typography variant={"h4"}>🥉</Typography>;
    }
    return null;
  };

  return (
    <Card
      sx={{
        background: "transparent",
        transform: "translateY(0%)",
        transition: "all 0.2s ease-out 0s",
        transitionDuration: "0.2s",
        transitionDelay: "0s",
        transitionTimingFunction: "ease-out",
        "&:hover": {
          transform: "translate(0,-2px)",
          boxShadow: "4px 4px 4px 2px rgba(128, 128, 128, .2)",
        },
        borderWidth: 2,
        borderColor: "#35333a",
        borderStyle: "solid",
        borderRadius: 2,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          padding: 2,
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Box
            sx={{
              width: 64,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {rank > 3 ? (
              <XpChip
                sx={{
                  minWidth: 28,
                  height: 28,
                  borderRadius: 14,
                }}
                label={<Typography variant={"body2"}>{rank}</Typography>}
              ></XpChip>
            ) : (
              renderRankBadge(rank)
            )}
          </Box>
          <Box sx={{ marginLeft: 1 }}>
            <Avatar
              sx={{ width: 52, height: 52 }}
              src={profileImageUrl ?? DEFAULT_PROFILE_IMAGE_DATA_SRC}
            ></Avatar>
          </Box>
          <Stack direction={"column"} sx={{ marginLeft: 3 }}>
            <GradientTypography variant={"body2"}>
              {convertedName}
            </GradientTypography>
          </Stack>
        </Stack>
        <Box sx={{ marginRight: 2 }}>
          <Stack
            direction={"column"}
            alignItems={"flex-end"}
            justifyContent={"center"}
          >
            <Typography
              variant={"h6"}
              sx={{ color: (theme) => theme.palette.warning.main }}
            >{`Level ${Math.floor((rewardPoint ?? 0) / 100)}`}</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant={"body2"}>Total&nbsp;:&nbsp;</Typography>
              <Typography
                variant={"body2"}
                color={"white"}
                sx={{ fontWeight: "bold" }}
              >
                {rewardPoint ?? 0}
              </Typography>
              <Typography variant={"body2"}>&nbsp;{`Point`}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

const Leaderboard = () => {
  const { leaderUsersData, leaderUsersDataLoading, findUserRank } =
    useLeaderUsersQuery();
  const { userData } = useSignedUserQuery();

  const userRank = useMemo(() => {
    return findUserRank(userData._id);
  }, [userData]);

  return (
    <>
      <Head>
        <title>Leaderboard</title>
      </Head>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        spacing={5}
        sx={{ marginTop: 0, marginBottom: 12, background: "" }}
      >
        <Grid item sx={{ background: "" }}>
          <Box sx={{ minWidth: 800, background: "" }}>
            <Stack direction={"column"}>
              <Typography variant={"h4"}>Leaderboard</Typography>
              {userData._id && (
                <Box sx={{ marginTop: 5 }}>
                  <Stack direction={"column"} spacing={2}>
                    <Box>
                      <Typography variant={"h6"}>Your ranking</Typography>
                    </Box>
                    <RankCard
                      user={userData}
                      rank={findUserRank(userData._id)}
                    ></RankCard>
                  </Stack>
                </Box>
              )}
              <Box sx={{ marginTop: 5 }}>
                <Stack direction={"column"} spacing={2}>
                  <Box>
                    <Typography variant={"h6"}>
                      Top users in the last 30 days
                    </Typography>
                  </Box>
                  {leaderUsersData?.map((e, index) => {
                    return <RankCard user={e} rank={index + 1} key={index} />;
                  })}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

Leaderboard.getLayout = (page: ReactElement | ReactElement[]) => (
  <MainLayout>{page}</MainLayout>
);

export default Leaderboard;
