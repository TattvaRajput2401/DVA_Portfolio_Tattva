export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="https://github.com/ElusiveParadox.png"
        alt="Profile"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Aditya Kishore</h1>
      <p className="sidebar-username">ElusiveParadox</p>
      <p className="sidebar-bio">
        I use data to uncover insights and solve real-world problems.
Skilled in Python, Tableau, Excel, and Google Sheets, I build dashboards and analyses that turn raw data into clear, decision-ready insights.
      </p>

      <a
        href="https://drive.google.com/file/d/1AsMhPLgwD5dkEvOj2OizSYL--8GGu0GV/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="sidebar-follow-btn"
      >
        View Resume
      </a>
      <div className="sidebar-socials">
        <a
          href="https://github.com/ElusiveParadox"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-kishore-singh/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          LinkedIn
        </a>
      </div>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <span>Newton School of Technology, Rishihood University</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z" />
          </svg>
          <a href="mailto:aditya.singh2024@nst.rishihood.edu.in">aditya.singh2024@nst.rishihood.edu.in</a>
        </div>
      </div>

      {/* <div className="sidebar-achievements">
        <h3 className="sidebar-orgs-title">Achievements</h3>
        <div className="achievement-badges">
          <img
            src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png"
            alt="Pair Extraordinaire"
            className="achievement-badge"
            title="Pair Extraordinaire"
          />
          <img
            src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png"
            alt="Quickdraw"
            className="achievement-badge"
            title="Quickdraw"
          />
          <img
            src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
            alt="Pull Shark"
            className="achievement-badge"
            title="Pull Shark"
          />
        </div>
      </div> */}

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Skills</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">Python</span>
          <span className="org-pill">TypeScript</span>
          <span className="org-pill">JavaScript</span>
          <span className="org-pill">Rust</span>
          <span className="org-pill">SQL</span>
          <span className="org-pill">MySQL</span>
          <span className="org-pill">HTML</span>
          <span className="org-pill">CSS</span>
          <span className="org-pill">Next JS</span>
          <span className="org-pill">React</span>
          <span className="org-pill">Node.js</span>
          <span className="org-pill">Express JS</span>
          <span className="org-pill">Prisma ORM</span>
          <span className="org-pill">PostgreSQL</span>
          <span className="org-pill">AWS</span>
          <span className="org-pill">Docker</span>
          <span className="org-pill">Kubernetes</span>
          <span className="org-pill">Nginx</span>
          <span className="org-pill">Generative AI</span>
          <span className="org-pill">LangChain</span>
          <span className="org-pill">LangGraph</span>
          <span className="org-pill">Hugging Face</span>
          <span className="org-pill">OpenCV</span>
          <span className="org-pill">Matplotlib</span>
          <span className="org-pill">NumPy</span>
          <span className="org-pill">Pandas</span>
          <span className="org-pill">Excel</span>
          <span className="org-pill">Agile Principles & Scrum</span>
          <span className="org-pill">Git and Github</span>
          <span className="org-pill">GitHub Actions</span>
          <span className="org-pill">Playwright</span>
        </div>
      </div>


    </aside>
  )
}
