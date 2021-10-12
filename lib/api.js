import Prismic from '@prismicio/client'

const REPOSITORY = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME

export const api = {
  REF_URL: `https://${REPOSITORY}.prismic.io/api/v2`,
  TOKEN: process.env.PRISMIC_API_TOKEN,
  HOME_ID: process.env.HOME_ID
}

export const PrismicClient = Prismic.client(api.REF_URL, {
  accessToken: api.TOKEN,
})