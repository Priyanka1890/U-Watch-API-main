// app/error.tsx
'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <button className="mt-4 underline" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
