import CollectionPage from './CollectionPage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
  { key: 'role', label: 'Role' },
]

function Users() {
  return (
    <CollectionPage
      title="Athletes"
      endpoint={endpoint}
      description="Manage profiles and keep every participant connected to their progress."
      columns={columns}
      emptyMessage="No athlete profiles have been added yet."
    />
  )
}

export default Users
