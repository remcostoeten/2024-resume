import ResumeEditorView from '@/views/resume-editor-view'
import { generateMetadata } from '@/core/config'

export const metadata = generateMetadata()

export default function Page() {
	return <ResumeEditorView />
}
