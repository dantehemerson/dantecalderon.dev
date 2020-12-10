export const getMyGithubInfo = async () => {
  try {
    const res = await fetch('https://api.dantecalderon.dev/graphql', {
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
        }`,
      }),
    })

    const json = await res.json()
    return json.data
  } catch (err) {
    console.log('Error: ', err)
  }
}
