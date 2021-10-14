/** @format */
import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Button,
  ClickAwayListener,
  Fade,
  Paper,
  Popper,
} from '@mui/material';

const Bar = styled(AppBar)({
  backgroundColor: 'white',
});

const NavBarMenu = ({ name, items }) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'spring-popper' : undefined;

  const popoverAnchor = useRef(null);
  const popoverEnter = ({ currentTarget }) => {
    setOpen(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpen(true);
  };

  return (
    <Grid item>
      <Button
        aria-describedby={id}
        type="button"
        ref={popoverAnchor}
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        {name}
      </Button>
      <Popper
        style={{ pointerEvents: 'none' }}
        disablePortal
        id={id}
        open={open}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: { pointerEvents: 'auto' },
          onMouseEnter: popoverEnter,
          onMouseLeave: popoverLeave,
        }}
      >
        {items.map(({ href, name }) => (
          <Link key={'nav_menu' + name} href={href}>
            {name}
          </Link>
        ))}
      </Popper>
    </Grid>
  );
};

const NavBar = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Bar position="fixed">
          <Toolbar>
            <Grid container>
              <Grid item>
                <div
                  css={css`
                                        width: 180px;
                                        height: auto;
                                        display: inline-block;
                                        padding: 15px 0px;
                                        @media (min-width: 600px) {
                                            width: 280px;
                                            padding: 30px 0px;
                                        }
                                    `}
                >
                  <Image
                    src="/logo.png"
                    alt="Drive Clear Logo"
                    width="280px"
                    height="60px"
                    objectFit="contain"
                  />
                </div>
              </Grid>
              <NavBarMenu
                name={'Servicesss'}
                items={[{ href: '/test', name: ' Testing----' }]}
              />
            </Grid>
          </Toolbar>
        </Bar>
      </Grid>
    </Grid>
  );
};

export default NavBar;
