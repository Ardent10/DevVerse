import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { sxStyles } from "./index.style";
const FooterLinks = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Profile",
    link: "/home",
  },
  {
    title: "About",
    link: "/home",
  },
  {
    title: "Organizations",
    link: "/home",
  },
];

const Footer = () => {
  const styles = sxStyles();
  return (
    <Grid container sx={styles.gridContainerStyles} p={3} rowSpacing={1}>
      <Grid item xs={12} sx={styles.gridItemStyle}>
        <Link href="/" style={styles.linkStyle}>
          <Box display="flex" justifyContent="start" alignItems="center">
            <Image src="/logo2.png" height={80} width={75} alt="DevVerse" />
            <Typography fontSize={22} fontWeight={500} color="#8a89fa">
              Labz.
            </Typography>
          </Box>
        </Link>
        <Typography fontSize={25} m={2}>
          X
        </Typography>
        <Link href="https://scorelab.org/" style={styles.linkStyle}>
          <Box display="flex" justifyContent="start" alignItems="center">
            <Image
              src="/scorelab.jpeg"
              height={60}
              width={100}
              alt="DevVerse"
            />
          </Box>
        </Link>
      </Grid>
      <Grid item xs={12} display="flex">
        {FooterLinks.map(({ link, title }, idx) => (
          <Link
            href={link}
            key={idx}
            style={{ ...styles.linkStyle, margin: 20 }}
          >
            <Typography fontSize={15} color="#8a89fa">
              {title}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} mb={1} sx={styles.socialGridItemStyle}>
        <Link href="https://scorelab.org/">
          <TwitterIcon sx={{ color: "#1DA1F2" }} />
        </Link>
        <Link href="https://scorelab.org/">
          <LanguageIcon />
        </Link>
        <Link href="https://github.com/scorelab/DevVerse">
          <GitHubIcon />
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link
            style={styles.footerLinkStyle}
            href="https://code-labz-v2.vercel.app/"
          >
            DevVerse
          </Link>
          {" By "}
          <Link style={styles.footerLinkStyle} href="https://scorelab.org/">
            SCoRe Lab.
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
