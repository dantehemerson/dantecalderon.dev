export const getMyGithubInfo = async () => {
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GATSBY_GITHUB_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        { user(login: "dantehemerson") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            bio
            company
            status {
              message
              emojiHTML
              updatedAt
              indicatesLimitedAvailability
            }
          }
        }`,
      }),
    })
    const {
      data: {
        user: {
          company,
          status,
          contributionsCollection: {
            contributionCalendar: { totalContributions },
          },
        },
      },
    } = await res.json()

    return {
      status: `${status.emojiHTML} ${status.message}`,
      company,
      totalContributions,
      updatedAt: status.updatedAt,
      bussy: status.indicatesLimitedAvailability,
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
