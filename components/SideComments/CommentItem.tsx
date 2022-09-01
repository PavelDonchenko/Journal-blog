import React from 'react';
import styles from './SideComments.module.scss';
import Link from 'next/link';
import { Avatar } from '@material-ui/core';
import { IComment } from '../../types/types';



export const CommentItem: React.FC<IComment> = (props) => {
  
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{props.user.fullName[0]}</Avatar>
        <Link href={`/profile/${props.user.id}`}>
          <a>
            <b>{props.user.fullName}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{props.text}</p>
      <Link href={`/news/${props.post.id}`}>
        <a>
          <span className={styles.postTitle}>{props.post.title}</span>
        </a>
      </Link>
    </div>
  );
};
