"use client"

import { useRef, useCallback } from "react"
import { Button } from "@/shared/ui/button"
import { Textarea } from "@/shared/ui/textarea"
import { Bold, Italic, List, Link } from "lucide-react"
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip"

type TProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
  className?: string
}

export function RichTextEditor({ value, onChange, placeholder, rows = 4, className }: TProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const insertText = useCallback(
    (before: string, after = "") => {
      const textarea = textareaRef.current
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = value.substring(start, end)

      const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)
      onChange(newText)

      // Restore cursor position
      setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(start + before.length, end + before.length)
      }, 0)
    },
    [value, onChange],
  )

  const formatBold = () => insertText("**", "**")
  const formatItalic = () => insertText("*", "*")
  const insertBulletPoint = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const beforeCursor = value.substring(0, start)
    const afterCursor = value.substring(start)

    // Check if we're at the start of a line
    const lastNewline = beforeCursor.lastIndexOf("\n")
    const currentLineStart = lastNewline === -1 ? 0 : lastNewline + 1
    const currentLine = beforeCursor.substring(currentLineStart)

    if (currentLine.trim() === "") {
      // Empty line, just add bullet
      insertText("• ")
    } else {
      // Add new line with bullet
      insertText("\n• ")
    }
  }

  const insertLink = () => {
    const url = prompt("Enter URL:")
    if (url) {
      insertText(`[Link](${url})`)
    }
  }

  // Convert markdown-like formatting to HTML for preview
  const formatTextForDisplay = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
        /\[([^\]]+)\]$$([^)]+)$$/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>',
      )
      .replace(/^• (.+)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>)/s, '<ul class="list-disc list-inside space-y-1">$1</ul>')
      .replace(/\n/g, "<br>")
  }

  return (
    <div className="space-y-2">
      {/* TooltipProvider */}
      <TooltipProvider>
        {/* Toolbar */}
        <div className="flex items-center gap-1 p-2 border rounded-t-md bg-gray-50">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" variant="ghost" size="sm" onClick={formatBold} className="h-8 w-8 p-0" asChild>
                <button>
                  <Bold className="h-4 w-4" />
                </button>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bold (**text**)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" variant="ghost" size="sm" onClick={formatItalic} className="h-8 w-8 p-0" asChild>
                <button>
                  <Italic className="h-4 w-4" />
                </button>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Italic (*text*)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" variant="ghost" size="sm" onClick={insertBulletPoint} className="h-8 w-8 p-0" asChild>
                <button>
                  <List className="h-4 w-4" />
                </button>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bullet Point (• )</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" variant="ghost" size="sm" onClick={insertLink} className="h-8 w-8 p-0" asChild>
                <button>
                  <Link className="h-4 w-4" />
                </button>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Insert Link</TooltipContent>
          </Tooltip>

          <div className="ml-auto text-xs text-gray-500">Use **bold**, *italic*, • bullets, [links](url)</div>
        </div>
      </TooltipProvider>

      {/* Text Area */}
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`rounded-t-none ${className}`}
      />

      {/* Preview */}
      {value && (
        <div className="p-3 border rounded-md bg-gray-50">
          <div className="text-xs text-gray-600 mb-2 font-medium">Preview:</div>
          <div
            className="text-sm prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: formatTextForDisplay(value) }}
          />
        </div>
      )}
    </div>
  )
}
