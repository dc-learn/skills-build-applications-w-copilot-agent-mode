import CollectionPage from './CollectionPage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

const columns = [
  { key: 'name', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'duration', label: 'Duration' },
]

function Workouts() {
  return (
    <CollectionPage
      title="Workouts"
      endpoint={endpoint}
      description="Keep personalized sessions ready for the next training block."
      columns={columns}
      emptyMessage="Personalized workouts will appear here."
    />
  )
}

export default Workouts
