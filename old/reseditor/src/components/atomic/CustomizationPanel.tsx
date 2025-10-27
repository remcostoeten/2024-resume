import { AVAILABLE_FONTS } from "../../constants/resume-constants"
import type { TResumeData } from "../../types/resume-types"

type TProps = {
  customColors: TResumeData["customColors"]
  customFonts: TResumeData["customFonts"]
  customSpacing: TResumeData["customSpacing"]
  onColorsChange: (colors: TResumeData["customColors"]) => void
  onFontsChange: (fonts: TResumeData["customFonts"]) => void
  onSpacingChange: (spacing: TResumeData["customSpacing"]) => void
}

export function CustomizationPanel({
  customColors,
  customFonts,
  customSpacing,
  onColorsChange,
  onFontsChange,
  onSpacingChange
}: TProps) {
  function handleColorChange(colorType: keyof TResumeData["customColors"], value: string) {
    onColorsChange({
      ...customColors,
      [colorType]: value,
    })
  }

  function handleFontChange(fontType: keyof TResumeData["customFonts"], value: string) {
    onFontsChange({
      ...customFonts,
      [fontType]: value,
    })
  }

  function handleSpacingChange(spacingType: keyof TResumeData["customSpacing"], value: number) {
    onSpacingChange({
      ...customSpacing,
      [spacingType]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Color
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={customColors.primary}
                onChange={(e) => handleColorChange("primary", e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={customColors.primary}
                onChange={(e) => handleColorChange("primary", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="#2563eb"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Secondary Color
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={customColors.secondary}
                onChange={(e) => handleColorChange("secondary", e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={customColors.secondary}
                onChange={(e) => handleColorChange("secondary", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="#64748b"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Accent Color
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={customColors.accent}
                onChange={(e) => handleColorChange("accent", e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={customColors.accent}
                onChange={(e) => handleColorChange("accent", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="#0ea5e9"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Typography</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Body Font
            </label>
            <select
              value={customFonts.body}
              onChange={(e) => handleFontChange("body", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Default</option>
              {AVAILABLE_FONTS.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heading Font
            </label>
            <select
              value={customFonts.heading}
              onChange={(e) => handleFontChange("heading", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Default</option>
              {AVAILABLE_FONTS.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Spacing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section Margin
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={customSpacing.sectionMargin}
                onChange={(e) => handleSpacingChange("sectionMargin", parseFloat(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-gray-600 w-12">
                {customSpacing.sectionMargin}rem
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Spacing
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.25"
                value={customSpacing.itemSpacing}
                onChange={(e) => handleSpacingChange("itemSpacing", parseFloat(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-gray-600 w-12">
                {customSpacing.itemSpacing}rem
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Preview</h4>
        <p className="text-sm text-gray-600">
          Your customizations will be applied to the resume preview. Use these settings to match your personal style or company branding.
        </p>
      </div>
    </div>
  )
}
