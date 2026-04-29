import { useState, useEffect } from "react"

export default function ContributionGraph() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const levels = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]

  const levelMap = {
    "NONE": 0,
    "FIRST_QUARTILE": 1,
    "SECOND_QUARTILE": 2,
    "THIRD_QUARTILE": 3,
    "FOURTH_QUARTILE": 4
  }

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/ElusiveParadox.json")
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="contribution-section">
        <h3 className="contribution-title">Loading contributions...</h3>
      </div>
    )
  }

  if (!data || !data.contributions) return null

  const grid = data.contributions
  const total = data.totalContributions || 0

  // Calculate month labels
  const monthLabels = []
  let currentMonth = ""
  grid.forEach((week, wi) => {
    const firstDay = week[0]
    if (firstDay) {
      const date = new Date(firstDay.date)
      const month = date.toLocaleString("default", { month: "short" })
      if (month !== currentMonth) {
        monthLabels.push({ month, index: wi })
        currentMonth = month
      }
    }
  })

  return (
    <div className="contribution-section">
      <h3 className="contribution-title">
        {total.toLocaleString()} contributions in the last year
      </h3>
      
      <div className="contribution-container">
        <div className="contribution-y-labels">
          <span></span>
          <span>Mon</span>
          <span></span>
          <span>Wed</span>
          <span></span>
          <span>Fri</span>
          <span></span>
        </div>
        
        <div className="contribution-graph-wrapper">
          <div className="contribution-months">
            {monthLabels.map((m, i) => (
              <span key={i} style={{ gridColumnStart: m.index + 1 }}>
                {m.month}
              </span>
            ))}
          </div>
          <div className="contribution-graph">
            {grid.map((week, wi) => (
              <div key={wi} className="contribution-week">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className="contribution-cell"
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    style={{ backgroundColor: levels[levelMap[day.contributionLevel] || 0] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contribution-footer">
        <a href="https://github.com/ElusiveParadox" target="_blank" rel="noreferrer" className="contribution-learn-more">
          Learn how we count contributions
        </a>
        <div className="contribution-legend">
          <span className="contribution-legend-label">Less</span>
          {levels.map((color, i) => (
            <div
              key={i}
              className="contribution-cell"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="contribution-legend-label">More</span>
        </div>
      </div>
    </div>
  )
}
