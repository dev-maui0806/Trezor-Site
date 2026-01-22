import { useState } from 'react'
import './Settings.css'

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M25.708 24.293a1 1 0 0 1-1.415 1.415L16 17.414l-8.292 8.294a1 1 0 0 1-1.415-1.415L14.586 16 6.293 7.708a1 1 0 1 1 1.415-1.415L16 14.586l8.293-8.293a1 1 0 1 1 1.415 1.415L17.414 16z"
    />
  </svg>
)

const LocalizationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M4.345 5.25A1 1 0 0 0 4 6v21a1 1 0 1 0 2 0v-5.53c3.349-2.645 6.234-1.219 9.556.426 2.05 1.014 4.258 2.107 6.625 2.107 1.741 0 3.568-.594 5.478-2.25a1 1 0 0 0 .345-.75V6a1 1 0 0 0-1.659-.75c-3.5 3.029-6.465 1.561-9.901-.14-3.56-1.765-7.596-3.761-12.099.14M26 20.53c-3.349 2.645-6.234 1.218-9.556-.426C13.319 18.56 9.843 16.839 6 19.055V6.474c3.349-2.645 6.234-1.22 9.556.425C18.681 8.442 22.16 10.165 26 7.949z"
    />
  </svg>
)

const LabelingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829m-12 12L6 16.586V6h10.586L29 18.414zM12 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
)

const PrivacyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M12 7a4 4 0 1 1 8 0v3h-8zm14 19H6V12h20zm-8.5-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M25 8v13a1 1 0 1 1-2 0V10.414L8.707 24.707a1 1 0 0 1-1.415-1.415L21.586 9H11a1 1 0 0 1 0-2h13a1 1 0 0 1 1 1"
    />
  </svg>
)

const ApplicationSettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 20H5V7h22zM10 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
)

const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M26 5H6a2 2 0 0 0-2 2v7.346c0 11.201 9.477 14.918 11.375 15.549.405.138.845.138 1.25 0C18.525 29.264 28 25.547 28 14.346V7a2 2 0 0 0-2-2m0 9.349c0 9.802-8.294 13.077-10 13.647-1.691-.563-10-3.836-10-13.647V7h20z"
    />
  </svg>
)

const ExperimentalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M24.515 16c3.081-4.326 4.653-8.798 2.468-10.983S20.326 4.404 16 7.485C11.674 4.404 7.203 2.832 5.018 5.017S4.404 11.674 7.485 16c-3.081 4.326-4.652 8.797-2.467 10.982C5.72 27.686 6.66 28 7.756 28c2.31 0 5.31-1.396 8.25-3.485C18.934 26.604 21.934 28 24.25 28c1.095 0 2.036-.315 2.739-1.018 2.179-2.185.607-6.656-2.474-10.982m1.055-9.57c.955.955.31 4.05-2.315 7.91a38 38 0 0 0-2.649-2.946A38 38 0 0 0 17.66 8.75c3.86-2.625 6.955-3.275 7.91-2.319zM22.036 16a36 36 0 0 1-2.845 3.191 36 36 0 0 1-3.19 2.845 36 36 0 0 1-3.192-2.845A36 36 0 0 1 9.964 16 37.3 37.3 0 0 1 16 9.964a36 36 0 0 1 3.191 2.845 36 36 0 0 1 2.845 3.19zM6.431 6.43c.275-.276.73-.419 1.328-.419 1.477 0 3.836.863 6.581 2.738a38 38 0 0 0-2.945 2.645A38 38 0 0 0 8.75 14.34c-2.625-3.86-3.274-6.955-2.319-7.91m0 19.138c-.955-.955-.306-4.05 2.32-7.91a38 38 0 0 0 2.648 2.946 38 38 0 0 0 2.942 2.645c-3.86 2.625-6.955 3.275-7.91 2.319m19.138 0c-.955.956-4.05.31-7.91-2.315a38 38 0 0 0 2.946-2.65 38 38 0 0 0 2.645-2.945c2.625 3.86 3.274 6.955 2.319 7.91m-8.069-9.57a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
)

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M29.6 23.511 18.669 4.528a3.095 3.095 0 0 0-5.338 0L2.4 23.51a2.94 2.94 0 0 0 0 2.965A3.04 3.04 0 0 0 5.069 28H26.93a3.04 3.04 0 0 0 2.666-1.524 2.94 2.94 0 0 0 .003-2.965zm-1.734 1.964a1.06 1.06 0 0 1-.935.525H5.07a1.06 1.06 0 0 1-.935-.525.95.95 0 0 1 0-.965l10.93-18.984a1.093 1.093 0 0 1 1.876 0L27.87 24.51a.95.95 0 0 1-.005.965zM15 18v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-2 0m2.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
)

const WalletConnectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M8.5 10c-1.2 0-2 .8-2 2v8c0 1.2.8 2 2 2h3v-2h-3v-8h3v-2h-3zm15 0h-3v2h3v8h-3v2h3c1.2 0 2-.8 2-2v-8c0-1.2-.8-2-2-2zm-7 1c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"
    />
  </svg>
)

const CoinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2m0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12"
    />
  </svg>
)

const CheckmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M28.707 9.708-16 16a1 1 0 0 1-1.415 0l-7-7a1 1 0 0 1 1.415-1.415L12 23.586 27.292 8.293a1 1 0 0 1 1.415 1.415"
    />
  </svg>
)

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M16 10a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6m0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8m13.742-6.599a1 1 0 0 0-.486-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.759l-.018 4.206-3.729 2.125a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.202a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.584 1 1 0 0 0 .808-.074L16 26.77l3.765 2.106a1 1 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.758l.018-4.207 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19z"
    />
  </svg>
)

function TrezorSuitePromo() {
  return (
    <div className="promo-card">
      <button className="promo-close-button">
        <div className="promo-close-icon">
          <CloseIcon />
        </div>
      </button>
      <img
        src="https://suite.trezor.io/web/static/images/images/trezor-pattern.svg"
        alt="Trezor Pattern"
        className="promo-image"
      />
      <div className="promo-content">
        <h2 className="promo-title">Get the most out of Trezor Suite</h2>
        <p className="promo-description">Take control of your crypto—right from your desktop.</p>
        <a href="https://trezor.io/trezor-suite" target="_blank" rel="noopener noreferrer" className="promo-button">
          Get for desktop
        </a>
        <div className="promo-features">
          <div className="promo-feature-icon">
            <svg style={{color:"rgb(96, 226, 151)"}}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
              <path
                fill="rgb(96, 226, 151)"
                d="M27.913 21.199a1 1 0 0 0-.35-.425C25.44 19.316 25 16.83 25 15c0-2.209 1.684-4.133 2.688-5.084a1 1 0 0 0 0-1.452C26.102 6.967 23.477 6 21 6a9.03 9.03 0 0 0-5 1.516A8.945 8.945 0 0 0 4.661 8.652 9.33 9.33 0 0 0 2 15.425a15.88 15.88 0 0 0 5.018 11.216A4.98 4.98 0 0 0 10.448 28h10.96a4.98 4.98 0 0 0 3.64-1.571 15.6 15.6 0 0 0 2.228-3.075c.878-1.604.765-1.854.637-2.155"
              />
            </svg>
          </div>
          <div className="promo-feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
              <path
                fill="rgb(96, 226, 151)"
                d="M28.625 27.781a1 1 0 0 1-1.405-.156C27.049 27.409 23 22.233 23 12a7 7 0 0 0-14 0c0 10.233-4.046 15.409-4.22 15.625a1 1 0 0 1-1.743-.903 1 1 0 0 1 .18-.347c.018-.025.96-1.238 1.89-3.593C5.972 20.6 7 16.956 7 12a9 9 0 1 1 18 0c0 4.955 1.029 8.6 1.891 10.785.935 2.367 1.883 3.58 1.893 3.593a1 1 0 0 1-.16 1.403"
              />
            </svg>
          </div>
          <div className="promo-feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
              <path
                fill="rgb(96, 226, 151)"
                d="M27 17H17a1 1 0 0 0-1 1v7.181a1 1 0 0 0 .821.985l10 1.818A1 1 0 0 0 28 27v-9a1 1 0 0 0-1-1m-1 8.8-8-1.454V19h8zM13 17H5a1 1 0 0 0-1 1v5a1 1 0 0 0 .821.984l8 1.455A1 1 0 0 0 14 24.455V18a1 1 0 0 0-1-1m-1 6.256-6-1.091V19h6zM27.641 4.232a1 1 0 0 0-.82-.216l-10 1.819a1 1 0 0 0-.821.984v7.18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-.359-.767zM26 13h-8V7.652L26 6.2zM13.641 6.777a1 1 0 0 0-.82-.216l-8 1.455A1 1 0 0 0 4 9v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7.545a1 1 0 0 0-.359-.768M12 13H6V9.835l6-1.085z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ icon: Icon, title }) {
  return (
    <div className="section-header">
      <div className="section-header-icon">
        <Icon />
      </div>
      <h3 className="section-header-title">{title}</h3>
    </div>
  )
}

function SettingItem({ label, description, children }) {
  return (
    <div className="setting-item">
      {label && (
        <div className="setting-item-content">
          <div className="setting-item-label">{label}</div>
          {description && <div className="setting-item-description">{description}</div>}
        </div>
      )}
      <div className={`setting-item-control ${!label ? 'setting-item-control-full' : ''}`}>
        {children}
      </div>
    </div>
  )
}

function SelectBox({ placeholder, options, disabled = false }) {
  const [value, setValue] = useState(options[0] || placeholder || '')
  return (
    <select
      className="select-box"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}

function BitcoinUnitsDropdown({ value = 'bitcoin', onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const units = [
    { label: 'Bitcoin', value: 'bitcoin' },
    { label: 'Satoshis', value: 'satoshis' }
  ]

  const handleSelect = (unitValue) => {
    onChange(unitValue)
    setIsOpen(false)
  }

  const getDisplayLabel = () => {
    const unit = units.find(u => u.value === value)
    return unit ? unit.label : value
  }

  return (
    <div className="bitcoin-units-dropdown-wrapper">
      <button
        className="bitcoin-units-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {getDisplayLabel()}
      </button>

      {isOpen && (
        <div className="bitcoin-units-dropdown-menu" role="listbox" aria-multiselectable="false">
          {units.map(unit => (
            <div
              key={unit.value}
              className={`bitcoin-units-option ${value === unit.value ? 'bitcoin-units-option-selected' : ''}`}
              role="option"
              aria-selected={value === unit.value}
              onClick={() => handleSelect(unit.value)}
              tabIndex={-1}
            >
              {unit.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function CurrencyDropdown({ value = 'USD', onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const currencies = {
    popular: [
      { label: 'USD', value: 'usd' },
      { label: 'EUR', value: 'eur' },
      { label: 'GBP', value: 'gbp' },
      { label: 'JPY', value: 'jpy' }
    ],
    asia: [
      { label: 'CNY', value: 'cny' },
      { label: 'INR', value: 'inr' },
      { label: 'KRW', value: 'krw' },
      { label: 'SGD', value: 'sgd' }
    ],
    other: [
      { label: 'AUD', value: 'aud' },
      { label: 'CAD', value: 'cad' },
      { label: 'CHF', value: 'chf' },
      { label: 'SEK', value: 'sek' }
    ]
  }

  const handleSelect = (currencyValue) => {
    onChange(currencyValue)
    setIsOpen(false)
  }

  const getDisplayLabel = () => {
    for (const category of Object.values(currencies)) {
      const currency = category.find(c => c.value === value)
      if (currency) return currency.label
    }
    return value
  }

  return (
    <div className="currency-dropdown-wrapper">
      <button
        className="currency-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {getDisplayLabel()}
      </button>

      {isOpen && (
        <div className="currency-dropdown-menu" role="listbox" aria-multiselectable="false">
          <div className="currency-section">
            <div className="currency-section-label">Popular</div>
            <div className="currency-options">
              {currencies.popular.map(currency => (
                <div
                  key={currency.value}
                  className={`currency-option ${value === currency.value ? 'currency-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === currency.value}
                  onClick={() => handleSelect(currency.value)}
                  tabIndex={-1}
                >
                  {currency.label}
                </div>
              ))}
            </div>
          </div>

          <div className="currency-section">
            <div className="currency-section-label">Asia</div>
            <div className="currency-options">
              {currencies.asia.map(currency => (
                <div
                  key={currency.value}
                  className={`currency-option ${value === currency.value ? 'currency-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === currency.value}
                  onClick={() => handleSelect(currency.value)}
                  tabIndex={-1}
                >
                  {currency.label}
                </div>
              ))}
            </div>
          </div>

          <div className="currency-section">
            <div className="currency-section-label">Other</div>
            <div className="currency-options">
              {currencies.other.map(currency => (
                <div
                  key={currency.value}
                  className={`currency-option ${value === currency.value ? 'currency-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === currency.value}
                  onClick={() => handleSelect(currency.value)}
                  tabIndex={-1}
                >
                  {currency.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function LanguageDropdown({ value = 'System', onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = {
    system: [
      { label: 'System', value: 'system' }
    ],
    official: [
      { label: 'Čeština', value: 'cs' },
      { label: 'Deutsch', value: 'de' },
      { label: 'English', value: 'en' },
      { label: 'Español', value: 'es' },
      { label: 'Français', value: 'fr' },
      { label: 'Português (BR)', value: 'pt-br' },
      { label: '日本語', value: 'ja' }
    ],
    community: [
      { label: 'Italiano', value: 'it' },
      { label: 'Magyar', value: 'hu' },
      { label: 'Türkçe', value: 'tr' },
      { label: 'Русский', value: 'ru' },
      { label: 'Українська', value: 'uk' },
      { label: '中文(简体)', value: 'zh-cn' },
      { label: '中文(繁體)', value: 'zh-tw' }
    ]
  }

  const handleSelect = (langValue) => {
    onChange(langValue)
    setIsOpen(false)
  }

  const getDisplayLabel = () => {
    if (value === 'system') return 'System'
    for (const category of Object.values(languages)) {
      const lang = category.find(l => l.value === value)
      if (lang) return lang.label
    }
    return value
  }

  return (
    <div className="language-dropdown-wrapper">
      <button
        className="language-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {getDisplayLabel()}
      </button>

      {isOpen && (
        <div className="language-dropdown-menu" role="listbox" aria-multiselectable="false">
          <div className="language-section">
            <div className="language-section-label"></div>
            <div className="language-options">
              {languages.system.map(lang => (
                <div
                  key={lang.value}
                  className={`language-option ${value === lang.value ? 'language-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === lang.value}
                  onClick={() => handleSelect(lang.value)}
                  tabIndex={-1}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          </div>

          <div className="language-section">
            <div className="language-section-label">Official</div>
            <div className="language-options">
              {languages.official.map(lang => (
                <div
                  key={lang.value}
                  className={`language-option ${value === lang.value ? 'language-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === lang.value}
                  onClick={() => handleSelect(lang.value)}
                  tabIndex={-1}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          </div>

          <div className="language-section">
            <div className="language-section-label">Community</div>
            <div className="language-options">
              {languages.community.map(lang => (
                <div
                  key={lang.value}
                  className={`language-option ${value === lang.value ? 'language-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === lang.value}
                  onClick={() => handleSelect(lang.value)}
                  tabIndex={-1}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ColorSchemeDropdown({ value = 'System', onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const schemes = {
    system: [
      { label: 'System', value: 'system' }
    ],
    other: [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' }
    ]
  }

  const handleSelect = (schemeValue) => {
    onChange(schemeValue)
    setIsOpen(false)
  }

  const getDisplayLabel = () => {
    if (value === 'system') return 'System'
    if (value === 'light') return 'Light'
    if (value === 'dark') return 'Dark'
    return value
  }

  return (
    <div className="color-scheme-dropdown-wrapper">
      <button
        className="color-scheme-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {getDisplayLabel()}
      </button>

      {isOpen && (
        <div className="color-scheme-dropdown-menu" role="listbox" aria-multiselectable="false">
          <div className="color-scheme-section">
            <div className="color-scheme-section-label"></div>
            <div className="color-scheme-options">
              {schemes.system.map(scheme => (
                <div
                  key={scheme.value}
                  className={`color-scheme-option ${value === scheme.value ? 'color-scheme-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === scheme.value}
                  onClick={() => handleSelect(scheme.value)}
                  tabIndex={-1}
                >
                  {scheme.label}
                </div>
              ))}
            </div>
          </div>

          <div className="color-scheme-section">
            <div className="color-scheme-section-label"></div>
            <div className="color-scheme-options">
              {schemes.other.map(scheme => (
                <div
                  key={scheme.value}
                  className={`color-scheme-option ${value === scheme.value ? 'color-scheme-option-selected' : ''}`}
                  role="option"
                  aria-selected={value === scheme.value}
                  onClick={() => handleSelect(scheme.value)}
                  tabIndex={-1}
                >
                  {scheme.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ToggleSwitch({ enabled = false, onChange }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={enabled} onChange={(e) => onChange(e.target.checked)} />
      <span className="toggle-slider"></span>
    </label>
  )
}

function DeviceDataModal({ isOpen, onClose, onConfirm }) {
  const [selectedOption, setSelectedOption] = useState('enabled')

  const handleConfirm = () => {
    onConfirm(selectedOption)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="device-data-modal-overlay">
      <div className="device-data-modal">
        <header className="device-data-modal-header">
          <div className="device-data-modal-title-wrapper">
            <h3 className="device-data-modal-title">Store device-related data</h3>
          </div>
          <button
            type="button"
            className="device-data-modal-close-button"
            onClick={onClose}
          >
            <div className="device-data-modal-close-icon-wrapper">
              <div className="device-data-modal-close-icon">
                <CloseIcon />
              </div>
            </div>
          </button>
        </header>

        <div className="device-data-modal-content">
          <section className="device-data-options-section">
            <div className="device-data-options-container">
              <div className="device-data-option">
                <input
                  type="radio"
                  id="enabled-option"
                  name="device-data"
                  value="enabled"
                  checked={selectedOption === 'enabled'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="device-data-radio-input"
                />
                <div
                  className="device-data-radio-button"
                  onClick={() => setSelectedOption('enabled')}
                  tabIndex="0"
                ></div>
                <div className="device-data-option-content">
                  <div className="device-data-option-text">
                    <h4 className="device-data-option-title">
                      <span>Enabled</span>
                    </h4>
                    <div className="device-data-option-description">
                      <span>
                        Trezor Suite stores firmware, pairing credentials, and other device data locally to provide advanced security.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="device-data-option">
                <input
                  type="radio"
                  id="disabled-option"
                  name="device-data"
                  value="disabled"
                  checked={selectedOption === 'disabled'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="device-data-radio-input"
                />
                <div
                  className="device-data-radio-button"
                  onClick={() => setSelectedOption('disabled')}
                  tabIndex="0"
                ></div>
                <div className="device-data-option-content">
                  <div className="device-data-option-text">
                    <div className="device-data-option-title-wrapper">
                      <h4 className="device-data-option-title">
                        <span>Disabled</span>
                      </h4>
                      <div className="device-data-advanced-badge">
                        <div className="device-data-advanced-badge-content">
                          <span>Advanced</span>
                        </div>
                      </div>
                    </div>
                    <div className="device-data-option-description">
                      <span>
                        No data is stored, and advanced security features are disabled. A secure pairing connection must be reestablished every time. Recommended for experienced users only. Use at your own risk.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="device-data-modal-footer">
          <button
            type="button"
            className="device-data-modal-confirm-button"
            onClick={handleConfirm}
          >
            <div className="device-data-modal-button-content">
              <div className="device-data-modal-button-text">
                <span>Confirm</span>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="device-data-modal-cancel-button"
            onClick={onClose}
          >
            <div className="device-data-modal-button-content">
              <div className="device-data-modal-button-text">
                <span>Cancel</span>
              </div>
            </div>
          </button>
        </footer>
      </div>
    </div>
  )
}

const mockApplicationLog = {
  environment: {
    environment: 'web',
    suiteVersion: '25.12.2',
    commitHash: '5374584e0a3ff72421e8bedf84e930b67cd49f58',
    isDev: false,
    browserName: 'chrome',
    browserVersion: '143.0.0.0',
    osName: 'windows',
    osVersion: '10',
    windowWidth: 1920,
    windowHeight: 919,
    screenWidth: 1920,
    screenHeight: 1080,
    startTime: 'Mon, 19 Jan 2026 21:27:07 GMT',
    debugMenu: false,
    online: true,
    earlyAccessProgram: false,
    language: 'en-US',
    autodetectLanguage: true,
    platformLanguages: 'en-US,en',
    theme: 'dark',
    autodetectTheme: true,
    localCurrency: 'usd',
    discreetMode: false,
    tor: false,
    torOnionLinks: true,
    labeling: '',
    analytics: true,
    instanceId: 'dF2Snxh3IG',
    sessionId: 'B9D0wDkYIT',
    transports: [
      {
        type: 'WebUsbTransport',
        version: '',
      },
    ],
    rememberedStandardWallets: 0,
    rememberedHiddenWallets: 0,
    enabledNetworks: ['btc'],
    customBackends: [],
    devices: [],
    wallets: [],
  },
  events: [
    {
      type: '@suite/set-theme',
      datetime: 'Mon, 19 Jan 2026 21:27:07 GMT',
      payload: {
        variant: 'dark',
      },
    },
    {
      type: '@suite/online-status',
      datetime: 'Mon, 19 Jan 2026 21:27:07 GMT',
      payload: {
        status: true,
      },
    },
    {
      type: '@suite/tor-status',
      datetime: 'Mon, 19 Jan 2026 21:27:07 GMT',
      payload: {
        status: 'Disabled',
      },
    },
    {
      type: '@suite-common/analytics/enableAnalytics',
      datetime: 'Mon, 19 Jan 2026 21:27:12 GMT',
      payload: {},
    },
    {
      type: '@suite/set-language',
      datetime: 'Mon, 19 Jan 2026 21:27:12 GMT',
      payload: {
        locale: 'en-US',
      },
    },
    {
      type: '@router/location-change',
      datetime: 'Mon, 19 Jan 2026 21:27:14 GMT',
      payload: {
        pathname: '/web/',
        app: 'start',
      },
    },
    {
      type: 'transport-start',
      datetime: 'Mon, 19 Jan 2026 21:27:25 GMT',
      payload: {
        type: 'WebUsbTransport',
        version: '',
      },
    },
    {
      type: '@router/location-change',
      datetime: 'Mon, 19 Jan 2026 21:27:36 GMT',
      payload: {
        pathname: '/web/start',
        app: 'settings',
      },
    },
    {
      type: '@router/location-change',
      datetime: 'Mon, 19 Jan 2026 21:28:06 GMT',
      payload: {
        pathname: '/web/settings',
        app: 'settings',
      },
    },
    {
      type: '@router/location-change',
      datetime: 'Mon, 19 Jan 2026 21:29:10 GMT',
      payload: {
        pathname: '/web/settings/connected-apps',
        app: 'settings',
      },
    },
    {
      type: '@modal/open-user-context',
      datetime: 'Mon, 19 Jan 2026 21:57:51 GMT',
      payload: {
        type: 'application-log',
      },
    },
    {
      type: '@modal/close',
      datetime: 'Mon, 19 Jan 2026 21:58:02 GMT',
      payload: {},
    },
  ],
}

function ApplicationLogModal({ isOpen, onClose, includeSensitiveData }) {
  const [isSensitiveIncluded, setIsSensitiveIncluded] = useState(includeSensitiveData)

  const handleExportClick = () => {
    const logData = [mockApplicationLog.environment, mockApplicationLog.events]
    const jsonString = JSON.stringify(logData, null, 2)
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonString))
    element.setAttribute('download', 'application-log.json')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const logData = [mockApplicationLog.environment, mockApplicationLog.events]
  const logContent = JSON.stringify(logData, null, 2)

  if (!isOpen) return null

  return (
    <div className="application-log-modal-overlay">
      <div className="application-log-modal">
        <header className="application-log-modal-header">
          <div className="application-log-modal-header-content">
            <h3 className="application-log-modal-title">Application log</h3>
            <div className="application-log-modal-description">
              <span>
                This log contains essential technical information about Trezor Suite and may be needed when contacting Trezor Support.
              </span>
            </div>
          </div>
          <button
            type="button"
            className="application-log-modal-close-button"
            onClick={onClose}
          >
            <div className="application-log-modal-close-icon">
              <CloseIcon />
            </div>
          </button>
        </header>

        <div className="application-log-modal-content">
          <div className="application-log-scroll-wrapper">
            <div className="application-log-top-gradient"></div>
            <div className="application-log-scroll-container">
              <pre className="application-log-pre">
                <span className="application-log-code">{logContent}</span>
              </pre>
            </div>
            <div className="application-log-bottom-gradient"></div>
          </div>

          <div className="application-log-options">
            <div className="application-log-option-content">
              <h4 className="application-log-option-title">Include sensitive information</h4>
              <div className="application-log-option-description">
                <span>
                  Enabling this option adds sensitive info—like balances, transaction IDs, device labels, device ID, and public addresses—to the application log. If your issue isn't related, you can safely keep it off.
                </span>
              </div>
            </div>
            <div className="application-log-toggle-wrapper">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isSensitiveIncluded}
                  onChange={(e) => setIsSensitiveIncluded(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <footer className="application-log-modal-footer">
          <button
            type="button"
            className="application-log-export-button"
            onClick={handleExportClick}
          >
            <div className="application-log-button-content">
              <span>Export to file</span>
            </div>
          </button>
        </footer>
      </div>
    </div>
  )
}

function ExperimentalFeatureItem({ title, description, children, hasLink = false }) {
  return (
    <div className="experimental-item">
      <div className="experimental-item-content">
        <div className="experimental-item-title">{title}</div>
        {description && (
          <div className="experimental-item-description">{description}</div>
        )}
        {hasLink && children}
      </div>
      {!hasLink && <div className="experimental-item-control">{children}</div>}
    </div>
  )
}

function ExperimentalFeaturesSection({ enabled }) {
  const [dropboxPassword, setDropboxPassword] = useState(false)
  const [nfts, setNfts] = useState(false)
  const [avalanche, setAvalanche] = useState(false)

  if (!enabled) return null

  return (
    <div className="experimental-items-container">
      <ExperimentalFeatureItem
        title="Migrate Dropbox passwords"
        description="Use this utility to retrieve passwords stored on Dropbox and secured by Trezor. Designed for former users of the Trezor Password Manager Chrome extension."
        hasLink={true}
      >
        <div className="experimental-item-actions">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://trezor.io/guides/bonus-tools/retrieve-dropbox-passwords-from-password-manager?utm_medium=web"
            className="experimental-learn-more-link"
          >
            <span>Learn more</span>
            <span className="experimental-link-icon">
              <ArrowIcon />
            </span>
          </a>
          <button className="experimental-open-button">Open</button>
        </div>
      </ExperimentalFeatureItem>

      <ExperimentalFeatureItem
        title="NFTs (non-fungible tokens)"
        description="Add an NFT section to EVM-based chain accounts, allowing you to view NFTs. Sending NFTs isn't currently supported."
      >
        <div className="experimental-checkbox-wrapper">
          <input
            type="checkbox"
            id="nft-checkbox"
            checked={nfts}
            onChange={(e) => setNfts(e.target.checked)}
            className="experimental-checkbox"
          />
          <label htmlFor="nft-checkbox" className="experimental-checkbox-label"></label>
        </div>
      </ExperimentalFeatureItem>

      <ExperimentalFeatureItem
        title="Avalanche C-Chain network"
        description="Send and receive transactions on the Avalanche C-Chain network."
      >
        <div className="experimental-checkbox-wrapper">
          <input
            type="checkbox"
            id="avalanche-checkbox"
            checked={avalanche}
            onChange={(e) => setAvalanche(e.target.checked)}
            className="experimental-checkbox"
          />
          <label htmlFor="avalanche-checkbox" className="experimental-checkbox-label"></label>
        </div>
      </ExperimentalFeatureItem>
    </div>
  )
}

function ApplicationTab() {
  const [language, setLanguage] = useState('system')
  const [currency, setCurrency] = useState('usd')
  const [bitcoinUnits, setBitcoinUnits] = useState('bitcoin')
  const [colorScheme, setColorScheme] = useState('system')
  const [autoEjectWallets, setAutoEjectWallets] = useState(false)
  const [addressDisplay, setAddressDisplay] = useState('Continuous')
  const [anonymousData, setAnonymousData] = useState(true)
  const [mevProtection, setMevProtection] = useState(true)
  const [experimentalFeatures, setExperimentalFeatures] = useState(false)
  const [isDeviceDataModalOpen, setIsDeviceDataModalOpen] = useState(false)
  const [isApplicationLogModalOpen, setIsApplicationLogModalOpen] = useState(false)
  const [includeSensitiveData, setIncludeSensitiveData] = useState(true)

  const handleDeviceDataConfirm = (option) => {
    console.log('Device data option selected:', option)
  }

  return (
    <>
      <div className="settings-sections">
        <TrezorSuitePromo />
        <div className="section-container">
          <SectionHeader icon={LocalizationIcon} title="Localization" />
          <div className="settings-section">
            <SettingItem label="Language">
              <LanguageDropdown value={language} onChange={setLanguage} />
            </SettingItem>
            <SettingItem label="Currency">
              <CurrencyDropdown value={currency} onChange={setCurrency} />
            </SettingItem>
            <SettingItem label="Bitcoin units">
              <BitcoinUnitsDropdown value={bitcoinUnits} onChange={setBitcoinUnits} />
            </SettingItem>
          </div>
        </div>

        <div className="section-container">
          <SectionHeader icon={LabelingIcon} title="Labeling" />
          <div className="settings-section">
            <SettingItem
              label="Labeling"
              description="Name your wallets, personalize accounts, and label transactions to stay organized."
            >
              <a href="https://trezor.io/guides/trezor-suite/trezor-suite-desktop/labels-in-trezor-suite?utm_medium=web" target="_blank" rel="noopener noreferrer" className="learn-more-button">
                Learn more
                <span className="learn-more-icon">
                  <ArrowIcon />
                </span>
              </a>
            </SettingItem>
            <SettingItem label="Labeling">
              <SelectBox placeholder="Off" options={['Off', 'On']} disabled={true} />
            </SettingItem>
          </div>
        </div>

        <div className="section-container">
          <SectionHeader icon={PrivacyIcon} title="Privacy" />
          <div className="settings-section">
            <SettingItem
              label="Auto-eject wallets"
              description="Automatically eject all wallets when you disconnect your Trezor. Your balances will be hidden in Trezor Suite until you reconnect your device."
            >
              <ToggleSwitch enabled={autoEjectWallets} onChange={setAutoEjectWallets} />
            </SettingItem>
            <SettingItem
              label="Store device-related data"
              description="Store essential device info locally to power features like anti-counterfeit checks and secure device pairing."
            >
              <button className="disable-button" onClick={() => setIsDeviceDataModalOpen(true)}>Disable</button>
            </SettingItem>
          </div>
        </div>

        <div className="section-container">
          <SectionHeader icon={ApplicationSettingsIcon} title="Application" />
          <div className="settings-section">
            <SettingItem
              label="Color scheme"
              description="Choose between light mode, dark mode, or follow your system's appearance settings."
            >
              <ColorSchemeDropdown value={colorScheme} onChange={setColorScheme} />
            </SettingItem>
            <SettingItem
              label="Address display"
              description="Display address continuous (bc1wetes...v54d8d) or spaced (bc1w etes ... v54d 8d)."
            >
              <AddressDisplayToggle value={addressDisplay} onChange={setAddressDisplay} />
            </SettingItem>
            <SettingItem
              label="Anonymous data collection"
              description="Help us improve your experience! We never collect sensitive data like balances or transactions. All data is completely anonymous and used solely to enhance the Trezor ecosystem."
            >
              <ToggleSwitch enabled={anonymousData} onChange={setAnonymousData} />
            </SettingItem>
            <SettingItem
              label="Application log"
              description="Use this log to access essential technical information about Trezor Suite, which may be needed when contacting Trezor Support."
            >
              <button className="action-button" onClick={() => setIsApplicationLogModalOpen(true)}>Show log</button>
            </SettingItem>
            <SettingItem
              label="Reset app to default"
              description="Erase all current app data and restore the original settings."
            >
              <button className="action-button">Reset app</button>
            </SettingItem>
            <SettingItem
              label="Trezor Suite version"
            >
              <div className="version-info-container">
                <span className="version-info-label">Current version</span>
                <a href="https://github.com/trezor/trezor-suite/releases/tag/v25.12.2" target="_blank" rel="noopener noreferrer" className="version-link-button">
                  <div className="version-link-inner">
                    <div className="version-number-wrapper">
                      <div className="version-number">25.12.2</div>
                    </div>
                    <div className="version-arrow-wrapper">
                      <div className="version-arrow-container">
                        <div className="version-arrow-icon">
                          <ArrowIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SettingItem>
          </div>
        </div>

        <div className="section-container">
          <SectionHeader icon={SecurityIcon} title="Security" />
          <div className="settings-section">
            <SettingItem
              label="MEV protection"
              description="Stay safe and secure fair prices by preventing others from interfering with your transactions. Available on Ethereum, BNB Smart Chain, and Base."
            >
              <ToggleSwitch enabled={mevProtection} onChange={setMevProtection} />
            </SettingItem>
          </div>
        </div>

        <div className="section-container">
          <SectionHeader icon={ExperimentalIcon} title="Experimental" />
          <div className="settings-section experimental-content">
            <div className="experimental-content-wrapper">
              <div className="experimental-main-content">
                <div role="paragraph" className="experimental-features-title">
                  <span className="experimental-features-title-text">Experimental features</span>
                </div>
                <div className="experimental-warning-wrapper">
                  <section className="experimental-warning-section">
                    <div className="experimental-warning-content">
                      <div className="experimental-warning-icon-container">
                        <div className="experimental-warning-icon">
                          <WarningIcon />
                        </div>
                      </div>
                      <div className="experimental-warning-text-container">
                        <div className="experimental-warning-text-inner">
                          <span className="experimental-warning-text">
                            For experienced users only. Use at your own risk. These features are in testing, may be unstable, and might not have long-term support.
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="experimental-link-wrapper">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://trezor.io/guides/trezor-suite/experimental-features-in-trezor-suite?utm_medium=web"
                    className="experimental-learn-more-button"
                  >
                    <div className="experimental-button-content">
                      <div className="experimental-button-text-wrapper">
                        <div className="experimental-button-text">
                          <span className="experimental-button-text-span">Learn more</span>
                        </div>
                      </div>
                      <div className="experimental-button-icon-wrapper">
                        <div className="experimental-button-icon-container">
                          <div className="experimental-button-icon">
                            <ArrowIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="experimental-toggle-wrapper">
                <div className="experimental-toggle-inner">
                  <div className="experimental-toggle-outer">
                    <ToggleSwitch enabled={experimentalFeatures} onChange={setExperimentalFeatures} />
                  </div>
                </div>
              </div>
            </div>
            <ExperimentalFeaturesSection enabled={experimentalFeatures} />
          </div>
        </div>
      </div>

      <DeviceDataModal
        isOpen={isDeviceDataModalOpen}
        onClose={() => setIsDeviceDataModalOpen(false)}
        onConfirm={handleDeviceDataConfirm}
      />

      <ApplicationLogModal
        isOpen={isApplicationLogModalOpen}
        onClose={() => setIsApplicationLogModalOpen(false)}
        includeSensitiveData={includeSensitiveData}
      />
    </>
  )
}

function AddressDisplayToggle({ value, onChange }) {
  return (
    <div className="address-display-toggle-wrapper">
      <div className="address-display-toggle-container">
        <div className="address-display-toggle-outer">
          <div className="address-display-toggle-inner">
            <div className={`address-display-toggle-indicator ${value === 'Continuous' ? 'address-display-toggle-indicator-continuous' : 'address-display-toggle-indicator-spaced'}`}></div>
            <div className="address-display-toggle-options">
              <div className="address-display-toggle-option-wrapper">
                <div
                  tabIndex="0"
                  className={`address-display-toggle-option ${value === 'Continuous' ? 'address-display-toggle-option-active' : ''}`}
                  onClick={() => onChange('Continuous')}
                  onKeyDown={(e) => e.key === 'Enter' && onChange('Continuous')}
                >
                  <span className="address-display-toggle-label">Continuous</span>
                  <div aria-hidden="true" className="address-display-toggle-hidden-label">
                    <span className="address-display-toggle-hidden-span">
                      <span className="address-display-toggle-hidden-inner">Continuous</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="address-display-toggle-option-wrapper">
                <div
                  tabIndex="0"
                  className={`address-display-toggle-option ${value === 'Spaced' ? 'address-display-toggle-option-active' : ''}`}
                  onClick={() => onChange('Spaced')}
                  onKeyDown={(e) => e.key === 'Enter' && onChange('Spaced')}
                >
                  <span className="address-display-toggle-label">Spaced</span>
                  <div aria-hidden="true" className="address-display-toggle-hidden-label">
                    <span className="address-display-toggle-hidden-span">
                      <span className="address-display-toggle-hidden-inner">Spaced</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DatabaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
      <path
        fill="currentColor"
        d="M25.948 7.98C23.356 6.685 19.916 6 16 6s-7.356.685-9.947 1.98C3.46 9.275 2 11.097 2 13v6c0 1.902 1.478 3.731 4.053 5.02C8.627 25.309 12.082 26 16 26c3.916 0 7.356-.685 9.948-1.98C28.538 22.725 30 20.903 30 19v-6c0-1.902-1.477-3.731-4.052-5.02M16 8c7.83 0 12 2.904 12 5s-4.17 5-12 5-12-2.904-12-5 4.17-5 12-5m-1 11.983v4c-2.375-.078-4.375-.428-6-.937v-3.915a25.4 25.4 0 0 0 6 .852m2 0a25.4 25.4 0 0 0 6-.852v3.914c-1.625.509-3.625.859-6 .936zM4 19v-2.309c.63.523 1.318.969 2.053 1.329.303.151.625.294.947.429v3.801c-1.979-.98-3-2.214-3-3.25m21 3.25v-3.801q.49-.203.948-.429c.734-.36 1.423-.806 2.052-1.329V19c0 1.036-1.021 2.27-3 3.25"
      />
    </svg>
  )
}

function HelpCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
      <path
        fill="currentColor"
        d="M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"
      />
    </svg>
  )
}

function BitcoinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" role="img">
      <circle cx="12" cy="12" r="12" fill="#E75F5F" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.338 6.055l.008.002-.028.02s.007-.01.02-.022zm.083.023l.025-.098-.1.077.075.02zm0 0c-.046.174-.092.354-.137.534-.054.214-.109.427-.163.632-.036.074 0 .111.072.111l.174.044c.243.061.504.127.765.216.325.112.505.446.433.743-.433 1.932-.902 3.827-1.372 5.722-.036.26-.252.409-.541.335-.253-.038-.541-.112-.794-.186-.108 0-.144 0-.18.111-.109.297-.253.632-.398.966-.036.075-.063.14-.09.205-.027.065-.054.13-.09.204.866.223 1.696.446 2.527.669 0 .043-.013.074-.023.1-.007.017-.014.033-.014.048-.18.595-.324 1.226-.469 1.858-.036.074-.036.111.072.149.361.074.722.148 1.083.26.096.032.107.008.133-.05l.012-.025c.036-.167.08-.334.126-.501.045-.167.09-.335.126-.502.036-.167.082-.334.127-.501.045-.168.09-.335.126-.502.325.074.614.149.902.223.052.027.048.053.042.094-.003.016-.006.034-.006.055-.18.594-.325 1.226-.469 1.857-.036.075-.036.112.072.149.163.037.334.084.506.13.171.046.343.093.505.13.173.071.18.04.212-.093l.005-.019c.072-.297.144-.603.216-.91.072-.306.145-.613.217-.91.036-.111.108-.149.216-.111.722.111 1.444.185 2.202.074.578-.075 1.083-.335 1.48-.818.325-.408.505-.854.65-1.374.108-.409.144-.855.072-1.264-.145-.52-.433-.928-.867-1.263-.072-.055-.144-.102-.216-.148-.072-.047-.144-.093-.217-.149.043 0 .072-.013.097-.023.018-.008.033-.014.048-.014.289-.112.577-.26.794-.483.288-.297.433-.669.541-1.078.145-.594.108-1.189-.216-1.746-.253-.371-.578-.669-.939-.892l-1.19-.557c-.11-.037-.145-.074-.11-.186.073-.185.11-.371.145-.557.108-.446.217-.892.325-1.375-.018 0-.027-.009-.036-.018-.01-.01-.018-.019-.036-.019-.171-.048-.336-.089-.496-.13-.212-.052-.418-.104-.623-.167-.072-.037-.108 0-.108.074l-.109.446c-.144.483-.252.929-.36 1.412-.013.012-.025.029-.037.045-.024.033-.048.066-.072.066-.144-.037-.298-.074-.451-.111-.153-.037-.307-.074-.451-.112.036-.074.036-.111.036-.148.072-.297.144-.604.216-.91.073-.307.145-.613.217-.91.036-.075.036-.112-.072-.15-.361-.074-.686-.148-1.047-.26-.108-.037-.144 0-.18.112l-.217.929-.217.929c-.036.111-.072.148-.18.111-.199-.055-.397-.102-.596-.148-.198-.047-.397-.093-.595-.149-.199-.056-.397-.102-.596-.149-.17-.04-.342-.08-.512-.125zm1.758 9.155c.036 0 .072.037.072.037l.274.072c.495.13 1.013.268 1.53.3.434.037.83.037 1.228-.112.686-.223.974-1.152.577-1.746-.18-.298-.469-.483-.758-.67-.63-.36-1.363-.51-2.066-.655l-.063-.013c-.099-.034-.108-.006-.136.084l-.009.027c-.036.186-.08.363-.126.54-.045.176-.09.352-.126.538-.083.296-.153.593-.225.896-.055.229-.11.462-.172.702zm3.428-3.865c-.144.037-.324.075-.397.075-.419 0-.78-.059-1.154-.12-.142-.023-.285-.046-.434-.066-.072-.019-.135-.037-.198-.056-.063-.018-.127-.037-.199-.056-.072-.037-.108-.074-.072-.148.216-.78.397-1.524.577-2.304.037-.111.073-.148.18-.111.108.03.214.057.32.085.423.112.828.22 1.233.398.325.148.65.371.83.706.361.631 0 1.449-.686 1.597z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function RippleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" role="img">
      <circle cx="12" cy="12" r="12" fill="#E44749" />
      <g clipPath="url(#clip0)">
        <path
          fill="#fff"
          d="M16.307 7h1.745l-3.632 3.596c-1.316 1.302-3.448 1.302-4.764 0L6.022 7H7.77l2.76 2.732c.401.396.943.618 1.508.618.564 0 1.106-.222 1.508-.618L16.307 7zM7.746 16.999H6l3.656-3.618c1.315-1.302 3.447-1.302 4.764 0l3.656 3.618H16.33l-2.783-2.754c-.402-.396-.944-.618-1.508-.618-.565 0-1.107.222-1.509.618l-2.784 2.754z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H12.075V10H0z" transform="translate(6 7)" />
        </clipPath>
      </defs>
    </svg>
  )
}

function SolanaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" role="img" width="24px" height="24px">
      <circle cx="20" cy="20" r="20" fill="#E75F5F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8123 24.55C13.8741 24.4833 13.9488 24.4298 14.0318 24.3925C14.1149 24.3553 14.2046 24.3352 14.2957 24.3333H29.4831C29.5475 24.3342 29.61 24.3536 29.6635 24.3891C29.717 24.4246 29.759 24.4748 29.7846 24.5335C29.8101 24.5923 29.8181 24.6571 29.8074 24.7202C29.7969 24.7834 29.7682 24.8421 29.7249 24.8894L26.5056 28.45C26.4438 28.5166 26.3692 28.5702 26.2861 28.6074C26.2031 28.6447 26.1133 28.6648 26.0223 28.6666H10.8251C10.7609 28.6657 10.6982 28.6464 10.6448 28.6109C10.5913 28.5753 10.5493 28.5252 10.5237 28.4664C10.4982 28.4077 10.4903 28.3429 10.5008 28.2797C10.5114 28.2166 10.5401 28.1578 10.5834 28.1105L13.8123 24.55ZM29.7394 21.5985C29.7827 21.6458 29.8114 21.7045 29.8219 21.7677C29.8326 21.8308 29.8246 21.8956 29.7991 21.9544C29.7735 22.0132 29.7315 22.0633 29.678 22.0988C29.6245 22.1343 29.562 22.1537 29.4976 22.1546L14.3054 22.1666C14.2143 22.1648 14.1246 22.1447 14.0415 22.1074C13.9585 22.0702 13.8838 22.0166 13.822 21.95L10.5786 18.4015C10.5353 18.3542 10.5066 18.2954 10.496 18.2323C10.4854 18.1691 10.4934 18.1043 10.5189 18.0456C10.5444 17.9868 10.5865 17.9367 10.6399 17.9011C10.6934 17.8656 10.756 17.8463 10.8203 17.8454L26.0126 17.8333C26.1037 17.8352 26.1934 17.8553 26.2765 17.8925C26.3595 17.9298 26.4342 17.9833 26.496 18.05L29.7394 21.5985ZM13.8123 11.55C13.8741 11.4833 13.9488 11.4298 14.0318 11.3925C14.1149 11.3553 14.2046 11.3352 14.2957 11.3333L29.4929 11.3454C29.5571 11.3463 29.6198 11.3656 29.6733 11.4011C29.7267 11.4367 29.7688 11.4868 29.7942 11.5456C29.8197 11.6043 29.8277 11.6691 29.8172 11.7323C29.8065 11.7954 29.7779 11.8542 29.7345 11.9015L26.5056 15.45C26.4438 15.5166 26.3692 15.5702 26.2861 15.6074C26.2031 15.6447 26.1133 15.6648 26.0223 15.6666H10.8251C10.7609 15.6657 10.6982 15.6464 10.6448 15.6109C10.5913 15.5753 10.5493 15.5252 10.5237 15.4664C10.4982 15.4077 10.4903 15.3429 10.5008 15.2797C10.5114 15.2166 10.5401 15.1578 10.5834 15.1105L13.8123 11.55Z"
        fill="white"
      />
    </svg>
  )
}

function StellarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" role="img">
      <circle cx="12" cy="12" r="12" fill="#E75F5F" />
      <path
        d="M17.3829 7.31083L15.5767 8.23103L6.85509 12.6734C6.8256 12.4485 6.81076 12.2219 6.81067 11.995C6.81186 11.0898 7.04951 10.2007 7.50007 9.4156C7.95064 8.63054 8.59848 7.9768 9.37944 7.51916C10.1604 7.06151 11.0474 6.81583 11.9525 6.80645C12.8576 6.79707 13.7495 7.02431 14.5398 7.46568L15.5736 6.93894L15.7278 6.86025C14.7807 6.17288 13.6621 5.76073 12.4955 5.66937C11.3289 5.578 10.1597 5.81097 9.11722 6.34253C8.07473 6.87409 7.1995 7.68353 6.58828 8.6814C5.97705 9.67927 5.65363 10.8267 5.65375 11.9969C5.65375 12.1585 5.65988 12.3195 5.67215 12.4798C5.68933 12.7069 5.63897 12.934 5.52741 13.1325C5.41584 13.331 5.24804 13.4921 5.04514 13.5955L4.5 13.8735V15.17L6.10496 14.352L6.62472 14.0867L7.13686 13.8259L16.3313 9.14108L17.3645 8.61498L19.5 7.5266V6.2307L17.3829 7.31083Z"
        fill="white"
      />
      <path
        d="M19.5 8.82378L7.65916 14.8527L6.62599 15.3801L4.5 16.4634V17.7587L6.61139 16.683L8.41754 15.7628L17.1481 11.314C17.1776 11.5405 17.1924 11.7686 17.1925 11.9969C17.1919 12.9031 16.9543 13.7934 16.5033 14.5794C16.0523 15.3655 15.4036 16.0199 14.6215 16.4776C13.8394 16.9354 12.9512 17.1807 12.045 17.1891C11.1388 17.1975 10.2462 16.9688 9.45578 16.5256L9.39232 16.5592L8.27157 17.1304C9.21838 17.8178 10.3368 18.23 11.5032 18.3216C12.6697 18.4132 13.8387 18.1805 14.8812 17.6493C15.9237 17.1181 16.799 16.3091 17.4105 15.3116C18.022 14.3141 18.3459 13.1669 18.3462 11.9969C18.3462 11.8338 18.3399 11.6707 18.3278 11.5095C18.3107 11.2825 18.361 11.0555 18.4724 10.857C18.5839 10.6585 18.7515 10.4974 18.9542 10.3938L19.5 10.1159V8.82378Z"
        fill="white"
      />
    </svg>
  )
}

function DeviceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 2a3 3 0 0 1 3 3v13.576a9 9 0 0 1-.828 3.772l-2.728 5.909A3 3 0 0 1 18.721 30h-5.442a3 3 0 0 1-2.723-1.743l-2.728-5.91A9 9 0 0 1 7 18.578V5a3 3 0 0 1 3-3zm-9.628 25.419a1 1 0 0 0 .907.581h5.442a1 1 0 0 0 .907-.581L21.206 24H10.794zM10 4a1 1 0 0 0-1 1v13.576c0 1.013.22 2.014.645 2.934l.226.49H22q.063 0 .125.008l.23-.498c.425-.92.645-1.92.645-2.934V5a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="100%" height="100%">
      <path
        fill="currentColor"
        d="m28.707 27.292-6.258-6.257a11.014 11.014 0 1 0-1.414 1.413l6.258 6.26a1.003 1.003 0 0 0 1.415 0 1 1 0 0 0 0-1.416zM5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"
      />
    </svg>
  )
}

function DeviceTab() {
  return (
    <div className="device-container">
      <div className="device-alert-card">
        <div className="device-alert-icon">
          <DeviceIcon />
        </div>
        <div className="device-alert-content">
          <h3 className="device-alert-title">Connect device to access Device Settings</h3>
          <button className="device-alert-button">
            <div className="device-alert-button-icon">
              <SearchIcon />
            </div>
            <span className="device-alert-button-text">Find Trezor</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function ServerSelectDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    { label: 'Trezor servers (default)', value: 'trezor-default' },
    { label: 'Custom Blockbook server', value: 'custom-blockbook' }
  ]

  const selectedOption = options.find(opt => opt.value === value) || options[0]

  const handleSelect = (optionValue) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className="coin-settings-server-dropdown-wrapper">
      <button
        type="button"
        className="coin-settings-server-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="coin-settings-server-dropdown-label">{selectedOption.label}</span>
      </button>

      {isOpen && (
        <div className="coin-settings-server-dropdown-menu" role="listbox">
          {options.map((option) => (
            <div
              key={option.value}
              className={`coin-settings-server-dropdown-option ${value === option.value ? 'coin-settings-server-dropdown-option-selected' : ''}`}
              role="option"
              aria-selected={value === option.value}
              onClick={() => handleSelect(option.value)}
              tabIndex={-1}
            >
              <span className="coin-settings-server-dropdown-option-text">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ExplorerConfigurationContent() {
  const [rootUrl, setRootUrl] = useState('')
  const [transactionPath, setTransactionPath] = useState('tx')
  const [addressPath, setAddressPath] = useState('address')
  const [nftPath, setNftPath] = useState('nft')
  const baseUrl = 'https://etc.trezor.io'

  return (
    <div className="coin-settings-explorer-content">
      <div className="coin-settings-explorer-section">
        <div className="coin-settings-explorer-field-group">
          <div className="coin-settings-explorer-field-header">
            <span className="coin-settings-explorer-field-label">Root URL</span>
          </div>
          <div className="coin-settings-explorer-field-content">
            <div className="coin-settings-explorer-input-wrapper">
              <button className="coin-settings-explorer-default-button" disabled>
                <div className="coin-settings-explorer-button-content">
                  <span className="coin-settings-explorer-button-text">Set to default</span>
                </div>
              </button>
              <input
                type="text"
                className="coin-settings-explorer-root-input"
                placeholder={baseUrl}
                value={rootUrl}
                onChange={(e) => setRootUrl(e.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        <div className="coin-settings-explorer-field-group">
          <div className="coin-settings-explorer-field-header">
            <span className="coin-settings-explorer-field-label">Transaction</span>
          </div>
          <div className="coin-settings-explorer-field-content">
            <div className="coin-settings-explorer-path-wrapper">
              <input
                type="text"
                className="coin-settings-explorer-base-input"
                value={baseUrl}
                disabled
                autoComplete="off"
                spellCheck="false"
              />
              <span className="coin-settings-explorer-path-separator">/</span>
              <input
                type="text"
                className="coin-settings-explorer-path-input"
                placeholder="tx"
                value={transactionPath}
                onChange={(e) => setTransactionPath(e.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        <div className="coin-settings-explorer-field-group">
          <div className="coin-settings-explorer-field-header">
            <span className="coin-settings-explorer-field-label">Address</span>
          </div>
          <div className="coin-settings-explorer-field-content">
            <div className="coin-settings-explorer-path-wrapper">
              <input
                type="text"
                className="coin-settings-explorer-base-input"
                value={baseUrl}
                disabled
                autoComplete="off"
                spellCheck="false"
              />
              <span className="coin-settings-explorer-path-separator">/</span>
              <input
                type="text"
                className="coin-settings-explorer-path-input"
                placeholder="address"
                value={addressPath}
                onChange={(e) => setAddressPath(e.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        <div className="coin-settings-explorer-field-group">
          <div className="coin-settings-explorer-field-header">
            <span className="coin-settings-explorer-field-label">NFT</span>
          </div>
          <div className="coin-settings-explorer-field-content">
            <div className="coin-settings-explorer-path-wrapper">
              <input
                type="text"
                className="coin-settings-explorer-base-input"
                value={baseUrl}
                disabled
                autoComplete="off"
                spellCheck="false"
              />
              <span className="coin-settings-explorer-path-separator">/</span>
              <input
                type="text"
                className="coin-settings-explorer-path-input"
                placeholder="nft"
                value={nftPath}
                onChange={(e) => setNftPath(e.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CoinSettingsModal({ isOpen, onClose, coinName }) {
  const [trezorServer, setTrezorServer] = useState('trezor-default')
  const [explorerExpanded, setExplorerExpanded] = useState(false)
  const [connectionInfoExpanded, setConnectionInfoExpanded] = useState(false)

  const handleConfirm = () => {
    console.log(`Coin settings confirmed for ${coinName}`)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="coin-settings-modal-overlay">
      <div className="coin-settings-modal">
        <header className="coin-settings-modal-header">
          <div className="coin-settings-modal-title-wrapper">
            <h3 className="coin-settings-modal-title">{coinName} Backends</h3>
            <div className="coin-settings-modal-description">
              <span>
                Connect to trusted backend servers to securely load your account data.
                Customize the experience by using your own backend and choosing a
                different blockchain explorer.
              </span>
            </div>
          </div>
          <button
            type="button"
            className="coin-settings-modal-close-button"
            onClick={onClose}
          >
            <div className="coin-settings-modal-close-icon-wrapper">
              <div className="coin-settings-modal-close-icon">
                <CloseIcon />
              </div>
            </div>
          </button>
        </header>

        <div className="coin-settings-modal-content">
          <div className="coin-settings-scroll-wrapper">
            <div className="coin-settings-scroll-container">
              <section className="coin-settings-section">
                <div className="coin-settings-section-content">
                  <div className="coin-settings-form-group">
                    <div className="coin-settings-field-label">
                      <span className="coin-settings-label-text">Trezor servers (default)</span>
                    </div>
                    <div className="coin-settings-select-wrapper">
                      <ServerSelectDropdown
                        value={trezorServer}
                        onChange={setTrezorServer}
                      />
                    </div>
                  </div>

                  <div className="coin-settings-divider"></div>

                  <div className="coin-settings-list-section">
                    <ul className="coin-settings-list">
                      <li className="coin-settings-list-item">
                        <div className="coin-settings-list-item-indicator">
                          <div className="coin-settings-indicator-dot"></div>
                        </div>
                        <div className="coin-settings-list-item-content">
                          <span className="coin-settings-list-item-text">https://eth.trezor.io</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="coin-settings-expandable-section">
                <button
                  type="button"
                  className={`coin-settings-expandable-header ${explorerExpanded ? 'coin-settings-expandable-header-expanded' : ''}`}
                  onClick={() => setExplorerExpanded(!explorerExpanded)}
                >
                  <div className="coin-settings-expandable-title-wrapper">
                    <div className="coin-settings-expandable-title">
                      <span className="coin-settings-expandable-label">Explorer</span>
                      <div className="coin-settings-expandable-badge">
                        <span className="coin-settings-badge-text">Default explorer</span>
                      </div>
                    </div>
                  </div>
                  <div className={`coin-settings-expandable-icon-wrapper ${explorerExpanded ? 'coin-settings-expandable-icon-rotated' : ''}`}>
                    <div className="coin-settings-expandable-icon">
                      <ArrowIcon />
                    </div>
                  </div>
                </button>
                {explorerExpanded && <ExplorerConfigurationContent />}
              </section>

              <section className="coin-settings-expandable-section">
                <button
                  type="button"
                  className={`coin-settings-expandable-header ${connectionInfoExpanded ? 'coin-settings-expandable-header-expanded' : ''}`}
                  onClick={() => setConnectionInfoExpanded(!connectionInfoExpanded)}
                >
                  <div className="coin-settings-expandable-title-wrapper">
                    <div className="coin-settings-expandable-title">
                      <span className="coin-settings-expandable-label">Connection Info</span>
                    </div>
                  </div>
                  <div className={`coin-settings-expandable-icon-wrapper ${connectionInfoExpanded ? 'coin-settings-expandable-icon-rotated' : ''}`}>
                    <div className="coin-settings-expandable-icon">
                      <ArrowIcon />
                    </div>
                  </div>
                </button>
                {connectionInfoExpanded && (
                  <div className="coin-settings-connection-info-content">
                    <div className="coin-settings-connection-info-message">
                      <span>
                        Unable to connect to the backend. Reconnect your device and check your
                        internet connection or custom backend URL. Also, make sure the
                        selected asset is activated in Settings.
                      </span>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>

        <footer className="coin-settings-modal-footer">
          <button
            type="button"
            className="coin-settings-modal-confirm-button"
            onClick={handleConfirm}
          >
            <div className="coin-settings-modal-button-content">
              <span className="coin-settings-modal-button-text">Confirm</span>
            </div>
          </button>
          <button
            type="button"
            className="coin-settings-modal-cancel-button"
            onClick={onClose}
          >
            <div className="coin-settings-modal-button-content">
              <span className="coin-settings-modal-button-text">Cancel</span>
            </div>
          </button>
        </footer>
      </div>
    </div>
  )
}

function CoinsTab() {
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [hoveredCoin, setHoveredCoin] = useState(null)
  const [selectedTestnet, setSelectedTestnet] = useState(null)
  const [hoveredTestnet, setHoveredTestnet] = useState(null)
  const [isCoinSettingsModalOpen, setIsCoinSettingsModalOpen] = useState(false)
  const [selectedCoinForSettings, setSelectedCoinForSettings] = useState(null)

  const coins = [
    { id: 'bitcoin', name: 'Bitcoin', enabled: true },
    { id: 'ethereum', name: 'Ethereum', subtitle: 'Incl. tokens & staking', enabled: true },
    { id: 'polygon', name: 'Polygon PoS', subtitle: 'Including tokens', enabled: true },
    { id: 'bnb', name: 'BNB Smart Chain', subtitle: 'Including tokens', enabled: true },
    { id: 'arbitrum', name: 'Arbitrum One', subtitle: 'Including tokens', enabled: true },
    { id: 'base', name: 'Base', subtitle: 'Including tokens', enabled: true },
    { id: 'optimism', name: 'Optimism', subtitle: 'Including tokens', enabled: true },
    { id: 'solana', name: 'Solana', subtitle: 'Incl. tokens & staking', enabled: true },
    { id: 'cardano', name: 'Cardano', subtitle: 'Incl. tokens & staking', enabled: true },
    { id: 'ethereum-classic', name: 'Ethereum Classic', subtitle: 'Including tokens' },
    { id: 'xrp', name: 'XRP Ledger', enabled: true },
    { id: 'stellar', name: 'Stellar', subtitle: 'Including tokens' },
    { id: 'litecoin', name: 'Litecoin' },
    { id: 'bitcoin-cash', name: 'Bitcoin Cash' },
    { id: 'dogecoin', name: 'Dogecoin', enabled: true },
    { id: 'zcash', name: 'Zcash', enabled: true },
  ]

  const testnetworks = [
    { id: 'bitcoin-testnet', name: 'Bitcoin Testnet', icon: BitcoinIcon, enabled: true },
    { id: 'ethereum-sepolia', name: 'Ethereum Sepolia', icon: 'Ξ', iconColor: '#627EEA', enabled: true },
    { id: 'ethereum-hoodi', name: 'Ethereum Hoodi', icon: 'Ξ', iconColor: '#627EEA', enabled: false },
    { id: 'solana-devnet', name: 'Solana Devnet', icon: SolanaIcon, enabled: true },
    { id: 'xrp-testnet', name: 'XRP Testnet', icon: RippleIcon, enabled: true },
    { id: 'stellar-testnet', name: 'Stellar Testnet', icon: StellarIcon, enabled: true },
  ]

  const handleCoinClick = (coinId) => {
    // Toggle selection: if clicking the same coin, deselect it; otherwise select the new coin
    setSelectedCoin((prev) => (prev === coinId ? null : coinId))
  }

  const handleCoinMouseEnter = (coinId) => {
    setHoveredCoin(coinId)
  }

  const handleCoinMouseLeave = () => {
    setHoveredCoin(null)
  }

  const handleTestnetClick = (testnetId) => {
    // Toggle selection: if clicking the same testnet, deselect it; otherwise select the new testnet
    setSelectedTestnet((prev) => (prev === testnetId ? null : testnetId))
  }

  const handleTestnetMouseEnter = (testnetId) => {
    setHoveredTestnet(testnetId)
  }

  const handleTestnetMouseLeave = () => {
    setHoveredTestnet(null)
  }

  const handleCoinSettingsClick = (e, coinId, coinName) => {
    e.stopPropagation()
    setSelectedCoinForSettings(coinName)
    setIsCoinSettingsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsCoinSettingsModalOpen(false)
    setSelectedCoinForSettings(null)
  }

  return (
    <div className="settings-sections">
      <div className="section-container">
        <SectionHeader icon={DatabaseIcon} title="Coins" />
        <div className="coins-grid-section">
          <div className="coins-grid">
            {coins.map((coin) => {
              const isHovered = hoveredCoin === coin.id
              const isSelected = selectedCoin === coin.id

              return (
                <button
                  key={coin.id}
                  className={`coin-button ${isSelected ? 'coin-button-selected' : ''}`}
                  type="button"
                  onClick={() => handleCoinClick(coin.id)}
                  onMouseEnter={() => handleCoinMouseEnter(coin.id)}
                  onMouseLeave={handleCoinMouseLeave}
                >
                  <div className="coin-button-icon-wrapper">
                    <div className="coin-button-icon-container">
                      {coin.id === 'bitcoin' && <BitcoinIcon />}
                      {coin.id === 'ethereum' && <span className="coin-icon">Ξ</span>}
                      {coin.id === 'polygon' && <span className="coin-icon">▲</span>}
                      {coin.id === 'bnb' && <span className="coin-icon">BNB</span>}
                      {coin.id === 'arbitrum' && <span className="coin-icon">◆</span>}
                      {coin.id === 'base' && <span className="coin-icon">●</span>}
                      {coin.id === 'optimism' && <span className="coin-icon">OP</span>}
                      {coin.id === 'solana' && <SolanaIcon />}
                      {coin.id === 'cardano' && <span className="coin-icon">₳</span>}
                      {coin.id === 'ethereum-classic' && <span className="coin-icon">ETC</span>}
                      {coin.id === 'xrp' && <RippleIcon />}
                      {coin.id === 'stellar' && <StellarIcon />}
                      {coin.id === 'litecoin' && <span className="coin-icon">Ł</span>}
                      {coin.id === 'bitcoin-cash' && <span className="coin-icon">BCH</span>}
                      {coin.id === 'dogecoin' && <span className="coin-icon">Ð</span>}
                      {coin.id === 'zcash' && <span className="coin-icon">Z</span>}
                    </div>
                   
                    {/* {coin.enabled && (
                      <div className="coin-button-checkmark-badge">
                        <CheckmarkIcon />
                      </div>
                    )} */}
                    
                  </div>
                  <div className="coin-button-content">
                    <div className="coin-button-name">{coin.name}</div>
                    {coin.subtitle && <div className="coin-button-subtitle">{coin.subtitle}</div>}
                  </div>
                  <button
                    type="button"
                    className={`coin-button-settings-icon ${isSelected && isHovered ? 'coin-button-settings-icon-visible' : ''}`}
                    onClick={(e) => handleCoinSettingsClick(e, coin.id, coin.name)}
                  >
                    <GearIcon />
                  </button>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="section-container testnet-section">
        <div className="testnet-header">
          <div className="testnet-header-icon">
            <DatabaseIcon />
          </div>
          <div className="testnet-header-label">Testnet</div>        
          <div className="testnet-header-help">
            <HelpCircleIcon />
          </div>
        </div>
        <div className="testnet-grid-section">
          <div className="testnet-grid">
            {testnetworks.map((network) => {
              const isHovered = hoveredTestnet === network.id
              const isSelected = selectedTestnet === network.id

              return (
                <button
                  key={network.id}
                  className={`coin-button ${isSelected ? 'coin-button-selected' : ''}`}
                  type="button"
                  onClick={() => handleTestnetClick(network.id)}
                  onMouseEnter={() => handleTestnetMouseEnter(network.id)}
                  onMouseLeave={handleTestnetMouseLeave}
                >
                  <div className="coin-button-icon-wrapper">
                    <div className="coin-button-icon-container">
                      {typeof network.icon === 'string' ? (
                        <span className="coin-icon" style={{ color: network.iconColor }}>
                          {network.icon}
                        </span>
                      ) : (
                        <network.icon />
                      )}
                    </div>
                  
                    {/* {network.enabled && (
                      <div className="coin-button-checkmark-badge">
                        <CheckmarkIcon />
                      </div>
                    )} */}
                  </div>
                  <div className="coin-button-content">
                    <div className="coin-button-name">{network.name}</div>
                    <div className="coin-button-subtitle">TEST COIN</div>
                  </div>
                    <button
                      type="button"
                      className={`coin-button-settings-icon ${isSelected && isHovered ? 'coin-button-settings-icon-visible' : ''}`}
                      onClick={(e) => handleCoinSettingsClick(e, network.id, network.name)}
                    >
                      <GearIcon />
                    </button>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <CoinSettingsModal
        isOpen={isCoinSettingsModalOpen}
        onClose={handleCloseModal}
        coinName={selectedCoinForSettings}
      />
    </div>
  )
}

function WalletConnectModal({ isOpen, onClose, onConnect }) {
  const [connectionString, setConnectionString] = useState('')

  const handleConnect = () => {
    if (connectionString.trim()) {
      onConnect(connectionString)
      setConnectionString('')
    }
  }

  const handleCancel = () => {
    setConnectionString('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="wallet-connect-modal-overlay">
      <div className="wallet-connect-modal">
        <header className="wallet-connect-modal-header">
          <div className="wallet-connect-modal-title-wrapper">
            <h3 className="wallet-connect-modal-title">Add connection</h3>
            <div className="wallet-connect-modal-description">
              <span className="wallet-connect-modal-description-text">
                Paste the connection string from WalletConnect.
              </span>
            </div>
          </div>
          <button
            type="button"
            className="wallet-connect-modal-close-button"
            onClick={handleCancel}
          >
            <div className="wallet-connect-modal-close-icon-wrapper">
              <div className="wallet-connect-modal-close-icon">
                <CloseIcon />
              </div>
            </div>
          </button>
        </header>

        <div className="wallet-connect-modal-content">
          <div className="wallet-connect-modal-input-wrapper">
            <div className="wallet-connect-modal-input-container">
              <input
                type="text"
                className="wallet-connect-modal-input"
                placeholder="WalletConnect string"
                value={connectionString}
                onChange={(e) => setConnectionString(e.target.value)}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        <footer className="wallet-connect-modal-footer">
          <button
            type="button"
            className="wallet-connect-modal-connect-button"
            disabled={!connectionString.trim()}
            onClick={handleConnect}
          >
            <div className="wallet-connect-modal-button-content">
              <span className="wallet-connect-modal-button-text">Connect</span>
            </div>
          </button>
          <button
            type="button"
            className="wallet-connect-modal-cancel-button"
            onClick={handleCancel}
          >
            <div className="wallet-connect-modal-button-content">
              <span className="wallet-connect-modal-button-text">Cancel</span>
            </div>
          </button>
        </footer>
      </div>
    </div>
  )
}

function ConnectedAppsTab() {
  const [connectedApps] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleConnect = (connectionString) => {
    console.log('Connecting with:', connectionString)
    handleCloseModal()
  }

  return (
    <>
      <div className="connected-apps-container">
        <div className="connected-apps-header">
          <div className="wallet-connect-badge">
            <div className="wallet-connect-icon-wrapper">
              <WalletConnectIcon />
            </div>
            <span className="wallet-connect-label">WalletConnect</span>
          </div>
          <button
            className="wallet-connect-button"
            onClick={handleOpenModal}
          >
            <div className="wallet-connect-button-content">
              <div className="wallet-connect-button-icon">
                <WalletConnectIcon />
              </div>
              <span className="wallet-connect-button-text">Add with WalletConnect</span>
            </div>
          </button>
        </div>

        <div className="connected-apps-empty-state">
          <h3 className="empty-state-title">No connected apps</h3>
          <p className="empty-state-description">
            Use your Trezor with third-party apps and wallets to manage your assets.
          </p>
        </div>
      </div>

      <WalletConnectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConnect={handleConnect}
      />
    </>
  )
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState('application')

  const tabs = [
    { id: 'application', label: 'Application' },
    { id: 'device', label: 'Device' },
    { id: 'coins', label: 'Coins' },
    { id: 'connected-apps', label: 'Connected apps' },
  ]

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h2 className="settings-title">Settings</h2>
      </header>

      <div className="settings-tabs-container">
        <nav className="settings-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`settings-tab ${activeTab === tab.id ? 'settings-tab-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="settings-content">
        {activeTab === 'application' && <ApplicationTab />}
        {activeTab === 'device' && <DeviceTab />}
        {activeTab === 'coins' && <CoinsTab />}
        {activeTab === 'connected-apps' && <ConnectedAppsTab />}
      </div>
    </div>
  )
}
