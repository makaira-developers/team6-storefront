import { Heading, Text, Link } from '../..'
import ProductPrices from './ProductPrices'
import ProductActions from './ProductActions'
import { useConfiguration } from '../../../utils'

export default function ProductTile(props) {
  const {
    title = '',
    picture_url_main = '',
    manufacturer_title = '',
    url = '',
    images = [],
  } = props

  const { getImageLink } = useConfiguration()

  const productImage = getImageLink({
    source: images.length > 0 ? images[0] : picture_url_main,
    height: 162,
  })

  return (
    <article
      className="product-placement-item"
      elb="product"
      elb-action="visible,click"
      elb-product={`id:${props.id};name:'${title}';manufacturer:'${manufacturer_title}'`}
    >
      <Link href={url}>
        <picture className="product-placement-item__image">
          <img data-src={productImage} alt={title} />
        </picture>

        <Heading
          size="bacchus"
          weight="600"
          className="product-placement-item__title"
          element="h3"
        >
          {title}
        </Heading>

        <Text
          size="aphrodite"
          weight="600"
          className="product-placement-item__manufacturer"
        >
          {manufacturer_title}
        </Text>

        <ProductPrices {...props} />

        <ProductActions {...props} />
      </Link>
    </article>
  )
}
