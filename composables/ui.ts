import { qdate } from '#imports'

export const useUI = () => useState('useui', () => ({
  rightDrawerOpen: false
}))

export const toggleRightDrawer = () => {
  const ui = useUI()
  ui.value.rightDrawerOpen = !ui.value.rightDrawerOpen
}

export const formatDate = (date: string, format: string = 'DD/MM/YYYY') => {
  return qdate.formatDate(date, format)
}