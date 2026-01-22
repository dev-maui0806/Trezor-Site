import { useState } from 'react'
import './Dashboard.css'

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="m28.707 27.292-6.258-6.257a11.014 11.014 0 1 0-1.414 1.413l6.258 6.26a1.003 1.003 0 0 0 1.415 0 1 1 0 0 0 0-1.416zM5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"
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

const CheckmarkAnimation = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    preserveAspectRatio="xMidYMid meet"
    className="checkmark-animation"
  >
    <defs>
      <linearGradient
        id="checkmark-gradient-1"
        spreadMethod="pad"
        gradientUnits="userSpaceOnUse"
        x1="14"
        y1="2"
        x2="3.5"
        y2="19.5"
      >
        <stop offset="0%" stopColor="rgb(90,211,142)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="rgb(0,133,77)" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="checkmark-gradient-2"
        spreadMethod="pad"
        gradientUnits="userSpaceOnUse"
        x1="14"
        y1="2"
        x2="3.5"
        y2="19.5"
      >
        <stop offset="0%" stopColor="rgb(90,211,142)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="rgb(0,133,77)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g>
      <g transform="matrix(0.9795805215835571,0.20105217397212982,-0.20105217397212982,0.9795805215835571,12.45346450805664,-0.1570703089237213)">
        <circle cx="2" cy="2" r="2" fill="rgb(90,211,142)" />
      </g>
      <g transform="matrix(0.9795805215835571,0.20105217397212982,-0.20105217397212982,0.9795805215835571,2.6576595306396484,-2.1675920486450195)">
        <path
          fill="url(#checkmark-gradient-1)"
          fillRule="evenodd"
          d=" M12,4 C6.477149963378906,4 2,8.47719955444336 2,14 C2,19.52280044555664 6.477200031280518,24 12,24 C5.372580051422119,24 0,18.627399444580078 0,12 C0,5.372580051422119 5.372600078582764,0 12,0 C12,0 12,4 12,4 C12,4 17.522850036621094,4 12,4z"
        />
      </g>
      <g transform="matrix(0.9795805215835571,0.20105217397212982,-0.20105217397212982,0.9795805215835571,8.432421684265137,19.434539794921875)">
        <circle cx="2" cy="2" r="2" fill="rgb(90,211,142)" />
      </g>
      <g transform="matrix(-0.979482889175415,-0.20103035867214203,0.20103035867214203,-0.979482889175415,21.34234046936035,26.167593002319336)">
        <path
          fill="url(#checkmark-gradient-2)"
          fillRule="evenodd"
          d=" M12,4 C6.477149963378906,4 2,8.47719955444336 2,14 C2,19.52280044555664 6.477200031280518,24 12,24 C5.372580051422119,24 0,18.627399444580078 0,12 C0,5.372580051422119 5.372600078582764,0 12,0 C12,0 12,4 12,4 C12,4 17.522850036621094,4 12,4z"
        />
      </g>
    </g>
  </svg>
)

const TrezorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path fill="currentColor" fillRule="evenodd" d="M7 6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v1.667a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v1.667a1 1 0 0 1-2 0zm1 11a1 1 0 0 1 1 1v.191a7 7 0 0 0 .937 3.498l3.352 5.81a1 1 0 0 0 .866.501h3.69a1 1 0 0 0 .866-.5l3.352-5.81a7 7 0 0 0 .937-3.5V18a1 1 0 1 1 2 0v.191a9 9 0 0 1-1.204 4.498l-3.353 5.81A3 3 0 0 1 17.845 30h-3.69a3 3 0 0 1-2.598-1.5l-3.353-5.811A9 9 0 0 1 7 18.19V18a1 1 0 0 1 1-1m3.5-8a1 1 0 0 1 1 1v1.39l1.184-.394a1 1 0 1 1 .632 1.897l-1.184.395.835 1.112a1 1 0 0 1-1.6 1.2l-.867-1.156-.867 1.156a1 1 0 1 1-1.6-1.2l.835-1.112-1.184-.395a1 1 0 1 1 .632-1.897l1.184.394V10a1 1 0 0 1 1-1m9 0a1 1 0 0 1 1 1v1.39l1.184-.394a1 1 0 1 1 .632 1.897l-1.183.395.834 1.112a1 1 0 0 1-1.6 1.2l-.867-1.156-.867 1.156a1 1 0 1 1-1.6-1.2l.834-1.112-1.183-.395a1 1 0 1 1 .632-1.897l1.184.394V10a1 1 0 0 1 1-1" clipRule="evenodd" />
  </svg>
)

const USBCableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path fill="currentColor" fillRule="evenodd" d="M22 21.5v-12A1.5 1.5 0 0 0 20.5 8H20V3.5A1.5 1.5 0 0 0 18.5 2h-5A1.5 1.5 0 0 0 12 3.5V8h-.5A1.5 1.5 0 0 0 10 9.5v12a1.5 1.5 0 0 0 1.5 1.5h.5a4 4 0 0 0 1 2.646V29a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-3.354c.622-.705 1-1.632 1-2.646h.5a1.5 1.5 0 0 0 1.5-1.5M14 23a2 2 0 1 0 4 0zm4-15h-4V4h4zm2 2v11h-8V10z" clipRule="evenodd" />
  </svg>
)

const ComputerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path fill="currentColor" d="M24.709 23.296a1 1 0 0 1 0 1.412C24.573 24.84 21.352 28 16 28c-4.674 0-8.066-2.8-10-4.981V26a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H6.93c1.54 1.919 4.695 5 9.07 5 4.5 0 7.267-2.683 7.295-2.71a1 1 0 0 1 1.414.006M27 5a1 1 0 0 0-1 1v2.981C24.066 6.8 20.674 4 16 4c-5.352 0-8.572 3.159-8.707 3.293A1 1 0 0 0 8.704 8.71C8.732 8.682 11.5 6 16 6c4.375 0 7.53 3.081 9.07 5H21a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" />
  </svg>
)

const DesktopAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path fill="currentColor" d="M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h9v2h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M6 7h20a1 1 0 0 1 1 1v10H5V8a1 1 0 0 1 1-1m20 16H6a1 1 0 0 1-1-1v-2h22v2a1 1 0 0 1-1 1" />
  </svg>
)

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path fill="currentColor" d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12zm1-12a1 1 0 1 1-2 0v-5a1 1 0 1 1 2 0v5zm0 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
)

function TroubleshootingModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const troubleshootingSteps = [
    {
      icon: TrezorIcon,
      title: 'Make sure your Trezor is turned on and unlocked.'
    },
    {
      icon: USBCableIcon,
      title: 'Use a different USB cable'
    },
    {
      icon: ComputerIcon,
      title: 'Connect your Trezor to a different computer or phone.'
    },
    {
      icon: DesktopAppIcon,
      title: 'Run the Trezor Suite desktop app',
      hasLink: true
    }
  ]

  return (
    <div className="troubleshooting-modal-overlay">
      <div className="troubleshooting-modal">
        <header className="troubleshooting-header">
          <div className="troubleshooting-title-wrapper">
            <h3 className="troubleshooting-title">
              <span>Don't see your Trezor?</span>
            </h3>
          </div>
          <button
            type="button"
            className="troubleshooting-close-button"
            onClick={onClose}
            aria-label="Close"
          >
            <div className="troubleshooting-close-icon">
              <CloseIcon />
            </div>
          </button>
        </header>

        <div className="troubleshooting-content">
          <ul className="troubleshooting-steps-list">
            {troubleshootingSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <li key={index} className="troubleshooting-step-item">
                  <div className="troubleshooting-step-icon-wrapper">
                    <div className="troubleshooting-step-icon-background">
                      <div className="troubleshooting-step-icon-container">
                        <IconComponent />
                      </div>
                    </div>
                  </div>
                  <div className="troubleshooting-step-content">
                    <div className="troubleshooting-step-text">
                      {step.title.includes('Trezor Suite') ? (
                        <>
                          Run the{' '}
                          <a href="https://trezor.io/trezor-suite" target="_blank" rel="noopener noreferrer" className="troubleshooting-link">
                            Trezor Suite
                          </a>
                          {' '}desktop app
                        </>
                      ) : (
                        step.title
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <footer className="troubleshooting-footer">
          <button type="button" className="troubleshooting-got-it-button" onClick={onClose}>
            Got it
          </button>
          <button type="button" className="troubleshooting-support-button">
            Contact Trezor Support
          </button>
        </footer>
      </div>
    </div>
  )
}

function ConnectTrezorModal({ isOpen, onClose, onHelpClick }) {
  if (!isOpen) return null

  return (
    <div className="connect-trezor-modal-overlay">
      <div className="connect-trezor-modal-wrapper">
        <button type="button" className="connect-trezor-help-button" onClick={onHelpClick}>
          <span>Don't see your Trezor?</span>
        </button>

        <div className="connect-trezor-modal">
          <header className="connect-trezor-header">
            <button
              type="button"
              className="connect-trezor-close-button"
              onClick={onClose}
              aria-label="Close"
            >
              <div className="connect-trezor-close-icon">
                <CloseIcon />
              </div>
            </button>
          </header>

          <div className="connect-trezor-content">
            <h2 className="connect-trezor-title">
              <span>Connect & unlock your Trezor</span>
            </h2>

            <div className="connect-trezor-status">
              <div className="connect-trezor-checkmark">
                <CheckmarkAnimation />
              </div>
              <span className="connect-trezor-status-text">
                <span>Checking for connected Trezors</span>
              </span>
            </div>

            <button type="button" className="connect-trezor-find-button">
              <div className="connect-trezor-find-button-content">
                <div className="connect-trezor-find-icon">
                  <SearchIcon />
                </div>
                <span>Find Trezor</span>
              </div>
            </button>

            <div className="connect-trezor-device-display">
              <div className="connect-trezor-device-container">
                <video preload="auto" className="connect-trezor-video"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard({ setIsLoading }) {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false)
  const [isTroubleshootingModalOpen, setIsTroubleshootingModalOpen] = useState(false)

  const handleConnectClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsConnectModalOpen(true)
    }, 2000)
  }

  return (
    <>
      <main className="dashboard-container">
        <section className="dashboard-section">
          <div className="dashboard-content">
            <div className="content-wrapper">
              <div className="device-image-container">
                <img
                  loading="lazy"
                  src="https://suite.trezor.io/web/static/images/images/t3w1/t3w1-large.webp"
                  alt="Trezor Device"
                  className="device-image"
                />
              </div>

              <h2 className="device-heading">
                <span>Connect &amp; unlock your Trezor</span>
              </h2>

              <p className="device-description">
                Connect your Trezor to manage your assets.
              </p>
            </div>

            <div className="button-wrapper">
              <div className="button-container">
                <button
                  type="button"
                  className="connect-button"
                  onClick={handleConnectClick}
                >
                  <span>Connect</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ConnectTrezorModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        onHelpClick={() => {
          setIsConnectModalOpen(false)
          setIsTroubleshootingModalOpen(true)
        }}
      />

      <TroubleshootingModal
        isOpen={isTroubleshootingModalOpen}
        onClose={() => setIsTroubleshootingModalOpen(false)}
      />
    </>
  )
}
