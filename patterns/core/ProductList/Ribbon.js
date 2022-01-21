export default function Ribbon(props) {
  const { isVisible = false, children = 'highlight' } = props

  if (!isVisible) return null

  return (
    <div className="ribbon" elb-product="paid:true">
      <span>{children} </span>
    </div>
  )
}
