import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import * as React from "react";

interface ChipData {
  key: number;
  label: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

interface props {
  chipsArray: ChipData[];
  onDelete?: boolean;
}

export function Chips(props: props) {
  const [chipData, setChipData] = React.useState<ChipData[]>(props.chipsArray);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        m: 0,
        p: 0,
      }}
      component="ul"
      elevation={0}
    >
      {chipData.map((data) => {
        return (
          <Chip
            clickable
            sx={{ margin: 0.5, backgroundColor: "#8a89fa",color:"#FFF" }}
            key={data.key}
            icon={data?.icon}
            label={data.label}
            onDelete={props.onDelete ? handleDelete(data) : undefined}
          />
        );
      })}
    </Paper>
  );
}
