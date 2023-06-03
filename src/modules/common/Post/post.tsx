import CommentOutlineIcon from "@mui/icons-material/CommentOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendOutlineIcon from "@mui/icons-material/SendOutlined";
import ThumbUpOutlineIcon from "@mui/icons-material/ThumbUpOutlined";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Chips } from "../Chip";
import { CustomTooltip } from "../Tooltip";
import { sxStyles } from "./index.styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface props {
  postData: Array<any>;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Post({ postData }: props) {
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (idx: number) => {
    setExpanded(expanded === idx ? -1 : idx);
  };

  const styles = sxStyles();

  return (
    <>
      {postData?.map((post, idx) => (
        <Grid container px={4} py={2}>
          <Card key={idx} sx={{ minWidth: "100%" }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Remy Sharp"
                  src={post.headerImg}
                  sx={styles.avatarStyle}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.headerTitle}
              subheader={post.publishDate}
              sx={styles.cardHeaderStyle}
            />
            <CardActions disableSpacing sx={styles.cardActionTopStyle}>
              <CardContent>
                <Typography id="title" variant="body2" fontSize={14}>
                  {post.postTitle}
                </Typography>
              </CardContent>
              <ExpandMore
                expand={expanded === idx}
                onClick={() => handleExpandClick(idx)}
                aria-expanded={expanded === idx}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded === idx} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography p={1} whiteSpace="pre-line" paragraph>
                  {post.postDescription}
                </Typography>
              </CardContent>
            </Collapse>

            <CardMedia component="img" src={post.postMedia} alt="post" />

            <CardActions sx={styles.cardActionBottomStyle}>
              <Box>
                <Chips chipsArray={post.tags} />
              </Box>
              <Box>
                <CustomTooltip placement="bottom" label="Love">
                  <IconButton aria-label="love">
                    <FavoriteIcon sx={styles.loveIconStyle} />
                  </IconButton>
                </CustomTooltip>
                <CustomTooltip placement="bottom" label="Like">
                  <IconButton aria-label="like">
                    <ThumbUpOutlineIcon sx={styles.likeIconStyle} />
                  </IconButton>
                </CustomTooltip>
                <CustomTooltip placement="bottom" label="Comment">
                  <IconButton aria-label="comment">
                    <CommentOutlineIcon sx={styles.commentIconStyle} />
                  </IconButton>
                </CustomTooltip>
                <CustomTooltip placement="bottom" label="Share">
                  <IconButton aria-label="share">
                    <SendOutlineIcon sx={styles.shareIconStyle} />
                  </IconButton>
                </CustomTooltip>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
