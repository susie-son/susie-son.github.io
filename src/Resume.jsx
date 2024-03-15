import React, { forwardRef } from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import './Resume.css'

const Resume = forwardRef((_, ref) => {
  return (
    <div className='page' ref={ref}>
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={12}>
          <Box>
            <Typography variant='h1'>susie son</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm='auto'>
          <Stack spacing={2}>
            <Box>
              <Stack>
                <Stack direction='row' spacing={1}>
                  <IconButton
                    color='secondary'
                    aria-label='email'
                    onClick={() => window.open('mailto:me@susieson.com')}
                  >
                    <Email />
                  </IconButton>
                  <Typography variant='caption' alignSelf='center'>
                    me@susieson.com
                  </Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <IconButton
                    color='secondary'
                    aria-label='github'
                    onClick={() => window.open('https://github.com/susie-son')}
                  >
                    <GitHub />
                  </IconButton>
                  <Typography variant='caption' alignSelf='center'>
                    susie-son
                  </Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <IconButton
                    color='secondary'
                    aria-label='linkedin'
                    onClick={() => window.open('https://www.linkedin.com/in/susie-son')}
                  >
                    <LinkedIn />
                  </IconButton>
                  <Typography variant='caption' alignSelf='center'>
                    susie-son
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Typography variant='h2'>education</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0, sm: 2 }}>
                <Typography variant='subtitle1'>University of Waterloo</Typography>
                <Typography variant='overline'>2022</Typography>
              </Stack>
              <Typography variant='body1'>Bachelor of Mathematics</Typography>
            </Box>

            <Box>
              <Typography variant='h2'>skills</Typography>
              <Box>
                <Typography variant='subtitle1'>languages</Typography>
                <Typography variant='body1'>Kotlin, Java, JavaScript, Python</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant='subtitle1'>frameworks</Typography>
                <Typography variant='body1'>Android, React, React Native</Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box>
            <Typography variant='h2'>work</Typography>
            <Stack spacing={2}>
              <Box>
                <Stack
                  divider={<Divider orientation='vertical' flexItem />}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0, sm: 1.5 }}
                >
                  <Typography variant='subtitle1'>Software Engineer</Typography>
                  <Typography variant='subtitle1'>Stytch</Typography>
                  <Typography variant='overline'>2022 - present</Typography>
                </Stack>
                <Typography variant='body1' mt={1}>
                  Developed the UI for the{' '}
                  <Link underline='hover' href='https://stytch.com/products/passwords'>
                    Passwords
                  </Link>{' '}
                  product in the JavaScript SDK. Building the foundation and developing products in the{' '}
                  <Link underline='hover' href='https://stytch.com/docs/sdks/react-native-sdk'>
                    React Native SDK
                  </Link>
                  .
                </Typography>
              </Box>
              <Box>
                <Stack
                  divider={<Divider orientation='vertical' flexItem />}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0, sm: 1.5 }}
                >
                  <Typography variant='subtitle1'>Software Engineering Intern</Typography>
                  <Typography variant='subtitle1'>SeatGeek</Typography>
                  <Typography variant='overline'>2021</Typography>
                </Stack>
                <Typography variant='body1' mt={1}>
                  Built a semantic color and typography design system in the{' '}
                  <Link underline='hover' href='https://play.google.com/store/apps/details?id=com.seatgeek.android'>
                    Android app
                  </Link>
                  . Implemented an onboarding carousel animation in Android. Migrated all uses of the Picasso
                  image-loading library within the app to Coil.
                </Typography>
              </Box>
              <Box>
                <Stack
                  divider={<Divider orientation='vertical' flexItem />}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0, sm: 1.5 }}
                >
                  <Typography variant='subtitle1'>Software Engineering Intern</Typography>
                  <Typography variant='subtitle1'>Honey</Typography>
                  <Typography variant='overline'>2021</Typography>
                </Stack>
                <Typography variant='body1' mt={1}>
                  Demonstrated proof of concept for biometric authentication in the{' '}
                  <Link
                    underline='hover'
                    href='https://play.google.com/store/apps/details?id=com.joinhoney.honeyandroid'
                  >
                    Android app
                  </Link>
                  . Created a job in CircleCI to report slow UI performance, using ADB and Perfetto system profiling
                  tools. Developed UI components for viewing product price history.
                </Typography>
              </Box>
              <Box>
                <Stack
                  divider={<Divider orientation='vertical' flexItem />}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0, sm: 1.5 }}
                >
                  <Typography variant='subtitle1'>Android Developer Intern</Typography>
                  <Typography variant='subtitle1'>Bitback</Typography>
                  <Typography variant='overline'>2020</Typography>
                </Stack>
                <Typography variant='body1' mt={1}>
                  Implemented offers discovery screen in the Android app including sorting and filtering features, as
                  well as a map view. Introduced a shorter sign up flow and a 1-click top-up flow to simplify user
                  experience. Established guidelines for unit testing and UI testing.
                </Typography>
              </Box>
              <Box>
                <Stack
                  divider={<Divider orientation='vertical' flexItem />}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0, sm: 1.5 }}
                >
                  <Typography variant='subtitle1'>Android Engineer Intern</Typography>
                  <Typography variant='subtitle1'>Intersect</Typography>
                  <Typography variant='overline'>2019</Typography>
                </Stack>
                <Typography variant='body1' mt={1}>
                  Polished up UI in the dashboard of the{' '}
                  <Link underline='hover' href='https://play.google.com/store/apps/details?id=com.sohohouse.seven'>
                    Soho House Android app
                  </Link>
                  . Implemented sending and receiving money via Interac e-Transfer in the{' '}
                  <Link underline='hover' href='https://play.google.com/store/apps/details?id=ca.pcfinancial.bank'>
                    PC Financial Android app
                  </Link>
                  .
                </Typography>
              </Box>
              <Box>
                <Stack
                  divider={<Divider orientation='vertical' flexItem />}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0, sm: 1.5 }}
                >
                  <Typography variant='subtitle1'>Android Developer Intern</Typography>
                  <Typography variant='subtitle1'>Plastic Mobile</Typography>
                  <Typography variant='overline'>2019</Typography>
                </Stack>
                <Typography variant='body1' mt={1}>
                  Deployed rapid prototypes in the company innovation lab. Developed a Smart Little Library Android app
                  for real-time inventory and book barcode scanning. Built a vending machine Android app using Bluetooth
                  Low Energy.
                </Typography>
              </Box>
              <Box>
                <Stack
                  divider={<Divider orientation='vertical' flexItem />}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0, sm: 1.5 }}
                >
                  <Typography variant='subtitle1'>Mobile QA Analyst Intern</Typography>
                  <Typography variant='subtitle1'>QuickTapSurvey</Typography>
                  <Typography variant='overline'>2018</Typography>
                </Stack>
                <Typography variant='body1' mt={1}>
                  Performed regression testing on the Android and iOS apps and fixed minor bugs in the{' '}
                  <Link
                    underline='hover'
                    href='https://play.google.com/store/apps/details?id=com.tabbledabble.qts.androidapp'
                  >
                    Android app
                  </Link>
                  .
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
})

export default Resume
