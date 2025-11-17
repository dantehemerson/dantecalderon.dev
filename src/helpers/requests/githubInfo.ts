export const getMyGithubInfo = async () => {
  try {
    const res = await fetch('https://api.dantecalderon.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        {
          githubStatus {
            status
            updatedAt
            bio
            company
            contributions
          }
          latestCommit {
            message
            createdAt
            url
          }
          listening {
            name
            artist
            album
            url
            image
            playing
            scrobbles
            lastPlayingDate
          }
          reading {
            title
            updatedAt
            url
            profileUrl
          }
        }`,
      }),
    })

    const json = await res.json()
    return json.data
  } catch (err) {
    console.log('Error: ', err)
  }
}
