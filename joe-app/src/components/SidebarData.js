import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { TextField } from '@material-ui/core'

export const LeftSidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Characters',
    path: '/characters',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];

export const RightSidebarData = [
  {
    title: 'Chat',
    icon: <AiIcons.AiFillWechat />,
    cName: 'nav-text'
  },
  {
    icon: <form noValidate autoComplete="off"> <TextField id="outlined-basic" label="chat" variant="outlined" color="primary"/> </form>, 
    cName: 'nav-input-text'
  }
];
