import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  // colors: {},
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  components: {
    Text: {
      baseStyle: {
        // fontSize: 'lg',
        // fontWeight: 'normal',
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'inherit',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
      },
    },
  },
})
