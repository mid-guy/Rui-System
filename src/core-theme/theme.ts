import createTheme from "./createTheme";

export default createTheme({
    components: {
        button: {
            variants: [
                {
                    props: { variant: "dashed" },
                    style: "background-color: blue"
                },
                {
                    props: { variant: "dasher" },
                    style: "background-color: blue;",
                },
            ],
            backgrounds: [
                {
                    props: { background: "ghost" },
                    style: "background-color: black;",
                },
                {
                    props: { background: "submit" },
                    style: "background-color: red;",
                },
            ],
            sizes: [
                {
                    props: { size: "xs" },
                    style: "padding: 8px 16px; font-size: 14px; height: 36px;"
                },
                {
                    props: { size: "xxl" },
                    style: "padding: 8px 16px; font-size: 18px; height: 45px;"
                },
            ]
        },
    }
});

declare module "../components/ButtonBase/ButtonBase" {
    interface ButtonPropsVariantOverrides {
        dashed: true;
        dasher: true;
    }
    interface ButtonPropsSizeOverrides {
        xs: true;
        xxl: true
    }
}

