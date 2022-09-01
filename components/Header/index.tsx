import React from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar, List, ListItem } from '@material-ui/core';

import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';
import AuthDialog from '../AuthDialog/AuthDialog';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);


  const handleClickOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />

          {/* <Paper className={styles.searchBlockPopup}>
              <List>
               
                  <Link href = 'sdsd'> 
                    <a>
                      <ListItem button>title</ListItem>
                    </a>
                  </Link>
              
              </List>
            </Paper> */}
        </div>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>

        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom />
          </a>
        </Link>
        <div className={styles.loginButton} onClick={handleClickOpen}>
          <UserIcon />
          Войти
        </div>
      </div>
     
      <AuthDialog onClose = {handleClose} visible = {isVisible} />
    </Paper>
  );
};
