import React from 'react'
import ContentAdmin from '../Contents/ContentAdmin'

import IntroAdmin from "../Introduce/IntroAdmin"

function HomeAdmin(props) {
  return (
    <div>
        <IntroAdmin/>
         <ContentAdmin/>
    </div>
  )
}

export default HomeAdmin;