import { Stack } from "@mui/material";

const HorizontalStack = ({ children, className = '', ...rest }) => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            className={className}
            {...rest}>
            {children}
        </Stack>
    );
};

export default HorizontalStack;