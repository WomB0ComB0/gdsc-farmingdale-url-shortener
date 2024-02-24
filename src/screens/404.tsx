import { Head } from '@/shared/Head'
import { Link } from '@/components'
import { usePageEffect } from '@/core/page'
export const NotFound = () => {
  usePageEffect({ title: '404' })
  return (
    <>
      <Head title={'The page is not found'} />
      <>
        <div className="flex h-screen flex-col bg-white">
          <img
            src="/assets/images/og.png"
            alt=""
            className="h-64 w-full object-cover"
          />

          <div className="flex flex-1 items-center justify-center">
            <div className="mx-auto max-w-xl px-4 py-8 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We can't find that page.
              </h1>

              <p className="mt-4 text-gray-500">
                Try searching again, or return home to start from the beginning.
              </p>

              <Link
                to="/"
                className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  )
}