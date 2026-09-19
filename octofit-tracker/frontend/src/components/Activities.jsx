import CollectionPage from './CollectionPage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { key: 'user', label: 'Athlete' },
  { key: 'type', label: 'Activity' },
  { key: 'duration', label: 'Duration' },
  { key: 'calories', label: 'Calories' },
]

function Activities() {
  return (
    <CollectionPage
      title="Activity log"
      endpoint={endpoint}
      description="Review movement, effort, and consistency across the team."
      columns={columns}
      emptyMessage="No activities have been logged yet."
    />
  )
}

export default Activities
