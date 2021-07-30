// For practical reasons I am using a Json file for the Articles,
// localy the app was working with StrapiCMS, here is the request:
//
// export function getStrapiURL(path = "") {
//   return `${
//     process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
//   }${path}`
// }
//
//
// export async function fetchAPI(path) {
//   const requestUrl = getStrapiURL(path)
//   const response = await fetch(requestUrl)
//   const data = await response.json()
//   return data
// }

import data from '../../blogs/blogs.json'

export async function fetchAPI(){
  return data
}
