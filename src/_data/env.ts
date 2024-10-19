export default () => ({
  COMMIT_SHA: process.env.CF_PAGES_COMMIT_SHA ?? 'uncommitted',
  BRANCH: process.env.CF_PAGES_BRANCH ?? 'local',
})
