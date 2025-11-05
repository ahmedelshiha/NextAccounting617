'use client'

import { memo } from 'react'
import type { WorkstationInsightsPanelProps } from '../../types/workstation'

export const WorkstationInsightsPanel = memo(function WorkstationInsightsPanel({
  isOpen,
  onClose,
  stats,
  analyticsData,
}: WorkstationInsightsPanelProps) {
  return (
    <div className="workstation-insights-content">
      <div className="insights-header">
        <h3 className="insights-title">Analytics</h3>
        <button
          className="insights-close-btn"
          onClick={onClose}
          aria-label="Close insights panel"
        >
          ✕
        </button>
      </div>

      <div className="insights-section">
        <h4 className="insights-subtitle">User Growth</h4>
        {/* UserGrowthChart will be lazy loaded here */}
        <div className="insights-placeholder">User Growth Chart Component</div>
      </div>

      <div className="insights-section">
        <h4 className="insights-subtitle">Role Distribution</h4>
        {/* RoleDistribution will be lazy loaded here */}
        <div className="insights-placeholder">Role Distribution Component</div>
      </div>

      <div className="insights-section">
        <h4 className="insights-subtitle">Department Distribution</h4>
        {/* DepartmentDistribution will be lazy loaded here */}
        <div className="insights-placeholder">Department Distribution Component</div>
      </div>

      <div className="insights-section flex-1 overflow-y-auto">
        <h4 className="insights-subtitle">Recommended Actions</h4>
        {/* RecommendedActionsPanel will be integrated here */}
        <div className="insights-placeholder">Recommended Actions Component</div>
      </div>
    </div>
  )
})
