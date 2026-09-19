import CollectionPage from './CollectionPage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return (
    <CollectionPage
      title="Leaderboard"
      endpoint={endpoint}
      description="See who is building momentum and moving the group forward."
      columns={columns}
      emptyMessage="The leaderboard will appear after the first activities are recorded."
    />
  )
}

export default Leaderboard
