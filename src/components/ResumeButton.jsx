import { profile } from '../data.js'

export default function ResumeButton() {
  return (
    <a
      className="btn"
      href={profile.resume}
      download={profile.resumeName}
      aria-label="Download resume"
    >
      Resume
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path
          d="M7 1.25v7.1M3.8 6.1 7 9.35l3.2-3.25M2.25 12.25h9.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
        />
      </svg>
    </a>
  )
}
