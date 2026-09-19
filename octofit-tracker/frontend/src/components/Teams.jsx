import CollectionPage from './CollectionPage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'members', label: 'Members' },
  { key: 'points', label: 'Points' },
  { key: 'status', label: 'Status' },
]

function Teams() {
  return (
    <CollectionPage
      title="Teams"
      endpoint={endpoint}
      description="Organize athletes around shared goals and friendly competition."
      columns={columns}
      emptyMessage="Create a team to start training together."
    />
  )
}

export default Teams
