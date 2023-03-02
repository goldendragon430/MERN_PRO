import { Navigate } from 'react-router-dom'
import { useSession } from '../../../contexts/SessionContext'
import { DashboardLayout } from '../DashboardLayout'

export const ProtectedRoute = ({ children }) => {
  const [{ auth }] = useSession()

  if (!auth) {
    return <Navigate to="/login" replace />
  }

  return (
    <DashboardLayout children={children} />
  )
}