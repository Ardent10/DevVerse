import { useAppState } from "@/store";
import { AddNewTagSchema } from "@/utils/validations";
import { BasicCard, Chips, Input } from "@common/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, ClickAwayListener, Grid } from "@mui/material";
import { chipsArray } from "@utils/SampleData/sampleData";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTag } from "../hooks";

export function CreateTags() {
  const [addNewTag, setAddNewTag] = useState(false);
  const { addTag, getTags } = useTag();
  const [state, dispatch] = useAppState();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(AddNewTagSchema),
  });

  useEffect(() => {
    const fetchTags = async () => {
      if (state.userProfile?.$id) {
        await getTags();
      }
    };
    fetchTags();
  }, [state.userProfile?.$id, state.tags?.length]);

  const handleClick = () => {
    setAddNewTag((prev) => !prev);
  };

  const handleClickAway = () => {
    setAddNewTag(false);
    reset();
  };

  const onSubmit = handleSubmit(async (data) => {
    await addTag({
      userId: state.userProfile?.$id,
      label: data.tag,
    });
    setAddNewTag(false);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <BasicCard
        title="Popular Tags"
        px={2}
        divider
        buttonOnHeader
        btnLabel={addNewTag ? "Save" : "New Tag"}
        btnDisabled={addNewTag ? !isDirty : false}
        btnType={"submit"}
        btnOnClick={handleClick}
      >
        {addNewTag && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Grid item py={1}>
              <Input
                name="tag"
                control={control}
                type="text"
                placeholder="Tag Label*"
                inputHeadingLabelColor="#8a89fa"
                disable={false}
                inputHeadingType="Normal"
                inputHeadingLabel=""
                inputHeadingLabelFontSize={12}
                inputFieldPadding={2}
                direction="row"
                inputFieldGridSpace={12}
              />
            </Grid>
          </ClickAwayListener>
        )}
        <Box px={1} pt={1}>
          <Chips chipsArray={state.tags ? state.tags : chipsArray} />
        </Box>
      </BasicCard>
    </form>
  );
}
