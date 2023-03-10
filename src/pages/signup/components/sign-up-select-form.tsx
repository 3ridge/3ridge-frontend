import { Avatar, Stack, Typography } from "@mui/material";
import SecondaryButton from "../../../components/atoms/secondary-button";
import PrimaryButton from "../../../components/atoms/primary-button";
import EmailIcon from "../../../components/atoms/svg/email-icon";
import LinkTypography from "../../../components/atoms/link-typography";
import { useTheme } from "@mui/material/styles";
import { MouseEventHandler, PropsWithChildren } from "react";

type SignUpSelectFormProps = PropsWithChildren & {
  onClickSignUpWith?: MouseEventHandler;
  onClickConnectWallet?: MouseEventHandler;
  onShowSignClicked?: MouseEventHandler;
};

const SignUpSelectForm = (props: SignUpSelectFormProps) => {
  const theme = useTheme();

  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          background: "",
          minWidth: "500px",
          paddingTop: 12,
          height: "500px",
        }}
        spacing={4}
      >
        <Typography textAlign={"left"} variant={"h5"}>
          Sign Up
        </Typography>
        <SecondaryButton fullWidth={true} onClick={props.onClickConnectWallet}>
          Connect wallet
        </SecondaryButton>
        <Typography textAlign={"center"} variant={"h6"}>
          Or
        </Typography>
        <Stack spacing={2}>
          <PrimaryButton fullWidth={true} onClick={props.onClickSignUpWith}>
            <Stack direction={"row"} spacing={1}>
              <Typography
                className={"MuiTypography"}
                color={"neutral.900"}
                variant={"body2"}
              >
                Sign Up with
              </Typography>
              <Avatar
                src={"https://nftbank.ai/static/images/google-28.svg"}
                sx={{ width: 24, height: 24 }}
              ></Avatar>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  background: theme.palette.neutral["400"],
                }}
              >
                <EmailIcon></EmailIcon>
              </Avatar>
            </Stack>
          </PrimaryButton>
          <Stack direction={"row"} justifyContent={"center"} spacing={1}>
            <Typography variant={"body2"}>Already have an account?</Typography>
            <LinkTypography variant={"body2"} onClick={props.onShowSignClicked}>
              Sign in
            </LinkTypography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SignUpSelectForm;
