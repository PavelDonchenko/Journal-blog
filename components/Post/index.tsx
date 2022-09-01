import React from 'react';
import Link from 'next/link';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';
import { PostActions } from '../PostActions';

export const Post = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/123">
          <a>sdfsfdsd</a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">ssfsdfsd</Typography>
        <img
          src="https://img.freepik.com/premium-vector/beautiful-nature-landscape-drawing-scenery_18591-60461.jpg?w=740"
          height={500}
          width={600}
          alt='sdfsdf'
        />
      <PostActions />
    </Paper>
  );
};
