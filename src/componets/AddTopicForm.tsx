'use client'

import { createTopic } from '@/action/topicActions'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddTopicForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createTopic(title, description)
      router.push('/')
    } catch (error) {
      console.error('토픽 생성 중 오류:', error)
      alert('토픽 생성 중 오류가 발생했습니다.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 p-4"
        placeholder="Topic Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className="border border-slate-500 p-4 h-64"
        placeholder="Topic Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button
        className="bg-blue-500 text-white font-bold px-6 py-3 w-fit rounded-md"
        type="submit"
      >
        Add Topic
      </button>
    </form>
  )
}
