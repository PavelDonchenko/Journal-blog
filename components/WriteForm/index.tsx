import { Button, Input } from '@material-ui/core';
import React from 'react';
import dynamic from 'next/dynamic';

import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('./Editor').then((m) => m.default), { ssr: false });

type Props = {
  title?: string;
};

const WriteForm = ({ title }: Props) => {
  return (
    <div>
      <Input classes={{ root: styles.titleFiels }} placeholder="Title" defaultValue={title} />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button style={{ height: 42 }} variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};

export default WriteForm;
