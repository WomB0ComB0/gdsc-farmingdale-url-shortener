import { Head } from '@/shared/Head'
export const Loading = () => {
  return (
    <>
      <>
        <Head title={`Loading...`} />
      </>
      <>
        <picture className="" role="status" aria-label="loading">
          <img src="/assets/svgs/logo.svg" alt="" className={`animate-bounce ease-in-out 
          `}/>
          <span className="sr-only">Loading...</span>
        </picture>
      </>
    </>
  )
}