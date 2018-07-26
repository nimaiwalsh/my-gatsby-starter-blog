import { injectGlobal } from 'react-emotion';
import { COLOURS } from '../utils/theme';
//Global style and resets
const globalStyles = injectGlobal`
  body {
    background-color: #F3F3F3;
  }
  a {
    color: ${COLOURS.secondary};
  }
  a:hover {
    text-decoration: none;
  }
`

export default globalStyles