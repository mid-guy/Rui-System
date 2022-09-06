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
                    style: " background-color: blue; ",
                },
            ],
            backgrounds: [
                {
                    props: { background: "ghost" },
                    style: " background- color: black; ",
                },
                {
                    props: { background: "submit" },
                    style: "  background- color: red; ",
                },
            ],
            sizes: [
                {
                    props: { size: "xs" },
                    style: " min-width: 40px;"
                },
                {
                    props: { size: "xxl" },
                    style: "min-width: 416px;",
                },
            ]
        },
        // label: {
        //     status: [
        //         {
        //             props: { size: "success" },
        //             style: `
        //                 background-color: green;
        //             `,
        //         },
        //         {
        //             props: { size: "error" },
        //             style: `
        //             background-color: red;
        //             `,
        //         },
        //     ],
        //     sizes: [
        //         {
        //             props: { size: "xs" },
        //             style: `
        //                 min-width: 40px;
        //             `,
        //         },
        //         {
        //             props: { size: "xxl" },
        //             style: `
        //                 min-width: 416px;
        //             `,
        //         },
        //     ]
        // }
    }
});

declare module "../ButtonBase/ButtonBase" {
    interface ButtonPropsVariantOverrides {
        dashed: true;
        dasher: true;
    }
}

