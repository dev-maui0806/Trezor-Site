import './Header.css'

export default function Header({ title = 'Dashboard' }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  )
}
