import { useState, useRef, useEffect } from 'react'
import './Sidebar.css'

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="m27.354 12.971-10-9.435a2 2 0 0 0-2.705-.014l-.014.014-9.989 9.435A2 2 0 0 0 4 14.444V26a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6h4v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V14.444a2 2 0 0 0-.646-1.473M26 26h-6v-6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H6V14.444l.014-.013L16 5l9.988 9.429.013.012z"
    />
  </svg>
)

const ActivityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="M27.725 21.992C27.031 20.797 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.992A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.655A3 3 0 0 1 16 27M6 23c.963-1.655 2-5.49 2-10a8 8 0 0 1 16 0c0 4.506 1.035 8.341 2 10z"
    />
  </svg>
)

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="M16 10a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6m0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8m13.742-6.599a1 1 0 0 0-.486-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.759l-.018 4.206-3.729 2.125a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.202a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.584 1 1 0 0 0 .808-.074L16 26.77l3.765 2.106a1 1 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.758l.018-4.207 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19zm-1.875 4.364-3.57 2.031a1 1 0 0 0-.376.375c-.072.125-.148.258-.226.383a1 1 0 0 0-.152.526l-.02 4.031a12 12 0 0 1-3.17 1.788L16.75 24.89a1 1 0 0 0-.489-.125h-.478a1 1 0 0 0-.513.125l-3.605 2.013a12 12 0 0 1-3.18-1.779L8.471 21.1a1 1 0 0 0-.152-.527 7 7 0 0 1-.225-.383 1 1 0 0 0-.375-.382L4.144 17.77a11.3 11.3 0 0 1 0-3.532l3.565-2.035a1 1 0 0 0 .375-.375c.072-.125.148-.258.226-.383a1 1 0 0 0 .152-.526l.02-4.031a12 12 0 0 1 3.17-1.788l3.598 2.01a1 1 0 0 0 .512.125h.456a1 1 0 0 0 .512-.125l3.605-2.013a12 12 0 0 1 3.18 1.78l.014 4.024a1 1 0 0 0 .152.528q.118.186.225.382c.089.159.218.291.375.383l3.575 2.036a11.3 11.3 0 0 1 .006 3.536h.006z"
    />
  </svg>
)

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="m28.707 9.708-16 16a1 1 0 0 1-1.415 0l-7-7a1 1 0 0 1 1.415-1.415L12 23.586 27.292 8.293a1 1 0 0 1 1.415 1.415"
    />
  </svg>
)

const AtomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
  >
    <path
      fill="rgb(242, 174, 84)"
      d="M24.515 16c3.081-4.326 4.653-8.798 2.468-10.983S20.326 4.404 16 7.485C11.674 4.404 7.203 2.832 5.018 5.017S4.404 11.674 7.485 16c-3.081 4.326-4.652 8.797-2.467 10.982C5.72 27.686 6.66 28 7.756 28c2.31 0 5.31-1.396 8.25-3.485C18.934 26.604 21.934 28 24.25 28c1.095 0 2.036-.315 2.739-1.018 2.179-2.185.607-6.656-2.474-10.982m1.055-9.57c.955.955.31 4.05-2.315 7.91a38 38 0 0 0-2.649-2.946A38 38 0 0 0 17.66 8.75c3.86-2.625 6.955-3.275 7.91-2.319zM22.036 16a36 36 0 0 1-2.845 3.191 36 36 0 0 1-3.19 2.845 36 36 0 0 1-3.192-2.845A36 36 0 0 1 9.964 16 37.3 37.3 0 0 1 16 9.964a36 36 0 0 1 3.191 2.845 36 36 0 0 1 2.845 3.19zM6.431 6.43c.275-.276.73-.419 1.328-.419 1.477 0 3.836.863 6.581 2.738a38 38 0 0 0-2.945 2.645A38 38 0 0 0 8.75 14.34c-2.625-3.86-3.274-6.955-2.319-7.91m0 19.138c-.955-.955-.306-4.05 2.32-7.91a38 38 0 0 0 2.648 2.946 38 38 0 0 0 2.942 2.645c-3.86 2.625-6.955 3.275-7.91 2.319m19.138 0c-.955.956-4.05.31-7.91-2.315a38 38 0 0 0 2.946-2.65 38 38 0 0 0 2.645-2.945c2.625 3.86 3.274 6.955 2.319 7.91m-8.069-9.57a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
)

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.343 11.64 26 16 26s8.321-1.657 11.457-4.793c2.354-2.353 3.413-4.7 3.457-4.8a1 1 0 0 0 0-.812M16 24c-3.848 0-7.209-1.399-9.991-4.156A16.7 16.7 0 0 1 3.125 16a16.7 16.7 0 0 1 2.884-3.844C8.79 9.4 12.152 8 16 8s7.209 1.399 9.991 4.156A16.7 16.7 0 0 1 28.881 16c-.901 1.683-4.827 8-12.881 8m0-14a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6m0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
    />
  </svg>
)

const TrezorLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 256 66"
    width="107"
    height="auto"
  >
    <path
      d="M158.103849,20.0171045 L184.845449,20.0171045 L184.845449,27.0543677 L170.301772,46.758705 L184.845449,46.758705 L184.845449,55.0470374 L158.103849,55.0470374 L158.103849,48.009774 L172.647526,28.3054368 L158.103849,28.3054368 L158.103849,20.0171045 Z M248.337203,42.0671961 C251.621259,40.8161271 255.061699,37.5320709 255.061699,31.7458767 C255.061699,24.7086133 250.213806,20.1734881 243.020159,20.1734881 L226.599878,20.1734881 L226.599878,55.0470374 L235.670128,55.0470374 L235.670128,43.3182652 L239.110569,43.3182652 L245.522297,55.0470374 L256,55.0470374 L248.337203,42.0671961 Z M241.925474,35.1863165 L235.670128,35.1863165 L235.670128,28.1490532 L241.925474,28.1490532 C244.271228,28.1490532 245.835065,29.5565058 245.835065,31.589493 C245.835065,33.7788638 244.271228,35.1863165 241.925474,35.1863165 Z M204.549787,19.5479536 C193.9157,19.5479536 186.409286,27.2107514 186.409286,37.5320709 C186.409286,47.8533904 194.072083,55.5161882 204.549787,55.5161882 C215.027489,55.5161882 222.846671,47.8533904 222.846671,37.5320709 C222.846671,27.2107514 215.183873,19.5479536 204.549787,19.5479536 Z M204.549787,47.3842395 C199.232743,47.3842395 195.63592,43.3182652 195.63592,37.5320709 C195.63592,31.589493 199.232743,27.6799023 204.549787,27.6799023 C209.86683,27.6799023 213.620037,31.7458767 213.620037,37.5320709 C213.620037,43.3182652 209.86683,47.3842395 204.549787,47.3842395 Z M128.39096,20.0171045 L153.725107,20.0171045 L153.725107,28.1490532 L137.46121,28.1490532 L137.46121,33.3097129 L153.255956,33.3097129 L153.255956,41.285278 L137.46121,41.285278 L137.46121,46.9150886 L153.725107,46.9150886 L153.725107,55.0470374 L128.39096,55.0470374 L128.39096,20.0171045 Z M38.4703727,15.169212 C38.4703727,6.88087966 31.2767258,0 22.5192426,0 C13.7617594,0 6.56811241,6.88087966 6.56811241,15.169212 L6.56811241,20.0171045 L0,20.0171045 L0,54.8906537 L22.5192426,65.3683568 L45.0384851,54.8906537 L45.0384851,20.1734881 L38.4703727,20.1734881 L38.4703727,15.169212 Z M14.7000611,15.169212 C14.7000611,11.2596213 18.140501,8.1319487 22.5192426,8.1319487 C26.8979842,8.1319487 30.338424,11.2596213 30.338424,15.169212 L30.338424,20.0171045 L14.7000611,20.0171045 L14.7000611,15.169212 Z M35.9682346,49.2608431 L22.5192426,55.5161882 L9.07025047,49.2608431 L9.07025047,28.3054368 L35.9682346,28.3054368 L35.9682346,49.2608431 Z M124.168601,31.7458767 C124.168601,24.7086133 119.320709,20.1734881 112.127062,20.1734881 L95.7067808,20.1734881 L95.7067808,55.0470374 L104.777031,55.0470374 L104.777031,43.3182652 L108.217471,43.3182652 L114.6292,55.0470374 L125.106903,55.0470374 L117.444105,42.0671961 C120.728161,40.8161271 124.168601,37.5320709 124.168601,31.7458767 L124.168601,31.7458767 Z M111.032376,35.1863165 L104.777031,35.1863165 L104.777031,28.1490532 L111.032376,28.1490532 C113.378131,28.1490532 114.941967,29.5565058 114.941967,31.589493 C114.941967,33.7788638 113.378131,35.1863165 111.032376,35.1863165 Z M63.3353697,20.0171045 L91.6408064,20.0171045 L91.6408064,28.3054368 L81.9450215,28.3054368 L81.9450215,55.0470374 L72.874771,55.0470374 L72.874771,28.3054368 L63.3353697,28.3054368 L63.3353697,20.0171045 Z"
    />
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M25.708 24.293a1 1 0 0 1-1.415 1.415L16 17.414l-8.292 8.294a1 1 0 0 1-1.415-1.415L14.586 16 6.293 7.708a1 1 0 1 1 1.415-1.415L16 14.586l8.293-8.293a1 1 0 1 1 1.415 1.415L17.414 16z"
    />
  </svg>
)

function ActivityModal({ isOpen, onClose, activeTab, onTabChange, sidebarWidth }) {
  if (!isOpen) return null

  return (
    <div className="activity-modal-container">
      <div className="activity-modal" style={{ left: `${sidebarWidth + 20}px` }}>
        <div className="activity-modal-header">
          <nav className="activity-modal-tabs">
            <button
              className={`activity-modal-tab ${activeTab === 'notifications' ? 'activity-modal-tab-active' : ''}`}
              onClick={() => onTabChange('notifications')}
            >
              Notifications
            </button>
            <button
              className={`activity-modal-tab ${activeTab === 'all-activity' ? 'activity-modal-tab-active' : ''}`}
              onClick={() => onTabChange('all-activity')}
            >
              All activity
            </button>
          </nav>
          <button className="activity-modal-close-button" onClick={onClose}>
            <div className="activity-modal-close-icon">
              <CloseIcon />
            </div>
          </button>
        </div>
        <div className="activity-modal-content">
          {activeTab === 'notifications' && (
            <div className="activity-modal-empty-state">
              <h3 className="activity-modal-empty-title">No notifications</h3>
              <p className="activity-modal-empty-description">You'll see all important notifications here.</p>
            </div>
          )}
          {activeTab === 'all-activity' && (
            <div className="activity-modal-empty-state">
              <h3 className="activity-modal-empty-title">No activity</h3>
              <p className="activity-modal-empty-description">Your activity log will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Sidebar({ currentPage, onNavigate }) {
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false)
  const [activityTab, setActivityTab] = useState('notifications')
  const [sidebarWidth, setSidebarWidth] = useState(280)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const updateSidebarWidth = () => {
      if (sidebarRef.current) {
        setSidebarWidth(sidebarRef.current.offsetWidth)
      }
    }

    updateSidebarWidth()
    window.addEventListener('resize', updateSidebarWidth)
    return () => window.removeEventListener('resize', updateSidebarWidth)
  }, [])

  const handleNavigation = (page) => {
    setIsActivityModalOpen(false)
    onNavigate(page)
  }

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="sidebar-header">
        <div className="logo-container">
          <TrezorLogo />
        </div>
      </div>

      <nav className="nav-menu">
        <button
          className={`nav-item ${currentPage === 'dashboard' ? 'nav-item-active' : ''}`}
          onClick={() => handleNavigation('dashboard')}
        >
          <div className="nav-icon">
            <DashboardIcon />
          </div>
          <span className="nav-label">Dashboard</span>
        </button>

        <button
          className="nav-item"
          onClick={() => setIsActivityModalOpen(true)}
        >
          <div className="nav-icon">
            <ActivityIcon />
          </div>
          <span className="nav-label">Activity</span>
        </button>

        <button
          className={`nav-item ${currentPage === 'settings' ? 'nav-item-active' : ''}`}
          onClick={() => handleNavigation('settings')}
        >
          <div className="nav-icon">
            <SettingsIcon />
          </div>
          <span className="nav-label">Settings</span>
        </button>
      </nav>

      <ActivityModal
        isOpen={isActivityModalOpen}
        onClose={() => setIsActivityModalOpen(false)}
        activeTab={activityTab}
        onTabChange={setActivityTab}
        sidebarWidth={sidebarWidth}
      />

      <div className="sidebar-footer">
        <div className="status-container">
          <div className="status-item">
            <button className="status-button">
              <div className="status-icon status-icon-check">
                <CheckIcon />
              </div>
              <div className="status-badge"></div>
            </button>
          </div>
          <div className="status-item">
            <button className="status-button">
              <div className="status-icon status-icon-atom">
                <AtomIcon />
              </div>
            </button>
          </div>
          <div className="status-item">
            <button className="status-button">
              <div className="status-icon status-icon-eye">
                <EyeIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
