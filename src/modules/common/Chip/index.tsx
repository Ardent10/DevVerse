import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import * as React from "react";

interface ChipData {
  key: number |string;
  label: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

interface props {
  // To use when object is passed
  key?: number | string;
  label?: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  // To use when array is passed
  chipsArray?: ChipData[];
  onDelete?: boolean;
}

export function Chips(props: props) {
  const [chipData, setChipData] = React.useState<ChipData[]>(
    props.chipsArray ? props.chipsArray : []
  );

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
      {chipData.length > 0 ? (
        chipData.map((data) => {
          return (
            <Chip
              clickable
              sx={{ margin: 0.5, backgroundColor: "#8a89fa", color: "#FFF" }}
              key={data.key}
              icon={data?.icon}
              label={data.label}
              onDelete={props.onDelete ? handleDelete(data) : undefined}
            />
          );
        })
      ) : (
        <Chip
          clickable
          sx={{ margin: 0.5, backgroundColor: "#8a89fa", color: "#FFF" }}
          key={props?.key}
          icon={props?.icon}
          label={props.label}
        />
      )}
    </Paper>
  );
}
