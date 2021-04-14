import Grid from '@material-ui/core/Grid'
import { ReactElement } from 'react'
import Button from '@material-ui/core/Button'
import IconArrowBack from '@material-ui/icons/ArrowBack'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Link from 'components/elements/Link'
import theme from 'theme'

const FooterWrapper = styled.footer`
  background-color: ${theme.palette.background.default};
  border-top: ${theme.palette.grey[900]} solid 1px;
  padding-bottom: ${theme.spacing(4)}px;
  padding-top: ${theme.spacing(2)}px;
`

export default function Footer(): ReactElement {
  return (
    <FooterWrapper>
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Link href="/">
            <Button startIcon={<IconArrowBack />}>Volver a la tienda</Button>
          </Link>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}
