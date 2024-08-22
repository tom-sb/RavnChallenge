import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { TaskTag } from "../../gql/graphql";
import { useState } from 'react';

interface ListLabelsProps {
  handleSelected: (tags:TaskTag[]) => void;
  tags: TaskTag[];
}

export default function ListLabels({handleSelected, tags}: ListLabelsProps) {

  const labels = Object.values(TaskTag);
  const [selectedTags, setSelectedTags] = useState<TaskTag[]>(tags);
  const handleSelectedTags = (tag:TaskTag) => {
    if(!!selectedTags.find(item => item===tag)){
      setSelectedTags(selectedTags.filter(item => item!==tag));
      handleSelected(selectedTags.filter(item => item!==tag));
    } else {
      setSelectedTags([...selectedTags,tag]);
      handleSelected([...selectedTags,tag]);
    }
  }

  return (
    <div>
      <Stack direction="column" >
      <Typography sx={{pl:2}} variant='h3'>{'Tag Title'}</Typography>
      {labels.map((tag) => {
        return (
          <FormControlLabel key={tag} sx={{px:3}} control={
              <Checkbox
                checked={!!selectedTags.find(item => item===tag)}
                onChange={() => handleSelectedTags(tag)}
              />
            } label={tag}
          />
      )})}
      </Stack>
    </div>
  );
}
