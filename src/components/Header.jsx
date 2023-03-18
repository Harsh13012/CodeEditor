import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material'
const Container = styled(AppBar)`
    background: #060606;
    height:9vh;
    position:"static"
`
export default function Header() {
    return (
        <Container position='static'>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" align="center">
                        CODE EDITOR
                    </Typography>
                </Box>
            </Toolbar>
        </Container>
    )
}