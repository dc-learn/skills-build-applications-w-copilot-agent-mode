import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import { API_BASE_URL } from './lib/api'
import './App.css'

const navigation = [
  { label: 'Overview', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'Athletes', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
]

function Overview() {
  return (
    <section className="overview page-section">
      <div className="overview-copy">
        <p className="eyebrow">Training intelligence</p>
        <h1>Make every rep count.</h1>
        <p className="section-description">OctoFit brings activity, teams, and personalized training into one calm command center.</p>
        <Link className="primary-action" to="/activities">View activity log <span aria-hidden="true">→</span></Link>
      </div>
      <div className="overview-mark" aria-hidden="true"><span>O</span><span>F</span></div>
      <div className="metric-strip">
        <div><strong>01</strong><span>Log activity</span></div>
        <div><strong>02</strong><span>Build momentum</span></div>
        <div><strong>03</strong><span>Reach further</span></div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/">
          <img src="/octofitapp-small.png" alt="" />
          <span>OCTOFIT <em>TRACKER</em></span>
        </Link>
        <div className="api-status"><span className="status-dot" /> API connected <small>{API_BASE_URL}</small></div>
      </header>

      <div className="app-body">
        <aside className="sidebar" aria-label="Primary navigation">
          <p className="nav-label">Workspace</p>
          <nav>
            {navigation.map((item, index) => (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="sidebar-footer"><span>OCTOFIT / 2026</span><span>v0.1</span></div>
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
