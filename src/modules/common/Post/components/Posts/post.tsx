import { useAppState } from "@/store";
import CommentOutlineIcon from "@mui/icons-material/CommentOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
import { Chips } from "../../../Chip";
import { DateTimeFormat } from "../dateTimeFormat";

import { CustomTooltip } from "../../../Tooltip";
import { sxStyles } from "../index.styles";
import { PostMenu } from "./postMenu";

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
  const [state] = useAppState();
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (idx: number) => {
    setExpanded(expanded === idx ? -1 : idx);
  };

  const styles = sxStyles();

  return (
    <>
      {state.posts.length > 0
        ? state.posts?.map((post: any, idx: number) => (
            <Grid key={idx} container px={4} py={1}>
              <Card key={idx} sx={{ minWidth: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src={postData[0].headerImg}
                      sx={styles.avatarStyle}
                    />
                  }
                  action={<PostMenu />}
                  title={post.fullName}
                  subheader={
                    <DateTimeFormat
                      dateTime={post.createdAt}
                      format="DD MMM, YYYY"
                    />
                  }
                  sx={styles.cardHeaderStyle}
                />
                <CardActions disableSpacing sx={styles.cardActionTopStyle}>
                  <CardContent>
                    <Typography
                      id="title"
                      variant="body2"
                      fontSize={14}
                      fontWeight={500}
                    >
                      {post.title}
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
                  <CardContent sx={{ py: 0 }}>
                    <Typography px={1} whiteSpace="pre-line" paragraph>
                      {post.description}
                    </Typography>
                  </CardContent>
                </Collapse>

                {post.postImageUrls.length >= 1 &&
                  post.postImageUrls.map((postImg: any) => (
                    <CardMedia
                      key={postImg}
                      component="img"
                      src={postImg.href}
                      alt="post"
                    />
                  ))}

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
          ))
        : postData?.map((post, idx) => (
            <Grid key={idx} container px={4} py={2}>
              <Card key={idx} sx={{ minWidth: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src={post.headerImg}
                      sx={styles.avatarStyle}
                    />
                  }
                  action={<PostMenu />}
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
