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

const Footer = () => {
    return (
        <Grid container spacing={0}>
            <Grid
                item
                xs={12}
                css={css`
					position: relative;
					background-color: #fff;
					padding: 1rem 0;
					@media (min-width: 600px) {
						padding: 2rem 0;
				`}
            >
                <div
                    css={css`
						width: 180px;
						height: 80px;
						padding: 15px 0px;
						margin: 0 auto;
						position: relative;
						display: block;
						@media (min-width: 600px) {
							width: 300px;
							height: 100px;
						}
					`}
                >
                    <Img
                        layout="fill"
                        objectFit="contain"
                        src="/footer_logo.png"
                        alt="Easy way logo"
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default Footer;
