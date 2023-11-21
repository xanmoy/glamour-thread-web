import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skXDxW8K88uQgRoB8LKdP09QYpbtspaV4USn8fIU2ZUtsuGCvcbVY8LyljdZFXKXAObUrowxxXCROxAQoFFSKdHBN2BvLJmTw7UaF2CIAOO8LQlwTuAkOfOHxHo8duijeQ6eBOHbqetWI57W3VbSsIxZZ6kxB0PnLRO9fLirq3gdeM8G6hHl",
})
