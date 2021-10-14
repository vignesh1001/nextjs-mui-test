/** @format */
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

const SectionTwo = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            css={css`
				background-color: #f59121;
				position: relative;
				padding: 4rem 0;
			`}
        >
            <Grid
                item
                xs={11}
                sm={10}
                css={css`
					position: relative;
					text-align: left;
				`}
            >
            </Grid>
            <Grid
                item
                display="flex"
                direction="row"
                justifyContent="left"
                alignItems="center"
                xs={11}
                sm={10}
                css={css`
					position: relative;
					text-align: left;
					padding-bottom: 1rem;
				`}
            >
                <Link
                    href={
                        "https://play.google.com/store/apps/details?id=com.circlek.innovation.global&hl=en_US&gl=US&utm_source=web&utm_content=apache"
                    }
                >
                    <a
                        target="_blank"
                        css={css`
							text-decoration: none;
							cursor: pointer;
							position: relative;
							display: inline-block;
							margin-left: 0.5rem;
							margin-right: 0.5rem;
							width: 160px;
							height: 50px;
						`}
                    >
                        <Image
                            src="/google-play-badge.png"
                            alt="Circle K Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
                <Link
                    href={
                        "https://apps.apple.com/us/app/circle-k-innovation/id1556692370#utm_source=web&utm_content=apache"
                    }
                >
                    <a
                        target="_blank"
                        css={css`
							text-decoration: none;
							cursor: pointer;
							position: relative;
							display: inline-block;
							width: 150px;
							height: 48px;
						`}
                    >
                        <Image
                            src="/app-store.png"
                            alt="Circle K Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
            </Grid>
        </Grid>
    );
};

export default SectionTwo;
