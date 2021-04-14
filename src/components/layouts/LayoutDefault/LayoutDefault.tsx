import { ReactElement, ReactNode, useReducer } from 'react'
import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import type { Config } from 'types/config'
import Meta from 'components/layouts/Meta'
import exitPreview from 'services/api/preview/exitPreview'
import CookieBanner from 'components/modules/CookieBanner'
import { Image } from 'types/image'
import Aside from './Aside'
import Header from './Header'
import Footer from './Footer'

const ContainerStyled = styled(Container)`
  display: flex;
  min-height: calc(100vh - 88px);
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.spacing(6)}px`};
`

const Background = styled.div`
  background-image: ${({
    imageBackground,
  }: {
    imageBackground: Image | null
  }) => imageBackground && `url(${imageBackground.url})`};
  background-size: 100% 300px;
  background-repeat: no-repeat;
`

type LayoutDefaultProps = {
  preview: boolean
  config: Config
  children: ReactNode
  imageBackground: Image | null
}

export default function LayoutDefault({
  preview,
  config,
  children,
  imageBackground,
}: LayoutDefaultProps): ReactElement {
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, { cartStatus: 'CLOSED' })

  async function onClickExitPreview() {
    await exitPreview()

    router.reload()
  }

  function openCart() {
    dispatch({ type: 'OPEN_CART' })
  }

  function closeCart() {
    dispatch({ type: 'CLOSE_CART' })
  }

  return (
    <Background imageBackground={imageBackground}>
      <Meta />
      {preview && (
        <div>
          <Button onClick={onClickExitPreview}>Exit Preview</Button>
        </div>
      )}

      <CookieBanner />

      <ContainerStyled maxWidth="md">
        <Header config={config} openCart={openCart} />
        <main>{children}</main>
      </ContainerStyled>

      <Container>
        <Footer config={config} />
      </Container>

      <Aside
        cartStatus={state.cartStatus}
        openCart={openCart}
        closeCart={closeCart}
      />
    </Background>
  )
}

type State = {
  cartStatus: 'OPEN' | 'CLOSED'
}

type Action =
  | {
      type: 'OPEN_CART'
    }
  | { type: 'CLOSE_CART' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN_CART':
      return { ...state, cartStatus: 'OPEN' }

    case 'CLOSE_CART':
      return { ...state, cartStatus: 'CLOSED' }

    default:
      return state
  }
}
