import React, { useState } from 'react'
import { Smartphone, Key } from 'lucide-react'

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    width: '100%',
    maxWidth: '28rem',
    padding: '1.5rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#6b7280',
    marginBottom: '1.5rem',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    padding: '1rem',
    cursor: 'pointer',
  },
  radioInput: {
    marginRight: '0.75rem',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  radioText: {
    marginLeft: '0.75rem',
  },
  radioTitle: {
    fontWeight: 'bold',
  },
  radioDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
  },
  checkbox: {
    marginRight: '0.5rem',
  },
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1.5rem',
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontSize: '0.875rem',
    marginTop: '1rem',
    display: 'inline-block',
  },
}

export default function MFASelectionPage() {
  const [selectedMethod, setSelectedMethod] = useState(undefined)
  const [rememberMethod, setRememberMethod] = useState(false)

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Multi-factor Authentication</h2>
        <p style={styles.description}>
          Your account is protected with multi-factor authentication (MFA).
          To finish signing in, select a method to authenticate with.
        </p>
        <div style={styles.radioGroup}>
          <label style={styles.radioOption}>
            <input
              type="radio"
              value="authenticator"
              checked={selectedMethod === 'authenticator'}
              onChange={() => setSelectedMethod('authenticator')}
              style={styles.radioInput}
            />
            <div style={styles.radioLabel}>
              <Smartphone size={20} />
              <div style={styles.radioText}>
                <div style={styles.radioTitle}>Authenticator app</div>
                <div style={styles.radioDescription}>
                  Authenticate using a code generated by an app installed on your mobile device or computer.
                </div>
              </div>
            </div>
          </label>
          <label style={styles.radioOption}>
            <input
              type="radio"
              value="passkey"
              checked={selectedMethod === 'passkey'}
              onChange={() => setSelectedMethod('passkey')}
              style={styles.radioInput}
            />
            <div style={styles.radioLabel}>
              <Key size={20} />
              <div style={styles.radioText}>
                <div style={styles.radioTitle}>Passkey or security key</div>
                <div style={styles.radioDescription}>
                  Authenticate using your fingerprint, face, or PIN on your mobile device, computer or FIDO2 security key.
                </div>
              </div>
            </div>
          </label>
        </div>
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="remember"
            checked={rememberMethod}
            onChange={(e) => setRememberMethod(e.target.checked)}
            style={styles.checkbox}
          />
          <label htmlFor="remember">Remember this method</label>
        </div>
        <button
          style={{
            ...styles.button,
            ...(selectedMethod ? {} : styles.buttonDisabled),
          }}
          disabled={!selectedMethod}
          onClick={() => {
            // Handle continue action
            console.log('Continuing with method:', selectedMethod)
          }}
        >
          Continue
        </button>
        <a href="#" style={styles.link} onClick={() => {
          // Handle sign in to different account
          console.log('Signing in to a different account')
        }}>
          Sign in to a different account
        </a>
      </div>
    </div>
  )
}
