import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react'
import ButtonLogout from './components/buttonLogout'

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  async function handleLogout() {
    await signOut()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col gap-6'>
        <button className='bg-green-400 hover:bg-green-500 p-3 rounded-md'>Cadastrar aluno</button>
        <button className='bg-blue-400 p-3 hover:bg-blue-500 rounded-md'>Sortear tarefas</button>
        <ButtonLogout />
      </div>
    </main>
  )
}
