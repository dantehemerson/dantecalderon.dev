import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ({ limit, currentPage, numPages }) => {
  const prevPage = `/blog${currentPage === 2 ? '' : `/page/${currentPage - 1}`}`
  return (
    <Container>
      <div>
        {currentPage > 1 && (
          <Link rel="next" to={prevPage}>
            Newest
          </Link>
        )}
      </div>
      <div>
        {currentPage < numPages && (
          <Link rel="prev" to={`/blog/page/${currentPage + 1}`}>
            Older
          </Link>
        )}
      </div>
    </Container>
  )
}
