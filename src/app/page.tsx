import { getAllTopics } from '@/action/topicActions'
import TopicList from '@/componets/TopicList'
import React, { Suspense } from 'react'

export default async function Home() {
  const { topics } = await getAllTopics()

  return (
    <div className="m-9">
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongoDB CURD</p>
      <Suspense fallback={<div>로딩 중...</div>}>
        <TopicList topics={topics} />
      </Suspense>
    </div>
  )
}
