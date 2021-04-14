import { ReactElement } from 'react'
import styled from 'styled-components'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Image from 'components/elements/Image'
import Typography from 'components/elements/Typography'
import { Image as ImageType } from 'types/image'

const ProfilePicture = styled(Image)`
  border-radius: 50%;
`

type TeaserProps = {
  title: string
  subtitle: string
  image: ImageType
}
export default function Teaser({
  title,
  subtitle,
  image,
}: TeaserProps): ReactElement {
  return (
    <Box mt={10} mb={20}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h1">
            {title}
          </Typography>
          <Typography variant="h5" component="p">
            {subtitle}
          </Typography>
        </Grid>
        <Grid item>
          <ProfilePicture
            src={image.url}
            alt={image.alt}
            width={200}
            height={200}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
