import { useEffect, useState } from 'react'
import { fetchCollection } from '../lib/api'

function CollectionPage({ title, endpoint, description, columns, emptyMessage }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetchCollection(endpoint, controller.signal)
      .then((records) => {
        setItems(records)
        setStatus('ready')
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => controller.abort()
  }, [endpoint])

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live collection</p>
          <h1>{title}</h1>
          <p className="section-description">{description}</p>
        </div>
        <span className="record-count">{status === 'ready' ? `${items.length} records` : 'Syncing'}</span>
      </div>

      {status === 'loading' && <div className="state-panel">Loading {title.toLowerCase()}...</div>}
      {status === 'error' && <div className="state-panel state-error">{error}</div>}
      {status === 'ready' && items.length === 0 && <div className="state-panel">{emptyMessage}</div>}
      {status === 'ready' && items.length > 0 && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id ?? item._id ?? index}>
                  {columns.map((column) => <td key={column.key}>{column.render ? column.render(item) : item[column.key] ?? '—'}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default CollectionPage
