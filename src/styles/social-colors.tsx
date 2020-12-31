import { css } from 'styled-components'

export default css`
  .twitter-color {
    background: #00aced;
    transition: 0.3s;
    &--hover-shadow:hover {
      background: #009dd9;
    }
  }

  .github-color {
    background: #333;
    transition: 0.3s;
    &--hover-shadow:hover {
      background: #00aced;
    }
  }

  .instagram-color {
    background: #966842;
    transition: 0.3s;
    &--hover-shadow:hover {
      background: #00aced;
    }
  }

  .facebook-color {
    background: #3b5899;
    transition: 0.3s;
    &--hover-shadow:hover {
      background: #385391;
    }
  }

  .linkedin-color {
    background: #0077b5;
    transition: 0.3s;
    &--hover-shadow:hover {
      background: #0070ab;
    }
  }

  .twitter--hover:hover {
    background: #00aced !important;
  }

  .github--hover:hover {
    background: #333 !important;
  }

  .instagram--hover:hover {
    background: #966842 !important;
  }

  .linkedin--hover:hover {
    background: #0077b5 !important;
  }

  .medium--hover:hover {
    background: #0bdc6d !important;
  }

  .dev--hover:hover {
    background: white !important;
  }
`
