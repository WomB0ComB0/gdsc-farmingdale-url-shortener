import { useEffect } from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { useNavigate } from "react-router-dom"
import { getBrowser } from "@/utils/platform"

const getShortcutSymbol = (): string => {
  const browser = getBrowser();
  switch (browser) {
    case 'safari':
    case 'ios':
      return '⌘';
    case 'firefox':
      return 'Ctrl';
    default:
      return 'Ctrl';
  }
}

export function ContextMenuProvider({
  children
}: {
  children: React.ReactNode
}) {
  const navigate = useNavigate()
  useEffect(() => {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
  }, [])

  return (
    <ContextMenu
    >
      <ContextMenuTrigger
        className="absolute top-0 left-0 z-10 flex items-center justify-center w-screen h-screen text-sm"/>
      <ContextMenuContent
        className={`w-64 `}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '1rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          color: 'var(--color-card-foreground)',
        }}
      >
        <ContextMenuItem
          inset
          onClick={() => {
            navigate(-1)
          }}
          className={` font-normal text-white`}

        >
          Back
          <ContextMenuShortcut
            className={`
              text-xs tracking-widest text-background-50
            `}
          >Alt + ⇦</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => {
            window.location.reload()
          }}
          className={` font-normal text-white`}
        >
          Reload
          <ContextMenuShortcut
            className={`
              text-xs tracking-widest text-background-50
            `}
          >{getShortcutSymbol()}+R</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
      {children}
    </ContextMenu>
  )
}
