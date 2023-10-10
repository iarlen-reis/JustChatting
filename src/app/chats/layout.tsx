import Aside from '@/components/Aside'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container-chat">
      <Aside />
      {children}
    </div>
  )
}
