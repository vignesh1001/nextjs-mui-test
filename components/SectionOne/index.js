/** @format */
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const Img = styled(Image)({
    backgroundSize: "cover",
});

const SectionOne = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={0}
            css={css`
				background-color: #fff;
				position: relative;
			`}
        >
            <Grid item xs={12} sm={10}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                    css={css`
						margin: 2rem 0;
						position: relative;
						@media (min-width: 600px) {
							margin: 4rem 0;
						}
					`}
                >
                    <Grid
                        item
                        xs={12}
                        sm={11}
                        md={4}
                        css={css`
							position: relative;
							text-align: center;
						`}
                    >
                        <Img
                            width={`150px`}
                            height={`150px`}
                            src="/grab.png"
                            alt="Grab Bag icon"
                        />
                        <Typography
                            variant="h2"
                            component="div"
                            css={css`
								margin-top: 1rem;
								margin-bottom: 0.5rem;
							`}
                        >
                            Grab
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            css={css`
								width: 80%;
								margin: 0 auto;
								min-height: 80px;
							`}
                        >
                            {`Shop as usual & we’ll auto-detect what you pick up`}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={10}
                        md={4}
                        css={css`
							position: relative;
							text-align: center;
						`}
                    >
                        <Img
                            width={`150px`}
                            height={`150px`}
                            src="/tap.png"
                            alt="Mobile phone icon"
                        />
                        <Typography
                            variant="h2"
                            component="div"
                            css={css`
								margin-top: 1rem;
								margin-bottom: 0.5rem;
							`}
                        >
                            Tap
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            css={css`
								width: 80%;
								margin: 0 auto;
								min-height: 80px;
							`}
                        >
                            {`When you’re done, click “checkout” in the app and tap your phone to go`}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={10}
                        md={4}
                        css={css`
							position: relative;
							text-align: center;
						`}
                    >
                        <Img
                            width={`150px`}
                            height={`150px`}
                            src="/go.png"
                            alt="Right facing chevron icon"
                        />
                        <Typography
                            variant="h2"
                            component="div"
                            css={css`
								margin-top: 1rem;
								margin-bottom: 0.5rem;
							`}
                        >
                            Go
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            css={css`
								width: 80%;
								margin: 0 auto;
								min-height: 80px;
							`}
                        >
                            {`Payment’s automatic, so you’re good to go!`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SectionOne;
