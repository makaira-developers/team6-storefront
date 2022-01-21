import { Button } from '../..'
import { useTranslation } from '../../../utils'

export default function ProductActions() {
  const { t } = useTranslation()

  return (
    <div className="product-placement-item__actions" elb-action="click:add">
      <Button variant="primary">{t('PRODUCT_TILE_ADD_TO_CART')}</Button>
    </div>
  )
}
