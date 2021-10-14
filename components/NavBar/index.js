import React, { useState, useRef } from 'react';
import { Popover } from '@mui/material';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { css } from '@emotion/react';
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

const NavBarItems = ({ name, items = [] }) => {
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false);
  };
  return (
    <>
      <Button
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
        style={{
          fontSize: 12,
          color: `darkblue`,
          fontFamily: 'Gotham Medium',
          padding: '0 16px',
        }}
      >
        {name}
      </Button>
      <Popover
        style={{ pointerEvents: 'none' }}
        id="mouse-over-popover"
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
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
        <Paper style={{ padding: '10px 18px' }}>
          {items.map(({ name, href }) => (
            <div
              css={css`
                            padding: 8px 4px;
                        `}
            >
              <Link href={href}>{name}</Link>
            </div>
          ))}
        </Paper>
      </Popover>
    </>
  );
};

const MyComponent = ({ loading, login, wrong, clearWrongLogin }) => {
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
                  <NavBarItems
                    name="Services"
                    items={[
                      { name: 'Windshield Repair', href: '/link1' },
                      { name: 'Windshield Replacement', href: '/link2' },
                      { name: 'Windshieeld Camera', href: '/link2' },
                      { name: 'Auto Glass Warranty', href: '/link2' },
                      { name: 'Windshield Insurance Claims', href: '/link2' },
                      { name: 'Rain Repellent Treatments', href: '/link2' },
                    ]}
                  />
                  <NavBarItems
                    name="Franchise Opportunities"
                    items={[
                      { name: 'Section 2 page 1', href: '/link1' },
                      { name: 'Section 2 Testing page 2', href: '/link2' },
                    ]}
                  />
                  <NavBarItems
                    name="About Us"
                    items={[
                      { name: 'Secyon Testing page 1', href: '/link1' },
                      { name: 'section 3 Testing page 2', href: '/link2' },
                    ]}
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </Bar>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
