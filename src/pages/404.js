import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default props => (
   <PageTransition>
      <Layout location={ props.location }>
         <div className="NotFound">
            <Helmet>
               <title>{`Error 404(Page Not Found) · Dante Calderón`}</title>
            </Helmet>
            <svg viewBox="0 0 100 33">
               <defs>
                  <linearGradient id="gradient" x1={0} x2={0} y1={0} y2={1}>
                     <stop offset="5%" stopColor="#CB9A48" />
                     <stop offset="95%" stopColor="#C89B4F" />
                  </linearGradient>
                  <pattern id="wave" x={0} y={11} width={120} height={35} patternUnits="userSpaceOnUse">
                     <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                        <animateTransform attributeName="transform" begin="0s" dur="1.5s" type="translate" from="0,0" to="40,0" repeatCount="indefinite" />
                     </path>
                  </pattern>
               </defs>
               <text textAnchor="middle" x={50} y={30} fontSize={30} fill="url(#wave)" fillOpacity="0.6">404</text>
               <text textAnchor="middle" x={50} y={30} fontSize={30} fill="url(#gradient)" fillOpacity="0.1">404</text>
            </svg>
            <h1 className="NotFound__title">Página no encontrada</h1>
            <p className="NotFound__description">Deseas ir al
               <Link to="/">Inicio</Link> talvez?.
            </p>
         </div>
      </Layout>
   </PageTransition>
)