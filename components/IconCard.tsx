import classnames from "classnames"
import SVG from "react-inlinesvg"

export type IconCardProps = {
  /** Card's heading */
  title: React.ReactNode
  /** Card's visual element, using a predefined set of icons */
  icon: string
  /** Card's copy */
  copy: React.ReactNode
  /** Extra class names, used for homepage carousel */
  className?: string
}
/**
 * Renders a feature card with a visual element and copy.
 * Layout (width, height, positioning) can be set from the parent.
 */
export const IconCard = ({ title, icon, copy, className }: IconCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-start overflow-hidden rounded bg-white text-center shadow ${className}`}
    >
      <div className="flex h-44 w-full items-center justify-center text-accent-blurple">
        <div className="h-[7.5rem] w-[7.5rem]">
          <SVG src={`/icons/${icon}.svg`} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-8 pt-0">
        <h3 className="h5">{title}</h3>
        <p className="b2">{copy}</p>
      </div>
    </div>
  )
}
