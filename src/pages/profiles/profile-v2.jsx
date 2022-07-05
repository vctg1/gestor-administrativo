import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, Grid, styled, Tab } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import { H3, Small } from "components/Typography";
import useAuth from "hooks/useAuth";
import FollowerCard from "page-sections/profiles/profile-v2/FollowerCard";
import FriendCard from "page-sections/profiles/profile-v2/FriendCard";
import Gallery from "page-sections/profiles/profile-v2/Gallery";
import Profile from "page-sections/profiles/profile-v2/Profile";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // styled components

const StyledCard = styled(Card)(() => ({
  position: "relative",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));
const ContentWrapper = styled(FlexBox)(() => ({
  top: -20,
  alignItems: "center",
  position: "relative",
}));
const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.text.primary,
}));
const StyledTabList = styled(TabList)(({ theme }) => ({
  [theme.breakpoints.down(780)]: {
    width: "100%",
    marginBottom: 20,
    "& .MuiTabs-flexContainer": {
      justifyContent: "space-between",
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .MuiTabs-flexContainer": {
      minWidth: 400,
      justifyContent: "space-between",
    },
  },
}));
const StyledTabPanel = styled(TabPanel)(() => ({
  padding: 0,
}));

const UserProfile = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [value, setValue] = useState("1");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box pt={2} pb={4}>
      <TabContext value={value}>
        <StyledCard>
          <Box
            sx={{
              height: 200,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src="/static/background/user-cover-pic.png"
              alt="User Cover"
              height="100%"
              width="100%"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>

          <FlexBetween flexWrap="wrap" padding="0 2rem">
            <ContentWrapper>
              <AppAvatar
                src={user?.avatar || "/static/avatar/001-man.svg"}
                sx={{
                  border: 4,
                  width: 100,
                  height: 100,
                  borderColor: "background.paper",
                  backgroundColor: "background.paper",
                }}
              />

              <Box marginLeft={3} marginTop={3}>
                <H3 lineHeight={1.2}>{user?.name}</H3>
                <Small color="text.disabled">UI Designer</Small>
              </Box>
            </ContentWrapper>

            <StyledTabList onChange={handleChange}>
              <StyledTab label={t("Profile")} value="1" />
              <StyledTab label={t("Follower")} value="2" />
              <StyledTab label={t("Friends")} value="3" />
              <StyledTab label={t("Gallery")} value="4" />
            </StyledTabList>
          </FlexBetween>
        </StyledCard>

        <Box marginTop={3}>
          <StyledTabPanel value="1">
            <Profile />
          </StyledTabPanel>

          <StyledTabPanel value="2">
            <Grid container spacing={3}>
              {followers.map((item, index) => (
                <Grid item lg={4} sm={6} xs={12} key={index}>
                  <FollowerCard follower={item} />
                </Grid>
              ))}
            </Grid>
          </StyledTabPanel>

          <StyledTabPanel value="3">
            <H3>Friends</H3>
            <SearchInput
              disable_border
              placeholder="Search Friends..."
              sx={{
                my: 2,
              }}
            />

            <Grid container spacing={3}>
              {friends.map((friend, index) => (
                <Grid item lg={4} sm={6} xs={12} key={index}>
                  <FriendCard friend={friend} />
                </Grid>
              ))}
            </Grid>
          </StyledTabPanel>

          <StyledTabPanel value="4">
            <Gallery />
          </StyledTabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

const followers = [
  {
    image: "/static/avatar/040-man-11.svg",
    name: "Mr. Breast",
    profession: "Product Designer",
    following: true,
  },
  {
    image: "/static/avatar/041-woman-11.svg",
    name: "Ethan Drake",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/042-vampire.svg",
    name: "Selena Gomez",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/043-chef.svg",
    name: "Sally Becker",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/044-farmer.svg",
    name: "Dua Lipa",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/045-man-12.svg",
    name: "Joe Murry",
    profession: "Product Designer",
    following: true,
  },
  {
    image: "/static/avatar/040-man-11.svg",
    name: "Mr. Breast",
    profession: "Product Designer",
    following: true,
  },
  {
    image: "/static/avatar/041-woman-11.svg",
    name: "Ethan Drake",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/042-vampire.svg",
    name: "Selena Gomez",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/043-chef.svg",
    name: "Sally Becker",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/044-farmer.svg",
    name: "Dua Lipa",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/045-man-12.svg",
    name: "Joe Murry",
    profession: "Product Designer",
    following: true,
  },
];
const friends = [
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
];
export default UserProfile;
