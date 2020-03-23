import React from 'react'
import { Dashboard } from './index'

export default { title: '엔덕 대시보드' }

export const nDuckDashboard = () => <div>대시보드</div>

export const dashboardPropsTitle = () => <Dashboard title={'hello222'} />

export const dashboardAddWidget = () => (
    <Dashboard title={'위젯을 뿌릴거야'}>위젯</Dashboard>
)
