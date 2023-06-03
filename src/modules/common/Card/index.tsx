import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

interface props {
  height?: number;
  width?: number;
  cardItems?: Array<any>;
  children?: any;
  px?: number;
  py?: number;
  title?: string;
  position?: "absolute" | "relative" | "fixed";
  cardAction?: boolean;
  cardMedia?: string;
  cardMediaheight?: number;
}

export function BasicCard(props: props) {
  return (
    <Grid container>
      <Grid item xs={12} px={props.px} py={props.py}>
        <Card
          sx={{
            minWidth: props.width ? props.width : "100%",
            height: props.height,
            position: props?.position,
          }}
        >
          {props.cardMedia && (
            <CardMedia
              sx={{ height: props.cardMediaheight }}
              image={props.cardMedia}
              title="icon"
            />
          )}
          <CardContent>
            <Typography sx={{ fontSize: 22, fontWeight: 400 }} gutterBottom>
              {props.title}
            </Typography>

            {props.children}
          </CardContent>
          {props.cardAction && (
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}
