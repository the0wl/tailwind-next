import { SettingsTabs } from '@/components/SettingsTabs'
import { Details } from './pages'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <Details />
    </>
  )
}
