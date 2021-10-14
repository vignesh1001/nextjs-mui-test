/** @format */

import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Img = styled(Image)({
    backgroundSize: "cover",
});

const Hero = () => {
    return (
        <Grid container spacing={0}>
            <Grid
                item
                xs={12}
                css={css`
					height: 80vh;
					position: relative;
				`}
            >
                <div
                    css={css`
						position: relative;
						display: block;
						width: 100%;
						height: 80vh;
						margin: 0 auto;
						@media (min-width: 600px) {
							position: fixed;
						}
					`}
                >
                    <Img
                        layout="fill"
                        objectFit="cover"
                        src="/hero_bg.jpg"
                        alt="Woman holding bag"
                    />
                </div>
                <div
                    css={css`
						position: absolute;
						right: 15px;
						top: 20%;
						width: 75%;
						height: 400px;
						@media (min-width: 600px) {
							top: 30%;
							width: 60%;
							right: 30px;
						}
					`}
                >
                    <Img
                        layout="fill"
                        objectFit="contain"
                        src="/easyway_hero_graphic.png"
                        alt="Easy way logo"
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default Hero;
